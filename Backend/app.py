import models

from flask import Flask, jsonify, request, g 
from resources.books import books
from resources.book_users import book_users
from resources.appusers import appusers
from flask_login import LoginManager
from flask_cors import CORS

DEBUG = True
PORT = 8000

# Initialize an instance of the Flask class.
# This starts the website!
app = Flask(__name__)

app.config.from_pyfile('config.py')
login_manager= LoginManager() # here we instantiate a new login_manager class
login_manager.init_app(app) # initialize the manager in our app 

@login_manager.user_loader
def load_user(appuser_id):
    try:
        return models.AppUser.get_by_id(appuser_id)
    except models.DoesNotExist:
        return None 

# connect to the database before each re
# 
# quest
@app.before_request
def before_request():
    g.db = models.DATABASE
    g.db.connect()

# close the databse connection after each request
@app.after_request
def after_request(response):
    g.db= models.DATABASE
    g.db.close()
    return response   


###### THE MIDDLEWARE 
CORS(app, origins=['http://localhost:3000'], supports_credentials=True)         

## THE BLUEPRINT SET-UP 
app.register_blueprint(books, url_prefix = '/api/v1/books')
app.register_blueprint(appusers,url_prefix = '/api/v1/appusers') 
app.register_blueprint(book_users, url_prefix= '/api/v1/book_users')




@app.route('/')
def index():
    return app.send_static_file('index.html')

@app.errorhandler(404)
def not_found(e):
    return app.send_static_file('index.html')    

# Run the app when the program starts!
if __name__ == '__main__':
    models.initialize()
    app.run(debug=DEBUG, port=PORT)