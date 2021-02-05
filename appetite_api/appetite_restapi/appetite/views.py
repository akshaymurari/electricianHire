from django.shortcuts import render
from .models import Donors,DonorUser
from .serializers import DonorsSerializer,DonorUserSerializer
from rest_framework import viewsets
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import DjangoModelPermissions
from rest_framework.views import APIView
import datetime
from rest_framework.filters import SearchFilter

from django.http import JsonResponse


class DonorFoodItems(viewsets.ModelViewSet):
    # queryset = Donors.objects.all()
    serializer_class = DonorsSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [DjangoModelPermissions]
    def get_queryset(self):
        return Donors.objects.filter(email=self.kwargs["pk"])
    pass

class SaveDonor(viewsets.ModelViewSet):
    queryset = Donors.objects.all()
    serializer_class = DonorsSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [DjangoModelPermissions]
    # def get_queryset(self):
    #     return Donors.objects.filter(email=self.kwargs["pk"])
    # pass

class DonorCreate(viewsets.ModelViewSet):
    queryset = DonorUser.objects.all()
    serializer_class = DonorUserSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [DjangoModelPermissions]

class DonorExists(APIView):
    # serializer_class = DonorUserSerializer
    authentication_classes = [TokenAuthentication]
    def post(self,request):
        if DonorUser.objects.filter(email=request.data["email"],password=request.data["password"]).exists():
            return JsonResponse({"msg":True})
        return JsonResponse({"msg":False})

class ReceiveFood(viewsets.ModelViewSet):
    serializer_class = DonorsSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [DjangoModelPermissions]
    filter_backends = [SearchFilter]
    search_fields = ['foodType','address']
    def get_queryset(self):
        day = datetime.datetime.now().strftime('%Y-%m-%d')
        return Donors.objects.filter(region=self.kwargs["pk"],day=day)
    pass