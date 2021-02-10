from peewee import *
import datetime
from flask_login import UserMixin

DATABASE= PostgresqlDatabase('books_app', host='localhost', port=5432)

class BaseModel(Model):
    class Meta:
        database= DATABASE

class AppUser(UserMixin, BaseModel):
    username= CharField(unique= True)
    email= CharField(unique= True)
    password= CharField()

    # class Meta:
    #     database=DATABASE # this creates the relationship between the model and the database

class Book(BaseModel): ## model is a library from peewee 
    title= CharField()
    author= CharField()
    genre=CharField()
    created_at= DateTimeField(default= datetime.datetime.now)

    # class Meta:
    #     database=DATABASE


class BookUser(BaseModel): ## this creates a relationship between the user model and the dog model
    appuser: ForeignKeyField(AppUser, backref= 'story')
    books: ForeignKeyField(Book, backref= 'nerd')

#     # class Meta:
#     #     database=DATABASE


def initialize(): ## the function that links you to the database 
    DATABASE.connect()
    DATABASE.create_tables([Book, AppUser, BookUser],safe=True)
    print("TABLES Created")
    DATABASE.close()  



