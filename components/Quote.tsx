import React from 'react'
import Image from 'next/image'
import ArabicCalligraphy from './ui/ArabicCalligraphy'
import quoteImage from '@/public/assets/quote-image.png'

const Quote = () => {
  return (
    <div className="bg-islamic-parchment w-full py-20 px-6 md:px-12 mb-36 border-y border-amber-300/20">
      <div className="max-w-4xl mx-auto bg-white/80 rounded-2xl shadow-sm border border-amber-300/15 overflow-hidden flex flex-col md:flex-row">
        <div className="relative w-full md:w-2/5 aspect-[3/2] md:aspect-auto md:self-stretch min-h-48">
          <Image
            src={quoteImage}
            alt="Islamic books and study"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 320px"
          />
        </div>

        <div className="flex-1 p-8 md:p-10">
          <ArabicCalligraphy
            as="p"
            className="text-2xl md:text-3xl text-emerald-800 text-center mb-6 leading-relaxed"
          >
            طَلَبُ الْعِلْمِ لَا يَنْتَهِي
          </ArabicCalligraphy>
          <blockquote className="relative text-lg md:text-xl text-gray-800 leading-relaxed">
            <div className="flex items-start gap-3">
              <ArabicCalligraphy className="text-4xl md:text-5xl font-bold text-emerald-800 leading-none mt-1 shrink-0">
                ﴾
              </ArabicCalligraphy>
              <div className="flex-1 pt-1">
                <p className="font-light">
                  Learning never stops. Each project deepens my understanding, and I strive never to grow complacent in what I know.
                </p>
              </div>
            </div>
            <div className="flex justify-end mt-3">
              <ArabicCalligraphy className="text-4xl md:text-5xl font-bold text-amber-300 leading-none">
                ﴿
              </ArabicCalligraphy>
            </div>
          </blockquote>
        </div>
      </div>
    </div>
  )
}

export default Quote
