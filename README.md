# Health-Data-Normalization-Engine
A small frontend prototype demonstrating how fragmented health data can be transformed into a unified schema developers and AI systems can build on.

This project simulates a simplified version of the type of data transformation pipelines used in modern health platforms.

Inspired by Terra’s mission to unify fragmented health data into a consistent schema developers and AI systems can reason over.

---

## Demo

### Hero & Product Overview

![Hero Section]<img width="948" height="474" alt="image" src="https://github.com/user-attachments/assets/e96ce173-0833-44b5-a9c0-bc79570320fc" />


---

### Raw Health Data Input

Users can input raw JSON data from health devices, labs, or sensors.

![Raw Data Input]<img width="947" height="467" alt="image" src="https://github.com/user-attachments/assets/e1e7e877-bbf2-4bb6-927a-7ac2d6f3a4a3" />


---

### Normalized Health Data

The system transforms vendor-specific data fields into a standardized schema.

![Normalized Data]<img width="947" height="474" alt="image" src="https://github.com/user-attachments/assets/3628f8c5-ed0c-4391-923a-c6e46e918fab" />


---

### Editable Biomarkers

Normalized values can be edited to simulate validation or correction workflows.

![Editable Data]<img width="948" height="474" alt="image" src="https://github.com/user-attachments/assets/0c1da02f-b2c1-44be-b00e-812671d8b622" />


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
