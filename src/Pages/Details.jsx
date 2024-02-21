import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import ApiHelper from '../Api/ApiHelper';
import Header from '../Components/Header';
import {
  clear,
  clouds,
  thunderstorm,
  smoke,
  snow,
  haze,
  rain,
  mist
} from '../assets';

const Details = () => {
  const { city } = useParams();
  console.log(city);

  const { getData } = ApiHelper();
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const getDetails = async () => {
    try {
      const method = "get";
      const Response = await getData(method, city);
      var Data = Response.data;
      setData(Data);
      console.log(Data);
    } catch (e) {
      console.log(e.response.data.cod);
      console.log(e.response.data.message);
      setError(e.response.data.message);
      setData(null);
    }


  };


  useEffect(() => {
    getDetails();
  }, []);

  console.log(data);


  return (
    <div className='w-full md:h-screen h-[1400px] bg-blue-100'>
      <Header />
      {data ?
        <div className='w-full md:h-[calc(100vh-64px)] h-[1326px] flex flex-col gap-4 items-center justify-center'>
          <h3 className='blue-gradient_text font-bold text-3xl uppercase'>{city} Weather Result</h3>
          <div className='md:w-[90%] w-[98%] bg-blue-200 md:h-[80%] h-[95%] border-4 border-blue-500 rounded-2xl'>
            <div className='p-2 flex md:flex-row flex-col w-full h-full justify-center items-center'>
              <div className='flex flex-col md:w-[50%] w-[98%] md:h-full h-[48%] items-center justify-around'>
                <div className='md:w-[95%] w-[98%] bg-slate-100 h-[45%] rounded-2xl flex justify-center items-center border-2 border-blue-500'>
                  <img
                    src={
                      data.weather[0].main.toLowerCase() === 'haze' ? haze :
                        data.weather[0].main.toLowerCase() === 'clouds' ? clouds :
                          data.weather[0].main.toLowerCase() === 'clear' ? clear :
                            data.weather[0].main.toLowerCase() === 'rain' ? rain :
                              data.weather[0].main.toLowerCase() === 'snow' ? snow :
                                data.weather[0].main.toLowerCase() === 'smoke' ? smoke :
                                  data.weather[0].main.toLowerCase() === 'thunderstorm' ? thunderstorm :
                                    data.weather[0].main.toLowerCase() === 'mist' ? mist : ''
                    }
                    alt="weather" className="w-[90%] h-[90%] rounded-xl" />
                </div>
                <div className='md:w-[95%] md:text-left text-center hover:font-semibold w-[98%] border-2 bg-slate-100 border-blue-500 h-[45%] rounded-2xl py-2 px-4'>
                  <h6 className='text-center text-3xl blue-gradient_text'>Temperature</h6>
                  <p className='text-xl text-blue-500 mt-[20px]'>Current Temperature : {data.main.temp} &deg;C</p>
                  <p className='text-xl text-blue-500 mt-2'>Feels Like : {data.main.feels_like} &deg;C</p>
                  <p className='text-xl text-blue-500 mt-2'>Min. Temperature : {data.main.temp_min} &deg;C</p>
                  <p className='text-xl text-blue-500 mt-2'>Max. Temperature : {data.main.temp_max} &deg;C</p>
                </div>
              </div>
              <div className='flex flex-col md:w-[50%] w-[98%] md:h-full h-[48%] items-center justify-around'>
                <div className='md:w-[95%] hover:font-semibold w-[98%] border-2 bg-slate-100 border-blue-500 h-[45%] rounded-2xl py-2 px-4'>
                  <h6 className='text-center text-3xl blue-gradient_text'>Weather Condition</h6>
                  <p className='text-2xl mt-[70px] text-center'>{data.weather[0].main}</p>
                </div>
                <div className='md:w-[95%] hover:font-semibold w-[98%] border-2 bg-slate-100 border-blue-500 h-[45%] rounded-2xl py-2 px-4'>
                  <h6 className='text-center text-3xl blue-gradient_text'>Wind</h6>
                  <p className='text-xl text-blue-500 mt-[50px]'>Speed : {data.wind.speed} km/h</p>
                  <p className='text-xl text-blue-500 mt-2'>Direction : {data.wind.deg} degree</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        :
        <div className='w-full h-[calc(100vh-64px)] flex flex-col items-center justify-center p-2'>
          <h3 className='blue-gradient_text font-bold text-3xl uppercase'>{city} Weather Result</h3>
          <div className='w-[90%] h-[300px] flex items-center justify-center text-3xl bg-slate-100 rounded-xl border-4 border-blue-500 text-center mt-2'>
            {error ?
              <h3 className='text-red-500 uppercase'>{error}</h3>
              :
              <h3>Loading...</h3>
            }
          </div>
        </div>
      }
    </div>
  )
}

export default Details