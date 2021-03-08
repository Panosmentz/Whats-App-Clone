# Whats App Clone
> This is a Full Stack Whats App clone using [Firebase]( https://firebase.google.com/).

## Table of contents
* [Overview](#overview)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Live-Demo](#live-demo)
* [Contact](#contact)

## Overview
> This is a React App where users can sign up, sign in and get password reset links sent to their email address. Once logged in, users can join Chat rooms and create new rooms. Authentication is implemented with Firebase Authentication and data storage with Cloud Firestore. Form validation is done with the use of Formik and Yup.

## Screenshots
![LandingPage](https://github.com/Panosmentz/Projects-Screenshots/blob/master/WhatsAppClone%20screenshots/landing.PNG)
![signin](https://github.com/Panosmentz/Projects-Screenshots/blob/master/WhatsAppClone%20screenshots/signin.PNG)
![signup](https://github.com/Panosmentz/Projects-Screenshots/blob/master/WhatsAppClone%20screenshots/signup.PNG)
![forgotpwd](https://github.com/Panosmentz/Projects-Screenshots/blob/master/WhatsAppClone%20screenshots/forgotpwd.PNG)
![contact](https://github.com/Panosmentz/Projects-Screenshots/blob/master/WhatsAppClone%20screenshots/contact.PNG)
![suclogin](https://github.com/Panosmentz/Projects-Screenshots/blob/master/WhatsAppClone%20screenshots/suclogin.PNG)
![chat](https://github.com/Panosmentz/Projects-Screenshots/blob/master/WhatsAppClone%20screenshots/chat.PNG)
## Technologies
* ReactJS
* Material UI
* Firebase
* EmailJS
* Formik - yup

## Setup
Clone this repository or download .zip and open the folder in your editor.
>Open a cmd and install the dependencies on the root folder 
>`npm install`

**Setting up Firebase**

Create a new project on Firebase and copy the config data

On the project root folder, create a new file called .env.local

Your .env.local file should look like this :

REACT_APP_FIREBASE_API_KEY=loremipsum

REACT_APP_FIREBASE_AUTH_DOMAIN=loremipsum

REACT_APP_FIREBASE_DATABASE_URL=loremipsum

REACT_APP_FIREBASE_PROJECT_ID=loremipsum

REACT_APP_FIREBASE_STORAGE_BUCKET=loremipsum

REACT_APP_FIREBASE_MESSAGING_SENDER_ID=loremipsum

REACT_APP_FIREBASE_APP_ID=loremipsum

REACT_APP_FIREBASE_MEASUREMENT_ID=loremipsum

Where loremipsum is the data from your Firebase project

Run `npm start`

## Live-Demo
[Live Demo]( https://youthful-haibt-148fc8.netlify.app/)

## Contact
Created by [@Panagiotis Mentzelopoulos](https://determined-saha-b25d49.netlify.app/) - feel free to contact me!
