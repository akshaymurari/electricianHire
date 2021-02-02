from rest_framework import serializers
from .models import Donors,DonorUser

class DonorsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Donors
        fields = '__all__'


class DonorUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = DonorUser
        fields = '__all__'
        