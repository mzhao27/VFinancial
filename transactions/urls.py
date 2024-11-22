from django.urls import path

from . import views


urlpatterns = [
    path("", views.index, name="index"),
    path("details/<int:year>/<int:month>/", views.detail),
]
