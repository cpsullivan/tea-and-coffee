from django.contrib.auth.models import User
from django.db import models

class Users(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)