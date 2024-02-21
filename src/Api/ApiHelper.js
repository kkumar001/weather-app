import axios from 'axios';

const ApiHelper = () => {
    const getData = async (method, location) => {

		return axios({
			method: method,
			url:`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=b7dcdca8989823b227c8160bdd3cd7bf`,
			headers: {
				'Content-Type': 'application/json',
			},
		});
	};

    return { getData }
};

export default ApiHelper;