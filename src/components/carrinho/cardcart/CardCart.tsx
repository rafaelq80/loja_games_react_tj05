import { useContext } from "react"
import { CartContext, Items } from "../../../contexts/CartContext"
import Produto from "../../../models/Produto"
import { Plus, Minus } from "@phosphor-icons/react"

interface CardProdutosProps {
    item: Items
}

function CardCart({ item }: CardProdutosProps) {

    const { aumentarProduto, removerProduto } = useContext(CartContext)

    return (
        <div className='flex flex-col rounded-lg overflow-hidden justify-between bg-white'>
            <div className='py-4'>

                <img src={item.foto} className='mt-1 h-40 max-w-75 mx-auto' alt={item.nome} />

                <div className='p-4'>
                    <p className='text-sm text-center uppercase'>{item.nome}</p>
                    <h3 className='text-xl text-center font-bold uppercase'>
                        {Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                        }).format(item.preco)}
                    </h3>
                    <p className='text-sm italic text-center'>Categoria: {item.categoria?.tipo} </p>
                    <h4 className='my-2 text-center'>
                        <span className="font-semibold">Quantidade:</span> {item.quantidade} 
                    </h4>
                </div>
            </div>
            <div className="flex flex-wrap">
                <button className='w-1/2 text-slate-100 bg-blue-500 hover:bg-blue-700 
                                   flex items-center justify-center py-2'
                    onClick={() => aumentarProduto(item.id)}>
                    <Plus size={32} />
                </button>
                <button className='w-1/2 text-slate-100 bg-red-500 hover:bg-red-700 
                                   flex items-center justify-center py-2'
                    onClick={() => removerProduto(item.id)}>
                    <Minus size={32} />
                </button>
            </div>
        </div >
    )
}

export default CardCart