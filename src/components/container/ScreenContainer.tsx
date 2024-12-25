import React from 'react'

type Props = {
    children: React.ReactNode
}

function ScreenContainer({ children }: Props) {
    return (
        <main className='sm:w-[500px] w-full h-screen bg-white relative mx-auto overflow-y-auto'>
            {children}
        </main>
    )
}

export default ScreenContainer