import Breeds from 'components/Breeds/Breeds';
import s from './BreedsPage.module.scss';
import Search from 'components/Search/Search';

const BreedsPge = () => {
  return (
    <div className={s.breeds_container}>
      <Search />
      <Breeds />
    </div>
  );
};

export default BreedsPge;
