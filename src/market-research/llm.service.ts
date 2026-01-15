import { Injectable, Logger } from '@nestjs/common';
import { GoogleGenerativeAI } from '@google/generative-ai';

@Injectable()
export class LlmService {
  private readonly logger = new Logger(LlmService.name);
  private genAI: GoogleGenerativeAI;

  constructor() {
    // Se ainda estiver com erro de ler .env, coloque a chave direto aqui para testar
    // Ex: new GoogleGenerativeAI("SUA_CHAVE_AQUI");
    this.genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  }

  async extrairItensDoCardapio(nomeLoja: string, textoBruto: string) {
    // Trocamos para o "gemini-pro" que é o padrão e não dá erro de versão
    const model = this.genAI.getGenerativeModel({ model: 'gemini-pro' });

    const prompt = `
      Você é um assistente de dados. Analise o texto cru extraído do site da cafeteria "${nomeLoja}".
      
      TEXTO DO SITE:
      ${textoBruto.slice(0, 30000)} 

      SUA MISSÃO:
      1. Encontre itens que sejam COMIDAS ou BEBIDAS vendidas no local.
      2. Encontre o PREÇO (se houver). Se não tiver preço, coloque 0.
      3. Ignore textos de menu como "Home", "Contato", "Instagram", "Login".
      
      FORMATO DE SAÍDA:
      Retorne APENAS um Array JSON válido, sem markdown (\`\`\`), sem explicações.
      Exemplo:
      [
        { "nome": "Espresso", "preco": 8.00, "descricao": "Grão 100% Arábica" },
        { "nome": "Pão de Queijo", "preco": 6.50, "descricao": "" }
      ]
    `;

    try {
      const result = await model.generateContent(prompt);
      const response = await result.response;
      let text = response.text();

      // Limpeza de segurança
      text = text
        .replace(/```json/g, '')
        .replace(/```/g, '')
        .trim();

      return JSON.parse(text);
    } catch (e) {
      this.logger.error('IA falhou ao ler cardápio: ' + e.message);
      return [];
    }
  }
}
