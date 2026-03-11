# Health-Data-Normalization-Engine
A small frontend prototype demonstrating how fragmented health data can be transformed into a unified schema developers and AI systems can build on.

This project simulates a simplified version of the type of data transformation pipelines used in modern health platforms.

Inspired by Terra’s mission to unify fragmented health data into a consistent schema developers and AI systems can reason over.

---

## Demo

### Hero & Product Overview

![Hero Section](./screenshots/hero.png)

---

### Raw Health Data Input

Users can input raw JSON data from health devices, labs, or sensors.

![Raw Data Input](./screenshots/raw-data.png)

---

### Normalized Health Data

The system transforms vendor-specific data fields into a standardized schema.

![Normalized Data](./screenshots/normalized-data.png)

---

### Editable Biomarkers

Normalized values can be edited to simulate validation or correction workflows.

![Editable Data](./screenshots/editable.png)

---

## Features

- Raw health data ingestion via JSON input
- Data normalization pipeline
- Standardized biomarker schema
- Confidence scoring for parsed data
- Editable normalized values
- Clean developer-focused UI
- Responsive layout
- Modern SaaS-style design

---

## Example Transformation

### Raw Input

```json
{
  "hb": 12.4,
  "vit_d": 28,
  "gluc": 90
}
