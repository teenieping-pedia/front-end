import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Badge from "../components/Badge";
import "../styles/detail.css";

const TeeniepingDetail = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [teenieping, setTeenieping] = useState(null);

  useEffect(() => {
    const fetchTeenieping = async () => {
      try {
        const response = await fetch(`http://localhost:3000/teeniepings/${id}`);
        const data = await response.json();
        setTeenieping(data);
      } catch (error) {
        console.error(error)
      } finally {
        setIsLoading(false);
      }
    };

    fetchTeenieping();
  }, [id]);

  if (isLoading) return <p>Loading...</p>
  if (teenieping === null) return <p>유효하지 않은 접근입니다.</p>
  return (
    <div className="detail-container">
      <div className="image-container half-container">
        <img className="image" src={teenieping.imageUrl} />
      </div>
      <div className="info-container half-container">
        <div>
          <Badge text={teenieping.series} />
          <Badge text={teenieping.rank} />
        </div>
        <div>
          <p className="name">{teenieping.name}</p>
          <p className="description">{teenieping.description}</p>
        </div>
        <div>
          <span className="col">소품</span>
          <span className="row">{teenieping.items}</span>
        </div>
        <div>
          <span className="col">마법</span>
          <span className="row">{teenieping.magic}</span>
        </div>
        <div>
          <span className="col">성격</span>
          <span className="row">{teenieping.personality}</span>
        </div>
      </div>
    </div>
  )
}

export default TeeniepingDetail;