import models
from flask import Blueprint, jsonify, request
from playhouse.shortcuts import model_to_dict
from flask_bcrypt import generate_password_hash, check_password_hash
from flask_login import login_user, logout_user, current_user

appusers =Blueprint ("appusers", "appusers")

## CREATE USER ROUTE
@appusers.route ('/register', methods=["POST"])
def register():
    payload= request.get_json()
    payload['email'].lower()

    try:
        # does the user already exist/ is the username taken? 
        models.AppUser.get(models.AppUser.email == payload['email'])
        return jsonify( data={}, status= {"code": 401, "message": "A user with that email already exists." })
    except models.DoesNotExist:
        # if the user doesn not already exist.....create a user
        payload['password']= generate_password_hash(payload['password'])
        appuser= models.AppUser.create(**payload)

        login_user(appuser)
        print('!!!!!!!!!!!!!!!!!!!!!!!!!!')
        appuser_dict= model_to_dict(appuser)
       
        del appuser_dict['password'] # remove password from the dictionary so we don't expose it in the response
        print(appuser_dict)
         
        return jsonify(data= appuser_dict, status ={"code": 201, "message": "Successfully registered"})

## LOG-IN ROUTE

@appusers.route('/login', methods=["POST"])
def login():
    payload = request.get_json()
    payload['email'].lower()
    try:
        # see if user is registered
        appuser = models.AppUser.get(models.AppUser.email == payload['email'])
        print("!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
        print(appuser)
        appuser_dict = model_to_dict(appuser)
        # check_password_hash(hashed_pw_from_db, unhashed_pw_from_payload)
        if(check_password_hash(appuser_dict['password'], payload['password'])):
            del appuser_dict['password'] # delete hashed pw, unnecessary & unsafe
            login_user(appuser) # start session
            return jsonify(data=appuser_dict, status={"code": 200, "message": "Success"})
        else:
            return jsonify(data={}, status={"code": 401, "message": "Username or password is incorrect"})
    except models.DoesNotExist:
        return jsonify(data={}, status={"code": 401, "message": "Username or password is incorrect"})


#### LOG-OUT ROUTE

@appusers.route('/logout', methods= ["GET", "POST"])
def logout():
    logout_user()
    return jsonify(data={}, status={"code":200, "message": "Sucessfully logged out"})
    


