import axios from 'axios';

axios.defaults.baseURL = 'https://api.thecatapi.com/v1/images';
axios.defaults.headers = {
  'x-api-key': 'a9d1b349-6f3f-4e78-ad60-7101f74c310a',
};

export const fetchAllCats = async () => {
  const response = await axios.get('/search?page=1&limit=20');
  const allCats = response.data;
  return allCats;
};

// export const fetchCreateVoite = async () => {
//     {data} = await axios.post('/votes');
//     return data;
// }
// export const fetchAllBreeds = async () => {
//   const response = await axios.get('/breeds?page=1&limit=20');
//   const allBreeds = response.data.data.name;
//   return allBreeds;
// };

export const fetchAllBreeds = async () => {
  const response = await axios.get('/search?page=1&limit=10');
  const allCats = response.data.data.name;
  return allCats;
};
