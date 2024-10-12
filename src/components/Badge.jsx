import "../styles/badge.css";

const badgeColors = {
  "시즌 1": { background: "#ffc8aa", color: "#753800" },
  "시즌 2": { background: "#ffe5a0", color: "#473821" },
  "시즌 3": { background: "#d4edbc", color: "#11734b" },
  "시즌 4": { background: "#bfe1f6", color: "#0a53a8" },
  "시즌 5": { background: "#e6cff2", color: "#5a3286" },
  "로열티니핑": { background: "#ffd8d8", color: "#db5757" },
  "일반티니핑": { background: "#e8eaed", color: "#000000" },
};

const Badge = ({ text }) => {
  const { background, color } = badgeColors[text] || { background: "#e8eaed", color: "#000000" };
  return (
    <span className="badge" style={{ backgroundColor: background, color }}>
      {text}
    </span>
  );
};

export default Badge;
