import React, { useState, useEffect } from 'react';

import { app, provider } from '../firebaseConfig'; 
import { getAuth, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import './user.css';



const User = () => {
    const [user, setUser] = useState(null);
    const auth = getAuth(app);
  
    useEffect(() => {
      // Bắt sự kiện người dùng đăng nhập
      const unsubscribe = onAuthStateChanged(auth, currentUser => {
        setUser(currentUser);
      });
  
      // Hủy đăng ký sự kiện khi component bị hủy
      return () => unsubscribe();
    }, [auth]);
  
    const handleLogin = async () => {
      try {
        // Đăng nhập bằng Google
        await signInWithPopup(auth, provider);
      } catch (error) {
        console.error(error);
      }
    };
  
    const handleLogout = async () => {
      try {
        // Đăng xuất
        await signOut(auth);
      } catch (error) {
        console.error(error);
      }
    };
  
    return (
      <div className="user-container">
        {user ? (
          <div>
            <p>Tên người dùng: {user.displayName}</p>
            <p>Email: {user.email}</p>
            <button onClick={handleLogout}>Đăng xuất</button>
          </div>
        ) : (
          <button onClick={handleLogin}>Đăng nhập bằng Google</button>
        )}
      </div>
    );
  };
  
  export default User;