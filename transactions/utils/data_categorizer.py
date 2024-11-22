# import data_parser
import plaid_fetcher as pf
import utils


def process(transactions_data):
    transactions = []
    for id in transactions_data:
        transaction = transactions_data[id]
        amount = transaction["amount"]
        if "CR" in amount:
            # credit, pass
            continue

        amount = float(amount.replace(",", ""))
        transaction["amount"] = amount
        transactions.append({"id": id, "description": transaction["description"], "amount": amount})

    # get category from plaid
    categories = pf.Plaid().get_transaction_category_data(transactions)
    for id in transactions_data:
        transaction = transactions_data[id]
        transaction["category"] = categories[id] if id in categories else None

# data = data_parser.DataParser("../../2024-10.txt").parse()
# process(data)
# db = utils.get_db_handle()
# utils.write_transaction_to_db(db, data.values())

