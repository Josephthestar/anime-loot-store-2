import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';



export default function AuthPage({ cart, setCart }) {
  const [showSignUp, setShowSignUp] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const apiUrl = 'http://localhost:3000/api/entries';

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        setData(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleAddToCart = () => {
    const newItem = {
      id: cart.length + 1,
      name: "Anime Loot Snack",
      price: 19.99, 
    };
    setCart(prevCart => [...prevCart, newItem]);
  };

  return (
    <main className="container">
      <h1>anime-loot-item-page</h1>

      <div className="boxes-container">
        <div className="image-box">
          <Card className="image-card">
            <Card.Img variant="top" src="https://w7.pngwing.com/pngs/909/655/png-transparent-one-piece-logo-monkey-d-luffy-one-piece-usopp-logo-pirate-hat-manga-jolly-roger-smiley-thumbnail.png" />
            <button onClick={handleAddToCart}>Add to Cart</button>
          </Card>
        </div>

        <div className="top-box">
          <h2>Welcome to the Anime Loot Store!</h2>
          <p>Explore our wide range of anime-inspired products.</p>
        </div>

        <div
          className="bottom-box"
          style={{
            backgroundImage: 'url("https://example.com/path-to-your-image.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: '#fff',
          }}
        >
          <h2>Check Out Our Latest Arrivals</h2>
          <p>Discover the newest anime merchandise in our store.</p>
        </div>
      </div>

      <h3>This is your one stop shop for anime-lootsnacks-around the world. 
        Wanna try snacks around the world from the comfort of your home 
        and with a guaranteed anime shirt of a random style with anime snacks?</h3>

      <div className="shopping-cart">
        <h2>Shopping Cart</h2>
        <div className="item-box">
          <ul>
            {cart.map(item => (
              <li key={item.id}>
                {item.name} - ${item.price.toFixed(2)}
              </li>
            ))}
            {data.map(item => (
              <li key={item._id}>
                {item.details.animeloot} - ${item.details.entry}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
