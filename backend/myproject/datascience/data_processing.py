from . import import_data
import collections


first_position = import_data.first_position
second_position = import_data.second_position
third_position = import_data.third_position
fourth_position = import_data.fourth_position
fifth_position = import_data.fifth_position
sixth_position = import_data.sixth_position


# Collections lib is used to create a dictionary called 'frequency'
# The function returns the frequency tuple (list that cannot be changed) ordered in reverse
# Lambda returns the second element of each tuple
def sort_frequency(arr):
    frequency = dict(collections.Counter(arr))
    return sorted(frequency.items(), key=lambda x: x[1], reverse=True)


first_position_qty = sort_frequency(first_position)
second_position_qty = sort_frequency(second_position)
third_position_qty = sort_frequency(third_position)
fourth_position_qty = sort_frequency(fourth_position)
fifth_position_qty = sort_frequency(fifth_position)
sixth_position_qty = sort_frequency(sixth_position)
