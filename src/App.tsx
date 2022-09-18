// dependencies
import { useState, useEffect } from 'react';
import axios                   from 'axios';
import * as Dialog             from '@radix-ui/react-dialog';

// components
import { GameBanner }    from './components/GameBanner'
import { AdBanner }      from './components/AdBanner';
import { CreateAdModal } from './components/CreateAdModal';

// styles & images
import './styles/main.css';
import logoImage from './assets/logo.svg';

// interfaces & types
type Game = {
  id       : string;
  title    : string;
  bannerUrl: string;
  _count   : {
    ads: number;
  }
};

function App() {
  // state
  const [games, setGames] = useState<Game[]>([]);

  // request
  useEffect(() => {
    axios('http://localhost:3333/games')
      .then(response => setGames(response.data));
  }, []);

  // HTML
  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>
      <img src={logoImage} alt="NLW Esports" />
      <h1 className='text-6xl text-white font-black mt-20'>
        Seu <span className='bg-nlw-gradient text-transparent bg-clip-text'>duo</span> está aqui.
      </h1>
      <div className='grid grid-cols-6 gap-6 mt-16'>
        {games.map(game => (
          <GameBanner key={game.id} bannerUrl={game.bannerUrl} title={game.title} adsCount={game._count.ads} />
        ))}
      </div>

      <Dialog.Root>
        <AdBanner />
        <CreateAdModal />
      </Dialog.Root>
    </div>
  )
}

export default App