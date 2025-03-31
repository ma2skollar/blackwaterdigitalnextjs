import { getDictionary } from './dictionaries'

export default async function Page({
  params,
}: {
  params: Promise<{ lang: 'en' | 'sk' }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang) // en
  return <h1>{dict.welcome}</h1> // Add to Cart
}