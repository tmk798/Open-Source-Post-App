# Social Media Web Application 🖥️🌐

A simple social media platform built using Node.js, Express, MongoDB, and EJS. This open-source application allows users to register, login, create posts, like posts, edit posts, and delete posts. Additionally, users can manage their profile and posts, with support for storing and displaying images. 📸

## Features 🚀

- **User Authentication 🔐**: Users can register and login using email and password. Passwords are hashed and stored securely.
- **Create Posts 📝**: Users can create posts with text content and optional images.
- **Like Posts ❤️**: Users can like or unlike posts created by others.
- **Edit and Delete Posts ✏️❌**: Users can edit or delete their own posts.
- **User Profile 👤**: A profile page displaying the user's information and their posts.
- **Responsive UI 📱💻**: The app uses EJS templates for dynamic content rendering.

## Tech Stack 💻

- **Node.js**: Backend server.
- **Express**: Web framework for routing and middleware.
- **MongoDB**: NoSQL database for storing user data and posts.
- **EJS**: Templating engine for rendering dynamic HTML pages.
- **JWT**: JSON Web Tokens for user authentication.
- **Bcrypt**: Password hashing for secure authentication.
- **Cookie Parser**: Middleware for parsing cookies.
- **Tailwind CSS**: Utility-first CSS framework for responsive design.

## Setup ⚙️

### Prerequisites 📋

- Node.js (>=12.0.0)
- MongoDB (Local or Cloud-based MongoDB instance)

### Installation 🛠️

1. **Clone the Repository**:

   ```bash
   git clone <repository-url>
   cd <project-directory>
2. Install Dependencies:

bash
Copy
Edit
npm install
Setup MongoDB:

Make sure MongoDB is running locally, or use a cloud-based instance.

3. Create a .env file to store sensitive information like MongoDB connection string (optional).

Start the Server:

bash
Copy
Edit
npm start
Access the Application:

4. Open your browser and visit http://localhost:3000. 🌐

5. Routes 📍
GET /: Homepage (Index).

GET /login: Login page.

GET /profile: User profile page (requires login).

GET /like/:id: Like or unlike a post (requires login).

GET /edit/:id: Edit a post (requires login).

GET /delete/:id: Delete a post (requires login).

GET /logout: Logout the user.

POST /login: Submit login credentials.

POST /register: Submit registration form.

POST /post: Submit a new post.

POST /update/:id: Update an existing post.

6. Middlewares 🛡️
isLoggedIn: A middleware that checks if the user is logged in by verifying the JWT token. If not, the user is redirected to the login page.

7. Database Models 🗃️
User Model (models/user.js)
email: User's email (unique).

password: Hashed password.

username: User's chosen username.

name: User's full name.

age: User's age.

posts: An array of post IDs created by the user.

Post Model (models/post.js)
content: The text content of the post.

image: Optional image URL.

likes: Array of user IDs who liked the post.

user: Reference to the user who created the post (user ID).

Deployment 📤
Environment Variables: Set your environment variables for production deployment. For example, store the MongoDB connection string and JWT secret.

Deploy to Any Hosting Platform: This project can be deployed to any platform that supports Node.js. Some popular platforms for hosting include:

Heroku: 🚀

Create a Procfile with the following content:

bash
CopySocial Media Web Application 🖥️🌐
1. Description
A simple social media platform built using Node.js, Express, MongoDB, and EJS. This open-source application allows users to register, login, create posts, like posts, edit posts, and delete posts.

2. Features 🚀
User Authentication 🔐

Create Posts 📝

Like Posts ❤️

Edit/Delete Posts ✏️❌

User Profile 👤

Responsive UI 📱💻

3. Tech Stack 💻
Backend: Node.js, Express

Database: MongoDB

Frontend: EJS, Tailwind CSS

Auth: JWT, Bcrypt

4. Setup ⚙️
4.1 Prerequisites 📋
Node.js (≥12.0.0)

MongoDB (local or cloud)

4.2 Installation 🛠️
Clone the repository:

bash
git clone <repository-url>
cd <project-directory>
Install dependencies:

bash
npm install
Set up environment variables (create .env file):

MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
Start the server:

bash
npm start
Access at: http://localhost:3000

5. Routes 📍
Method	Path	Description
GET	/	Homepage
GET	/login	Login page
POST	/login	Process login
POST	/register	Process registration
GET	/profile	User profile (protected)
POST	/post	Create new post
GET	/like/:id	Like/unlike post
GET	/edit/:id	Edit post form
POST	/update/:id	Update post
GET	/delete/:id	Delete post
GET	/logout	Logout user
6. Database Models 🗃️
6.1 User Model
email (unique)

password (hashed)

username

name

age

posts (array of post IDs)

6.2 Post Model
content

image (optional)

likes (array of user IDs)

user (creator reference)

7. Deployment 📤
7.1 Heroku
Create Procfile:

bash
web: node app.js
Push to Heroku:

bash
git push heroku master
7.2 Other Platforms
Vercel/Netlify: Supports Node.js backends

AWS/DigitalOcean: For more control

8. License 📜
Your GitHub repository currently doesn't have a license. To add one:

Go to your GitHub repo

Click "Add file" → "Create new file"

Name it LICENSE

Click "Choose a license template"

Select one (recommended: MIT License for open-source)

Commit the file

Popular options:

MIT: Permissive, allows commercial use

GPL: Requires open-sourcing derivative works

Apache 2.0: Permissive with patent protection

9. Contributing 🤝
Fork the repository

Create your feature branch

Commit your changes

Push to the branch

Open a pull request

Guidelines:

Follow existing code style

Write clear commit messages

Document new features

Add tests when applicable


Edit
web: node app.js
Push the repository to Heroku:

bash
Copy
Edit
git push heroku master
Access your application via the URL provided by Heroku.

Vercel or Netlify: 🌍

You can also deploy to platforms like Vercel or Netlify, which support Node.js backends.

DigitalOcean or AWS: ☁️

For more control and scalability, you can deploy to services like DigitalOcean or AWS EC2.

Access in Production: After deployment, access the application using the URL provided by your hosting service. 🌍

Contributing 🤝
Since this is an open-source project, feel free to contribute! If you would like to contribute, please fork the repository, make changes, and submit a pull request. Make sure to follow these guidelines:

Ensure your code is well-documented.

Write tests for new features.

Follow the existing code style and structure.
