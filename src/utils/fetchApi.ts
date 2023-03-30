import axios from 'axios';

export const baseUrl = 'https://exercisedb.p.rapidapi.com/exercises/';

export const fetchApi = async (url: string) => {
  const { data } = await axios.get(url, {
    headers: {
      'X-RapidAPI-Key': '2bca12d318msh06e2507126547bep1d407ejsn442470add022',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    },
  });
  return data;
};
