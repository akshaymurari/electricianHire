# Generated by Django 3.1.6 on 2021-02-02 05:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('appetite', '0002_auto_20210202_1105'),
    ]

    operations = [
        migrations.AlterField(
            model_name='donoruser',
            name='email',
            field=models.CharField(max_length=100, primary_key=True, serialize=False),
        ),
    ]
