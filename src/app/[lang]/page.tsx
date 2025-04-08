import type { Metadata, ResolvingMetadata } from 'next'

import {Dictionary, getDictionary} from './dictionaries'
import {LangParams} from "@/app/[lang]/layout";
import Header from '../components/header/header';
import {Language} from "@/app/[lang]/languages";

type Props = {
  params: Promise<LangParams>
}

export interface LangProps {
  langInfo: {
    lang: Language,
    dict: Dictionary
  };
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

export default async function Home({
  params,
}: Props) {
  const { lang } = await params
  const dict = await getDictionary(lang)
  const langInfo = {
    lang,
    dict,
  }

  return (
    <>
      <Header langInfo={langInfo} />
      <main>
        <h1>{dict.welcome}</h1>
      </main>
    </>
  )
}