import Livre from "./Livre";

export default function Livres({ books }) {
  return (
    <div className="book-list">
      {books.map((book, index) => (
        <Livre
          key={index}
          image={book.image}
          title={book.title}
          price={book.price}
        />
      ))}
    </div>
  );
}
