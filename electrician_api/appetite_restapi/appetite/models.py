from django.db import models
from rest_framework.fields import DateField

class DonorUser(models.Model):
    email = models.CharField(max_length=100,primary_key=True)
    password = models.CharField(max_length=30)



class Donors(models.Model):
    email = models.CharField(max_length=100,default=None)
    phoneNo = models.CharField(max_length=11,default=None)
    foodType = models.CharField(max_length=255,default=None)
    address = models.CharField(max_length=100,default=None)
    region = models.CharField(max_length=30,default=None)
    day = models.DateField(auto_now_add=True)

# class Receiver(models.Model):
#     region = models.CharField(max_length=30,default=None)
    