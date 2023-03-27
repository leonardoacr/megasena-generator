import numpy as np
from . import import_data


def verify_guesses(guess):
    # Getting the positions from data_processing.py
    past_results = import_data.past_results
    data = import_data.date
    game_number = import_data.game_number

    for i, past_result in enumerate(past_results):
        correct_guesses = 0
        for number in guess:
            if number in past_result:
                correct_guesses += 1
        if correct_guesses >= 4:
            if correct_guesses == 4:
                type_of_prize = "Quadra"
            elif correct_guesses == 5:
                type_of_prize = "Quina"
            elif correct_guesses == 6:
                type_of_prize = "Sena"
            break
    else:
        type_of_prize = "Você não ganhou nenhum prêmio."
    return correct_guesses, past_result, game_number[i-1], data[i-1], type_of_prize
