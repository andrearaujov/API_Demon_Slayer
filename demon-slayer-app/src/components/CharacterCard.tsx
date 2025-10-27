// src/components/CharacterCard.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Character } from '../types/character'; // Nossa interface da Etapa 2

// Definimos as propriedades (Props) que este componente espera receber
interface Props {
  character: Character;
}

export const CharacterCard: React.FC<Props> = ({ character }) => {
  return (
   
    <div className="card h-100 shadow-sm">
      <img 
        src={character.img} 
        className="card-img-top" 
        alt={character.name}
       
        style={{ height: '300px', objectFit: 'cover' }} 
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{character.name}</h5>
        <p className="card-text text-muted">
          {character.race} - {character.age ? `${character.age} anos` : 'Idade desconhecida'}
        </p>

        {/* 'mt-auto' empurra o botão para o final do card */}
        <Link 
          to={`/detalhes/${character.id}`} 
          className="btn btn-primary mt-auto"
        >
          Ver Detalhes
        </Link>
      </div>
    </div>
  );
};