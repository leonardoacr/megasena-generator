from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from django.urls import path, re_path
from myapp import views

schema_view = get_schema_view(
    openapi.Info(
        title="Snippets API",
        default_version='v1',
        description="Test description",
        terms_of_service="https://www.google.com/policies/terms/",
        contact=openapi.Contact(email="contact@snippets.local"),
        license=openapi.License(name="BSD License"),
    ),
    public=True,
    permission_classes=[permissions.AllowAny],
)

urlpatterns = [
    path('api/results/', views.RunResultsScriptsView.as_view(), name='results'),
    path('api/dashboard-data/', views.RunDashboardDataView.as_view(),
         name='dashboard-data'),
    path('api/probability-data/', views.RunProbabilityDataView.as_view(),
         name='probability_data'),
    path('api/bandwidth-form/', views.HandleBandwidthFormView.as_view(),
         name='bandwidth_form'),
]

# swagger
urlpatterns += [
    re_path(r'^swagger(?P<format>\.json|\.yaml)$',
            schema_view.without_ui(cache_timeout=0), name='schema-json'),
    re_path(r'^swagger/$', schema_view.with_ui('swagger',
                                               cache_timeout=0), name='schema-swagger-ui'),
    re_path(r'^redoc/$', schema_view.with_ui('redoc',
                                             cache_timeout=0), name='schema-redoc'),

]
