import React, { useEffect, useState } from 'react';
import { Character } from '../types/character';
import { fetchCharacters } from '../services/apiService'; // Nosso serviço da Etapa 2
import { CharacterCard } from '../components/CharacterCard'; // Nosso card da Etapa 4.1

export const Personagens: React.FC = () => {
  // Estados para guardar os personagens, o loading e o filtro de busca
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  // useEffect para buscar os dados da API quando o componente montar
  useEffect(() => {
    const getCharacters = async () => {
      setLoading(true);
      const data = await fetchCharacters(); 
      setCharacters(data);
      setLoading(false);
    };

    getCharacters();
  }, []); // O array vazio [] garante que isso rode apenas uma vez

  // Lógica de filtro
  const filteredCharacters = characters.filter(char =>
    char.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Exibe um feedback de loading enquanto a API não responde
  if (loading) {
    return (
      <div className="container text-center mt-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Carregando...</span>
        </div>
        <p className="mt-2">Buscando personagens...</p>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Personagens de Demon Slayer</h1>

      {/* Campo de Busca */}
      <div className="mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Buscar personagem pelo nome..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Grid Responsivo - Atendendo aos Requisitos 
        - Bootstrap 5+ [cite: 8] usa 'g-4' (gap) para espaçamento.
      */}
      <div className="row g-4">
        {filteredCharacters.map(char => (
          // Chave (key) é essencial para o React em listas
          <div 
            key={char.id} 
            className="
              col-12 
              col-md-6 
              col-lg-4
            "
          >
            {/* Classes de Grid:
              - 'col-12': X-Small (<576px) - 1 coluna [cite: 17]
              - 'col-md-6': Medium (≥768px) - 2 colunas [cite: 18]
              - 'col-lg-4': Large (≥992px) - 3 colunas [cite: 19]
              (Usei col-lg-4 para 3 colunas; col-lg-3 daria 4 colunas. Ambas atendem ao requisito 'Large')
            */}
            <CharacterCard character={char} />
          </div>
        ))}
      </div>
      
      {/* Feedback se a busca não retornar nada */}
      {filteredCharacters.length === 0 && !loading && (
        <div className="text-center mt-5">
          <p className="lead">Nenhum personagem encontrado com o nome "{searchTerm}".</p>
        </div>
      )}
    </div>
  );
};