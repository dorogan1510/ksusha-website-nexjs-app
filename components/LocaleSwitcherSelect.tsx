'use client'

import clsx from 'clsx'
import { useRouter } from 'next/navigation'
import { usePathname } from 'next-intl/client'
import { ChangeEvent, ReactNode, useTransition } from 'react'

type Props = {
    children: ReactNode
    defaultValue: string
    label: string
}

export default function LocaleSwitcherSelect({
    children,
    defaultValue,
    label,
}: Props) {
    const router = useRouter()
    const pathname = usePathname()
    const [isPending, startTransition] = useTransition()

    function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
        startTransition(() => {
            router.replace(`/${event.target.value}${pathname}`)
        })
    }

    return (
        <label className='relative rounded-xl bg-[#856D47] text-white'>
            <select
                className='inline-flex appearance-none bg-transparent p-2'
                defaultValue={defaultValue}
                disabled={isPending}
                onChange={onSelectChange}
            >
                {children}
            </select>
            <span className='pointer-events-none absolute top-[8px] right-2'></span>
        </label>
    )
}
