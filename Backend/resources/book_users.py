import models

from flask import Blueprint, jsonify, request
from playhouse.shortcuts import model_to_dict

book_users =Blueprint("book_users", "book_users")

# CREATE A USER DOG 

@book_users.route('/', methods=["POST"])
def create_books():
# Create the book with payload info if current_user exists
    if current_user.id: 
        payload = request.get_json()
        book = models.Book.create(**payload)
        book_dict = model_to_dict(book)

        # breakpoint() # makes you enter the debuggin shell on your terminal 
        #create the r/ship b/w book and user
        book_user_data= {
            "appuser": current_appuser.id,
            "book": book.id
        }
        models.BookUser.create(**book_user_data)
        return jsonify(data=book_dict, status={"code": 201, "message": "Success"})

