import { useState } from 'react';
import ArtistPage from './pages/ArtistPage';
import Home from './pages/Home';
import './App.css';

const App = () => {
  const [artistId, setArtistId] = useState<string | null>(null)

  return (
    <div className="App">
      {
        artistId ?
          <ArtistPage artistId={artistId} onGoBack={() => setArtistId(null)} />
          :
          <Home onProfileClick={artistId => setArtistId(artistId)} />
      }
    </div>
  );
}
export default App;