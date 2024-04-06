from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    pass

class Todo(models.Model):
    description = models.CharField(max_length=100)  # Remove related_name
    is_completed = models.BooleanField(default=False)  # Remove related_name
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='todos')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.description
