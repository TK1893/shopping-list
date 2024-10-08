// import react Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// Import Firebase
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// import the screens
import ShoppingLists from './components/ShoppingLists';
import Welcome from './components/Welcome';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Create the navigator
const Stack = createNativeStackNavigator();

const App = () => {
  const firebaseConfig = {
    apiKey: 'AIzaSyAR2iHygEbKEhm7r2kG06OhNA1yvM5ckBI',
    authDomain: 'shopping-list-b2302.firebaseapp.com',
    projectId: 'shopping-list-b2302',
    storageBucket: 'shopping-list-b2302.appspot.com',
    messagingSenderId: '835975181328',
    appId: '1:835975181328:web:ca0eaa6cc29904c1b38695',
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // Initialize Cloud Firestore and get a reference to the service
  const db = getFirestore(app);

  // Initialize Auth with AsyncStorage persistence
  const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
  });

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome">
          {(props) => <Welcome auth={auth} {...props} />}
        </Stack.Screen>
        <Stack.Screen name="ShoppingLists">
          {(props) => <ShoppingLists db={db} {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
