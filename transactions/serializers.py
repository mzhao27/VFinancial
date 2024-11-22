from rest_framework import serializers


class TransactionSerializer(serializers.Serializer):
    _id = serializers.CharField(max_length=100, read_only=True)
    description = serializers.CharField(max_length=100, read_only=True)
    date = serializers.DateTimeField(read_only=True)
    amount = serializers.FloatField(read_only=True, min_value=0)
    category = serializers.CharField(read_only=True, max_length=100)
