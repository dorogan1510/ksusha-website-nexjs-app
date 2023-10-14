import { useTranslations } from 'next-intl'
import Link from 'next/link'
import React from 'react'

const TranslationsWork = () => {
    const t = useTranslations('TranslationWork')

    return (
        <div className='services'>
            <section className='section translations'>
                <h2>{t('h1_main')}</h2>
                <h3>{t('h2_main')}</h3>
                <p>
                    {t('price_1')}
                    <br /> {t('price_2')}
                </p>

                <h3>{t('h3_main')}</h3>
                <ul>
                    <li>{t('li_1')}</li>
                    <li>{t('li_2')}</li>
                    <li>{t('li_3')}</li>
                    <li>{t('li_4')}</li>
                    <li>{t('li_5')}</li>
                    <li>{t('li_6')}</li>
                </ul>
                <h3>{t('examples')}</h3>
                <div className='flex flex-col md:flex-row md:justify-start md:gap-4 items-left'>
                    <div>
                        <Link
                            target='_blank'
                            className='translations__button'
                            href='https://docs.google.com/document/d/1C7nflx6xpjt4gBsRa2sgfqyYanyGAwIvZRUi0FySUmw/edit'
                        >
                            {t('button_1')}
                        </Link>
                        <Link
                            target='_blank'
                            className='translations__button'
                            href='https://docs.google.com/document/d/1--Q-mSN3NgB0CioiE5wfg-8_-YWAF3OGmuQBUDh2Wbs/edit'
                        >
                            {t('button_2')}
                        </Link>
                        <Link
                            target='_blank'
                            className='translations__button'
                            href='https://docs.google.com/document/d/17sKOV0bVpl0h7HvqxOfvdwHG1qzm37rlc7LI2chazDw/edit'
                        >
                            {t('button_3')}
                        </Link>
                    </div>
                    <div>
                        <Link
                            target='_blank'
                            className='translations__button'
                            href='https://docs.google.com/document/d/1w2yBzu27qA6eaF-srdbYKKzSnv-oLCVZwm19Eh_O6DA/edit?usp=sharing'
                        >
                            {t('button_4')}
                        </Link>
                        <Link
                            target='_blank'
                            className='translations__button'
                            href='https://docs.google.com/document/d/16_xHe59Z8ZqoOsxVRiP6vGF3ZJSrRc-qNnYzzBN2MPg/edit?usp=sharing'
                        >
                            {t('button_5')}
                        </Link>
                        <Link
                            target='_blank'
                            className='translations__button'
                            href='https://docs.google.com/document/d/16_xHe59Z8ZqoOsxVRiP6vGF3ZJSrRc-qNnYzzBN2MPg/edit?usp=sharing'
                        >
                            {t('button_6')}
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default TranslationsWork
