import { User, ShoppingCart, MagnifyingGlass } from "@phosphor-icons/react"
import { Link } from "react-router-dom"

function Navbar() {

    return (

        <div className='flex justify-center bg-slate-800 py-4 w-full text-white'>
            <div className="flex justify-between text-lg container">
                <Link to='/home'>
                    <img
                        src="https://ik.imagekit.io/vzr6ryejm/games/logolg.png?updatedAt=1705976699033"
                        alt="Logo"
                        className='w-60'
                    />
                </Link>

                <div className="relative flex flex-1 justify-center items-center w-30 text-black">
                    <form className="flex justify-center w-3/4">
                        <input className="px-4 py-4 rounded-lg w-10/12 h-9 focus:outline-none"
                            type="search"
                            placeholder="Pesquisar produto"
                            id="busca"
                            name="busca"
                            required
                        />
                        <button type="submit" className="bg-teal-500 hover:bg-teal-900 dark:hover:bg-teal-700 dark:bg-teal-600 p-2.5 border border-teal-700 rounded-lg focus:ring-4 focus:ring-blue-300 dark:focus:ring-teal-800 w-9 h-9 font-medium text-sm text-white ms-2 focus:outline-none">
                            <MagnifyingGlass size={14} weight="bold" />
                        </button>
                    </form>
                </div>

                <div className='flex gap-4 py-4'>
                    Produtos
                    <Link to='/categorias' className='hover:underline'>Categorias</Link>
                    <Link to='/cadcategoria' className='hover:underline'>Cadastrar Categoria</Link>
                    <User size={32} weight='bold' />
                    <ShoppingCart size={32} weight='bold' />
                </div>
            </div>
        </div>
    )
}

export default Navbar