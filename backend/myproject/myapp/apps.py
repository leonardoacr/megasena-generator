from django.apps import AppConfig


class MyappConfig(AppConfig):
    default_auto_field = 'myproject.db.models.BigAutoField'
    name = 'myapp'
