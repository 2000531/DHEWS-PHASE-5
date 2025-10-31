from flask import Blueprint, jsonify
from mock_data import REGIONS, ALERTS

mock_api = Blueprint("mock_api", __name__)

@mock_api.route("/regions", methods=["GET"])
def get_regions():
    return jsonify(REGIONS)

@mock_api.route("/alerts", methods=["GET"])
def get_alerts():
    return jsonify(ALERTS)

@mock_api.route("/alerts/<hazard>", methods=["GET"])
def get_alerts_by_hazard(hazard):
    hazard = hazard.capitalize()
    filtered = [a for a in ALERTS if a["hazard_type"] == hazard]
    return jsonify(filtered)
