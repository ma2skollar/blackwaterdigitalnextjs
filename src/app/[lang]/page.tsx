import type { Metadata, ResolvingMetadata } from 'next'

import { getDictionary } from './dictionaries'

type Props = {
  params: Promise<{ lang: 'en' | 'sk' }>
}

export async function generateMetadata({
  params,
  }: Props, parent: ResolvingMetadata
): Promise<Metadata> {
  const { lang } = await params
  const dict = await getDictionary(lang)
  return {
    title: dict.head.title,
    description: dict.head.description,
    icons: {
      icon: '/favicon.ico',
    }
  }
}

export default async function Page({
  params,
}: Props) {
  const { lang } = await params
  const dict = await getDictionary(lang)
  return (
    <>
      <header>
      </header>
      <main>

      </main>
    </>
  )
}