export function WeekDays() {
  return (
    <div className="grid grid-cols-4 gap-2">
      <button title="Domingo" className="w-8 h-8 rounded bg-zinc-900">D</button>
      <button title="Segunda" className="w-8 h-8 rounded bg-zinc-900">S</button>
      <button title="Terça" className="w-8 h-8 rounded bg-zinc-900">S</button>
      <button title="Quarta" className="w-8 h-8 rounded bg-zinc-900">Q</button>
      <button title="Quinta" className="w-8 h-8 rounded bg-zinc-900">Q</button>
      <button title="Sexta" className="w-8 h-8 rounded bg-zinc-900">S</button>
      <button title="Sábado" className="w-8 h-8 rounded bg-zinc-900">S</button>
    </div>
  );
}