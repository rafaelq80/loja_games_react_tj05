import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../../contexts/CartContext";
import CardCart from "../cardcart/CardCart";


function Cart() {

    const { items, quantidadeItems, valorTotal, limparCart } = useContext(CartContext)

    return (
        <div className="
                bg-gray-200 
                flex 
                flex-col
                justify-center
                mb-8
                ">

            <h1 className="text-4xl text-center my-4">
                Carrinho de Compras
            </h1>
            <h2 className="text-2xl text-center my-4">
                {items.length === 0 ? 'O Carrinho está vazio!' : ''}
            </h2>
            <div className='container mx-auto my-4 grid grid-cols-1 
                            md:grid-cols-2 lg:grid-cols-5 gap-4'>
                {
                    items.map(produto => (
                        <CardCart key={produto.id} item={produto} />
                    ))
                }
            </div>
                <div className="text-center text-lg">
                    <p>
                        <span className="font-semibold">Total de items adicionados: </span> 
                        {quantidadeItems}
                    </p>
                    <p>
                        <span className="font-semibold">Valor Total compra: </span> 
                        {Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                        }).format(valorTotal)}
                    </p>
                </div>
            <button className="rounded text-slate-100 bg-slate-400 
          hover:bg-slate-800 w-1/4 py-2 mx-auto flex justify-center mt-8"
                type="submit"
                disabled={items.length === 0 ? true : false}
                onClick={limparCart}>
                Finalizar Compra
            </button>
        </div>
    )
}

export default Cart