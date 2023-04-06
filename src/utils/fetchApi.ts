import axios from 'axios';

export const baseUrl = 'https://exercisedb.p.rapidapi.com/exercises';

export const fetchApi = async (url: string) => {
  const { data } = await axios.get(url, {
    headers: {
      'X-RapidAPI-Key': process.env.API_KEY,
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    },
  });
  return data;
};
