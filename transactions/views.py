import calendar
from datetime import datetime

from django.http import HttpResponse
from django.template import loader

import utils
from .models import Transaction
from .serializers import TransactionSerializer


def index(request):
    template = loader.get_template("transactions-index.html")
    return HttpResponse(template.render())

def detail(request, year, month):
    year = int(year)
    month = int(month)
    from_date = datetime(year, month, 1)
    to_date = datetime(year, month, calendar.monthrange(year, month)[-1])
    db = utils.get_db_handle()
    transactions_collection = db.transactions
    data = list(transactions_collection.find({"date": {"$lte": to_date, "$gte": from_date}}))
    transactions = [Transaction(**obj) for obj in data]

    category_breakdown = {}
    for transaction in data:
        category = transaction['category']
        if category not in category_breakdown:
            category_breakdown[category] = transaction['amount']
        else:
            category_breakdown[category] += transaction['amount']
    for cate in category_breakdown:
        val = category_breakdown[cate]
        category_breakdown[cate] = float("{:.2f}".format(val))

    serialized_transactions = TransactionSerializer(transactions, many=True).data

    context = {
        "data": {
            "transactions": serialized_transactions,
            "category_breakdown": sorted(category_breakdown.items(), key=lambda item: item[1], reverse=True),
            "total": float("{:.2f}".format(sum(category_breakdown.values())))
        }
    }
    template = loader.get_template("transactions-detail.html")
    return HttpResponse(template.render(context, request))
