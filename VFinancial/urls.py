from django.contrib import admin
from django.shortcuts import redirect
from django.urls import include, path

urlpatterns = [
    path('', lambda request: redirect('transactions/', permanent=True)),
    path("transactions/", include("transactions.urls")),
    path("admin/", admin.site.urls),
]
