﻿import Carrossel from "../../components/carrossel/Carrossel"
import ListarProdutos from "../../components/produtos/listarprodutos/ListarProdutos"

function Home() {
    return (
        <>
            <div>
                <Carrossel />
            </div>
            <ListarProdutos />
        </>
    )
}

export default Home