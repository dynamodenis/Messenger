from django.db import models
# from django.contrib.auth.models import User
from django.conf import settings

# Create your models here.
class Lead(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=200, unique=True)
    message = models.CharField(max_length=500, blank=True)
    owner = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, null = True, related_name='leads')
    created_at = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return self.name