'use client'

import { useTranslations } from 'next-intl'
import React from 'react'

export const MobileNavLinks = ({
    header_link_1,
    header_link_2,
    header_link_3,
    header_link_4,
}: any) => {
    function menuOnClick() {
        document.getElementById('menu-bar')!.classList.toggle('change')
        document.getElementById('menu-nav')!.classList.toggle('change')
        document.getElementById('menu-bg')!.classList.toggle('change-bg')
    }

    return (
        <div id='menu'>
            <div id='menu-bar' onClick={menuOnClick}>
                <div id='bar1' className='bar'></div>
                <div id='bar2' className='bar'></div>
                <div id='bar3' className='bar'></div>
            </div>
            <div className='menu-nav' id='menu-nav'>
                <ul>
                    <li>
                        <a href='#id1'>{header_link_1}</a>
                    </li>
                    <li>
                        <a href='#id2'>{header_link_2}</a>
                    </li>
                    <li>
                        <a href='#id3'>{header_link_3}</a>
                    </li>
                    <li>
                        <a href='#id4'>{header_link_4}</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
