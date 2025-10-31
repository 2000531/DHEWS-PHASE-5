from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

alert_recipient = db.Table('alert_recipient',
    db.Column('alert_id', db.Integer, db.ForeignKey('alert.id'), primary_key=True),
    db.Column('recipient_id', db.Integer, db.ForeignKey('recipient.id'), primary_key=True)
)

class Region(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(128), nullable=False)
    population = db.Column(db.Integer)
    geometry = db.Column(db.Text)
    data_cells = db.relationship("DataCell", backref="region", lazy=True)

class DataCell(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    region_id = db.Column(db.Integer, db.ForeignKey('region.id'), nullable=False)
    latitude = db.Column(db.Float, nullable=False)
    longitude = db.Column(db.Float, nullable=False)
    time_series = db.relationship("TimeSeries", backref="cell", lazy=True)

class TimeSeries(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    cell_id = db.Column(db.Integer, db.ForeignKey('data_cell.id'), nullable=False)
    date_time = db.Column(db.DateTime, nullable=False)
    raw_rainfall = db.Column(db.Float)
    raw_ndvi = db.Column(db.Float)
    index_calc = db.relationship("IndexCalc", backref="time_series", uselist=False)

class IndexCalc(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    timeseries_id = db.Column(db.Integer, db.ForeignKey('time_series.id'), nullable=False)
    flood_index = db.Column(db.Float)
    drought_index = db.Column(db.Float)
    is_anomalous = db.Column(db.Boolean, default=False)
    alerts = db.relationship("Alert", backref="index_calc", lazy=True)

class Alert(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    index_id = db.Column(db.Integer, db.ForeignKey('index_calc.id'), nullable=False)
    hazard_type = db.Column(db.String(10), nullable=False)  
    severity = db.Column(db.String(10), nullable=False)     
    issue_time = db.Column(db.DateTime, nullable=False)
    is_active = db.Column(db.Boolean, default=True)
    recipients = db.relationship('Recipient', secondary=alert_recipient, back_populates='alerts')

class Recipient(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(128), nullable=False)
    email = db.Column(db.String(128), nullable=False)
    alerts = db.relationship('Alert', secondary=alert_recipient, back_populates='recipients')
