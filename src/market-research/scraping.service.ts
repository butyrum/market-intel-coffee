import { Injectable, Logger } from '@nestjs/common';
import puppeteer from 'puppeteer';

@Injectable()
export class ScrapingService {
  private readonly logger = new Logger(ScrapingService.name);

  async buscarConcorrentes(cidade: string, estado: string): Promise<string[]> {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    // Define timeout de navegação para 5 minutos (segurança extra)
    await page.setDefaultNavigationTimeout(300000);

    const termo = `Cafeterias em ${cidade}, ${estado}`;
    console.log(`Robo buscando lista: ${termo}...`);

    await page.goto(`https://www.google.com/search?q=TripAdvisor+${termo}`);

    const searchResultSelector = 'h3';
    // Timeout de 2 minutos para o primeiro captcha
    await page.waitForSelector(searchResultSelector, { timeout: 120000 });
    await page.click(searchResultSelector);

    await new Promise((r) => setTimeout(r, 15000));

    const dados = await page.evaluate<[], () => string[]>(() => {
      const elementos = document.querySelectorAll('a[href*="Review"]');
      const lista: string[] = [];

      elementos.forEach((el) => {
        if (el.textContent && el.textContent.length > 5) {
          lista.push(el.textContent.trim());
        }
      });
      return [...new Set(lista)].slice(0, 3);
    });
    console.log('Lista encontrada: ', dados);

    await browser.close();
    return dados;
  }

  async lerCardapioDigital(
    nomeConcorrente: string,
    cidade: string,
  ): Promise<string> {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    // AQUI ESTÁ A MUDANÇA PRINCIPAL:
    // Define o timeout global para 5 minutos (300.000ms)
    // Isso impede o erro de "Timeout" enquanto você resolve o captcha
    await page.setDefaultNavigationTimeout(300000);

    try {
      console.log(`Visitando site de: ${nomeConcorrente}`);

      const query = `Cardápio Menu ${nomeConcorrente} ${cidade}`;
      await page.goto(`https://www.google.com/search?q=${query}`);

      const searchResultSelector = 'h3';

      // Aumentado de 20s para 5 minutos (300.000ms)
      // O robô vai esperar pacientemente você terminar o captcha
      await page.waitForSelector(searchResultSelector, { timeout: 300000 });

      await page.click(searchResultSelector);

      // Mantive os 20s de espera para o site carregar após o clique
      await new Promise((r) => setTimeout(r, 20000));

      const resultado = await page.evaluate(() => {
        return {
          url: document.location.href,
          texto: document.body.innerText,
        };
      });

      await browser.close();

      return JSON.stringify({
        url: resultado.url,
        texto: resultado.texto.slice(0, 30000),
      });
    } catch (error) {
      console.error(`Erro ao ler site de ${nomeConcorrente}:`, error);
      await browser.close();
      return '';
    }
  }
}
