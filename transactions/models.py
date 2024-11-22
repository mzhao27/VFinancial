import uuid

from django.db import models


class Transaction(models.Model):
    _id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    id = models.CharField(max_length=100)
    description = models.CharField(max_length=200)
    date = models.DateTimeField("Transaction Date")
    amount = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    category = models.CharField(max_length=200)

    class Meta:
        managed = False
