import os
from datetime import datetime


class DataParser:
    def __init__(self, filename):
        self.filename = filename
        print(os.getcwd())

    def parse(self):
        with open(self.filename) as file:
            lines = [line.rstrip() for line in file]

        num = int(len(lines) / 4)
        results = {}

        for i in range(num):
            id = str(i+1)
            if "CR" in lines[i*4 + 3]:
                continue
            date_str = lines[i*4] + " 2024"
            date = datetime.strptime(date_str, '%b. %d %Y')
            results[id] = {"id": id, "description": lines[i*4 + 2], "amount": lines[i*4 + 3], "date": date}

        return results
