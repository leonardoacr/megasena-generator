from django.urls import path
from myapp.views import run_results_scripts
from myapp.views import run_dashboard_data
from myapp.views import handle_bandwidth_form

urlpatterns = [
    path('api/results/', run_results_scripts, name='results'),
    path('api/dashboard-data/', run_dashboard_data,
         name='dashboard-data'),
    path('api/bandwidth-form/', handle_bandwidth_form, name='bandwidth_form'),
]
