import { useState, useEffect } from "react";
import TeeniepingList from "../components/TeeniepingList";
import Chips from "../components/Chips";
import "../styles/all.css";
import useScrollRestoration from "../hooks/useScrollRestoration";

const AllTeeniepings = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [summary, setSummary] = useState([]);
  const [filteredSummary, setFilteredSummary] = useState([]);
  const [activeRanks, setActiveRanks] = useState([]);
  const [activeSeries, setActiveSeries] = useState([]);
  const [isFilterActive, setIsFilterActive] = useState(false);

  const ranks = ["로열티니핑", "일반티니핑"];
  const series = ["시즌 1", "시즌 2", "시즌 3", "시즌 4"];

  useScrollRestoration(isLoading);

  useEffect(() => {
    const fetchSummary = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_BASE_URI}/teeniepings/summary`);
        const data = await response.json();
        setSummary(data);
        setFilteredSummary(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSummary();
  }, []);

  const handleFilter = () => {
    let filtered = summary;
    if (activeRanks.length > 0) {
      filtered = filtered.filter(t => activeRanks.includes(t.rank));
    }
    if (activeSeries.length > 0) {
      filtered = filtered.filter(t => activeSeries.includes(t.series));
    }
    setFilteredSummary(filtered);
  };

  const handleRankFilter = (rank) => {
    if (activeRanks.includes(rank)) {
      setActiveRanks(activeRanks.filter(r => r !== rank));
    } else {
      setActiveRanks([...activeRanks, rank]);
    }
  };

  const handleSeriesFilter = (selectedSeries) => {
    if (activeSeries.includes(selectedSeries)) {
      setActiveSeries(activeSeries.filter(s => s !== selectedSeries));
    } else {
      setActiveSeries([...activeSeries, selectedSeries]);
    }
  };

  useEffect(() => {
    handleFilter();
  }, [activeRanks, activeSeries]);

  if (isLoading) return <p>loading...</p>;

  return (
    <div className="container">
      <div className="options-container">
        <button
          className="filter-button"
          onClick={() => setIsFilterActive(!isFilterActive)}
        >
          {activeRanks.length + activeSeries.length || ''}  filter
        </button>
      </div>
      {isFilterActive &&
        <div className="filter-container">
          <div>
            {ranks.map(rank => (
              <Chips
                key={rank}
                label={rank}
                isActive={activeRanks.includes(rank)}
                onClick={() => handleRankFilter(rank)}
              />
            ))}
          </div>
          <div>
            {series.map(s => (
              <Chips
                key={s}
                label={s}
                isActive={activeSeries.includes(s)}
                onClick={() => handleSeriesFilter(s)}
              />
            ))}
          </div>
        </div>
      }

      <TeeniepingList teeniepings={filteredSummary} />
    </div>
  );
};

export default AllTeeniepings;
