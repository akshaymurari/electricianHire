# Generated by Django 3.2.9 on 2021-12-07 14:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('appetite', '0005_request'),
    ]

    operations = [
        migrations.AlterField(
            model_name='request',
            name='day',
            field=models.DateTimeField(auto_now_add=True),
        ),
    ]
