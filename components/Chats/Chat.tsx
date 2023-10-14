'use client'

import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'
const Chat = () => {
    const t = useTranslations('Chat1')

    const [scroll, setScroll] = useState(0)

    const handleScroll = () => {
        setScroll(window.scrollY)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        const scrollByElementLeft = document.querySelectorAll('.about-left')
        const scrollByElementRight = document.querySelectorAll('.about-right')
        const cycleForAbout = (event: NodeListOf<Element>) => {
            for (var i = 0; i < event.length; i++) {
                const windowHeight = window.innerHeight
                const elementTop = event[i].getBoundingClientRect().top
                const elementVisible = 150

                if (elementTop < windowHeight - elementVisible) {
                    event[i].classList.add('__active')
                } else {
                    event[i].classList.remove('__active')
                }
            }
        }

        cycleForAbout(scrollByElementLeft)
        cycleForAbout(scrollByElementRight)
    })

    return (
        <div className='about' id='id1'>
            <div>
                <div className='bubble-left about-left'>{t('p1')}</div>
                <br />
                <div className='bubble-right about-right'>{t('p2')}</div>
                <br />
                <div className='bubble-left about-left'>{t('p3')}</div>
                <div className='bubble-right about-right'>{t('p4')} </div>
                <div className='bubble-left about-left'>{t('p5')} </div>
                <div className='bubble-right about-right'>{t('p6')}</div>
                <div className='bubble-left about-left'>{t('p7')} </div>
                <div className='bubble-right about-right'>{t('p8')} </div>
                <div className='bubble-left about-left'>{t('p9')} </div>
                <div className='bubble-right about-right'>{t('p10')} </div>
                <div className='bubble-left about-left'>{t('p11')} </div>
                <div className='bubble-right about-right'>{t('p12')} </div>
            </div>
        </div>
    )
}

export default Chat
