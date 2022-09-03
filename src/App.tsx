import { Routes, Route } from 'react-router-dom';
import { Container } from './App.styled';
import Header from './components/header/Header';
import { AlbumDetails, Home } from './pages';

const App = () => {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/album/:albumId' element={<AlbumDetails />} />
      </Routes>
    </Container>
  );
};

export default App;
