import { useEffect, useState, useMemo } from "react";
import { REQUESTS } from "../utils/apiConfig";
import axiosInstance from "../utils/axiosInstance";

const useFetchSearchData = ({searchQuery}) => {
  const [data, setData] = useState(null);

  const fetchSearchData = async (query) => {
    try {
      const res = await axiosInstance.get(`${REQUESTS.search_movie}&query=${query}`);
      setData(res?.data?.results);
    } catch (error) {
      console.error(error);
    }
  };


  useEffect(() => {
    if(searchQuery){
        fetchSearchData(searchQuery);
    }
  }, [searchQuery]);

  return {
    data,
    fetchSearchData
  };
};

export default useFetchSearchData;
