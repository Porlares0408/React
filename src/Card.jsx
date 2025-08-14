import Profile from "./assets/bape.jpg";
function Card() {
  return (
    <div className="Card">
      <img className="Image" src={Profile} alt="Profile" />
      <h2>Card Title</h2>
      <p>This is a simple card component.</p>
    </div>
  );
}
export default Card;
