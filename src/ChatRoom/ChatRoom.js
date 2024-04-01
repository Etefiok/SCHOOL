import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import 'firebase/compat/auth';
import "./ChatRoom.css"

const firebaseConfig = {
    apiKey: "AIzaSyAAV0GgXE_RHsHo7GkP-OAVOnmWfuX6Bkw",
    authDomain: "schoolchatroom-3454.firebaseapp.com",
    projectId: "schoolchatroom-3454",
    storageBucket: "schoolchatroom-3454.appspot.com",
    messagingSenderId: "391031413508",
    appId: "1:391031413508:web:5bf2881abaf4edc5bd0e51",
    measurementId: "G-6DBB0JNJCK"
  };

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const ChatRoom = ({ currentUser }) => {
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        const messagesRef = firebase.database().ref('messages');
        messagesRef.on('value', (snapshot) => {
            const messages = snapshot.val();
            if (messages) {
                setMessages(Object.values(messages));
            }
        });
    }, []);

    const handleSendMessage = () => {
        if (currentUser && currentUser.displayName) {
            const newMessage = {
                text: inputValue,
                user: currentUser.displayName,
            };
            firebase.database().ref('messages').push(newMessage);
            setInputValue('');
        } else {
            console.error('Current user is undefined or does not have a displayName');
        }
    };

    const handleSignUp = () => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // User signed up successfully
                const user = userCredential.user;
            })
            .catch((error) => {
                // Handle errors
                console.error(error.message);
            });
    };

    const handleSignIn = () => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // User signed in successfully
                const user = userCredential.user;
            })
            .catch((error) => {
                // Handle errors
                console.error(error.message);
            });
    };

    const handleSignOut = () => {
        firebase.auth().signOut()
            .then(() => {
                // User signed out successfully
            })
            .catch((error) => {
                // Handle errors
                console.error(error.message);
            });
    };

    return (
        <div>
            <div style={{ height: '300px', overflowY: 'scroll', border: '1px solid #ccc', padding: '10px', marginBottom: '10px'}}>
                {messages.map((message, index) => (
                    <div key={index} style={{ marginBottom: '10px' }}>
                        <strong>{message.user}:</strong> {message.text}
                    </div>
                ))}
            </div>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={handleSendMessage}>Send</button>

            <div>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                <button onClick={handleSignUp}>Sign Up</button>
                <button onClick={handleSignIn}>Sign In</button>
                <button onClick={handleSignOut}>Sign Out</button>
            </div>
        </div>
    );
};

export default ChatRoom;
