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
  const response = await axios.get(`images/search?&limit=20&page=0`);
  const allCats = response.data;
  return allCats;
};

// export const fetchVoites = async () => {
//   const response = await axios.get('/votes');

//   const votes = await response.data;
//   console.log(votes);
//   return votes;
// };
export const fetchAllBreeds = async () => {
  const response = await axios.get('/breeds?limit=67&page=0');
  const allBreeds = response.data;
  return allBreeds;
};

// export const fetchCatForBreedsName = async breedId => {
//   const response = await axios.get(`/images/search?breed_ids=${breedId}`);
//   const allBreedsInfo = response.data;
//   return allBreedsInfo;
// };

export const fetchCatData = async breedId => {
  const catsDataUrl = '/breeds';
  const searchImgUrl = `images/search?breed_id=${breedId}`;
  try {
    const catsResponse = await axios.get(catsDataUrl);
    const cats = catsResponse.data;

    await Promise.allSettled(
      cats.map(async cat => {
        const response = await axios.get(`${searchImgUrl}${cat.id}`);
        const fullInfo = response.data;
        return fullInfo;
      }),
    );
  } catch (error) {
    console.log(error);
  }
};
fetchCatData();
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
