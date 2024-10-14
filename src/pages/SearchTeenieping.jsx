import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import TeeniepingList from "../components/TeeniepingList";
import "../styles/search.css";

const SearchTeenieping = () => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const searchTerm = queryParams.get('q');

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_BASE_URI}/teeniepings/search?q=${encodeURIComponent(searchTerm)}`);
        const data = await response.json();
        setResults(data);
        console.log(results)
      } catch (error) {
        console.error('검색 오류:', error);
      } finally {
        setIsLoading(false);
      }
    };

    if (searchTerm) {
      fetchSearchResults();
    }
  }, [searchTerm]);

  if (isLoading) return <p>로딩중...</p>;

  return (
    <div className="search-container">
      <h3>검색 결과: "{searchTerm}"</h3>
      <TeeniepingList teeniepings={results} />
    </div>
  );
};

export default SearchTeenieping;
