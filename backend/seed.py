from app import app
from models import db, Region, DataCell, TimeSeries, IndexCalc, Alert, Recipient
from datetime import datetime
import random

with app.app_context():
    db.drop_all()
    db.create_all()

    region1 = Region(name="Pilot Region", population=50000, geometry="POLYGON((0 0,1 0,1 1,0 1,0 0))")
    db.session.add(region1)
    db.session.commit()

    cells = []
    for i in range(5):
        cell = DataCell(region_id=region1.id, latitude=0.1*i, longitude=0.1*i)
        db.session.add(cell)
        cells.append(cell)
    db.session.commit()

    for cell in cells:
        ts = TimeSeries(cell_id=cell.id, date_time=datetime.utcnow(), raw_rainfall=random.uniform(0,50), raw_ndvi=random.uniform(0,1))
        db.session.add(ts)
        db.session.commit()
        idx = IndexCalc(timeseries_id=ts.id, flood_index=random.uniform(0,5), drought_index=random.uniform(0,5), is_anomalous=False)
        db.session.add(idx)
    db.session.commit()

    recipient = Recipient(name="Admin", email="admin@example.com")
    db.session.add(recipient)
    db.session.commit()

    for idx in IndexCalc.query.all():
        alert = Alert(index_id=idx.id, hazard_type=random.choice(["Drought","Flood"]), severity=random.choice(["Watch","Alert","Warning"]), issue_time=datetime.utcnow(), is_active=True)
        alert.recipients.append(recipient)
        db.session.add(alert)
    db.session.commit()

    print("Database seeded successfully!")
