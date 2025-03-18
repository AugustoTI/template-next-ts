export default function HomePage() {
  return (
    <div className="grid min-h-svh place-items-center bg-gradient-to-t from-[#020024] to-[#080882]">
      <div className="motion-preset-fade-lg motion-preset-slide-up-md">
        <h1 className="text-6xl font-bold text-white drop-shadow-xl">
          Hello, Next.js!{' '}
          <span className="motion-preset-fade motion-delay-[900ms]">😉</span>
        </h1>
      </div>
    </div>
  )
}
