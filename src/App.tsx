import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import DeletarCategoria from './components/categorias/deletarcategorias/DeletarCategoria';
import FormCategoria from './components/categorias/formcategoria/FormCategoria';
import ListarCategorias from './components/categorias/listarcategorias/ListarCategorias';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import DeletarProduto from './components/produtos/deletarprodutos/DeletarProduto';
import FormularioProduto from './components/produtos/formproduto/FormularioProduto';
import ListarProdutos from './components/produtos/listarprodutos/ListarProdutos';
import Cart from './components/carrinho/cart/Cart';
import { CartProvider } from './contexts/CartContext';

function App() {

  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          <div className='min-h-[90vh] bg-gray-200'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/categorias" element={<ListarCategorias />} />
              <Route path="/cadcategoria" element={<FormCategoria />} />
              <Route path="/editarcategoria/:id" element={<FormCategoria />} />
              <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
              <Route path="/produtos" element={<ListarProdutos />} />
              <Route path="/cadastrarproduto" element={<FormularioProduto />} />
              <Route path="/editarproduto/:id" element={<FormularioProduto />} />
              <Route path="/deletarproduto/:id" element={<DeletarProduto />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App
