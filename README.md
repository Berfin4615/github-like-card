# Angular Firebase Project

This project is an Angular application integrated with Firebase for authentication and real-time database functionality. It includes components for a GitHub-like card display, a login page with Firebase authentication, and a home page with logout functionality.

## Table of Contents

1. [Installation](#installation)
2. [Running the Project](#running-the-project)
3. [Deployment](#deployment)
4. [Mobile Responsiveness](#mobile-responsiveness)

## Installation

To get started with this project, follow these steps:

1. **Clone the repository:**

   ```
   git clone <repository-url>
   cd angular-firebase-project
   ```

2. **Install dependencies:**

   ```
   npm install
   ```

3. **Firebase Configuration:**

   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
   - Obtain your Firebase configuration details (apiKey, authDomain, databaseURL, projectId, storageBucket, messagingSenderId, appId) from Firebase project settings.
   - Replace the Firebase configuration in `src/environments/environment.ts` and `app/app.config.ts` with your Firebase project configuration.

4. **Setup Firebase Authentication:**

   - Enable Email/Password sign-in method in Firebase Authentication.
   - Optionally, enable other sign-in methods as needed.

## Running the Project

Once you have installed the dependencies and configured Firebase, you can run the project locally.

1. **Development server:**

   Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

2. **Login Page:**

   Navigate to `http://localhost:4200/login` to access the login page. Here, you can sign in using your Firebase authentication methods.

3. **Home Page:**

   After successful login, navigate to `http://localhost:4200/home`. Here, you can see a logout button which logs out the current user.

## Deployment

To deploy the Angular Firebase project, follow these steps:

1. **Build the project:**

   Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

2. **Deploy to Firebase Hosting:**

   - Install Firebase CLI globally if not already installed:
     ```
     npm install -g firebase-tools
     ```
   
   - Login to Firebase:
     ```
     firebase login
     ```
   
   - Initialize Firebase project (if not already done):
     ```
     firebase init
     ```
     Choose Firebase features including Hosting.

   - Deploy to Firebase:
     ```
     firebase deploy
     ```
     Follow the instructions to deploy to Firebase Hosting.

3. **Access deployed app:**

   Once deployed, your app will be accessible at the URL provided by Firebase Hosting.

## Mobile Responsiveness

This project is designed with mobile responsiveness in mind. The Tailwind components used are responsive by default, ensuring a consistent user experience across different devices and screen sizes.
