from django.contrib import admin
from .models import Donors,DonorUser
# Register your models here.

@admin.register(Donors)
class DonorsAdmin(admin.ModelAdmin):
    list_display = ['email',"phoneNo","foodType","address","region"]

@admin.register(DonorUser)
class DonorsAdmin(admin.ModelAdmin):
    list_display = ['email',"password"]
