from flask import Blueprint, request, jsonify
from models import db, Region, Alert
from schemas import region_schema, alert_list_schema, alert_schema
from datetime import datetime

api = Blueprint('api', __name__)

@api.route("/regions", methods=["POST"])
def create_region():
    data = request.get_json()
    if not data.get("name"):
        return jsonify({"error": "Region name is required"}), 400
    region = Region(
        name=data["name"], 
        population=data.get("population"), 
        geometry=data.get("geometry")
    )
    db.session.add(region)
    db.session.commit()
    return region_schema.jsonify(region), 201

@api.route("/regions", methods=["GET"])
def get_regions():
    regions = Region.query.all()
    return region_schema.jsonify(regions, many=True)

@api.route("/regions/<int:id>", methods=["GET"])
def get_region(id):
    region = Region.query.get_or_404(id)
    return region_schema.jsonify(region)

@api.route("/regions/<int:id>", methods=["PUT"])
def update_region(id):
    region = Region.query.get_or_404(id)
    data = request.get_json()
    region.name = data.get("name", region.name)
    region.population = data.get("population", region.population)
    region.geometry = data.get("geometry", region.geometry)
    db.session.commit()
    return region_schema.jsonify(region)

@api.route("/regions/<int:id>", methods=["DELETE"])
def delete_region(id):
    region = Region.query.get_or_404(id)
    db.session.delete(region)
    db.session.commit()
    return jsonify({"message": "Region deleted"}), 200

@api.route("/alerts", methods=["GET"])
def get_alerts():
    alerts = Alert.query.order_by(Alert.issue_time.desc()).all()
    return alert_list_schema.jsonify(alerts)

@api.route("/alerts/<int:id>", methods=["GET"])
def get_alert(id):
    alert = Alert.query.get_or_404(id)
    return alert_schema.jsonify(alert)

@api.route("/alerts", methods=["POST"])
def create_alert():
    data = request.get_json()
    required_fields = ["index_id", "hazard_type", "severity"]
    if not all(field in data for field in required_fields):
        return jsonify({"error": "Missing required fields"}), 400
    alert = Alert(
        index_id=data["index_id"],
        hazard_type=data["hazard_type"],
        severity=data["severity"],
        issue_time=datetime.utcnow(),
        is_active=True
    )
    db.session.add(alert)
    db.session.commit()
    return alert_schema.jsonify(alert), 201
