import React, { useState} from 'react'
import { useNavigate } from 'react-router-dom';

const Search = ({ onLocationChange }) => {
    const [location, setLocation] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setLocation(e.target.value.trim());
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/weather/${location.toLowerCase()}`);
        onLocationChange(location);
    }

    console.log(location);

    return (
        <div className='w-[90%] flex flex-col items-center h-[275px] my-4'>
           <h3 className='sm:text-4xl text-2xl text-center font-semibold blue-gradient_text'>Find Weather With Location</h3>
            <form action=""
                className='sm:w-[500px] w-[100%] flex flex-col gap-7 mt-14'
                onSubmit={handleSubmit}
                
            >
                <label htmlFor="" className='text-black-500 font-semibold text-xl'>
                    Location
                    <input
                        type='text'
                        name='location'
                        className='input'
                        placeholder='Delhi'
                        required
                        value={location}
                        onChange={handleChange}
                    />
                </label>
                <button
                    className='btn'
                    type='submit'
                >
                    Search
                </button>
            </form>
        </div>
    )
}

export default Search