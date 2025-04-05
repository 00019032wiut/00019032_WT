
# Book Review App  
  
## Overview  
Book Review App is a simple web application that allows users to create, read, update, and delete book reviews. Built with Express.js and Pug, this application demonstrates basic CRUD functionality with a modern, user-friendly interface.  
  
## Features  
- **Create Reviews:** Submit a new book review including title, author, genre, and review text.  
- **View Reviews:** Browse a list of all submitted book reviews.  
- **Review Details:** View the full content of a selected review.  
- **Edit Reviews:** Update an existing review.  
- **Delete Reviews:** Remove reviews that you no longer wish to display.  
  
## Project Structure  
```  
Book-Review-App/  
├── app.js  
├── package.json  
├── package-lock.json  
├── /public  
│  └── index.css  
├── /routes  
│  ├── index.js  
│  └── reviews.js  
├── /controllers  
│  └── reviewsController.js  
├── /views  
│  ├── layout.pug  
│  ├── home.pug  
│  ├── newReview.pug  
│  ├── reviewDetail.pug  
│  └── editReview.pug  
└── /data  
└── reviews.json  
```  
  
## Installation  
1. Clone the Repository  
```bash  
git clone https://github.com/yourusername/book-review-app.git  
cd book-review-app  
```  
  
2. Install Dependencies  
```bash  
npm install  
```  
  
3. Run the Application  
```bash  
node app.js  
```  
  
4. Open in Browser  
Go to `http://localhost:3000`  
  
## Usage  
- Home Page: Displays a list of all book reviews.  
- New Review: Click the "New Review" link to add a new book review.  
- Review Details: Click on a review title to see its detailed content.  
- Edit and Delete: Use the provided options to update or remove a review.  
  
## Dependencies  
- [Express.js](https://expressjs.com/)  
- [Pug](https://pugjs.org/)  
  

  
## Acknowledgements  
This project was developed for educational purposes to demonstrate basic web development skills using Node.js, Express, and Pug.  
