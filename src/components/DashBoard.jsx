import React, { useEffect, useState } from 'react';
import './DashBoard.css';
import logo from './img/logo-bao-moi.png';

import img from './img/img.jpg';
import img1 from './img/img1.jpg';
import img2 from './img/img2.jpg';
import img3 from './img/img3.jpg';
import img4 from './img/img4.jpg';
import img6 from './img/img6.jpg';
import img7 from './img/img7.jpg';

import { fetchUserById } from './../features/apiSave/recallApiLoading';
import { useSelector, useDispatch } from 'react-redux';
import firebase from 'firebase/compat/app'; // Import firebase
import 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyDWmx6mkXkLxdqrN-we0zFv1QOrKkrqrZ4",
  authDomain: "ngynit-72054.firebaseapp.com",
  projectId: "ngynit-72054",
  storageBucket: "ngynit-72054.appspot.com",
  messagingSenderId: "1044035795487",
  appId: "1:1044035795487:web:8e908bd0b6fb4c1546f32a",
  measurementId: "G-3YQQER0TX6"
};
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}


export const DashBoard = () => {
  const dispatch = useDispatch();
  const count = useSelector(state => state.counter.value);
  const name = useSelector(state => state.counter.name);
  const [test, setTest] = useState(false);

  useEffect(() => {
    if (test) {
      dispatch(fetchUserById());
    }
  }, [test, dispatch]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % carouselData.length);
    }, 1000); // Rotate every 1 second
    return () => clearInterval(interval);
  }, []);

  // Firebase Firestore
  const firestore = firebase.firestore();

  // API news

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMenu, setSelectedMenu] = useState('business');
  const [searchResults, setSearchResults] = useState([]);
  const [menuArticles, setMenuArticles] = useState([]);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    dispatch(fetchUserById());
  }, [dispatch]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=c4c588b1848f44c8a6f61487fee4b733`);
        if (response.ok) {
          const data = await response.json();
          setArticles(data.articles);
        } else {
          console.error('Failed to fetch news');
        }
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  // Search
  
  const handleSearch = async () => {
    if (searchTerm.trim() === '') {
      setSearchResults([]);
      setSelectedMenu('business'); // Reset selected menu to 'business'
      return;
    }
  
    try {
      const snapshot = await firestore.collection('news')
                                      .where('content', '>=', searchTerm)
                                      .where('content', '<=', searchTerm + '\uf8ff')
                                      .get();
  
      const searchResults = snapshot.docs.map(doc => doc.data());
      setSearchResults(searchResults);
    } catch (error) {
      console.error('Error searching news:', error);
    }
  };

  // Menu
  useEffect(() => {
    const fetchMenuArticles = async () => {
      try {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${selectedMenu}&apiKey=c4c588b1848f44c8a6f61487fee4b733`);
        if (response.ok) {
          const data = await response.json();
          setMenuArticles(data.articles);
        } else {
          console.error('Failed to fetch menu articles');
        }
      } catch (error) {
        console.error('Error fetching menu articles:', error);
      }
    };

    fetchMenuArticles();
  }, [selectedMenu]);

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
  };

  // Image
  const images = [img, img1, img2, img3, img4, img6, img7];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 1300); // Set 1.3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <div className='header'>
        <img src={logo} alt="Logo" className="logo" />
        <h1>Welcome to my Website</h1>
      </div>

      <div className='image-container'>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className={index === currentIndex ? 'active' : ''}
            style={{ transform: `translateX(${(index - currentIndex) * 100}%)` }}
          />
        ))}
      </div>

      <div className="container">
        <div className="search">
          <div className="search-input">
            <input type="text" placeholder='Search...' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          </div>
          <div className="search-button">
            <button onClick={handleSearch}>Search</button>
          </div>
        </div>
        <div className="menu">
          <ul>
            <li><a href="#" onClick={() => handleMenuClick('business')}>News</a></li>
            <li><a href="#" onClick={() => handleMenuClick('technology')}>Worlds</a></li>
            <li><a href="#" onClick={() => handleMenuClick('health')}>Kdramas</a></li>
            <li><a href="#" onClick={() => handleMenuClick('science')}>Healths</a></li>
            <li><a href="#" onClick={() => handleMenuClick('sports')}>Educations</a></li>
          </ul>
        </div>
      </div>

      <div className="content">
        <div className="articles">
          {searchResults.length > 0 ? (
            searchResults.map((article, index) => (
              <div key={index} className="article">
                <h2>{article.title}</h2>
                <p>{article.description}</p>
                {article.urlToImage && <img src={article.urlToImage} alt={article.title} className="article-image" />}
                <button className="read-more-button">
                  <a href={article.url} target="_blank" rel="noopener noreferrer" className="read-more">See more</a>
                </button>
              </div>
            ))
          ) : (
            menuArticles.map((article, index) => (
              <div key={index} className="article">
                <h2>{article.title}</h2>
                <p>{article.description}</p>
                {article.urlToImage && <img src={article.urlToImage} alt={article.title} className="article-image" />}
                <button className="read-more-button">
                  <a href={article.url} target="_blank" rel="noopener noreferrer" className="read-more">See more</a>
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};
