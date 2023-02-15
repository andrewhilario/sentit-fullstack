'use client'

import Image from 'next/image'
import Link from 'next/link'
import { signOut } from 'next-auth/react'

type User = {
    image: string
}

export default function Logged({ image }: User) {
    return (
        <li className="flex gap-8 items-center">
            <Link href={'/dashboard'}>
                <Image width={64} height={64} src={image} alt='' priority className='w-14 rounded-full' />
            </Link>
            <button onClick={() => signOut()} className='bg-gray-700 text-white text-sm px-6 py-2 rounded-md'>Sign Out</button>

        </li>

    )
}