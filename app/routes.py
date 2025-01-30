from app import app
from flask import render_template, request, jsonify, redirect, url_for, send_file, flash
import json
from werkzeug.utils import secure_filename
from flask_cors import CORS

CORS(app)

# Load the data from the JSON file
with open('app/q-vercel-python.json', 'r') as file:
    data = json.load(file)

# Define the API route
@app.route('/api', methods=['GET'])
def get_marks():
    names = request.args.getlist('name')
    marks = [next((item['marks'] for item in data if item['name'] == name), None) for name in names]
    return { "marks": marks }