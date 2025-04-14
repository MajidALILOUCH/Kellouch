export default function UserCard({ nom, prenom, email, img }) {
  return (
    <>
      <img src={img} alt="" />
      <p>
        {nom} {prenom}
      </p>
      <p>{email}</p>
    </>
  );
}
