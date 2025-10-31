import datetime

REGIONS = [
    {
        "id": 1,
        "name": "Northern Province",
        "population": 120000,
        "geometry": {
            "type": "Polygon",
            "coordinates": [[[0, 0], [0, 5], [5, 5], [5, 0], [0, 0]]]
        }
    },
    {
        "id": 2,
        "name": "Eastern Province",
        "population": 90000,
        "geometry": {
            "type": "Polygon",
            "coordinates": [[[6, 0], [6, 4], [10, 4], [10, 0], [6, 0]]]
        }
    },
    {
        "id": 3,
        "name": "Southern Province",
        "population": 150000,
        "geometry": {
            "type": "Polygon",
            "coordinates": [[[0, -6], [0, -1], [5, -1], [5, -6], [0, -6]]]
        }
    },
    {
        "id": 4,
        "name": "Western Province",
        "population": 110000,
        "geometry": {
            "type": "Polygon",
            "coordinates": [[[-6, 0], [-6, 5], [-1, 5], [-1, 0], [-6, 0]]]
        }
    },
    {
        "id": 5,
        "name": "Central Province",
        "population": 200000,
        "geometry": {
            "type": "Polygon",
            "coordinates": [[[-1, -1], [-1, 1], [1, 1], [1, -1], [-1, -1]]]
        }
    }
]

ALERTS = [
    {
        "id": 1,
        "hazard_type": "Drought",
        "severity": "Alert",
        "location": "Northern Province",
        "geometry": [2, 2],
        "issue_time": datetime.datetime.utcnow().isoformat()
    },
    {
        "id": 2,
        "hazard_type": "Flood",
        "severity": "Warning",
        "location": "Northern Province",
        "geometry": [3, 3],
        "issue_time": datetime.datetime.utcnow().isoformat()
    },
    {
        "id": 3,
        "hazard_type": "Drought",
        "severity": "Watch",
        "location": "Eastern Province",
        "geometry": [7, 2],
        "issue_time": datetime.datetime.utcnow().isoformat()
    },
    {
        "id": 4,
        "hazard_type": "Flood",
        "severity": "Alert",
        "location": "Eastern Province",
        "geometry": [8, 3],
        "issue_time": datetime.datetime.utcnow().isoformat()
    },
    {
        "id": 5,
        "hazard_type": "Drought",
        "severity": "Warning",
        "location": "Southern Province",
        "geometry": [2, -3],
        "issue_time": datetime.datetime.utcnow().isoformat()
    },
    {
        "id": 6,
        "hazard_type": "Flood",
        "severity": "Watch",
        "location": "Southern Province",
        "geometry": [4, -2],
        "issue_time": datetime.datetime.utcnow().isoformat()
    },
    {
        "id": 7,
        "hazard_type": "Drought",
        "severity": "Alert",
        "location": "Western Province",
        "geometry": [-3, 2],
        "issue_time": datetime.datetime.utcnow().isoformat()
    },
    {
        "id": 8,
        "hazard_type": "Flood",
        "severity": "Warning",
        "location": "Western Province",
        "geometry": [-4, 3],
        "issue_time": datetime.datetime.utcnow().isoformat()
    },
    {
        "id": 9,
        "hazard_type": "Drought",
        "severity": "Watch",
        "location": "Central Province",
        "geometry": [0, 0],
        "issue_time": datetime.datetime.utcnow().isoformat()
    },
    {
        "id": 10,
        "hazard_type": "Flood",
        "severity": "Alert",
        "location": "Central Province",
        "geometry": [0.5, 0.5],
        "issue_time": datetime.datetime.utcnow().isoformat()
    }
]
