// eslint-disable-next-line react/prop-types
export default function Livre({ image, title, price }) {
  return (
    <div className="book-card">
      <img src={image} alt={title} className="book-image" />
      <h2 className="book-title">{title}</h2>
      <p className="book-price">Prix: ${price}</p>
      <button className="read-more">Read More...</button>
    </div>
  );
}
