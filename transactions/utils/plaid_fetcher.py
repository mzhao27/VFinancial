import plaid
from plaid.api import plaid_api
from plaid.model.client_provided_transaction import ClientProvidedTransaction
from plaid.model.enrich_transaction_direction import EnrichTransactionDirection
from plaid.model.transactions_enrich_request import TransactionsEnrichRequest


class Plaid():
    def __init__(self):
        configuration = plaid.Configuration(
            host=plaid.Environment.Production,
            api_key={
                'clientId': "",
                'secret': "",
            }
        )

        api_client = plaid.ApiClient(configuration)
        self.client = plaid_api.PlaidApi(api_client)

    def get_transaction_category_data(self, transactions=None):
        if not transactions:
            transactions_to_enrich = [
              ClientProvidedTransaction(
                  id="2",
                  description="DD DOORDASH BURGERKIN 855-123-4567 CA",
                  amount=28.34,
                  iso_currency_code="CAD",
                  direction=EnrichTransactionDirection(value="OUTFLOW")
              ),
            ]
        else:
            transactions_to_enrich = []
            for transaction in transactions:
                transactions_to_enrich.append(ClientProvidedTransaction(
                  id=transaction["id"],
                  description=transaction["description"],
                  amount=transaction["amount"],
                  iso_currency_code="CAD",
                  direction=EnrichTransactionDirection(value="OUTFLOW")
              ))

        enrich_req = TransactionsEnrichRequest(
            account_type="credit",
            transactions=transactions_to_enrich
        )

        response = self.client.transactions_enrich(enrich_req)
        enriched_transactions = response['enriched_transactions']
        category_data = {}
        for transaction in enriched_transactions:
            category_data[transaction["id"]] = transaction["enrichments"]["personal_finance_category"]["primary"]

        return category_data

