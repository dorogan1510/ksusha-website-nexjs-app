import { useEffect } from 'react'

import Image from 'next/image'
import heroImage from '../public/img/bg1.jpg'
import instagram from '../public/img/instagram.svg'
import skype from '../public/img/skype.svg'
import telegram from '../public/img/telegram.svg'
import vk from '../public/img/vk.svg'
import whatsapp from '../public/img/whatsapp.svg'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { HeroSectionBtn } from './HeroSectionBtn'

const HeroSection = () => {
    const t = useTranslations('HeroSection')

    return (
        <main>
            <div className='flex-main'>
                <div className='left-side'>
                    <h1>{t('h1_main')}</h1>
                    <p>{t('p1_main')}</p>
                </div>
                <Image className='img' src={heroImage} alt={''} />
            </div>

            <div className='flex flex-col justify-between items-left'>
                <Link className='btn' href={'#id5'}>
                    {t('button1')}{' '}
                </Link>
                <HeroSectionBtn button2={t('button2')} />
            </div>
            <div className='contacts'>
                <a
                    className='contacts__email'
                    href='mailto: ksunchik459@gmail.com'
                >
                    ksunchik459@gmail.com{' '}
                </a>
                <div className='flex'>
                    <a href='https://vk.me/id246389144' target='_blank'>
                        <Image
                            className='contacts__social_link vk'
                            src={vk}
                            alt={''}
                        />
                    </a>
                    <a
                        href='https://api.whatsapp.com/send?phone=79523715490'
                        target='_blank'
                    >
                        <Image
                            className='contacts__social_link whatsapp'
                            src={whatsapp}
                            alt={''}
                        />
                    </a>
                    <a href='https://t.me/ksenia459' target='_blank'>
                        <Image
                            className='contacts__social_link telegram'
                            src={telegram}
                            alt={''}
                        />
                    </a>
                    <a href='skype:live:ksunchik459?chat' target='_blank'>
                        <Image
                            className='contacts__social_link skype'
                            src={skype}
                            alt={''}
                        />
                    </a>
                    <a
                        href='https://www.instagram.com/morkoovochka/'
                        target='_blank'
                    >
                        <Image
                            className='contacts__social_link instagram'
                            src={instagram}
                            alt={''}
                        />
                    </a>
                </div>
            </div>
        </main>
    )
}

export default HeroSection
