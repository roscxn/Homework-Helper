# Lend a Helping Brain (Homework Helper)

Students may face some difficulties when doing homework or revision, and need a platform to answer to their queries. It can vary from a simple conceptual question to a challenging word problem. Receiving questions via private messaging applications can be rather intrusive. Tutors can make use of this shared platform to help their students instead. 

"Lend a Helping Brain" is an application that allows users to upload their questions, and also to help other users by providing solutions. 

#### <a href="https://lend-a-helping-brain.cyclic.app/">Access the application here</a>. 

User Id: apr

Password: 345

## Users' Stories

As a user, I want to be able to...
* login and logout.
* view everyone's posts.
* create and view my own posts.
* edit and delete my own posts. 
* create and delete my own comments. 

## Development (Model, Views, Controllers)

### Model 
![image](https://user-images.githubusercontent.com/114375385/225781808-70a213b9-5f24-48d8-91d7-34c7f48c5cee.png)

## CRUD
| HTTP Method | Path / URL | CRUD Operation  | 
| ------------- | ------------- | ------------- |
| GET  | /users/login  | User Login Page |
| GET | /users/logout  | User Logout |
| POST  | /users/login | User Login |
| GET  | /posts | View All Posts Page |
| GET  | /new | Create Post Page |
| POST  | / | Create New Post |
| GET  | /my | View My Posts |
| GET  | /:id | View Specific Post |
| GET  | /:id/edit | Edit Specific Post Page |
| PUT  | /:id | Update/Edit Specific Post |
| DELETE | /:id | Delete Specific Post |
| POST | /posts/:id/comments | Create New Comment |
| DELETE | /posts/:postId/comments/:commentsId | Delete Specific Comment |

## Preview

### Main Page: Users can view all posts here.

![image](https://user-images.githubusercontent.com/114375385/225773900-27e21d59-ff94-4bae-85b8-d77d183b40cf.png)

### View Own Posts: Users can view, edit and delete their posts here.

![image](https://user-images.githubusercontent.com/114375385/225774004-5a722a67-0f7f-4823-a58d-5b8b171ca806.png)

#### Show Individual Post: Users can view specific post, see comments and reply here. 
![image](https://user-images.githubusercontent.com/114375385/225774035-d12d443a-c0d2-4b63-b0d2-f74af75b8ed8.png)

### Upload Post: Users can upload questions here.
![image](https://user-images.githubusercontent.com/114375385/225774223-59972e86-f59a-479c-b405-7a4e7c5f5ce7.png)

## Technologies Used
* GitHub 
* Cyclic 
* MongoDB 
* Express 
* Bcrypt
* Mongoose
* Method Override
* Node.js
* EJS Partial Templates
* CSS
* Javascript

* Images by pch.vector on Freepik

## Future Enhancements
* Search Bar
* Filter posts by categories
* Edit function for comments
* Sign up page for new users

