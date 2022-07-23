import axios from 'axios';

axios.defaults.baseURL = 'https://api.thecatapi.com/v1/';
axios.defaults.headers = {
  'x-api-key': 'a9d1b349-6f3f-4e78-ad60-7101f74c310a',
};

export const fetchAllCats = async page => {
  const response = await axios.get(`images/search?limit=10&page=${page}`);
  const allCats = response.data;
  return allCats;
};

export const fetchAllBreeds = async () => {
  const response = await axios.get('/breeds');
  const allBreeds = response.data;
  return allBreeds;
};
export const fetchAllBreedIds = async () => {
  const cats = await fetchAllBreeds();
  const ids = cats.map(cat => cat.id);
  return ids;
};

export const fetchCatForBreedsInfo = async breedId => {
  const response = await axios.get(
    `/images/search?breed_ids=${breedId}&limit=10&page=0`,
  );
  const allBreedsInfo = response.data;
  return allBreedsInfo;
};

export const getRandomCat = async page => {
  const response = await axios.get(`/images/search?${page}`);
  const randomCat = response.data[0];
  return randomCat;
};

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

export const fetchSearchCats = async (searchCat, page) => {
  const response = await axios.get(`/breeds/search?q=${searchCat}`);
  const cats = response.data;
  return cats;
};

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
