import { createContext, ReactNode, useState } from "react";
import Produto from "../models/Produto";


export interface Items extends Produto{
    quantidade: number;
}

interface CartContextProps {
    adicionarProduto: (produto: Produto) => void;
    aumentarProduto: (produtoId: number) => void;
    removerProduto: (produtoId: number) => void;
    limparCart: () => void;
    items: Items[];
    quantidadeItems: number;
    valorTotal: number;
}

interface CartProviderProps {
    children: ReactNode;
}

export const CartContext = createContext({} as CartContextProps);

export function CartProvider({ children }: CartProviderProps) {
    
    const [items, setItems] = useState<Items[]>([]);

    // Calcula o número total de itens no carrinho (quantidade acumulada)
    const quantidadeItems = items.reduce((acc, item) => acc + item.quantidade, 0);

    // Calcula o valor total da compra
    const valorTotal = items.reduce((acc, item) => acc + item.preco * item.quantidade, 0);

    // Função para adicionar produtos ao carrinho
    function adicionarProduto(produto: Produto) {
        const itemIndex = items.findIndex(item => item.id === produto.id);
        
        if (itemIndex !== -1) {
            // Produto já está no carrinho, aumenta a quantidade
            const novoCart = [...items];
            novoCart[itemIndex].quantidade += 1;
            setItems(novoCart);
           alert('01 item adicionado!');
        } else {
            // Produto não está no carrinho, adiciona novo item
            setItems(prevItems => [...prevItems, { ...produto, quantidade: 1 }]);
           alert('Produto adicionado ao carrinho!');
        }
    }

    function aumentarProduto(produtoId: number) {
        const itemIndex = items.findIndex(item => item.id === produtoId);
        
        if (itemIndex !== -1) {
            const novoCart = [...items];
            novoCart[itemIndex].quantidade += 1;
            setItems(novoCart);
           alert('01 item adicionado!');
        } else {
           alert('Produto não encontrado no carrinho!');
        }
    }

    // Função para remover produtos do carrinho (reduz a quantidade ou remove)
    function removerProduto(produtoId: number) {
        const itemIndex = items.findIndex(item => item.id === produtoId);
        
        if (itemIndex !== -1) {
            const novoCart = [...items];
            
            if (novoCart[itemIndex].quantidade > 1) {
                // Reduz a quantidade do produto
                novoCart[itemIndex].quantidade -= 1;
                setItems(novoCart);
               alert('01 Item removido!');
            } else {
                // Remove o produto se a quantidade for 1
                novoCart.splice(itemIndex, 1);
                setItems(novoCart);
               alert('Produto removido!');
            }
        }
    }

    // Função para limpar o carrinho
    function limparCart() {
       alert('Compra efetuada com sucesso!');
        setItems([]);
    }

    return (
        <CartContext.Provider 
            value={{ adicionarProduto, aumentarProduto, removerProduto, limparCart, items, quantidadeItems, valorTotal }}
        >
            {children}
        </CartContext.Provider>
    );
}
