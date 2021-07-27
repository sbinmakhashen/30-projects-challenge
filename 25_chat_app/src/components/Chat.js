import React, { useState, useEffect } from 'react';
import SignOut from './SignOut';
import { db } from '../Firebase';
const Chat = () => {
  // const [messages, setMessages] = useState([]);
  // useEffect(() => {
  //   db.collection('messages')
  //     .orderBy('createdAt')
  //     .limit(50)
  //     .onSnapshot((snapShot) => {
  //       setMessages(snapShot.docs.map((doc) => doc.data));
  //     });
  // }, []);
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    db.collection('messages')
      .orderBy('createdAt')
      .limit(50)
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);
  return (
    <div>
      <SignOut />
      {messages.map(({ id, text, photoURL }) => {
        <div key={id}>
          <img src={photoURL} alt='user profile pic' />
          <p>{text}</p>
        </div>;
      })}
    </div>
  );
};

export default Chat;
