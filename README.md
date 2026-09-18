# Portfólio — Daniel Silva

Portfólio estático com três cases interativos de engenharia de IA:

- **Research Compass**: recuperação de fontes públicas e síntese fundamentada.
- **QueryLens**: analytics conversacional sobre dados sintéticos, com execução limitada.
- **GenAI Decision Studio**: simulação determinística de cenários de viabilidade.

## Netlify

O site publica a raiz e expõe Functions em `netlify/functions`.

As rotas interativas são `research`, `query` e `assess`. Quando configurada exclusivamente no Netlify, a variável `GOOGLE_API_KEY` permite a camada Gemini. A chave não deve ser incluída no repositório, no navegador nem em arquivos de exemplo.

As demonstrações aceitam somente dados públicos ou sintéticos e limitam a interface a cinco interações por navegador. Esse limite reduz uso casual; não é proteção antifraude.

## Repositórios dos cases

- https://github.com/MorningloryFox/research-compass
- https://github.com/MorningloryFox/querylens
- https://github.com/MorningloryFox/GenAI-Viability-Analyzer
