# Problem Definition

**Prediction Task**
- Binary classification: Will a student be productive next 7 days?

**Label Definition**
- total_study_time_next_7_days >= 10 hours
- avg_focus_next_7_days >= 3/5
- label = 1 if both conditions met, else 0

**Prediction Horizon:** 7 days

**Inputs for ML**
- Study sessions:
    - user_id
    - timestamp
    - subject
    - duration
    - focus (0-5 scale)
    - notes (text)
- Aggregated rolling features for LSTM or baseline models

**Assumptions**
- Past behavior predicts near-term productivity
- Focus points are reliable
- Notes may contain useful qualitative info

**Limitations**
- Synthetic data for Phase 2
- Text notes are not yet fully modeled
