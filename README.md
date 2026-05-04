# LinkDrive

LinkDrive e um gerenciador visual de links que organiza URLs como se fossem pastas reais.

## Sobre
- Publico alvo: estudantes, devs/designers e usuarios gerais que precisam organizar links.
- Experiencia: UI em formato de sistema de arquivos com pastas e cards.
- Escopo atual: telas estaticas com formularios HTML e estilos completos.

## Estrutura
- index.html: tela de cadastro/login simples.
- dashboard.html: tela inicial com pastas e links recentes.
- pastas.html: listagem completa de pastas.
- pasta.html: detalhes de uma pasta com subpastas e links.
- styles/main.css: tokens de design e componentes visuais.
- scripts/main.js: JS minimo para futura interacao.
- assets/logo.svg: logo.

## Como rodar localmente
### Opcao 1: abrir direto no navegador
1. Abra o arquivo index.html com duplo clique.
2. Navegue entre as telas pelos links do menu.

### Opcao 2: servidor local simples
1. No terminal, dentro da pasta do projeto, rode:
	python -m http.server 8000
2. Acesse no navegador:
	http://localhost:8000/index.html

## Telas disponiveis (rotas atuais)
- /index.html (cadastro/login)
- /dashboard.html (dashboard com pastas e links recentes)
- /pastas.html (todas as pastas)
- /pasta.html (detalhe da pasta)

## Observacoes
- Os formularios usam validacao HTML (required, type=email) sem envio real.
- O JavaScript é propositalmente mínimo; a lógica será implementada posteriormente.