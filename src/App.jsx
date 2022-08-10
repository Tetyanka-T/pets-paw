import { Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';
import HomePage from 'pages/HomePage/HomePage';
import VotingPage from 'pages/VotingPage/VotingPage';
import GalleryPage from 'pages/GalleryPage/GalleryPage';
import BreedsPge from 'pages/BreedsPage/BreedsPage';
import CatCard from 'components/CatCard/CatCard';
import DislikePage from 'pages/DislikePage/DislikePage';
import FavoritePage from 'pages/FavoritePage/FavoritePage';
import LikePage from 'pages/LikePage/LikePage';
import Loader from 'components/Loader/Loader';

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route exact path="/" element={<HomePage />} />

        <Route exact path="/voting" element={<VotingPage />} />

        <Route path="/gallery" element={<GalleryPage />} />

        <Route exact path="/breeds" element={<BreedsPge />} />

        <Route path="breeds/:breedsId" element={<CatCard />} />

        <Route exact path="/like" element={<LikePage />} />

        <Route exact path="/favorite" element={<FavoritePage />} />

        <Route path="/dislike" element={<DislikePage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
