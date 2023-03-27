import pandas as pd

# Read the Excel file into a pandas DataFrame
df = pd.read_excel('assets/megasena.xlsx', engine="openpyxl")
df2 = pd.read_excel('assets/info.xlsx', engine="openpyxl")
# Saving the DataFrame to a matrix
past_results = df.to_numpy()

# Convert the DataFrame to a NumPy array
first_position = df.iloc[:, 0].to_numpy()
second_position = df.iloc[:, 1].to_numpy()
third_position = df.iloc[:, 2].to_numpy()
fourth_position = df.iloc[:, 3].to_numpy()
fifth_position = df.iloc[:, 4].to_numpy()
sixth_position = df.iloc[:, 5].to_numpy()

# Convert the info to a list
game_number = df2.iloc[:, 0].to_list()
inverted_game_number = game_number[::-1]
date = df2.iloc[:, 1].to_list()
inverted_date = date[::-1]
