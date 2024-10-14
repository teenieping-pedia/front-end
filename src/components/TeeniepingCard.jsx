import { Link } from "react-router-dom";
import Badge from "../components/Badge";
import "../styles/card.css";

const TeeniepingCard = ({ id, imageUrl, series, rank, name }) => {
  return (
    <Link to={`/teeniepings/${id}`} className="card-container">
      <div className="image-container">
        <img src={imageUrl} />
      </div>
      <div>
        <Badge text={series} />
        <Badge text={rank} />
      </div>
      <p className="name">{name}</p>
    </Link>
  )
}

export default TeeniepingCard;