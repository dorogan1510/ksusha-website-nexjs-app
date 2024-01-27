import localFont from 'next/font/local'
import type { Metadata } from 'next'
import '../styles/globals.scss'
import '../styles/Header.scss'
import '../styles/HeroSection.scss'
import '../styles/Chat.scss'
import '../styles/MyServices.scss'
import '../styles/Reviews.scss'
import '../styles/TurkishIntensiv/BenefitsFromIntensiv.scss'
import '../styles/TurkishIntensiv/Prices.scss'
import '../styles/TurkishIntensiv/TurkishHeroSection.scss'

import { NextIntlClientProvider, useLocale, useMessages } from 'next-intl'
import { notFound } from 'next/navigation'

export const metadata: Metadata = {
    title: 'Ксения Сухарева — Преподаватель иностранных языков.',
    description:
        'Ксения Сухарева. Со мной можно выучить английский, турецкий, французский и арабский языки. Также у меня можно пройти онлайн интенсив по турецкому языку и с нуля начать говорить на турецком.',
    keywords:
        'english language, french language, arabic language, turkish language, английский язык, турецкий язык, арабский язык, французский язык, онлайн курс по турецкому языку, интенсив по турецкому, выучить английский, выучить вранцузский, выучить арабский, выучить турецкий, morkoovochka, преподаватель английского, английский для начинающих, турецкий для начинающих, арабский для начинающих, французский для начинающих',
}

// const raleway = Raleway({
//     weight: ['300', '400', '500', '700'],
//     subsets: ['latin', 'cyrillic'],
// })

const raleway = localFont({
    src: [
        {
            path: '../fonts/Raleway-Light.ttf',
            weight: '300',
            style: 'normal',
        },
        {
            path: '../fonts/Raleway-Regular.ttf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../fonts/Raleway-SemiBold.ttf',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../fonts/Raleway-Bold.ttf',
            weight: '700',
            style: 'normal',
        },
    ],
})

export default function RootLayout({
    children,
    params,
}: {
    children: React.ReactNode
    params: any
}) {
    const locale = useLocale()

    // Show a 404 error if the user requests an unknown locale
    if (params.locale !== locale) {
        notFound()
    }

    const messages = useMessages()

    return (
        <html lang={locale}>
            <NextIntlClientProvider locale={locale} messages={messages}>
                <body className={raleway.className}>{children}</body>
            </NextIntlClientProvider>
        </html>
    )
}
