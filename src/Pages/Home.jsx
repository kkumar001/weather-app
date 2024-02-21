import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import Search from '../Components/Search'
import ApiHelper from '../Api/ApiHelper'

var recentSearches = [];
var resultSearches = [];
var resultColor = [];

const Home = () => {
  // const [recentSearches, setRecentSearches] = useState([]);

  const { getData } = ApiHelper();
  const [data, setData] = useState(null);

  const setResultSearches = (message, color) => {
    const newItems = [message, ...resultSearches]
    resultSearches = newItems;
    console.log(resultSearches);
    const newColorItems = [color, ...resultColor];
    resultColor = newColorItems;
    console.log(resultColor);
  }

  const getDetails = async () => {
    try {
      const method = "get";
      const Response = await getData(method, recentSearches[0]);
      var Data = Response.data;
      setData(Data);
      console.log(Data);
      setResultSearches('Success: City Found', 'text-green-800');
    } catch (e) {
      console.log(e.response.data.cod);
      console.log(e.response.data.message);
      setData(null);
      setResultSearches('Error: City Not Found', 'text-red-700');
    }
    if (recentSearches.length > 5 && resultSearches.length > 5 && resultColor.length > 5) {
      recentSearches.splice(5, 1);
      resultSearches.splice(5, 1);
      resultColor.splice(5, 1);
    }
  };

  const getLocation = (city) => {
    console.log(city);
    const newSearch = [city, ...recentSearches];
    recentSearches = newSearch;
    getDetails();
  }

  console.log(data);

  return (
    <div className='w-full h-screen bg-blue-100'>
      <Header />
      <div className='w-full h-[300px] flex flex-col items-center justify-center p-4 gap-2 border-b-2 border-blue-700'>
        <div className='text-3xl p-2 h-[50px] text-center font-semibold'>
          <h3 className='blue-gradient_text'>Recent Searches...</h3>
        </div>
        <div className={`grid ${resultSearches.length > 0 ? 'grid-cols-2' : ''} w-[90%] text-center bg-blue-200 rounded-xl p-2 border-2 border-blue-700`}>
          {resultSearches.length > 0 ?
            <>
              <div>
                <h3 className="text-2xl font-semibold text-blue-700">Search</h3>
                <ul className='text-xl font-medium'>
                  {recentSearches.map((search) => (
                    <li>{search}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-blue-700">Result</h3>
                <ul className='text-xl font-medium'>
                  {resultSearches.map((result, i) => (
                    <li className={resultColor[i]}>{result}</li>
                  ))}
                </ul>
              </div> </> :
            <h3 className='text-2xl text-center w-full font-semibold text-blue-600'>No Data.</h3>
          }
        </div>
      </div>
      <div className='h-[calc(100vh-364px)] w-[100%] flex justify-center p-4 items-center'>
        <Search onLocationChange={getLocation} />
      </div>
    </div>
  )
}

export default Home