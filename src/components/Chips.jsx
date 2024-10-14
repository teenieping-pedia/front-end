import "../styles/badge.css";
import colors from './colors.json'

const Chips = ({ label, isActive, onClick }) => {
  const { background, color } = colors[label] || { background: "#e8eaed", color: "#000000" };
  return (
    <button
      onClick={onClick}
      className='badge'
      style={{
        color: isActive ? color : `#888`,
        border: isActive ? `1px solid ${color}` : '1px solid #ccc',
        backgroundColor: isActive ? background : '#fff',
      }}
    >
      {label}
    </button>
  );
};

export default Chips;
