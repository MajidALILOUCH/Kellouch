// eslint-disable-next-line no-unused-vars
import React from "react";
import "./App.css";
import Livres from "./components/Livres";

const App = () => {
  const books = [
    {
      title: "Reminders of Him: A Novel",
      price: 90.97,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/617u7g23IPL._AC_UL210_SR195,210_.jpg",
    },
    {
      title: "Ugly Love: A Novel",
      price: 102.5,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/6107QroEYVL._AC_UL210_SR195,210_.jpg",
    },
    {
      title: "Where the Crawdads Sing",
      price: 78.96,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/81OtOy9eDeL._AC_UL210_SR195,210_.jpg",
    },
    {
      title: "November 9: A Novel",
      price: 123.55,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/61xKvPvUupL._AC_UL210_SR195,210_.jpg",
    },
    {
      title: "The Return of the Gods",
      price: 85.5,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/61UiVr+EGOL._AC_UL210_SR195,210_.jpg",
    },
    {
      title: "I Love You to the Moon and Back",
      price: 55.85,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL210_SR195,210_.jpg",
    },
    {
      title: "All Good People Here: A Novel",
      price: 90.34,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/81X01+piiiL._AC_UL210_SR195,210_.jpg",
    },
    {
      title: "The Great Reset: And the War for the World",
      price: 100.45,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/61dZgiIxZXL._AC_UL210_SR195,210_.jpg",
    },
    {
      title: "Good to Great: A Guide to Success",
      price: 106.5,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/71RlWMOsv6L._AC_UL210_SR195,210_.jpg",
    },
  ];

  return (
    <div className="app">
      <h1 className="title">Vente des livres</h1>
      <Livres books={books} />
    </div>
  );
};

export default App;
