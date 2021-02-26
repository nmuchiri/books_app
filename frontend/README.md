# ERD
<img src= "Project-4-ERD.svg" >

# USER STORIES

This is an app where the user will upload information about books they have read. 
They will be able to delete the book and edit the book information. 


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
| DELETE        | /BOOK/:ID       | REMOVES BOOK FROM DATABASE              |
| PUT           | /BOOK/:ID       | ALLOWS USER TO UPDATE BOOK INFO         |    



### Wireframes

Home Page
<img src="https://www.figma.com/file/bWOo0TEHCPduG1bpUFcyYf/Shameless-Bibliophile?node-id=0%3A1">

Signup/ Login Page
<img src = "https://www.figma.com/file/bWOo0TEHCPduG1bpUFcyYf/Shameless-Bibliophile?node-id=105%3A2">

Add a book page
<img src = "https://www.figma.com/file/bWOo0TEHCPduG1bpUFcyYf/Shameless-Bibliophile?node-id=102%3A10">

Profile
<img src = "https://www.figma.com/file/bWOo0TEHCPduG1bpUFcyYf/Shameless-Bibliophile?node-id=102%3A23">

One Book
<img src = "https://www.figma.com/file/bWOo0TEHCPduG1bpUFcyYf/Shameless-Bibliophile?node-id=103%3A0">



