import { Character } from '../types/character';

// A URL base da API (caminho relativo para o proxy)
const API_URL = '/api/v1';

/**
 * Busca a lista COMPLETA de personagens da API.
 */
export const fetchCharacters = async (): Promise<Character[]> => {
  try {
    // Faz a requisição para a API
    const response = await fetch(`${API_URL}/characters`);
    
    // Se a resposta não for OK (ex: erro 404, 500), lança um erro
    if (!response.ok) {
      throw new Error(`Falha ao buscar dados da API: ${response.statusText}`);
    }
    
    // Converte a resposta para JSON
    const data: any = await response.json();

    // Com base no log, o array está dentro da chave 'content'
    if (data && Array.isArray(data.content)) {
      // Retorna o array de personagens
      return data.content as Character[]; 
    }
    
    // Verificamos se 'data' já é o array (backup)
    if (Array.isArray(data)) {
      return data as Character[];
    }

    // Se a resposta não for o que esperamos
    console.warn("A resposta da API não está no formato esperado (esperava 'data.content').");
    return []; // Retorna um array vazio

  } catch (error) {
    console.error("Erro ao buscar personagens:", error);
    return []; // Retorna um array vazio em caso de erro
  }
};


/**
 * Busca UM personagem específico pelo ID.
 */
export const fetchCharacterById = async (id: number): Promise<Character | undefined> => {
  try {
    // 1. Busca todos (agora corrigido para retornar um array)
    const characters = await fetchCharacters();
    
    // 2. Encontra o personagem pelo ID
    const character = characters.find(char => String(char.id) === String(id));
    
    return character;

  } catch (error) {
    console.error(`Erro ao buscar personagem com ID ${id}:`, error);
    return undefined; // Retorna indefinido se falhar
  }
};