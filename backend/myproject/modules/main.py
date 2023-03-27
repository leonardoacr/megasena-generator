import random

import numpy as np
from modules.probabilities import calculate_total_probability
from . import data_processing

# Create a function to create a bar plot

first_position_qty = data_processing.first_position_qty
second_position_qty = data_processing.second_position_qty
third_position_qty = data_processing.third_position_qty
fourth_position_qty = data_processing.fourth_position_qty
fifth_position_qty = data_processing.fifth_position_qty
sixth_position_qty = data_processing.sixth_position_qty


def create_arrays(position_qty):
    x_array = []
    for item in position_qty:
        x_array.append(item[0])

    y_array = []
    for item in position_qty:
        y_array.append(item[1])

    return x_array, y_array


first_x, first_y = create_arrays(first_position_qty)
second_x, second_y = create_arrays(second_position_qty)

third_x, third_y = create_arrays(third_position_qty)
fourth_x, fourth_y = create_arrays(fourth_position_qty)
fifth_x, fifth_y = create_arrays(fifth_position_qty)
sixth_x, sixth_y = create_arrays(sixth_position_qty)


def create_random_play(upper_limit):
    numbers = set()
    while len(numbers) < 6:
        first_guess = random.choice(first_x[:upper_limit])
        if first_guess not in numbers:
            numbers.add(first_guess)
        second_guess = random.choice(second_x[:upper_limit])
        if second_guess not in numbers:
            numbers.add(second_guess)
        third_guess = random.choice(third_x[:upper_limit])
        if third_guess not in numbers:
            numbers.add(third_guess)
        fourth_guess = random.choice(fourth_x[:upper_limit])
        if fourth_guess not in numbers:
            numbers.add(fourth_guess)
        fifth_guess = random.choice(fifth_x[:upper_limit])
        if fifth_guess not in numbers:
            numbers.add(fifth_guess)
        sixth_guess = random.choice(sixth_x[:upper_limit])
        if sixth_guess not in numbers:
            numbers.add(sixth_guess)

    return [first_guess, second_guess, third_guess, fourth_guess, fifth_guess, sixth_guess]


def calculate_probabilities():
    probability_data = calculate_total_probability(
        first_y, second_y, third_y, fourth_y, fifth_y, sixth_y)
    json_data = {
        "upper_limit_array": probability_data[0],
        "new_probability_array": probability_data[1],
        "new_probability_percentage_array": probability_data[2]
    }
    return json_data


def dashboard_data():
    json_data = {
        "first_x": np.array(first_x).tolist(),
        "first_y": np.array(first_y).tolist(),
        "second_x": np.array(second_x).tolist(),
        "second_y": np.array(second_y).tolist(),
        "third_x": np.array(third_x).tolist(),
        "third_y": np.array(third_y).tolist(),
        "fourth_x": np.array(fourth_x).tolist(),
        "fourth_y": np.array(fourth_y).tolist(),
        "fifth_x": np.array(fifth_x).tolist(),
        "fifth_y": np.array(fifth_y).tolist(),
        "sixth_x": np.array(sixth_x).tolist(),
        "sixth_y": np.array(sixth_y).tolist()
    }
    return json_data
