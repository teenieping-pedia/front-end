import "../styles/badge.css";
import colors from './colors.json'

const Badge = ({ text }) => {
  const { background, color } = colors[text] || { background: "#e8eaed", color: "#000000" };
  return (
    <span className="badge" style={{ backgroundColor: background, color }}>
      {text}
    </span>
  );
};

export default Badge;
