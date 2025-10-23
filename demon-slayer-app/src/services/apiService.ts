// src/services/apiService.ts

import { Character } from '../types/character';

// A URL base da API que estamos usando
const API_URL = 'https://www.demonslayer-api.com/api/v1';

/**
 * Busca a lista COMPLETA de personagens da API.
 * O endpoint é /characters
 */
export const fetchCharacters = async (): Promise<Character[]> => {
  try {
    // Faz a requisição para a API
    const response = await fetch(`${API_URL}/characters`);
    
    // Se a resposta não for OK (ex: erro 404, 500), lança um erro
    if (!response.ok) {
      throw new Error('Falha ao buscar dados da API');
    }
    
    // Converte a resposta para JSON
    const data: Character[] = await response.json();
    return data;

  } catch (error) {
    console.error("Erro ao buscar personagens:", error);
    return []; // Retorna um array vazio em caso de erro
  }
};


/**
 * Busca UM personagem específico pelo ID.
 * A API não tem um endpoint para buscar por ID diretamente.
 *
 * Nossa estratégia será:
 * 1. Buscar TODOS os personagens.
 * 2. Filtrar pelo ID no lado do cliente (aqui no código).
 */
export const fetchCharacterById = async (id: number): Promise<Character | undefined> => {
  try {
    // 1. Busca todos
    const characters = await fetchCharacters();
    
    // 2. Encontra o personagem pelo ID
    const character = characters.find(char => char.id === id);
    
    return character;

  } catch (error) {
    console.error(`Erro ao buscar personagem com ID ${id}:`, error);
    return undefined; // Retorna indefinido se falhar
  }
};