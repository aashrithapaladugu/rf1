import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Emojione } from 'react-emoji-render';
import './App.css';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';
import Lottie from 'lottie-react';
import chefAnimation from './lottie/cheif.json';

const EDAMAM_APP_ID = '2ecd62b5';
const EDAMAM_APP_KEY = '02a0ea306c7fe0b869409defc560e264';

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [showAnimation, setShowAnimation] = useState(true);

  const fetchRecipes = async (query) => {
    try {
      setShowAnimation(true); // Ensure animations are enabled before fetching

      const response = await axios.get('https://api.edamam.com/search', {
        params: {
          q: query,
          app_id: EDAMAM_APP_ID,
          app_key: EDAMAM_APP_KEY
        }
      });
      setRecipes(response.data.hits);
      setShowAnimation(false); // Disable animations after fetching
    } catch (error) {
      console.error('Error fetching recipes', error);
      setShowAnimation(false); // Disable animations even on error
    }
  };

  useEffect(() => {
    // Ensure animations are shown when component mounts
    setShowAnimation(true);
  }, []);

  return (
    <div className="App">
      <div className="background-animation">
        {showAnimation && (
          <>
            <div className="emoji"><Emojione text="🍪" /></div>
            <div className="emoji"><Emojione text="🍰" /></div>
            <div className="emoji"><Emojione text="🍫" /></div>
            <div className="emoji"><Emojione text="🍭" /></div>
            <div className="emoji"><Emojione text="🍎" /></div>
            <div className="emoji"><Emojione text="🍇" /></div>
            <div className="emoji"><Emojione text="🍒" /></div>
            <div className="emoji"><Emojione text="🍳" /></div>
            <div className="emoji"><Emojione text="👩‍🍳" /></div>
            <div className="emoji"><Emojione text="🥦" /></div>
            <div className="emoji"><Emojione text="🍕" /></div>
            <div className="emoji"><Emojione text="🍔" /></div>
            <div className="emoji"><Emojione text="🥗" /></div>
            <div className="emoji"><Emojione text="🍣" /></div>
            <div className="emoji"><Emojione text="🍩" /></div>
            <div className="emoji"><Emojione text="🍪" /></div>
            <div className="emoji"><Emojione text="🍰" /></div>
            <div className="emoji"><Emojione text="🍫" /></div>
            <div className="emoji"><Emojione text="🍭" /></div>
          </>
        )}
      </div>
      <div className="content">
        <Lottie
          animationData={chefAnimation} // Specify the animation data
          style={{
            position: 'absolute',
            right: '375px', // Adjust position from the right edge
            top: '-50px', // Adjust position from the top edge
            width: '200px',
            height: '200px',
            zIndex: -1 // Ensure animation is behind other content
          }} // Adjust positioning and size as needed
        />
        <h1 className="title">Recipe Finder</h1>
        <SearchBar onSearch={fetchRecipes} />
        <RecipeList recipes={recipes} />
      </div>
    </div>
  );
};

export default App;
