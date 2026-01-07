import pandas as pd

def time_aware_split(df: pd.DataFrame, user_col='user_id', timestamp_col='timestamp',
                     train_ratio=0.7, val_ratio=0.15, test_ratio=0.15):
    """
    Split dataset per user chronologically into train, validation, and test sets.
    
    Args:
        df: Preprocessed DataFrame
        user_col: Column name for user ID
        timestamp_col: Column name for timestamp
        train_ratio: Fraction of sessions for training
        val_ratio: Fraction of sessions for validation
        test_ratio: Fraction of sessions for testing
    
    Returns:
        train_df, val_df, test_df
    """
    train_list, val_list, test_list = [], [], []

    for user_id, user_df in df.groupby(user_col):
        user_df = user_df.sort_values(timestamp_col).reset_index(drop=True)
        n = len(user_df)
        train_end = int(n * train_ratio)
        val_end = int(n * (train_ratio + val_ratio))

        train_list.append(user_df.iloc[:train_end])
        val_list.append(user_df.iloc[train_end:val_end])
        test_list.append(user_df.iloc[val_end:])

    train_df = pd.concat(train_list).reset_index(drop=True)
    val_df = pd.concat(val_list).reset_index(drop=True)
    test_df = pd.concat(test_list).reset_index(drop=True)

    return train_df, val_df, test_df
