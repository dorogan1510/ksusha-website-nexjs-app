import { useTranslations } from 'next-intl'
import React from 'react'

const Chat3 = () => {
    const t = useTranslations('Chat3')
    return (
        <div className='about' id='id1'>
            <div className='bubble-left about-left'>{t('p1')}</div>
            <div className='bubble-right about-right'>{t('p2')}</div>
        </div>
    )
}

export default Chat3
