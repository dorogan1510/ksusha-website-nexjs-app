import LocaleSwitcherSelect from '@/components/LocaleSwitcherSelect'
import { MobileNavLinks } from '@/components/MobileNavLinks'
import { useLocale } from 'next-intl'
import { useTranslations } from 'next-intl'
import style from '@/app/styles/Header.module.scss'

const Header = () => {
    const locale = useLocale()
    const switcher = useTranslations('LocaleSwitcher')
    const t = useTranslations('Header')

    return (
        <header>
            <div className='container'>
                <div className='nav-flex'>
                    <LocaleSwitcherSelect
                        defaultValue={locale}
                        label={switcher('label')}
                    >
                        {['ru', 'en'].map(element => (
                            <option
                                key={element}
                                value={element}
                                className='option'
                            >
                                {switcher('locale', { locale: element })}
                            </option>
                        ))}
                    </LocaleSwitcherSelect>
                    <nav className='nav'>
                        <a href='#id1'>{t('header_link_1')}</a>
                        <a href='#id2'>{t('header_link_2')}</a>
                        <a href='#id3'>{t('header_link_3')}</a>
                        <a href='#id4'>{t('header_link_4')}</a>
                    </nav>
                </div>

                <MobileNavLinks
                    header_link_1={t('header_link_1')}
                    header_link_2={t('header_link_2')}
                    header_link_3={t('header_link_3')}
                    header_link_4={t('header_link_4')}
                />

                <div className='menu-bg' id='menu-bg'></div>
            </div>
        </header>
    )
}

export default Header
