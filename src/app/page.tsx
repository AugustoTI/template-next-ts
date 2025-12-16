import { useTranslations } from 'next-intl'

export default function HomePage() {
  const t = useTranslations('Home')

  return (
    <div className="grid min-h-svh place-items-center bg-linear-to-t from-[#020024] to-[#080882]">
      <div className="animate-in space-y-2 text-center duration-300 fade-in-0 slide-in-from-bottom-50">
        <h1 className="text-6xl font-bold text-white drop-shadow-xl">{t('welcome')}</h1>
        <p className="text-balance text-white">{t('description')} 🌐</p>
      </div>
    </div>
  )
}
