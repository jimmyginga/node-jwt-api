# Node simple API with Mongodb

## Description
API made with node and mongodb, using jwt authentication.
First of all, you need to have node, npm and mondodb installed on your local machine to continue.

## Configuring project
Let's go ;-)

### Downloading and install node and npm
To download and install go to [nodejs docs](https://nodejs.org/en/download/`) and follow the stepps.
This project was made using node 14.17.0, please check the node version in case of incompatibility.
### Downloading and install mondogb
To download and install mongodb go to [MongoDB Download](https://www.mongodb.com/try/download/community`) docs and follow the stepps.

### Downloading the project
Open your terminal in some folder for project and type:
~~~bash
git clone https://github.com/jimmyginga/node-jwt-api.git .
~~~

### Installing dependences
To install the dependencies execute in the project folder terminal the following command:
~~~bash
npm install
~~~

if its done, you can run the server using:
~~~bash
npm start
~~~
the server will run on 3003 port.

## Routes test 
The API base URL for locall machine is http://localhost:3003/api

#### User endpoints

*  List user [/user] - GET
``http://localhost:3003/api/user`` <br/>

return an array with users registed
___

* Create user [/user/register] - POST <br/>
``http://localhost:3003/api/user`` <br/>
The resquest data required are name, email and password.
eg.: 
~~~js
{
	"name":"Jimi Nginga",
	"mail": "jimi@gmail.com",
	"password":"123456"
}
~~~
return an user created
___
* List a single user by ID [/user/:id] - GET <br/>
**id** is the user id inside database
``http://localhost:3003/api/user/:id``
e.g: ``http://localhost:3003/api/user/617434caac776ee3921ef701`` <br/>

return the user which the id belongs to
___
* Update user by ID [/user/:id] - PUT <br/>
**id** is the user id inside database<br/>
``http://localhost:3003/api/user/:id`` <br/>
e.g: ``http://localhost:3003/api/user/617434caac776ee3921ef701``<br/>

return the user updated
___
* Delete user by ID [/user/:id] - DELETE <br/>
**id** is the user id inside database
``http://localhost:3003/api/user/:id`` <br/>
e.g: ``http://localhost:3003/api/user/617434caac776ee3921ef701``<br/>

return a success message
___
* User **Login** [user/login] - POST <br/>
The resquest data required are mail and password. <br/>
eg.: 
~~~js
{
	"mail":"jimi@gmail.com",
	"password":"123456"
}
~~~
return user data (name, mail and session token)


#### Posts endpoints

*  List post [/posts] - GET <br/>
``http://localhost:3003/api/posts``<br/>

return an array with posts registred
___

**Note: the routes below need a user token to work**
* Create post [/posts/] - POST<br/>
``http://localhost:3003/api/posts``<br/>
The resquest data required are title and text.<br/>
**Require a valid user token, make user login get it**<br/>
eg.: 
~~~js
{
    "title":"Post title",
    "text": "Post content comes here!"
}
~~~
return a created post
___
*  List a single post by ID [/posts/:postID] - GET<br/>
**id** is the posts id inside database<br/>
``http://localhost:3003/api/posts/:postid``<br/>
e.g: ``http://localhost:3003/api/posts/617434caac776ee3921ef701``<br/>
**Require a valid user token, make user login get it** <br/>
return the post which the id belongs to<br/>
___
* Update posts by ID [/posts/:id] - PUT<br/>
**id** is the post id inside database <br/>
``http://localhost:3003/api/posts/:id``<br/>
e.g: ``http://localhost:3003/api/posts/617434caac776ee3921ef701``<br/>
**Require a valid user token, make user login get it**<br/>

The resquest data required are email and password.<br/>
eg.: 
~~~js
{
    "title":"Post title",
    "text": "Post content comes here!"
}
~~~
 
 return the post updated
___
* Delete post by ID [/posts/:id] - DELETE <br/>
**id** is the post id inside database <br/>
``http://localhost:3003/api/posts/:id`` <br/>
e.g: ``http://localhost:3003/api/posts/617434caac776ee3921ef701`` <br/>
**Require a valid user token, make user login get it**

return a ssuccess message

