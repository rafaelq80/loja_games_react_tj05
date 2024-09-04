import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

function Footer() {

    let data = new Date().getFullYear()

    return (
        <>
            <div className="flex justify-center bg-slate-800 text-white">
                <div className="flex flex-col items-center py-4 container">
                    <p className='font-bold text-xl'>Loja de Games Generation | Copyright: {data}</p>
                    <p className='text-lg'>Acesse nossas redes sociais</p>
                    <div className='flex gap-2'>
                        
                            <LinkedinLogo size={48} weight='bold' />

                        
                            <InstagramLogo size={48} weight='bold' />
                        
                            <FacebookLogo size={48} weight='bold' />

                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer