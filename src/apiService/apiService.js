import axios from 'axios';

axios.defaults.baseURL = 'https://api.thecatapi.com/v1/';
axios.defaults.headers = {
  'x-api-key': 'a9d1b349-6f3f-4e78-ad60-7101f74c310a',
};

export const fetchAllCatsParams = async (limit, mime_types, order, breedId) => {
  const response = await axios.get(
    `images/search?breed_ids=${breedId}&page=1&limit=${limit}&mime_types=${mime_types}&order=${order}`,
  );
  const allCats = response.data;
  console.log(allCats);
  return allCats;
};

export const fetchAllCats = async () => {
  const response = await axios.get(`images/search?&page=1&limit=10`);
  const allCats = response.data;
  console.log(allCats);
  return allCats;
};

// export const fetchVoites = async () => {
//   const response = await axios.get('/votes');

//   const votes = await response.data;
//   console.log(votes);
//   return votes;
// };
export const fetchAllBreeds = async () => {
  const response = await axios.get('/breeds?limit=100&page=0');

  const allBreeds = response.data;
  return allBreeds;
};

// export const fetchSearchCat = async (searchCat, page) => {
//   const response = await axios.get(`/search/&query=${searchCat}&page=${page}`);
//   const cats = response.data;
//   return cats;
// };

// export const fetchAllBreeds = async () => {
//   const response = await axios.get('/breeds/2');
//   const allCats = response.data.id;
//   return allCats;
// };

// export const fetchCatId = async id => {
//   const response = await axios.get(`/breeds/2`);
//   const fullInfo = response.data;

//   return fullInfo;
// };
