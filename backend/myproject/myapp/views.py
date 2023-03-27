from django.http import JsonResponse
from modules import scripts
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from django.core.cache import cache


@csrf_exempt
def handle_bandwidth_form(request):
    if request.method == 'POST':
        bandwidth = request.POST.get('bandwidth')

        if (bandwidth == ''):
            bandwidth = 10
        else:
            bandwidth = int(bandwidth)

        # Store the bandwidth value in the cache
        cache.set('bandwidth', bandwidth)
        return HttpResponse(status=200)
    else:
        return HttpResponse(status=405)


def run_results_scripts(request):
    bandwidth = cache.get('bandwidth')
    bandwidth = 10 if bandwidth is None else bandwidth
    print(f"Received bandwidth value: {bandwidth}")

    result = scripts.get_results(bandwidth)
    your_game = result[0]
    correct_guesses = result[1]
    past_result = result[2]
    game_number = result[3]
    data = result[4]
    type_of_prize = result[5]

    json_data = {
        'your_game': your_game,
        'correct_guesses': correct_guesses,
        'game_number': game_number,
        'past_result': past_result,
        'data': data,
        'type_of_prize': type_of_prize
    }

    return JsonResponse(json_data)


def run_dashboard_data(request):
    data = scripts.get_dashboard_data()
    return JsonResponse(data)


def run_probability_data(request):
    probability_data = scripts.get_probability_data()
    return JsonResponse(probability_data)
