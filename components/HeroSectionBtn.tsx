'use client'

import React, { useEffect } from 'react'

export const HeroSectionBtn = ({ button2 }: any) => {
    useEffect(() => {
        const btn = document.getElementById('btn')

        const changeBtnDisplay = () => {
            const delayAnimation = () => {
                document.getElementById('btn')!.style.display = 'none'
            }
            document.getElementById('btn')!.style.visibility = 'none'

            setTimeout(delayAnimation, 800)

            document.getElementById('btn')!.style.opacity = '0'
        }

        const changeContactsDisplay = () => {
            const contacts = document.querySelector('.contacts') as HTMLElement
            const delayAnimation1 = () => {
                contacts.style.display = 'flex'
            }
            const delayAnimation2 = () => {
                contacts.style.opacity = '1'
            }
            setTimeout(delayAnimation1, 800)
            setTimeout(delayAnimation2, 1000)
        }

        btn!.addEventListener('click', function () {
            changeContactsDisplay()
            changeBtnDisplay()
        })
    }, [])

    return (
        <button className='btn' type='button' id='btn'>
            {button2}
        </button>
    )
}
