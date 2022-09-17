import { MagnifyingGlassPlus } from 'phosphor-react';
import * as Dialog from '@radix-ui/react-dialog'

export function AdBanner() {
  return (
    <div className='mt-8 pt-1 bg-nlw-gradient self-stretch rounded-lg overflow-hidden'>
      <div className='bg-[#2a2634] px-8 py-6 flex justify-between'>
        <div>
          <strong className='text-2xl text-white font-black block'>Não encontrou seu duo?</strong>
          <span className='text-zinc-400'>Publique um anúncio para encontrar novos players!</span>
        </div>
        <Dialog.Trigger className='flex items-center gap-3 py-3 px-4 bg-violet-500 rounded text-white hover:bg-violet-600'>
          <MagnifyingGlassPlus size={24} />
          Publicar anúncio
        </Dialog.Trigger>
      </div>
    </div>
  )
}