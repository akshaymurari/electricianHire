"""appetite_restapi URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path,include
from appetite import views
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('createrequest',views.RequestCreate,basename="requestcreate")
router.register('createdonor',views.DonorCreate,basename="createdonor")
router.register('savedonoritem',views.SaveDonor,basename="savedonor")
router.register('deletedonoritem',views.SaveDonor,basename="savedonor")

urlpatterns = [
    path('',include(router.urls)),
    path('ReceiveFood/<str:pk>',views.ReceiveFood.as_view({'get':'list'})),
    path('RequestFood/<str:pk>',views.ReceiveRequest.as_view({'get':'list'})),
    path('donorexists/',views.DonorExists.as_view()),
    path('getdonoritems/<str:pk>',views.DonorFoodItems.as_view({'get':'list'})),
    path('admin/', admin.site.urls),
]
