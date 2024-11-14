# Shopping List React Native App

A simple mobile application built with React Native for managing shopping lists, featuring Firebase authentication and Firestore database integration for real-time data syncing. The app allows users to add, view, and cache shopping lists while working offline.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Development Environment](#development-environment)
- [Usage](#usage)
- [Components](#components)
- [Packages](#packages)

---

## Technologies Used

- **`React Native`** - Framework for building native mobile apps using JavaScript and React.

- **`Firebase`** - Backend as a service providing authentication (Firebase Auth) and Firestore (real-time database) functionalities.
- **`React Navigation`** - A library for navigating between different screens in the app.
- **`AsyncStorage`** - A simple, unencrypted, persistent key-value storage system to cache data on the device.
- **`NetInfo`** - A React Native library to manage network status.

---

## Development Environment

### Prerequisites

- **`Node.js`** installed on your machine.

- **`Expo CLI`** installed globally (`npm install -g expo-cli`).
- **`Firebase Account`**: For setting up Firestore, Authentication and Cloud Storage.
- **`Android Studio`**: To run the app on an Android emulator
- **`Xcode`** (macOS only): To run the app on an iOS simulator
- **`Expo Go`** To run the app on an physical device (installed on device)

### Installation

To set up the project locally, follow these steps:

#### 1. Clone this repository:

```bash
git clone https://github.com/TK1893/shopping-list.git
```

#### 2. Navigate to the project directory:

```bash
cd shopping-list
```

#### 3. Install the dependencies using npm or yarn:

```bash
npm install
```

#### 4. Run the app on a simulator or device:

Ensure that you have set up the necessary development environment for React Native. You can follow the official React Native documentation for more information.

---

## Usage

Upon launching the app, the user will be greeted with a "Welcome" screen. They can sign in anonymously via Firebase Authentication. Once signed in, they will be redirected to the "ShoppingLists" screen, where they can create, view, and store shopping lists. If the app detects a loss of internet connection, it will disable Firestore network access and load cached data using AsyncStorage. Once the connection is restored, the app will sync the data with Firebase Firestore.

---

## Components

### `App.js`

- **`Purpose`**

  - Manages navigation and Firebase initialization.
  - It uses React Navigation to switch between the "Welcome" and "ShoppingLists" screens.

- **`Key Functionalities`**
  - Firebase initialization.
  - Network status monitoring using `useNetInfo`.
  - Alerts the user when the app is offline and disables Firestore network access.

### `ShoppingLists.js`

- **`Purpose`** - Displays shopping lists and allows users to add items to a list.
- **`Key Functionalities`**
  - Real-time data syncing with Firestore using `onSnapshot`.
  - Cached shopping lists using `AsyncStorage` for offline use.
  - Allows adding new shopping lists to Firestore.
  - Shows lists in a `FlatList` component.

### `Welcome.js`

- **`Purpose`** - Displays the welcome screen and allows users to sign in anonymously via Firebase Authentication.
- **`Key Functionalities`**
  - Initiates Firebase Anonymous Authentication.
  - Navigates to the "ShoppingLists" screen after successful sign-in.

---

## Packages

- **`@react-navigation/native`** - React Navigation library for handling screen transitions.
- **`@react-navigation/native-stack`** - Native stack navigator for React Navigation.
- **`firebase`** - Firebase SDK for authentication and Firestore integration.
- **`@react-native-community/netinfo`** - Library to monitor network status in a React Native app.
- **`@react-native-async-storage/async-storage`** - Local storage library for saving and retrieving data.
- **`react-native`** - Core React Native library.
- **`react-native-gesture-handler`** - Gesture handling library for better user experience in React Native.

---

## Contributing

If you'd like to contribute to this project, feel free to fork the repository and submit a pull request. Make sure to follow standard coding practices and write clear commit messages.

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature-name`).
3.  Make your changes.
4.  Commit your changes (`git commit -am 'Add feature'`).
5.  Push to your branch (`git push origin feature-name`).
6.  Submit a pull request.

---

## License

This project is open-source under the MIT License.

---

## Author

Developed by [Tobias Kraft](https://tk1893.github.io/tk-portfolio/).
