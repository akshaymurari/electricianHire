from django.shortcuts import render
from .models import Donors,DonorUser,Request
from .serializers import DonorsSerializer,DonorUserSerializer,RequestUserSerializer
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

class RequestCreate(viewsets.ModelViewSet):
    queryset = Request.objects.all()
    serializer_class = RequestUserSerializer

class ReceiveRequest(viewsets.ModelViewSet):
    serializer_class = RequestUserSerializer
    filter_backends = [SearchFilter]
    search_fields = ['address','region']
    def get_queryset(self):
        day = datetime.datetime.now()
        end = day - datetime.timedelta(hours=3)
        return Request.objects.filter(region=self.kwargs["pk"],day__range=(end,day))
    pass

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
        end = datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        return Donors.objects.filter(region=self.kwargs["pk"],day__range=(day,))
    pass

