import React from 'react'

type Props = {
    children: React.ReactNode
}

function ScreenContainer({ children }: Props) {
    return (
        <main className='relative sm:w-[500px] w-full h-full'>
            {children}
        </main>
    )
}

export default ScreenContainer