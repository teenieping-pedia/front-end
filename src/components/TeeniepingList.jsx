import "../styles/list.css";
import TeeniepingCard from "./TeeniepingCard";

const TeeniepingList = ({ teeniepings }) => {
  return (
    <section className="list-container">
      {teeniepings && teeniepings.map((t) => (
        <TeeniepingCard key={t._id} id={t._id} imageUrl={t.imageUrl} series={t.series} rank={t.rank} name={t.name} />
      ))}
      {!teeniepings.length &&
        <p>티니핑이 존재하지 않습니다.</p>
      }
    </section>
  )
}

export default TeeniepingList