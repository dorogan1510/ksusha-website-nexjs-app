import Header from '@/globalComponents/Header'
import HeroSection from '@/components/HeroSection'
import MyServicesClientComponent from '@/components/MyServices'
import Reviews from '@/components/Reviews'
import TranslationsWork from '@/components/TranslationsWork'
import BenefitsFromIntensiv from '@/components/TurkishIntensiv/BenefitsFromIntensiv'
import TurkishIntensivPrices from '@/components/TurkishIntensiv/TurkishIntensivPrices'
import { NextIntlClientProvider, useLocale, useMessages } from 'next-intl'
import MyServices from '@/components/MyServices'
import Chat from '@/components/Chats/Chat'
import Chat2 from '@/components/Chats/Chat2'
import Chat3 from '@/components/Chats/Chat3'

export default function Home() {
    const locale = useLocale()

    return (
        <div className='page'>
            <Header />
            <div className='container'>
                <HeroSection />
                <BenefitsFromIntensiv />
                <TurkishIntensivPrices />
                <Chat />
                <MyServices />
                <Chat2 />
                <TranslationsWork />
                <Chat3 />
                <Reviews />
            </div>
        </div>
    )
}
