import type { Metadata, ResolvingMetadata } from 'next'

import { getDictionary } from './dictionaries'
import {LangParams} from "@/app/[lang]/layout";

type Props = {
  params: Promise<LangParams>
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
        <h1>{dict.welcome}</h1>
      </main>
    </>
  )
}