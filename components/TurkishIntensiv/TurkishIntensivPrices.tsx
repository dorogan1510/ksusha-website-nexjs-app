import { useTranslations } from 'next-intl'
import Link from 'next/link'

const TurkishIntensivPrices = () => {
    const t = useTranslations('TurkishIntensive')

    return (
        <div className='prices'>
            <h2>{t('prices')}</h2>
            <div className='flex-price'>
                <section>
                    <h3>{t('independent_tariff.h1')}</h3>
                    <p>{t("independent_tariff.what's_included")}</p>
                    <ul>
                        <li>{t('independent_tariff.li_1')}</li>
                        <li>{t('independent_tariff.li_2')}</li>
                        <li>{t('independent_tariff.li_3')}</li>
                        <li>{t('independent_tariff.li_4')}</li>
                        <li>{t('independent_tariff.li_5')}</li>
                        <li>{t('independent_tariff.li_6')}</li>
                        <li>{t('independent_tariff.li_7')}</li>
                        <li className='flex-price__line-through'>
                            {t('independent_tariff.li_8')}{' '}
                        </li>
                        <li className='flex-price__line-through'>
                            {t('independent_tariff.li_9')}{' '}
                        </li>
                    </ul>
                    <div className='flex-price__number'>
                        {t('independent_tariff.price')}
                    </div>
                    <Link
                        target='_blank'
                        className='flex-price__button'
                        href='https://wa.me/79523715490?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%AF%20%D1%85%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%BF%D0%B8%D1%81%D0%B0%D1%82%D1%8C%D1%81%D1%8F%20%D0%BD%D0%B0%20%D0%B8%D0%BD%D1%82%D0%B5%D0%BD%D1%81%D0%B8%D0%B2%20%D0%BF%D0%BE%20%D1%82%D1%83%D1%80%D0%B5%D1%86%D0%BA%D0%BE%D0%BC%D1%83%20%D1%8F%D0%B7%D1%8B%D0%BA%D1%83%20%D1%81%20%D1%82%D0%B0%D1%80%D0%B8%D1%84%D0%BE%D0%BC%20%22%D0%A1%D0%B0%D0%BC%D0%BE%D1%81%D1%82%D0%BE%D1%8F%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9%22.'
                    >
                        {t('independent_tariff.button')}{' '}
                    </Link>
                </section>
                <section>
                    <h3>{t('i_am_with_you_tariff.h1')}</h3>
                    <p>{t("i_am_with_you_tariff.what's_included")}</p>
                    <ul>
                        <li>{t('i_am_with_you_tariff.li_1')}</li>
                        <li>{t('i_am_with_you_tariff.li_2')}</li>
                        <li>{t('i_am_with_you_tariff.li_3')}</li>
                        <li>{t('i_am_with_you_tariff.li_4')}</li>
                        <li>{t('i_am_with_you_tariff.li_5')}</li>
                        <li>{t('i_am_with_you_tariff.li_6')}</li>
                        <li>{t('i_am_with_you_tariff.li_7')}</li>
                        <li>{t('i_am_with_you_tariff.li_8')}</li>
                        <li>{t('i_am_with_you_tariff.li_9')}</li>
                    </ul>
                    <div className='flex-price__number'>
                        {t('i_am_with_you_tariff.price')}
                    </div>
                    <Link
                        target='_blank'
                        className='flex-price__button'
                        href='https://wa.me/79523715490?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%AF%20%D1%85%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%BF%D0%B8%D1%81%D0%B0%D1%82%D1%8C%D1%81%D1%8F%20%D0%BD%D0%B0%20%D0%B8%D0%BD%D1%82%D0%B5%D0%BD%D1%81%D0%B8%D0%B2%20%D0%BF%D0%BE%20%D1%82%D1%83%D1%80%D0%B5%D1%86%D0%BA%D0%BE%D0%BC%D1%83%20%D1%8F%D0%B7%D1%8B%D0%BA%D1%83%20%D1%81%20%D1%82%D0%B0%D1%80%D0%B8%D1%84%D0%BE%D0%BC%20%22%D0%AF%20%D1%81%20%D1%82%D0%BE%D0%B1%D0%BE%D0%B9!%22.'
                    >
                        {t('i_am_with_you_tariff.button')}{' '}
                    </Link>
                </section>
            </div>
            <div className='prices__adv'>{t('h4_main')}</div>
        </div>
    )
}

export default TurkishIntensivPrices
