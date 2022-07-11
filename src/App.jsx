import { Routes, Route } from 'react-router-dom';
import HomePage from 'pages/HomePage/HomePage';
import VotingPage from 'pages/VotingPage/VotingPage';
import GalleryPage from 'pages/GalleryPage/GalleryPage';
import BreedsPge from 'pages/BreedsPage/BreedsPage';
import CatCard from 'components/CatCard/CatCard';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />

      <Route exact path="/voting" element={<VotingPage />} />

      <Route path="/gallery" element={<GalleryPage />} />

      <Route exact path="/breeds" element={<BreedsPge />} />

      <Route path="breeds/:breedsId" element={<CatCard />} />
    </Routes>
  );
}

export default App;
