import Link from 'next/link'
import { ArrowLeft, ExternalLink, Info } from 'lucide-react'


import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Yeni Geldim',
}

interface NewContent {
  id: number
  name: string
  text: string
  followUpLink: string
}

const newContents: NewContent[] = [
  {
    id: 1,
    name: "Kayıt Süreci",
    text: "Yeni öğrenciler için adım adım kayıt sürecini öğrenin.",
    followUpLink: "https://www.emu.edu.tr/en/prospective-students/online-application/752"
  },
  {
    id: 2,
    name: "Kampüs Turu",
    text: "DAÜ kampüsünde sanal bir tur atın ve önemli yerlerle tanışın.",
    followUpLink: "https://www.youtube.com/watch?v=cHo0KsEUBYs"
  },
  {
    id: 3,
    name: "Öğrenci Hizmetleri",
    text: "Akademik yolculuğunuzu destekleyen çeşitli öğrenci hizmetlerini keşfedin.",
    followUpLink: "https://www.emu.edu.tr/en/campus/registrars-office/student-services-office/718"
  }
]

export default function NewToEmuPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/" className="inline-flex items-center mb-6 text-blue-600 hover:text-blue-800 transition-colors duration-300">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Ana Sayfaya Geri Dön
      </Link>
      <h1 className="text-4xl font-bold text-gray-900 mb-8">DAÜ&apos;de Yeniyim</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newContents.map((content) => (
          <div key={content.id} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <Info className="w-5 h-5 mr-2 text-gray-700" />
              {content.name}
            </h2>
            <p className="text-lg text-gray-700 mb-4">{content.text}</p>
            <a 
              href={content.followUpLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              Daha Fazla Öğren
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
