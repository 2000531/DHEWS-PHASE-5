# Dual Hazard Early Warning System (DHEWS) - Phase 5

A comprehensive real-time monitoring and alert platform for detecting and responding to dual natural hazards: **Drought** and **Flood** events.

## Quick Start

### Backend Setup
```bash
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python app.py
```

### Frontend Setup
```bash
cd frontend
npm install
npm start
```

---

## Project Overview

DHEWS is a full-stack application that integrates geospatial data, meteorological indicators, and AI-driven insights to provide early warning capabilities for disaster management. The system monitors dual hazards simultaneously across multiple regions with real-time data processing and automated alert generation.

### Key Components

- **Backend**: Flask API with PostgreSQL database
- **Frontend**: React SPA with Leaflet mapping
- **Real-Time**: Socket.IO for live updates
- **AI Insights**: Machine learning-based analysis
- **Alerts**: Automated hazard detection and notification

---

## Achievements

### Core System Development
✅ **Full-Stack Architecture**: Successfully implemented a three-tier architecture (Data Layer, API Layer, Presentation Layer)

✅ **Dual Hazard Monitoring**: Developed simultaneous monitoring capabilities for both Drought and Flood hazards

✅ **Real-Time Data Processing**: Integrated Socket.IO for live data streaming and instant alert notifications

✅ **Interactive Geospatial Visualization**: Built interactive Leaflet-based maps with color-coded risk zones and data cell visualization

✅ **Database Design**: Created normalized schema with Region, DataCell, TimeSeries, Alert, and Recipient models

### Feature Implementation
✅ **Hazard Selection**: Dynamic switching between Drought and Flood monitoring modes

✅ **Historical Data Analysis**: Implemented temporal slider for browsing historical trends and patterns

✅ **Alert Management System**: Developed comprehensive alert tracking with severity levels and recipient management

✅ **Report Generation**: Integrated jsPDF for PDF export of alerts and risk assessments

✅ **API Endpoints**: Implemented RESTful API endpoints for regions, data cells, time series, and alert management

### Frontend Components
✅ **Key Metrics Dashboard**: Real-time display of critical indicators (rainfall, NDVI, temperature anomalies)

✅ **AI Insights Panel**: Machine learning-driven analysis providing risk predictions and trend forecasting

✅ **Alert History Log**: Comprehensive logging system tracking all generated alerts with timestamps

✅ **Filter Menu**: Advanced filtering controls for data refinement

✅ **Responsive Layout**: Three-panel design (controls, map, insights) optimized for usability

### DevOps & Deployment
✅ **Database Migrations**: Set up Alembic with Flask-Migrate for version control of schema changes

✅ **Environment Configuration**: Implemented .env-based configuration management

✅ **Mock Data & Routes**: Created development utilities for testing without live data

✅ **Deployment Configuration**: Render.yaml ready for production deployment

---

## Challenges

### Technical Challenges

⚠️ **Real-Time Data Synchronization**
- Challenge: Keeping frontend and backend data synchronized with frequent updates
- Status: Mitigated using Socket.IO, but complex state management remains

⚠️ **Geospatial Query Optimization**
- Challenge: Efficiently querying large spatial datasets across multiple regions
- Status: Partially addressed with database indexing; further optimization needed with PostGIS

⚠️ **Map Performance at Scale**
- Challenge: Rendering hundreds of data cells on Leaflet without performance degradation
- Status: Implemented basic optimization; consider clustering for larger datasets

### Data & Integration Challenges

⚠️ **Data Source Integration**
- Challenge: No real meteorological data sources currently integrated
- Status: Using mock data for development; real source integration pending

⚠️ **Time Series Data Volume**
- Challenge: Managing and querying large volumes of historical time series data
- Status: Addressed with pagination; may need time-series database (InfluxDB, TimescaleDB) at scale

⚠️ **Hazard Index Calculation**
- Challenge: Defining accurate drought and flood indices from raw meteorological data
- Status: Schema designed but calculation logic needs domain expert input

### Frontend Challenges

⚠️ **State Management Complexity**
- Challenge: Managing complex state across multiple components (hazard, timeline, filters, alerts)
- Status: Using React hooks; consider Redux for larger scale

⚠️ **Map-Component Communication**
- Challenge: Synchronizing map interactions with sidebar controls and data updates
- Status: Working but requires careful prop drilling; refactoring recommended

### Development & Deployment Challenges

⚠️ **Cross-Origin Resource Sharing (CORS)**
- Challenge: Configuring CORS correctly for local and production environments
- Status: Implemented; requires careful management during deployment

⚠️ **Database Connection in Production**
- Challenge: Managing database credentials and connections securely
- Status: Using environment variables; needs secrets management system for production

⚠️ **Testing Infrastructure**
- Challenge: No comprehensive test suite currently in place
- Status: Pending; tests needed for API endpoints and React components

---

## Architecture

```
DHEWS-PHASE-5/
├── backend/                  # Flask RESTful API
│   ├── models.py            # SQLAlchemy ORM
│   ├── routes.py            # API endpoints
│   ├── schemas.py           # Data validation
│   ├── app.py               # Flask application
│   └── migrations/          # Database migrations
│
└── frontend/                 # React SPA
    ├── src/
    │   ├── components/       # UI components
    │   ├── services/         # API client
    │   └── assets/           # Styles & images
    └── package.json
```

---

## Technology Stack

| Layer | Technology |
|-------|-----------|
| **Backend Framework** | Flask, Flask-SQLAlchemy |
| **Database** | PostgreSQL with SQLAlchemy ORM |
| **Real-Time** | Socket.IO |
| **Frontend** | React 18.2.0 |
| **Mapping** | Leaflet 4.2.1, React-Leaflet |
| **Data Export** | jsPDF |
| **API Client** | Axios/Fetch + Socket.io-client |

---

## Current Limitations

1. **Mock Data Only**: Currently using mock data; real meteorological data sources not integrated
2. **No Authentication**: System lacks user authentication and authorization
3. **Limited AI Features**: AI insights currently placeholder; needs ML model integration
4. **Single Region Focus**: Can handle multiple regions but optimization needed at scale
5. **No Historical Caching**: All historical queries hit the database directly
6. **Basic Indexing**: Needs advanced indexing on frequently queried fields
7. **No Alert Distribution**: Alert creation works but recipient notification not implemented
8. **Manual Data Entry**: No automated data ingestion pipeline

---

## Next Steps / Future Enhancements

### High Priority
- [ ] Integrate real meteorological data sources (rainfall, NDVI, temperature)
- [ ] Implement user authentication and role-based access control
- [ ] Add comprehensive unit and integration tests
- [ ] Optimize map rendering for 1000+ data cells
- [ ] Implement alert notification system (email/SMS)

### Medium Priority
- [ ] Add advanced AI/ML models for hazard prediction
- [ ] Implement data caching strategy (Redis)
- [ ] Add user preferences and saved filters
- [ ] Create admin dashboard for system monitoring
- [ ] Implement data export in multiple formats (CSV, Excel, GeoJSON)

### Low Priority
- [ ] Multi-language support
- [ ] Mobile app version
- [ ] Advanced charting and statistics
- [ ] Community reporting features

---

## Installation & Running

### Prerequisites
- Python 3.8+
- Node.js 14+
- PostgreSQL 12+ (or SQLite for development)

### Backend
```bash
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
flask db upgrade
python app.py
```

### Frontend
```bash
cd frontend
npm install
npm start
```

The app will be available at `http://localhost:3000` with backend API at `http://localhost:5000`

---

## Development Notes

- Use mock data (`mock_routes.py`) for development without a database
- Database migrations managed with Alembic (`flask db migrate`, `flask db upgrade`)
- Environment variables configured in `.env` file
- CORS configured for localhost:3000 <-> localhost:5000

---

## Team & Contributors

DHEWS-PHASE-5 is part of an ongoing initiative to provide early warning systems for dual natural hazards in vulnerable regions.

---

**Version**: Phase 5  
**Status**: Active Development