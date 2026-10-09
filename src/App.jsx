import React, { useState, useEffect } from "react";

export default function App() {
  // State variables
  const [quantity, setQuantity] = useState(0);
  const [selectedColor, setSelectedColor] = useState("Black");
  const [deliveryCity, setDeliveryCity] = useState("Coimbatore");
  const [showProduct, setShowProduct] = useState(true);

  const productName = "Wireless Mouse";
  const price = 499;

  // useEffect: runs when quantity changes
  useEffect(() => {
    console.log("Cart quantity updated:", quantity);
  }, [quantity]);

  // Header component
  function Header() {
    return (
      <h1 style={{
        backgroundColor: "#232f3e",
        color: "white",
        padding: "20px",
        textAlign: "center"
      }}>
        Amazon Product Store
      </h1>
    );
  }

  // ProductCard component
  function ProductCard({ name, price, quantity, color, city }) {
    return (
      <div style={{
        border: "2px solid #ff9900",
        padding: "20px",
        margin: "20px auto",
        maxWidth: "450px",
        borderRadius: "10px",
        backgroundColor: "#fffaf0"
      }}>
        <h2>{name}</h2>
        <p>Price: ₹{price}</p>
        <p>Selected Colour: {color}</p>
        <p>Delivery City: {city}</p>
        <p>Quantity: {quantity}</p>

        <label>Select Colour: </label>
        <select
          value={color}
          onChange={(e) => setSelectedColor(e.target.value)}
        >
          <option value="Black">Black</option>
          <option value="Blue">Blue</option>
          <option value="White">White</option>
        </select>

        <br /><br />

        <label>Delivery City: </label>
        <input
          type="text"
          value={city}
          onChange={(e) => setDeliveryCity(e.target.value)}
          placeholder="Enter delivery city"
        />

        <br /><br />

        <button onClick={() => setQuantity(quantity + 1)}>
          Add to Cart
        </button>

        {" "}

        <button
          onClick={() => setQuantity(quantity - 1)}
          disabled={quantity === 0}
        >
          Remove One
        </button>

        {" "}

        <button onClick={() => setQuantity(0)}>
          Reset Cart
        </button>

        <hr />

        <h3>Total: ₹{quantity * price}</h3>

        <p>
          {quantity === 0
            ? "Cart is empty"
            : "Product added to cart"}
        </p>
      </div>
    );
  }

  // Footer component
  function Footer() {
    return (
      <footer style={{
        backgroundColor: "#232f3e",
        color: "white",
        padding: "15px",
        textAlign: "center"
      }}>
        © 2026 Amazon Product Store
      </footer>
    );
  }

  return (
    <div style={{
      fontFamily: "Arial, sans-serif",
      textAlign: "center"
    }}>
      <Header />

      <button onClick={() => setShowProduct(!showProduct)}>
        {showProduct ? "Hide Product" : "Show Product"}
      </button>

      {showProduct && (
        <ProductCard
          name={productName}
          price={price}
          quantity={quantity}
          color={selectedColor}
          city={deliveryCity}
        />
      )}

      <Footer />
    </div>
  );
}