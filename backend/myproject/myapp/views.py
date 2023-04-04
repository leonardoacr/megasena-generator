from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from django.core.cache import cache
from drf_yasg.utils import swagger_auto_schema
from rest_framework import serializers
from datascience import scripts


class HandleBandwidthFormView(APIView):
    class BandwidthSerializer(serializers.Serializer):
        bandwidth = serializers.CharField()

    @swagger_auto_schema(
        request_body=BandwidthSerializer,
        consumes=['application/x-www-form-urlencoded'],
        operation_summary="Handle bandwidth form data",
        operation_description="API endpoint to handle bandwidth form data"
    )
    def post(self, request):
        """
        API endpoint to handle bandwidth form data
        """
        bandwidth = request.POST.get('bandwidth')
        print(bandwidth)
        if bandwidth is None:
            return Response({'error': 'Bandwidth field is required'}, status=400)

        if bandwidth == '':
            bandwidth = 10
        else:
            bandwidth = int(bandwidth)

        # Store the bandwidth value in the cache
        cache.set('bandwidth', bandwidth)
        return Response(status=200)

    def get(self, request):
        return Response(status=405)


class RunResultsScriptsView(APIView):

    @swagger_auto_schema(
        operation_summary="Run results scripts",
        operation_description="API endpoint to run results scripts"
    )
    def get(self, request):
        """
        API endpoint to run results scripts
        """
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


class RunDashboardDataView(APIView):

    @swagger_auto_schema(
        operation_summary="Run dashboard data scripts",
        operation_description="API endpoint to run dashboard data scripts"
    )
    def get(self, request):
        """
        API endpoint to run dashboard data scripts
        """
        data = scripts.get_dashboard_data()
        return JsonResponse(data)


class RunProbabilityDataView(APIView):

    @swagger_auto_schema(
        operation_summary="Run probability data scripts",
        operation_description="API endpoint to run probability data scripts"
    )
    def get(self, request):
        """
        API endpoint to run probability data scripts
        """
        probability_data = scripts.get_probability_data()
        return JsonResponse(probability_data)
