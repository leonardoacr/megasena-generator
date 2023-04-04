from rest_framework import renderers


class SwaggerUIRenderer(renderers.OpenAPIRenderer):
    media_type = 'text/html'
    format = 'swagger'
    template = 'swagger-ui.html'
