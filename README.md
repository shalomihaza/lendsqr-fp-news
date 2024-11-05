This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

# Lendsqr FP News React Native Application

## Overview

Lendsqr FP News is a React Native application that allows users to browse and read news articles. The app integrates with RapidAPI for fetching news data and uses Google Sign-In for authentication.

## Features

- Browse latest news articles
- View detailed information about each news article
- User authentication with Google Sign-In
- Two-step sign-up process
- Redux-based state management
- CodePush for Over-the-air updates

## Technologies Used

- React Native
- Redux Toolkit (for state management)
- React Navigation (for navigation between screens)
- Axios (for API requests)
- Firebase Authentication
- Google Sign-In
- Microsoft CodePush

## Installation

1. Clone the repository:

   ```
   git clone https://github.com/yourusername/FPNews.git
   cd FPNews
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Set up Firebase project and add your configuration to the app.

4. Configure Google Sign-In in the Firebase Console.

5. Create a `.env` file in the root of your project, then install and configure `react-native-dotenv`

6. Add your RapidAPI key, CodePushDeployment key and Google Web Client Id to the `.env` file.

7. Run the app:
   - For iOS: `npx react-native run-ios`
   - For Android: `npx react-native run-android`

## Usage

1. Launch the app on your device or emulator.
2. Sign in using your Google account or create a new account.
3. Browse the list of news articles on the home screen.
4. Tap on an article to view its details.

## Key Components

1. **NewsList**: Displays a scrollable list of news articles.
2. **NewsDetail**: Shows full details of a selected news article.
3. **SignUp & SignUpWithGoogle**: Implements a two-step sign-up process.
4. **Login**: Provides options for Google Sign-In and navigation to the sign-up process.

## State Management

- Uses Redux Toolkit for efficient state management.
- `newsSlice` manages the fetching and storing of news articles.
- `authSlice` handles user authentication state.

## API Integration

- Integrated RapidAPI using Axios.
- API key is stored securely and not exposed in the client-side code.
- Implemented error handling for API requests.

## Authentication Flow

1. User can sign in or sign up using Google authentication.
2. On successful authentication, user is redirected to the NewsList Screen.
3. Authentication state is managed in Redux, allowing for persistent sessions.
