import { MagnifyingGlassPlus } from 'phosphor-react';

import './styles/main.css';
import logoImage from './assets/logo.svg';

function App() {
  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>
      <img src={logoImage} alt="NLW Esports" />
      <h1 className='text-6xl text-white font-black mt-20'>
        Seu <span className='bg-nlw-gradient text-transparent bg-clip-text'>duo</span> está aqui.
      </h1>

      <div className='grid grid-cols-6 gap-6 mt-16'>
        <a href="#" className='relative rounded-lg overflow-hidden'>
          <img src="/game.png" alt="" />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block mb-1'>League of Legends</strong>
            <span className='text-zinc-300 block text-sm'>4 anúncios</span>
          </div>
        </a>
      </div>

      <div className='mt-8 pt-1 bg-nlw-gradient self-stretch rounded-lg overflow-hidden'>
        <div className='bg-[#2a2634] px-8 py-6 flex justify-between'>
          <div>
            <strong className='text-2xl text-white font-black block'>Não encontrou seu duo?</strong>
            <span className='text-zinc-400'>Publique um anúncio para encontrar novos players!</span>
          </div>
          <button className='flex items-center gap-3 py-3 px-4 bg-violet-500 rounded text-white hover:bg-violet-600'>
            <MagnifyingGlassPlus size={24} />
            Publicar anúncio
          </button>
        </div>
      </div>
    </div>
  )
}

export default App