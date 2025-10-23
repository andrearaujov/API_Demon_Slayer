import React from 'react';
import { useParams } from 'react-router-dom';

export const Detalhes: React.FC = () => {
  // O hook useParams captura o ':id' da URL
  const { id } = useParams<{ id: string }>();

  return (
    <div className="container mt-4">
      <h1>Detalhes do Personagem</h1>
      <p>ID do personagem selecionado: {id}</p>
    </div>
  );
};