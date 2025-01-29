from flask import Flask

app = Flask(__name__)
app.secret_key = 'B00KL1BRARYS4S7EM'

from app import routes