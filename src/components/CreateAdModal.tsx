// dependencies
import { FormEvent, useEffect, useState }   from 'react';
import { Check, GameController, Tabs } from 'phosphor-react';
import axios                     from 'axios';
import * as Dialog               from '@radix-ui/react-dialog';
import * as Checkbox             from '@radix-ui/react-checkbox';

// components
import { Input }    from "./Input";
import { WeekDays } from './WeekDays';

// interfaces & types
type Game = {
  id   : string;
  title: string;
};

export function CreateAdModal() {
  // state
  const [games, setGames]                     = useState<Game[]>([]);
  const [weekDays, setWeekDays]               = useState<string[]>([]);
  const [useVoiceChannel, setUseVoiceChannel] = useState(false);

  // request
  useEffect(() => {
    axios('http://localhost:3333/games')
      .then(response => setGames(response.data));
  }, []);

  // functions
  async function handleCreateAd(e: FormEvent) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement)
    const data     = Object.fromEntries(formData);

    try {
      await axios.post(`http://localhost:3333/games/${data.game}/ads`, {
        name           : data.name,
        discord        : data.discord,
        hourStart      : data.hourStart,
        hourEnd        : data.hourEnd,
        useVoiceChannel: useVoiceChannel,
        weekDays       : weekDays.map(Number),
        yearsPlaying   : Number(data.yearsPlaying)
      });
    } catch (error) {
      console.error(error);
      alert('Erro ao criar anúncio');
    }
  }

  // HTML
  return (
    <Dialog.Portal>
      <Dialog.Overlay className='bg-black/60 inset-0 fixed' />
      <Dialog.Content className='bg-[#2a2634] fixed py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px]'>
        <Dialog.Title className='text-3xl text-white font-black'>Publique um anúncio</Dialog.Title>
        <form onSubmit={handleCreateAd} className='mt-8 flex flex-col gap-4'>
          <label htmlFor="game">Qual o game</label>
          <select 
            name='game'
            id="game" 
            defaultValue=""
            className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500"
          >
            <option>Selecione o game que deseja jogar</option>
            {games.map(game => (
              <option key={game.id} value={game.id}>{game.title}</option>
            ))}
          </select>
          <Input
            name='name'
            idLabel='name'
            textLabel='Seu nome (ou nickname)'
            type='text'
            placeholder='Como te chamam dentro do game?'
          />

          <div className='grid grid-cols-2 gap-6'>
            <Input
              name='yearsPlaying'
              idLabel='yearsPlaying'
              textLabel='Joga há quantos anos?'
              type='number'
              placeholder='Tudo bem ser ZERO'
            />
            <Input
              name='discord'
              idLabel='discord'
              textLabel='Qual seu Discord?'
              type='text'
              placeholder='Usuario#0000'
            />
          </div>

          <div className='flex gap-6'>
            <div className='flex flex-col gap-2'>
              <label htmlFor="hourStart" className="text-white font-semibold">Quando costuma jogar?</label>
              <WeekDays weekDays={weekDays} setWeekDays={setWeekDays} />
            </div>
            <div className='flex flex-col gap-2 flex-1'>
              <label htmlFor="hourStart" className="text-white font-semibold">Qual o horário do dia?</label>
              <div className='grid grid-cols-2 gap-2'>
                <input name='hourStart' id='hourStart' type="time" placeholder='De' className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500" />
                <input name='hourEnd' id='hourEnd' type="time" placeholder='Até' className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500" />
              </div>
            </div>
          </div>

          <label className='mt-2 flex gap-2 items-center text-sm cursor-pointer'>
            <Checkbox.Root checked={useVoiceChannel} onCheckedChange={(checked) => {
               if(checked === true) {
                 setUseVoiceChannel(true)
               } else {
                 setUseVoiceChannel(false)
               }
              }} className='w-6 h-6 p-1 rounded bg-zinc-900'>
              <Checkbox.Indicator>
                <Check className='w-4 h-4 text-emerald-400' />
              </Checkbox.Indicator>
            </Checkbox.Root>
            Costumo me conectar ao chat de voz
          </label>

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
  );
}