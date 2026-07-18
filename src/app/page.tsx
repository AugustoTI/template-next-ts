import { getT } from 'next-i18next/server'

export default async function HomePage() {
  const { t } = await getT('home')

  return (
    <>
      <h1 className="text-6xl font-bold">{t('title')}</h1>
    </>
  )
}
