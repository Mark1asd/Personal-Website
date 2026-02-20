type Props = { children: React.ReactNode };

export function Background({ children }: Props) {
  return (
    <div className="min-h-screen text-white">
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-bg" />
        <div className="absolute -top-40 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-[120px]" />
        <div className="absolute top-40 left-[15%] h-[520px] w-[520px] rounded-full bg-purple-500/20 blur-[120px]" />
        <div className="absolute top-56 right-[10%] h-[520px] w-[520px] rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/60" />
      </div>

      {children}
    </div>
  );
}