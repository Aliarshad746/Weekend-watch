import React, { useState } from "react";
import HomeCarousel from "../../components/HomeCarousel";
import CardCarousel from "../../components/CardCarousel";
import useFetchTrendingMovies from "../../hooks/useFetchTrendingMovies";
import "./homeScreen.css";

function HomeScreen() {
  const [tab, setTab] = useState('movie')
  const {
    trendingMovies = [],
    trendingShows = [],
    bannerData = [],
  } = useFetchTrendingMovies();

  console.log({ trendingMovies, trendingShows, bannerData });

  return (
    <div>
      <div className="carousel-home">
        <HomeCarousel dataItems={bannerData} />
      </div>
      <div className="popular">
        <div className="popular-header">
          <div className="popular-heading">What's Popular</div>
          <div className="tabs">
            <button className={`tab ${tab === 'movie' ? 'active' : ''}`} onClick={() => setTab('movie')}>Streaming</button>
            <button className={`tab ${tab === 'tv' ? 'active' : ''}`} onClick={() => setTab('tv')}>On TV</button>
          </div>
        </div>

      </div>
      <div className="carousel-card">
      <CardCarousel dataItems={tab === 'movie' ?trendingMovies : trendingShows}/>
      </div>
    </div>
  );
}

export default HomeScreen;
