import React from 'react';
import { Link } from 'react-router-dom';
import { Character } from '../types/character'; // Nossa interface da Etapa 2

// Definimos as propriedades (Props) que este componente espera receber
interface Props {
  character: Character;
}

export const CharacterCard: React.FC<Props> = ({ character }) => {
  return (
    // 'card' e 'h-100' (height 100%) são classes do Bootstrap 5+
    // 'h-100' garante que todos os cards na mesma linha tenham a mesma altura
    <div className="card h-100 shadow-sm">
      <img 
        src={character.img} 
        className="card-img-top" 
        alt={character.name}
        // Estilo atualizado para 'contain'
        style={{ 
          height: '300px', 
          objectFit: 'contain', // <-- MUDANÇA AQUI
          backgroundColor: '#f8f9fa' // (Opcional) Cor de fundo cinza claro
        }} 
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{character.name}</h5>
        <p className="card-text text-muted">
          {/* Adicionamos uma verificação, pois a API pode não enviar a idade */}
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