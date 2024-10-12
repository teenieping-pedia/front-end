import { useState } from "react";
import TeeniepingList from "../components/TeeniepingList";
import { useEffect } from "react";

const AllTeeniepings = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [summary, setSummary] = useState([]);

  useEffect(() => {
    const fetchSummary = async () => {
      try {
        const response = await fetch('http://localhost:3000/teeniepings/summary');
        const data = await response.json();
        setSummary(data);
      } catch (error) {
        console.error(error)
      } finally {
        setIsLoading(false);
      }
    };

    fetchSummary();
  }, []);

  if (isLoading) return <p>loading...</p>
  return (
    <div className="container">
      <TeeniepingList teeniepings={summary} />
    </div>
  )
}

export default AllTeeniepings;