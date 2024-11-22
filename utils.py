from pymongo import MongoClient


def get_db_handle():
    client = MongoClient("localhost", 27017)
    db = client["VFinancial"]
    return db

def write_transaction_to_db(db, data):
    transactions_collection = db.transactions
    results = transactions_collection.insert_many(data)
    print(results)
