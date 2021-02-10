# ERD
<img src= "Project-4-ERD.svg" >

# USER STORIES

This is an app where the user will upload information about books they have read. 

### Routes and Models

| CRUD VERB      | ROUTE           | FUNCTION                               |
| :------------ |:---------------:| ---------------------------------------:|    
| GET           | /               | HOME PAGE                               |
| GET           | /AUTH/LOGIN     | LOGIN PAGE                              | 
| POST          | /AUTH/LOGIN     | SIGN IN  EXISTING USER                  |
| GET           | /AUTH/SIGNUP    | SIGN UP PAGE                            |
| POST          | /AUTH/LOGOUT    | LOG OUT USER                            |
| GET           | /PROFILE        | SHOWS LOGGED IN USER AND BOOKS          |
| POST          | /BOOK           | PAGE WITH FORM TO ENTER IN NEW BOOK     |
| GET           | /BOOK/:ID       | SHOWS A FAVORITED BOOK & INFO           |
| DELETE        | /BOOK/:ID       | REMOVES CHARACTER FROM DATABASE         |
| PUT           | /BOOK/:ID       | ALLOWS USER TO UPDATE BOOK INFO         |    