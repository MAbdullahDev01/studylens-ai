import pandas as pd
import numpy as np
from datetime import datetime, timedelta
from schema import DATA_COLUMNS, SUBJECTS, SAMPLE_NOTES

# Parameters
NUM_USERS = 50
SESSIONS_PER_USER = 100  # ~100 sessions per user
START_DATE = datetime(2025, 1, 1)

data = []

for user_id in range(1, NUM_USERS + 1):
    current_time = START_DATE
    for _ in range(SESSIONS_PER_USER):
        # Random time increment: 1–48 hours
        delta_hours = np.random.randint(1, 48)
        current_time += timedelta(hours=delta_hours)

        # Random subject, duration, focus, notes
        subject = np.random.choice(SUBJECTS)
        duration = np.round(np.random.uniform(0.5, 4.0), 1)
        focus = np.random.randint(0, 6)  # 0-5
        notes = np.random.choice(SAMPLE_NOTES)

        data.append([
            user_id,
            current_time,
            subject,
            duration,
            focus,
            notes
        ])

# Convert to DataFrame
df = pd.DataFrame(data, columns=DATA_COLUMNS)

# Sort by user and timestamp
df = df.sort_values(['user_id', 'timestamp'])

# Save CSV
df.to_csv('D:/studylens-ai/studylens-ai/ml/data/study_sessions.csv', index=False)

print("Synthetic dataset created: ml/data/study_sessions.csv")
print(df.head())
