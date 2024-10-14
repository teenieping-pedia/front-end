import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/header.css";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && searchTerm) {
      navigate(`/teeniepings/search?q=${encodeURIComponent(searchTerm)}`);
    }
  };

  const handleBlur = () => {
    setSearchTerm('');
  };

  return (
    <header className='header-container'>
      <a href="/" className="header-logo">티니핑 도감</a>
      <input
        className='search-input'
        type="search"
        value={searchTerm}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        onBlur={handleBlur}
        placeholder="찾고 싶은 티니핑을 검색하세요."
      />
    </header>
  );
};

export default Header;
