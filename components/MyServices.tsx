'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

import telegram from '@/public/img/telegram.png'
import { useTranslations } from 'next-intl'

const MyServices = (props: any) => {
    const [scroll, setScroll] = useState(0)

    const handleScroll = () => {
        setScroll(window.scrollY)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        const individualSessions = document.querySelectorAll(
            '.individual-sessions'
        )
        const consultationForRepetitors = document.querySelectorAll(
            '.consultation-for-repetitors'
        )

        const consultationForSpecificRequests = document.querySelectorAll(
            '.consultation-for-specific-requests'
        )
        const telegramWithHelpfulInformation = document.querySelectorAll(
            '.telegram-with-helpful-information'
        )
        const checklistForCardGames = document.querySelectorAll(
            '.checklist-for-card-games'
        )
        const checklistWithUsefulStuff = document.querySelectorAll(
            '.checklist-with-useful-stuff'
        )
        const telegramWithTextbooksAndMaterilas = document.querySelectorAll(
            '.telegram-with-textbooks-and-materials'
        )
        const offlineLessons = document.querySelectorAll('.offline-lessons')

        const cycleForServices = (event: NodeListOf<Element>) => {
            for (var i = 0; i < event.length; i++) {
                const windowHeight = window.innerHeight
                const elementTop = event[i].getBoundingClientRect().top
                const elementVisible = 150

                if (elementTop < windowHeight - elementVisible) {
                    event[i].classList.add('__animations')
                }
            }
        }

        cycleForServices(individualSessions)
        cycleForServices(consultationForRepetitors)
        cycleForServices(consultationForSpecificRequests)
        cycleForServices(telegramWithHelpfulInformation)
        cycleForServices(checklistForCardGames)
        cycleForServices(checklistWithUsefulStuff)
        cycleForServices(telegramWithTextbooksAndMaterilas)
        cycleForServices(offlineLessons)
    })

    const t = useTranslations('Services')

    return (
        <div className='services' id='id2'>
            <section className='section individual-sessions'>
                <h2>{t('personal_lessons.h1_main')}</h2>
                <div className='individual-sessions__flex-container'>
                    <div>
                        <h3>
                            {t('personal_lessons.format')} <br />
                            {t('personal_lessons.60_min')} <br />
                            {t('personal_lessons.90_min')}{' '}
                        </h3>
                        <p>{t('personal_lessons.p1_main')} </p>
                    </div>

                    <div className='rightside'>
                        <h3>{t('personal_lessons.available_languages')}</h3>
                        <ul>
                            <li>{t('personal_lessons.li_1')}</li>
                            <li>{t('personal_lessons.li_2')}</li>
                            <li>{t('personal_lessons.li_3')}</li>
                            <li>{t('personal_lessons.li_4')}</li>
                        </ul>
                    </div>
                </div>
            </section>
            <div className='first-flex-main-section'>
                <section className='section consultation-for-repetitors'>
                    <h2>{t('consultations_for_repetitors.h1_main')}</h2>
                    <h3>
                        {t('consultations_for_repetitors.duration')} <br />
                        {t('consultations_for_repetitors.price')}
                    </h3>
                    <p>{t('consultations_for_repetitors.p1_main')} </p>

                    <p>{t('consultations_for_repetitors.p2_main')} </p>
                </section>
                <div className='first-flex-main-section__right-side'>
                    <section className='section consultation-for-specific-requests'>
                        <h2>
                            {t('consultations_for_specific_request.h1_main')}
                        </h2>
                        <h3>
                            {t('consultations_for_specific_request.duration')}{' '}
                            <br />
                        </h3>
                        <p>
                            {t('consultations_for_specific_request.p1_main')}{' '}
                        </p>
                    </section>

                    <section className='section telegram-with-helpful-information'>
                        <div className='telegram-with-helpful-information__flex-container'>
                            <h2>
                                {t(
                                    'telegram_with_specific_information.h1_main'
                                )}
                            </h2>
                            <a target='_blank' href='https://t.me/morkoovochka'>
                                <div className='telegram-with-helpful-information__button'>
                                    <Image
                                        style={{
                                            width: '100%',
                                            height: 'auto',
                                        }}
                                        src={telegram}
                                        alt={''}
                                    />
                                </div>
                            </a>
                        </div>

                        <h3>
                            {t('telegram_with_specific_information.h2_main')}{' '}
                            <br />
                        </h3>
                        <p>
                            {t('telegram_with_specific_information.p1_main')}{' '}
                        </p>
                    </section>
                </div>
            </div>
            {/* <!-- End of first flex-main-section --> */}

            <div className='second-main-flex-section'>
                <div className='second-main-flex-section_left-side'>
                    <section className='section checklist-for-card-games'>
                        <div className='checklist-for-card-games__flex-container'>
                            <h2>{t('check_list_with_games.h1_main')}</h2>
                            <a
                                target='_blank'
                                className='checklist-for-card-games__button'
                                href='https://drive.google.com/file/u/2/d/1JkaEE_4DATLcXFmFTTDSc84fKYmrNYvR/view?usp=sharing'
                            >
                                {t('check_list_with_games.button')}
                            </a>
                        </div>
                        <h3>{t('check_list_with_games.h2_main')}</h3>
                        <h3>{t('check_list_with_games.price')}</h3>
                    </section>

                    <section className='section checklist-with-useful-stuff'>
                        <h2>{t('check_list_with_useful_materials.h1_main')}</h2>
                        <div className='checklist-with-useful-stuff__flex-container'>
                            <h3>
                                {t('check_list_with_useful_materials.price')}
                            </h3>
                            <p>
                                {t('check_list_with_useful_materials.p1_main')}{' '}
                            </p>
                        </div>
                    </section>
                </div>

                <section className='section telegram-with-textbooks-and-materials'>
                    <h2>{t('telegram_with_books.h1_main')}</h2>

                    <h3>
                        {t('telegram_with_books.h2_main')} <br />
                        {t('telegram_with_books.price')}
                    </h3>

                    <p>{t('telegram_with_books.p1_main')}</p>
                    <p>{t('telegram_with_books.p2_main')} </p>
                </section>
            </div>

            <section className='section offline-lessons'>
                <h2>{t('offline_lessons.h1_main')}</h2>

                <h3>{t('offline_lessons.price')}</h3>

                <h3>{t('offline_lessons.h2_main')}</h3>
                <p>{t('offline_lessons.p1_main')} </p>
                <p>{t('offline_lessons.p2_main')} </p>
                <p>{t('offline_lessons.p3_main')} </p>
            </section>
            {/* <!-- End of second main-flex-section --> */}
        </div>
    )
}

export default MyServices
