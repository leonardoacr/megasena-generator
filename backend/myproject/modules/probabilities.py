import math


def calculate_total_probability(first_y, second_y, third_y, fourth_y, fifth_y, sixth_y):
    # Loop for global probability in each upper_limit
    new_probability_array = []
    new_probability_percentage_array = []
    upper_limit_array = []
    probability_data = []
    for upper_limit in range(1, 61):
        # Calculate probabilities for each position
        position_weights = []
        for y in [first_y, second_y, third_y, fourth_y, fifth_y, sixth_y]:
            position_weights.append(calculate_probability(y, upper_limit))

        # Calculate total probability
        weighted_total_probability = 1
        for weight in position_weights:
            weighted_total_probability *= weight

        total_probability = weighted_total_probability

        normal_probability = round(math.comb(60, 6))
        new_probability = round(normal_probability *
                                weighted_total_probability)
        new_probability_array.append(new_probability)
        new_probability_percentage_array.append(
            100 * new_probability / normal_probability)
        upper_limit_array.append(upper_limit)

        # print_probabilities(*position_weights, weighted_total_probability,
        #                     total_probability, new_probability, normal_probability)
        probability_data = [
            upper_limit_array, new_probability_array, new_probability_percentage_array]
    return probability_data


def calculate_probability(array_y, upper_limit):
    frequency_sum = sum(array_y[:upper_limit])
    total_games = sum(array_y)
    probability = frequency_sum / total_games
    return probability


def print_probabilities(first_guess_probability, second_guess_probability, third_guess_probability,
                        fourth_guess_probability, fifth_guess_probability, sixth_guess_probability,
                        global_probability, total_probability, new_probability, normal_probability):
    # Print the probabilities
    print("Probability of guessing first number correctly: {:.6f}".format(
        first_guess_probability))
    print("Probability of guessing second number correctly: {:.6f}".format(
        second_guess_probability))
    print("Probability of guessing third number correctly: {:.6f}".format(
        third_guess_probability))
    print("Probability of guessing fourth number correctly: {:.6f}".format(
        fourth_guess_probability))
    print("Probability of guessing fifth number correctly: {:.6f}".format(
        fifth_guess_probability))
    print("Probability of guessing sixth number correctly: {:.6f}".format(
        sixth_guess_probability))
    print("Probability of guessing all numbers correctly: {:.6f}".format(
        global_probability))
    print("Total probability of guessing all numbers correctly: {:.6f}".format(
        total_probability))
    print("New probability of guessing all numbers correctly: {:d}".format(
        new_probability))
    print("Normal probability of guessing all numbers correctly: {:d}".format(
        normal_probability))
