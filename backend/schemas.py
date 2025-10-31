from marshmallow_sqlalchemy import SQLAlchemyAutoSchema
from models import Region, Alert

class RegionSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = Region
        load_instance = True

class AlertSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = Alert
        include_relationships = True
        load_instance = True

region_schema = RegionSchema()
alert_schema = AlertSchema()
alert_list_schema = AlertSchema(many=True)
