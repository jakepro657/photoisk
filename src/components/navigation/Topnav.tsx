import logo from '../../assets/Logo512.png'

type Props = {}

function Topnav({ }: Props) {
    return (
        <nav>
            <div className='flex justify-between items-center p-4 bg-white border-b border-gray-200'>
                <div className='flex items-center gap-4 ml-[10%]'>
                    <img src={logo} alt='logo' className='w-10 h-10 inline-block' />
                    <h1 className='text-xl font-bold'>Photoisk</h1>
                </div>
            </div>
            <div className='flex flex-col items-center gap-6 p-4'>
                <h1 className='text-center text-2xl font-bold mt-4'>Re-style your images</h1>
                <p className='text-center text-gray-500'>Upload your images and apply filters to them</p>
            </div>
            <input type='file' className='w-full h-64 p-4' />
        </nav>
    )
}

export default Topnav