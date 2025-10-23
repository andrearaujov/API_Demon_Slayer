// src/App.tsx
import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

// Importe as páginas
import { Home } from './pages/Home';
import { Personagens } from './pages/Personagens';
import { Detalhes } from './pages/Detalhes';

// Importe os componentes de layout
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

// Componente de Layout: Engloba o Navbar, o conteúdo (Outlet) e o Footer.
// Isso atende ao requisito de componentizar menu e rodapé.
const AppLayout: React.FC = () => {
  return (
    // Estrutura Flex para manter o rodapé embaixo (min-vh-100)
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <main className="flex-grow-1">
        <Outlet /> {/* O conteúdo da rota atual será renderizado aqui */}
      </main>
      <Footer />
    </div>
  );
};

// Componente principal da Aplicação
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rota "pai" que usa o AppLayout */}
        <Route path="/" element={<AppLayout />}>
          
          {/* As 3 rotas obrigatórias  */}
          <Route index element={<Home />} />
          <Route path="personagens" element={<Personagens />} />
          <Route path="detalhes/:id" element={<Detalhes />} />

          {/* (Opcional) Rota "Não encontrada" */}
          <Route path="*" element={
            <div className="container mt-4"><h1>Página não encontrada (404)</h1></div>
          } />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;