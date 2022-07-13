// import { useState, useEffect } from 'react';
import Gallery from 'components/Gallery/Gallery';
import Search from 'components/Search/Search';

import Container from 'components/Container/Container';
import PageContainer from 'components/PageContainer/PageContainer';
import Menu from 'components/Menu/Menu';

const GalleryPage = () => {
  return (
    <PageContainer>
      <Menu />
      <Container>
        <Search />
        <Gallery />
      </Container>
    </PageContainer>
  );
};

export default GalleryPage;
