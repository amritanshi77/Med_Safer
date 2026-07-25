export default function PhoneFrame({ children }) {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-slate-100 py-8">
      <div className="relative w-[390px] h-[844px] bg-black rounded-[3rem] p-3 shadow-2xl">
        <div className="w-full h-full bg-bg rounded-[2.3rem] overflow-hidden relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-20" />
          <div className="w-full h-full overflow-y-auto">{children}</div>
        </div>
      </div>
    </div>
  );
}
