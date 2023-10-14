import { useTranslations } from 'next-intl'

const Chat2 = () => {
    const t = useTranslations('Chat2')
    return (
        <div className='about' id='id3'>
            <div className='bubble-left about-left'>{t('p1')} </div>
            <div className='bubble-right about-right'>{t('p2')} </div>
        </div>
    )
}

export default Chat2
