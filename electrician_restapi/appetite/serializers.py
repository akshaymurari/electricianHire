from rest_framework import serializers
from .models import Donors,DonorUser,Request

class DonorsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Donors
        fields = '__all__'


class DonorUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = DonorUser
        fields = '__all__'
        
class RequestUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = Request
        fields = '__all__'
        