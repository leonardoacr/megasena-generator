clear all; close all; clc

upper_limit = 1:60;
normal_probability = 50063860;
new_probability = [2, 107, 1081, 5281, 17562, 45210, 100838, 199081, 354803, 591173, 927581, 1384055, 1976930, 2696228, 3581509, 4651632, 5894065, 7249689, 8773751, 10469474, 12289539, 14244037, 16349622, 18542928, 20714369, 22889240, 25101500, 27213564, 29362334, 31401351, 33379306, 35274810, 37018843, 38748473, 40360034, 41744581, 43042564, 44193642, 45204175, 46028887, 46771570, 47428541, 47997055, 48474781, 48917107, 49245778, 49517556, 49751198, 49868329, 49966048, 50024717, 50044289, 50063860, 50063860, 50063860, 50063860, 50063860, 50063860, 50063860, 50063860];
new_probability_percentage = 100 * new_probability / normal_probability;
bar(upper_limit, new_probability)
figure
bar(upper_limit, new_probability_percentage)