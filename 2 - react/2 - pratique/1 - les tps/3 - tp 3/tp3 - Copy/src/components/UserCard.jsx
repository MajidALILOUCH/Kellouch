export default function UserCard({ titre, prix, url }) {
  return (
    <li>
      <img src={url} alt="" />
      <h3>{titre}</h3>
      <p>{prix}</p>
    </li>
  );
}
