// src/App.js
import React, { useState, useEffect } from 'react';
import { auth, database } from './firebase.js';
import { ref, set, get } from 'firebase/database';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const signIn = async () => {
    try {
      // Add your authentication logic here
      console.log('Sign In Clicked');
    } catch (error) {
      console.error('Sign-in error:', error);
    }
  };

  const signOut = async () => {
    try {
      // Add your sign-out logic here
      console.log('Sign Out Clicked');
    } catch (error) {
      console.error('Sign-out error:', error);
    }
  };

  const writeData = async () => {
    try {
      const userRef = ref(database, `users/`);
      await set(userRef, {
        username: 'username',
        email: 'email',
      });

    } catch (error) {
      console.error('Error writing data:', error);
    }
  };

  const readData = async () => {
    try {
      const userRef = ref(database, `users/`);
        const snapshot = await get(userRef);
        const userData = snapshot.val();
        console.log(userData);
    } catch (error) {
      console.error('Error reading data:', error);
    }
  };

  return (
    <div>
      <h1>Firebase React App</h1>
      {user ? (
        <p>Welcome, {user.displayName || user.email}!</p>
      ) : (
        <p>Please sign in.</p>
      )}
      <button onClick={signIn}>Sign In</button>
      <button onClick={signOut}>Sign Out</button>
      <button onClick={writeData}>Write Data</button>
      <button onClick={readData}>Read Data</button>
    </div>
  );
}

export default App;
