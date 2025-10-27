import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Character } from '../types/character';
import { fetchCharacterById } from '../services/apiService'; // Nosso serviço da Etapa 2

export const Detalhes: React.FC = () => {
  // O hook useParams captura o ':id' da URL
  const { id } = useParams<{ id: string }>();
  
  const [character, setCharacter] = useState<Character | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Função para buscar o personagem
    const getCharacterDetails = async () => {
      // Garantimos que o 'id' existe antes de buscar
      if (id) {
        setLoading(true);
        // O 'id' vem da URL como string, convertemos para número
        const numericId = parseInt(id, 10); 
        const data = await fetchCharacterById(numericId);
        setCharacter(data);
        setLoading(false);
      }
    };

    getCharacterDetails();
  }, [id]); // O 'id' é uma dependência: se o ID na URL mudar, a busca roda de novo

  // --- Feedback de Loading ---
  if (loading) {
    return (
      <div className="container text-center mt-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Carregando...</span>
        </div>
        <p className="mt-2">Buscando detalhes do personagem...</p>
      </div>
    );
  }

  // --- Feedback se o personagem não for encontrado ---
  if (!character) {
    return (
      <div className="container text-center mt-5">
        <h2>Personagem não encontrado</h2>
        <p>O personagem com o ID "{id}" não foi localizado na API.</p>
        <Link to="/personagens" className="btn btn-primary">
          Voltar para a Lista
        </Link>
      </div>
    );
  }

  // --- Exibição dos Detalhes (Personagem Encontrado) ---
  return (
    <div className="container mt-5">
      <div className="row">
        {/* Coluna da Imagem */}
        <div className="col-md-5 text-center">
          <img 
            src={character.img} 
            alt={character.name} 
            className="img-fluid rounded shadow-lg"
            style={{ maxHeight: '600px', objectFit: 'contain' }}
          />
        </div>

        {/* Coluna dos Detalhes */}
        <div className="col-md-7 mt-4 mt-md-0">
          <h1 className="display-4">{character.name}</h1>
          <p className="lead text-muted">
            {character.race} - {character.age ? `${character.age} anos` : 'Idade desconhecida'}
          </p>

          <hr className="my-4" />

          {/* Citação (Quote) */}
          <blockquote className="blockquote">
            <p className="mb-0">"{character.quote}"</p>
          </blockquote>

          {/* Descrição */}
          <h3 className="mt-4">Descrição</h3>
          <p>{character.description}</p>

          {/* Link para voltar */}
          <Link to="/personagens" className="btn btn-primary mt-3">
            <i className="bi bi-arrow-left"></i> Voltar para a Lista
          </Link>
        </div>
      </div>
    </div>
  );
};