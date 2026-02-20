export default function Ornament() {
  return (
    <div className="flex items-center gap-5 mb-6">
      <div className="flex-1 h-px bg-amber-300/30" />
      <div className="w-2 h-2 bg-amber-600 rotate-45" />
      <div className="flex-1 h-px bg-amber-300/30" />
    </div>
  );
}