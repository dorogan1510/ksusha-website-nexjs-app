import { useTranslations } from 'next-intl'

const BenefitsFromIntensiv = () => {
    const t = useTranslations('TurkishIntensive')
    return (
        <div className='bonus' id='id5'>
            <h3 className='bonus__adv'>{t('h2_main')}</h3>
            <h2>{t('h3_main')}</h2>
            <div className='bonus__flex'>
                <div className='bonus__flex-item'>
                    <div className='bonus__flex-item-shape'>
                        <div className='bonus__flex-item-number'>1</div>
                    </div>
                    <div>
                        <h3>{t('li_1')} </h3>
                    </div>
                </div>
                <div className='bonus__flex-item'>
                    <div className='bonus__flex-item-shape'>
                        <div className='bonus__flex-item-number'>2</div>
                    </div>
                    <div>
                        <h3>{t('li_2')}</h3>
                    </div>
                </div>
                <div className='bonus__flex-item'>
                    <div className='bonus__flex-item-shape'>
                        <div className='bonus__flex-item-number'>3</div>
                    </div>
                    <div>
                        <h3>{t('li_3')} </h3>
                    </div>
                </div>
                <div className='bonus__flex-item'>
                    <div className='bonus__flex-item-shape'>
                        <div className='bonus__flex-item-number'>4</div>
                    </div>
                    <div>
                        <h3>{t('li_4')}</h3>
                    </div>
                </div>
                <div className='bonus__flex-item'>
                    <div className='bonus__flex-item-shape'>
                        <div className='bonus__flex-item-number'>5</div>
                    </div>
                    <div>
                        <h3>{t('li_5')} </h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BenefitsFromIntensiv
