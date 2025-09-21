# QuizWhizzz – React Quiz Application

## 🎯 Overview

QuizWhizzz is an engaging React-based quiz application that allows users to test their knowledge across various categories and difficulty levels. The app fetches questions from the [Open Trivia Database](https://opentdb.com/api.php) and provides an interactive user interface for a seamless quiz experience.

## 🚀 Live Demo

Experience the quiz application live here:  
👉 [https://quizwhizzz.netlify.app/](https://quizwhizzz.netlify.app/)

## 🧪 API Endpoint

The application retrieves quiz questions using the following API:

https://opentdb.com/api.php?amount=10${category
 && &category=${category}}${difficulty && &difficulty=${difficulty}}&type=multiple


This endpoint allows dynamic fetching of 10 multiple-choice questions based on the selected category and difficulty level.

## 🛠️ Features

- **Dynamic Question Fetching**: Retrieve questions based on user-selected category and difficulty.
- **User-Friendly Interface**: Intuitive design for a seamless quiz-taking experience.
- **Real-Time Scoring**: Instant feedback on answers with a final score summary.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## 🔧 Technologies Used

- **Frontend**: React.js  
- **Routing**: React Router DOM  
- **State Management**: React Hooks (`useState`, `useEffect`)  
- **Styling**: CSS  
- **API**: Open Trivia Database

## 📥 Installation

To run the project locally:

Clone the repository:

   ```bash
   git clone https://github.com/limited-manan/Quiz-Application_React.git
