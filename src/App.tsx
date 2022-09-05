import { Routes, Route } from 'react-router-dom';
import { Container } from './App.styled';
import Header from './components/header/Header';
import { AlbumDetails, Albums, Artists, SearchSong } from './pages';

// App component with routes
const App = () => {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path='/' element={<Artists />} />
        <Route path='/artist/:artistId' element={<Albums />} />
        <Route path='/album/:artistId/:albumId' element={<AlbumDetails />} />
        <Route path='/search-song' element={<SearchSong />} />
      </Routes>
    </Container>
  );
};

export default App;
