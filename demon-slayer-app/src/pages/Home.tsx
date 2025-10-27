// src/pages/Home.tsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Character } from '../types/character';
import { fetchCharacters } from '../services/apiService';
import { CharacterCard } from '../components/CharacterCard';

export const Home: React.FC = () => {
  const [featuredChars, setFeaturedChars] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getFeatured = async () => {
      setLoading(true);
      // Busca os personagens (que virão da 'data.content')
      const allChars = await fetchCharacters();
      
      // Pega apenas os 3 primeiros como "destaques"
      setFeaturedChars(allChars.slice(0, 3));
      setLoading(false);
    };

    getFeatured();
  }, []);

  return (
    <div className="container mt-5">

      {/* Seção 1: Apresentação (Jumbotron) */}
      <div className="p-5 mb-4 bg-light rounded-3 shadow-sm" style={{ backgroundColor: '#fff' }}>
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">Demon Slayer (Kimetsu no Yaiba)</h1>
          <p className="col-md-8 fs-4">
            Este projeto é uma aplicação web que consome a API de Demon Slayer
            para exibir informações sobre seus personagens.
          </p>
          <p>
            Desenvolvido para o Desafio D1 - Desenvolvimento de Software da Zetta Lab,
            utilizando React, TypeScript, SASS e Bootstrap 5+.
          </p>
          <Link to="/personagens" className="btn btn-primary btn-lg mt-3">
            Ver Todos os Personagens
          </Link>
        </div>
      </div>

      {/* Seção 2: Personagens em Destaque */}
      <h2 className="mb-4 text-center">Personagens em Destaque</h2>

      {loading ? (
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Carregando...</span>
          </div>
        </div>
      ) : (
        <div className="row g-4">
          {featuredChars.map(char => (
            // Grid responsivo (1 col em mobile, 3 em desktop)
            <div key={char.id} className="col-12 col-md-6 col-lg-4">
              <CharacterCard character={char} />
            </div>
          ))}
        </div>
      )}

    </div>
  );
};