import axios from 'axios';

axios.defaults.baseURL = 'https://api.thecatapi.com/v1/';
axios.defaults.headers = {
  'x-api-key': 'a9d1b349-6f3f-4e78-ad60-7101f74c310a',
};

// export const fetchAllCatsParams = async (limit, type, order, breedId, page) => {
//   const response = await axios.get(
//     `images/search?breed_ids=${breedId}&page=${page}&limit=${limit}&mime_types=${type}&order=${order}`,
//   );
//   const allCats = response.data;
//   return allCats;
// };

export const fetchAllCats = async () => {
  const response = await axios.get(`images/search?limit=20&page=0`);
  const allCats = response.data;
  return allCats;
};

export const fetchAllBreeds = async () => {
  const response = await axios.get('/breeds');
  const allBreeds = response.data;
  return allBreeds;
};

export const fetchCatForBreedsInfo = async breedId => {
  const response = await axios.get(`/images/search?breed_ids=${breedId}`);
  const allBreedsInfo = response.data;
  return allBreedsInfo;
};

export const getRandomCat = async page => {
  const response = await axios.get(`/images/search?${page}`);
  const allBreedsInfo = response.data[0];
  return allBreedsInfo;
};

// export const fetchAllBreedIds = async () => {
//   const cats = await fetchAllBreeds();
//   const ids = cats.map(cat => cat.id);
//   return ids;
// };

// export const getRandomCat = async () => {
//   const catsIds = await fetchAllBreedIds();
//   const catId = catsIds[Math.floor(Math.random() * catsIds.length)];

//   const response = await axios.get(`/images/search?breed_ids=${catId}`);
//   const catArray = await response.data;
//   return catArray[0];
// };

export const fetchOrder = async order => {
  const response = await axios.get(
    `/images/search?limit=20&page=0&order=${order}`,
  );
  const orderInfo = response.data;
  return orderInfo;
};

export const fetchType = async type => {
  const response = await axios.get(
    `/images/search?limit=20&mime_types=${type}`,
  );
  const typeInfo = response.data;

  return typeInfo;
};

export const fetchLimit = async limit => {
  const response = await axios.get(`/images/search?limit=${limit}&page=0`);
  const limitPhoto = response.data;
  return limitPhoto;
};

// export const fetchSearchCat = async (searchCat, page) => {
//   const response = await axios.get(`/search/&query=${searchCat}&page=${page}`);
//   const cats = response.data;
//   return cats;
// };

export const getVoices = async () => {
  const response = await axios.get('/votes');
  const voices = await response.data;
  return voices;
};
export const postVoices = async data => {
  const voice = await axios.post('/votes', data);
  return voice;
};

export const addPhoto = async data => {
  const addPhoto = axios.post('/images/upload', data);
  return addPhoto;
};

export const deletePhoto = async id =>
  await axios.delete(`/photos/delete/${id}`);

export const addFavouriteCat = async data => {
  const favourite = await axios.post('/favourites', data);
  return favourite;
};

export const unfavourite = async data => {
  const unfavourite = await axios.post('/unfavourite', data);
  return unfavourite;
};

export const getAllFavourites = async data => {
  const allFavourites = await axios.get('/favourites', data);
  return allFavourites.data;
};
