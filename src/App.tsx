import { useState } from 'react';
import './App.css';
import ArtistPage from './pages/ArtistPage';
import Home from './pages/Home';

const App = () => {
  const [isArtistProfile, setIsArtistProfile] = useState(true)
  return (
    <div className="App">
      {
        isArtistProfile ?
          <ArtistPage onGoBack={() => setIsArtistProfile(false)} />
          :
          <Home />
      }
    </div>
  );
}
export default App;