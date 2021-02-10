import models

from flask import Blueprint, jsonify, request
from playhouse.shortcuts import model_to_dict
# first argument is blueprints name
# second argument is it's import_name
# The third argument is the url_prefix so we don't have
# to prefix all our apis with /api/v1
books = Blueprint('books', 'books')
@books.route('/', methods=["GET"])
def get_all_books():
    ## find the books and change each one to a dictionary into a new array
    try:
        books = [model_to_dict(book) for book in models.Book.select()]
        return jsonify(data=books, status={"code": 200, "message": "Success"})
    except models.DoesNotExist:
        return jsonify(data={}, status={"code": 404, "message": "Error getting the resources"})


@books.route('/', methods=["POST"])
def create_books():
    ## see request payload anagolous to req.body in express
    payload = request.get_json()
    book = models.Book.create(**payload)
    ## see the object
    # print(book.__dict__)
    ## Look at all the methods
    # print(dir(book))
    # Change the model to a dict
    # print(model_to_dict(book, 'model to dict')
    book_dict = model_to_dict(book)
    return jsonify(data=book_dict, status={"code": 201, "message": "Success"})


@books.route('/<book_id>', methods=["GET"])
def get_book(book_id):
    try:
        book = models.Book.get_by_id(book_id)
        book_dict = model_to_dict(book)
        return jsonify(data=book_dict, status={"code": 200, "message": "Success"})
    except models.DoesNotExist:
        return jsonify(data={}, status={"code": 404,\
                                        "message": "Error getting the resources"})


@books.route('/<book_id>', methods=["PUT"])
def update_book(book_id):
    try:
        payload = request.get_json()
        query = models.Book.update(**payload).where(models.Book.id==book_id)
        query.execute()
        updated_book = model_to_dict(models.Book.get_by_id(book_id))
        return jsonify(data=updated_book, status={"code": 200, "message": "Successfully updated"})
    except models.DoesNotExist:
        return jsonify(data={}, status={"code": 404,\
                                        "message": "Error getting the resources"})
@books.route('/<book_id>', methods=["Delete"])
def delete_book(book_id):
    book_to_delete = models.Book.get_by_id(book_id)
    book_to_delete.delete_instance()
    return jsonify(data={}, status={"code": 200, "message": "Resource successfully deleted"})