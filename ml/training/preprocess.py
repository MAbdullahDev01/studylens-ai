import pandas as pd
import numpy as np
from sklearn.preprocessing import StandardScaler, OneHotEncoder
import joblib
import os
import sys
sys.path.append(os.path.abspath('..'))

class Preprocessor:
    def __init__(self):
        self.duration_scaler = StandardScaler()
        self.focus_scaler = StandardScaler()
        self.subject_encoder = OneHotEncoder(sparse_output=False, handle_unknown='ignore')

    def fit_transform(self, df: pd.DataFrame):
        # 1️⃣ Handle missing values
        df['duration'] = df['duration'].fillna(df['duration'].median())
        df['focus'] = df['focus'].fillna(df['focus'].median())
        df['notes'] = df['notes'].fillna("")
        df['subject'] = df['subject'].fillna("Unknown")

        # 2️⃣ Sort by user and timestamp
        df['timestamp'] = pd.to_datetime(df['timestamp'])
        df = df.sort_values(['user_id', 'timestamp']).reset_index(drop=True)

        # 3️⃣ Scale numeric features
        df['duration_scaled'] = self.duration_scaler.fit_transform(df[['duration']])
        df['focus_scaled'] = self.focus_scaler.fit_transform(df[['focus']])

        # 4️⃣ Encode categorical features (subject)
        subject_encoded = self.subject_encoder.fit_transform(df[['subject']])
        subject_df = pd.DataFrame(subject_encoded, columns=self.subject_encoder.get_feature_names_out(['subject']))
        df = pd.concat([df.reset_index(drop=True), subject_df.reset_index(drop=True)], axis=1)

        return df

    def transform(self, df: pd.DataFrame):
        # For test/validation sets or real data
        df['duration'] = df['duration'].fillna(df['duration'].median())
        df['focus'] = df['focus'].fillna(df['focus'].median())
        df['notes'] = df['notes'].fillna("")
        df['subject'] = df['subject'].fillna("Unknown")

        df['timestamp'] = pd.to_datetime(df['timestamp'])
        df = df.sort_values(['user_id', 'timestamp']).reset_index(drop=True)

        df['duration_scaled'] = self.duration_scaler.transform(df[['duration']])
        df['focus_scaled'] = self.focus_scaler.transform(df[['focus']])

        subject_encoded = self.subject_encoder.transform(df[['subject']])
        subject_df = pd.DataFrame(subject_encoded, columns=self.subject_encoder.get_feature_names_out(['subject']))
        df = pd.concat([df.reset_index(drop=True), subject_df.reset_index(drop=True)], axis=1)

        return df

    def save(self, path="../training/preprocessors/"):
        # Create the directory if it doesn't exist
        os.makedirs(path, exist_ok=True)
        
        # Save the objects
        joblib.dump(self.duration_scaler, os.path.join(path, "duration_scaler.pkl"))
        joblib.dump(self.focus_scaler, os.path.join(path, "focus_scaler.pkl"))
        joblib.dump(self.subject_encoder, os.path.join(path, "subject_encoder.pkl"))
        print(f"Successfully saved preprocessors to: {os.path.abspath(path)}")
