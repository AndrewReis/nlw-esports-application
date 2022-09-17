import { useState, useEffect } from 'react';
import * as Dialog from '@radix-ui/react-dialog';

import logoImage from './assets/logo.svg';

import { GameBanner } from './components/GameBanner'
import { AdBanner }   from './components/AdBanner';
import { Input }      from './components/Input';

import './styles/main.css';
import { WeekDays } from './components/WeekDays';
import { GameController } from 'phosphor-react';

type Game = {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  }
};

function App() {
  // state
  const [games, setGames] = useState<Game[]>([]);

  // request
  useEffect(() => {
    fetch('http://localhost:3333/games')
      .then(res => res.json())
      .then(data => setGames(data));
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

        <Dialog.Portal>
          <Dialog.Overlay className='bg-black/60 inset-0 fixed' />
          <Dialog.Content className='bg-[#2a2634] fixed py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px]'>
            <Dialog.Title className='text-3xl text-white font-black'>Publique um anúncio</Dialog.Title>
              <form className='mt-8 flex flex-col gap-4'>  
                <Input 
                  idLabel='game'
                  textLabel='Qual o Game'
                  type='text'
                  placeholder='Selecione o game que deseja jogar'
                />
                <Input 
                  idLabel='name'
                  textLabel='Seu nome (ou nickname)'
                  type='text'
                  placeholder='Como te chamam dentro do game?'
                />

                <div className='grid grid-cols-2 gap-6'>
                  <Input 
                    idLabel='yearsPlaying'
                    textLabel='Joga há quantos anos?'
                    type='number'
                    placeholder='Tudo bem ser ZERO'
                    />
                  <Input 
                    idLabel='discord'
                    textLabel='Qual seu Discord?'
                    type='text'
                    placeholder='Usuario#0000'
                  />
                </div>

                <div className='flex gap-6'>
                  <div className='flex flex-col gap-2'>
                    <label htmlFor="hourStart" className="text-white font-semibold">Qual o horário do dia?</label>
                    <WeekDays />
                  </div>
                  <div className='flex flex-col gap-2 flex-1'>
                    <label htmlFor="hourStart" className="text-white font-semibold">Qual o horário do dia?</label>
                    <div className='grid grid-cols-2 gap-2'>
                      <input id='hourStart' type="time" placeholder='De' className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500" />
                      <input id='hourStart' type="time" placeholder='Até' className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500" />
                    </div>
                  </div>
                </div>

                <div className='mt-2 flex gap-2 text-sm'>
                  <input type="checkbox" name="" id="" />
                  Costumo me conectar ao chat de voz
                </div>

                <footer className='mt-4 flex justify-end gap-4'>
                  <Dialog.Close className='bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600'>
                    Cancelar
                  </Dialog.Close>
                  <button type='submit' className='bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-600'>
                    <GameController size={24} />
                    Encontrar Duo
                  </button>
                </footer>
              </form>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  )
}

export default App