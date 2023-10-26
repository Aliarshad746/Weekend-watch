import { useEffect, useState, useMemo } from "react";
import { REQUESTS } from "../utils/apiConfig";
import axiosInstance from "../utils/axiosInstance";

const useFetchTrendingMovies = () => {
  const [data, setData] = useState(null);

  const fetchTrending = async () => {
    try {
      const res = await axiosInstance.get(REQUESTS.fetch_trending);
      setData(res?.data?.results);
    } catch (error) {
      console.error(error);
    }
  };

  // Formatting data and getting list of trending movies and tv shows form data
  
  const { trendingMovies = [], trendingShows = [], bannerData = [] } = useMemo(() => {
    if(data?.length > 0){
       return  (data || []).reduce(
            (acc, item, index) => {
              if (index < 5) {
                acc.bannerData.push(item);
              }
              if (item?.media_type === "movie") {
                acc.trendingMovies.push(item);
              } else {
                acc.trendingShows.push(item);
              }
      
              return acc;
            },
            { trendingMovies: [], trendingShows: [], bannerData: [] }
          );
    }else{
        return {};
    }
    
  }, [JSON.stringify(data)]);

  useEffect(() => {
    fetchTrending();
  }, []);

  return {
    data,
    trendingMovies,
    trendingShows,
    bannerData
  };
};

export default useFetchTrendingMovies;
