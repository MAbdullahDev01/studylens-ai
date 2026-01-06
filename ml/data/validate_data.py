import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
from datetime import timedelta

# 1. Load the generated data
try:
    df = pd.read_csv('D:\studylens-ai\studylens-ai\ml\data\study_sessions.csv')
    df['timestamp'] = pd.to_datetime(df['timestamp'])
    print("✅ Dataset loaded successfully.")
except FileNotFoundError:
    print("❌ Error: study_sessions.csv not found. Run generate_synthetic_data.py first.")
    exit()

def run_validation(df):
    print("\n--- 📊 DATA QUALITY SUMMARY ---")
    
    # Check 1: Basic Stats
    print(f"Total Sessions: {len(df)}")
    print(f"Total Users: {df['user_id'].nunique()}")
    
    # Check 2: Range Validation
    # Ensure focus is 0-5 and duration is 0.5-4.0
    focus_check = df['focus'].between(0, 5).all()
    duration_check = df['duration'].between(0.5, 4.0).all()
    print(f"Focus within range (0-5): {focus_check}")
    print(f"Duration within range (0.5-4): {duration_check}")

    # Check 3: Logical Gaps (Time-Series Check)
    # A user shouldn't start a new session before the previous one finished.
    df = df.sort_values(['user_id', 'timestamp'])
    df['prev_end'] = df.groupby('user_id')['timestamp'].shift(1) + \
                     pd.to_timedelta(df.groupby('user_id')['duration'].shift(1), unit='h')
    
    overlaps = df[df['timestamp'] < df['prev_end']]
    print(f"Session overlaps detected: {len(overlaps)}")

    # Check 4: Subject Distribution
    print("\nSessions per Subject:")
    print(df['subject'].value_counts())

# 2. Visualizations
def plot_data(df):
    plt.figure(figsize=(12, 5))

    # Plot A: Focus Distribution
    plt.subplot(1, 2, 1)
    sns.countplot(x='focus', data=df, palette='viridis')
    plt.title("Distribution of Focus Levels")

    # Plot B: Study Hours per User (Top 10)
    plt.subplot(1, 2, 2)
    top_users = df.groupby('user_id')['duration'].sum().sort_values(ascending=False).head(10)
    top_users.plot(kind='bar', color='skyblue')
    plt.title("Total Study Hours (Top 10 Users)")
    plt.ylabel("Hours")

    plt.tight_layout()
    plt.show()

if __name__ == "__main__":
    run_validation(df)
    plot_data(df)