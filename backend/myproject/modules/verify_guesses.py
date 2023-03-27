import numpy as np
from . import import_data


def verify_guesses(guess):
    # Getting the positions from data_processing.py
    past_results = import_data.past_results
    data = import_data.date
    game_number = import_data.game_number

    correct_guesses = np.array([0 for _ in range(len(past_results))])
    for i, past_result in enumerate(past_results):
        correct_guesses[i] = 0
        for number in guess:
            if number in past_result:
                correct_guesses[i] += 1
    max_correct_guesses_index = correct_guesses.argmax()
    max_correct_guesses = correct_guesses[max_correct_guesses_index]
    if max_correct_guesses >= 4:
        if max_correct_guesses == 4:
            type_of_prize = "Quadra"
        elif max_correct_guesses == 5:
            type_of_prize = "Quina"
        elif max_correct_guesses == 6:
            type_of_prize = "Sena"
        past_result = past_results[max_correct_guesses_index]
        game_number = game_number[max_correct_guesses_index-1]
        date = data[max_correct_guesses_index-1]
    else:
        type_of_prize = "Você não ganhou nenhum prêmio."
        past_result = None
        game_number = None
        date = None

    return max_correct_guesses, past_result, game_number, date, type_of_prize
