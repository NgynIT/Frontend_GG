import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom'; // Thêm dòng này để sử dụng useNavigate
import './user.css';
import { app, provider } from '../firebaseConfig';  

const User = () => {
    const [user, setUser] = useState(null);
    const auth = getAuth(app);
    let navigate = useNavigate(); // Tạo instance của useNavigate

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, currentUser => {
        setUser(currentUser);
      });

      return () => unsubscribe();
    }, [auth]);

    const handleLogin = async () => {
      try {
        await signInWithPopup(auth, provider);
      } catch (error) {
        console.error(error);
      }
    };

    const handleLogout = async () => {
      try {
        await signOut(auth);
        navigate('/login'); // Thêm dòng này để điều hướng người dùng đến trang đăng nhập
      } catch (error) {
        console.error(error);
      }
    };

    return (
      <div className="user-container">
        {user ? (
          <div>
            <h3>Hello User Welcome to my website!</h3>
            <p>UserName: {user.displayName}</p>
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
