# Informações do Projeto
`TÍTULO DO PROJETO`  

...... FITOTERÁPICA ......

`CURSO` 

...... SISTEMAS DE INFORMAÇÃO ......

## Participantes

......  Ana Júlia Dias Aguiar  ......

......  Gabriel Ferreira Marques Mendes  ......

......  Leonardo Maia Assis Oliveira  ......

......  Misael Oliveira Pereira  ......

......  Pedro Henrique Alves de Souza  ......



# Estrutura do Documento

- [Informações do Projeto](#informações-do-projeto)
  - [Participantes](#participantes)
- [Estrutura do Documento](#estrutura-do-documento)
- [Introdução](#introdução)
  - [Problema](#problema)
  - [Objetivos](#objetivos)
  - [Justificativa](#justificativa)
  - [Público-Alvo](#público-alvo)
- [Especificações do Projeto](#especificações-do-projeto)
  - [Personas e Mapas de Empatia](#personas-e-mapas-de-empatia)
  - [Histórias de Usuários](#histórias-de-usuários)
  - [Requisitos](#requisitos)
    - [Requisitos Funcionais](#requisitos-funcionais)
    - [Requisitos não Funcionais](#requisitos-não-funcionais)
  - [Restrições](#restrições)
- [Projeto de Interface](#projeto-de-interface)
  - [User Flow](#user-flow)
  - [Wireframes](#wireframes)
- [Metodologia](#metodologia)
  - [Divisão de Papéis](#divisão-de-papéis)
  - [Ferramentas](#ferramentas)
  - [Controle de Versão](#controle-de-versão)
- [**############## SPRINT 1 ACABA AQUI #############**](#-sprint-1-acaba-aqui-)
- [Projeto da Solução](#projeto-da-solução)
  - [Tecnologias Utilizadas](#tecnologias-utilizadas)
  - [Arquitetura da solução](#arquitetura-da-solução)
- [Avaliação da Aplicação](#avaliação-da-aplicação)
  - [Plano de Testes](#plano-de-testes)
  - [Ferramentas de Testes (Opcional)](#ferramentas-de-testes-opcional)
  - [Registros de Testes](#registros-de-testes)
- [Referências](#referências)


# Introdução

Plantas medicinais e recursos minerais são utilizados como prática muito antes da humanidade se reconhecer como tal. Uma pesquisa publicada na revista Nature por Laura
Weyrich, revela que os neandertais utilizavam a Populus trichocarpa como tratamento para a dor de cabeça devido a suas ações analgésicas pela presença do ácido salicílico. 
Enquanto as culturas europeias iniciavam a sua formação, a medicina tradicional indiana ayurveda e chinesa já estavam consolidadas há milhares de anos. Segundo o Caderno de 
Práticas integrativas e complementares na Atenção Básica/Ministério da Saúde: as plantas medicinais e fitoterapia, desde o século 200a.c, já eram catalogadas pelos 
imperadores chineses, tendo-se, atualmente, como “referência mais completa sobre prescrição de ervas chinesas a enciclopédia chinesa Modern Day, de matéria médica publicada 
em 1997, listando quase 6.000 medicamentos, dos quais 4.800 são de origem vegetal”.

No Brasil, a grande parte do conhecimento da medicina tradicional advém dos indígenas (LINDENMAIER e PUTZKE, 2011), são incontáveis saberes que passados de geração em 
geração somam conhecimento às comunidades tradicionais. No entanto, devido ao adentramento dos conhecimentos científicos europeus e o subjugamento dos saberes populares há 
um risco iminente na perda de conhecimento (ALMEIDA, 2011).

Desde 2006, no Brasil, em consonância com as normas definidas pela Organização Mundial da Saúde (OMS) sobre medicinas tradicionais e medicinas complementares e 
alternativas, o SUS dispõe nas Política de Práticas Integrativas e Complementares (PNPIC) recomendações, diretrizes e responsabilidades institucionais para a 
implementação/adequação de ações e serviços serviços de medicina tradicional chinesa/acupuntura, homeopatia, plantas medicinais e fitoterapia. Esse estabelecimento ocorre 
devido a grande utilização da medicina tradicional em território, cerca de 82% dos brasileiros utilizam de algum fitoterápico em seu dia a dia (DE SIMONI, 2008), desde a 
utilização de plantas comuns como hortelã a plantas de conhecimento familiar.

O Ministério da Saúde dispõe no Departamento de Atenção Básica. O Caderno de Práticas integrativas e complementares: plantas medicinais e fitoterapia na Atenção 
Básica/Ministério da Saúde, tratando dos assuntos relativos às práticas fitoterápicas em território nacional. Conforme o documento:

As plantas medicinais e seus derivados estão entre os principais recursos terapêuticos da MT/MCA e vêm, há muito, sendo utilizados pela população brasileira nos seus 
cuidados com a saúde, seja na Medicina Tradicional/Popular ou nos programas públicos de fitoterapia no SUS, alguns com mais de 20 a nos de existência. Entre as Práticas 
Integrativas E Complementares no SUS, as plantas medicinais e fitoterapia são as mais presentes no Sistema, segundo diagnóstico do Ministério da Saúde, e a maioria das 
experiências ocorrem na APS.

Nesse sentido, buscamos com esse trabalho solidificar por meio de uma plataforma web os conhecimentos de plantas medicinais tão esparsos e fornecê-los com qualidade à 
população brasileira.

## Problema

De acordo com o apresentado anteriormente, é notória a grande utilização de plantas medicinais pela população brasileira e a tentativa de regulamentação dos órgãos públicos 
para a homogeneização e controle da aplicação da medicina tradicional em território nacional. No entanto, ainda sim enfrentamos problemas quanto ao acesso de conhecimento 
quando o assunto é a implementação pelos governos no acesso a informação de forma segura, confiável e objetiva sobre o uso de fitoterápicos. A existência de toxicidade na 
utilização de fitoterápicos se configura também como um problema de grande importância em seu uso. S. S. Campos apresenta a seguinte dissertação:

As plantas produzem uma grande variedade de substâncias químicas que podem apresentar diversas atividades biológicas e constituem ainda hoje um recurso terapêutico 
relevante para uma parcela significativa da população mundial que não tem acesso aos medicamentos industrializados (Tôrres et al., 2005). Existe uma percepção na população 
que o uso de plantas no tratamento de doenças é natural, seguro, barato e eficaz, sendo essas, muitas vezes, utilizadas no tratamento de doenças crônicas associadas com 
medicamentos convencionais (Tovar & Petzel, 2009). No entanto, a utilização de plantas na terapêutica e na alimentação deve ser restrita a plantas conhecidas e/ou 
corretamente identificadas (Colombo et al., 2010), pois podem ocorrer intoxicações com o uso de espécies vegetais, provocando graves acidentes.

Segundo uma pesquisa publicada por SIMONI et al na Revista Brasileira Saúde da Família, dos 4051 municípios entrevistados, apenas 350 (9%) possuíam Práticas Integrativas 
Complementares implementadas quanto ao uso seguro e racional de fitoterápicos. Nesse sentido, nota-se que 90% do grupo amostral, que representa 72% da quantidade de 
municípios brasileiros, não possuem práticas integrativas suficientes para a garantia do uso comunitário seguro de plantas medicinais. Quando se observa as outras práticas 
medicinais tradicionais como a chinesa e indiana, há uma menor porcentagem de cobertura em PIC, ou seja, a oferta governamental se torna deficiente quando o assunto é a 
garantia do acesso à informação.

## Objetivos

O presente trabalho traz como objetivos gerais:

Garantir o acesso às informações sobre plantas medicinais;
Garantia de confiabilidade no acesso de informação;
Preservação do conhecimento medicinal tradicional;

O presente trabalho traz como objetivos específicos:
Democratização do conhecimento científico e tradicional de plantas medicinais;
Fomento do uso de fitoterápicos de forma segura;
Renovação na apresentação das informações de plantas medicinais;


## Justificativa

O trabalho em vigência investigará as diversas bibliografias dispostas por órgãos regulamentadores como o Ministério da Saúde e publicações científicas relevantes para a 
construção de uma base de dados consistente, confiável e objetiva a fim de apresentar aos usuários de plantas medicinais informações de cunho verídico para promover um 
consumo consciente e correto das plantas medicinais.

A toxicidade e contra indicações de uso ainda são um mistério em diversos usos e quantidades ineficientes ou abusivas de plantas podem levar a efeitos indesejados durante o 
tratamento. Nesse sentido, o nosso trabalho justifica-se também na pauta de levar a população brasileira um acesso democratizado e confiável quanto aos problemas 
relacionados à toxicidade, uso correto e aplicação de fitoterápicos em tratamentos de enfermidades.


## Público-Alvo

O público alvo é formado por homens e mulheres, de 25 a 60 anos, com atuação na área de biológicas, de classe baixa ou média e com hábitos sustentáveis.
 
# Especificações do Projeto

Foi feita uma reunião pelo Microsoft Teams para que o grupo definisse em conjunto cada especificação.

## Personas e Mapas de Empatia

![Maria de Nazaré](imaages/../images/Maria.PNG)
![Marcelo Rodrigues](imaages/../images/Marcelo.PNG)
![Vania Santos Pereira](imaages/../images/Vania.PNG)


## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Maria               |Consultar as plantas medicinais típicas de cada região           |Encontrar as próximas a mim|
|Maria               |Visualizar as imagens das plantas   |Conferir as quais eu possuo      |
|Marcelo             | Poder filtrar a consulta de plantas medicinais | Poder entender quais são utilizadas em cada caso|
|Marcelo             | Poder pesquisar em um site confiáveis | Evitar de ser afetado por fake news|
|Vânia               | Pesiquisar em sites de interfaces simples             |   Uso facilitado|
|Vânia               | Marcar plantas como favoritas |Acessar historico de plantas mais fácil|

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Filtrar consulta de plantas por nome. | ALTA | 
|RF-002| Filtrar consulta de plantas por utilidade.  | ALTA |
|RF-003| Filtrar consulta de plantas por região. | ALTA |
|RF-004| Realizar cadastro de usuário. | MÉDIA |
|RF-005| Realizar login de usuário. | MÉDIA |
|RF-006| Realizar logout de usuário. | BAIXA |
|RF-007| Visualização da descrição e das imagens de cada planta. | ALTA |
|RF-008| Adicionar uma planta aos favoritos. | MÉDIA |
|RF-009| Exibir lista das plantas adicionadas aos favoritos. | MÉDIA |
|RF-010| Exibir alerta reforçando a não recomendação do uso das plantas a cada 24h. | ALTA |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O desenvolvimento deve ser feito com a linguagem TypeScript | ALTA | 
|RNF-002| O front-end deve ser desenvolvido com a biblioteca ReactJS |  ALTA | 
|RNF-003| Os dados devem ser servidos ao front-end por meio do JSON Server |  MÉDIA | 


## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| Quantidade de plantas que estarão disponíveis para consulta limitada em aproximadamente 60. |
|02| Prazo de entrega das sprints. |


# Projeto de Interface

## User Flow

![User Flow](images/Userflow.png)

## Wireframes

![Wireframe1](images/1-7.png)
![Wireframe2](images/2-7.png)
![Wireframe3](images/3-7.png)
![Wireframe4](images/4-7.png)
![Wireframe5](images/5-7.png)
![Wireframe6](images/6-7.png)
![Wireframe7](images/7-7.png)

# Metodologia

No presente trabalho serão apresentadas metodologias de pesquisa bibliográfica levantando de três base de dados diferentes: o livro Tratado de plantas medicinais Tratado 
das plantas medicinais mineiras,nativas e cultivadas, Memento Fitoterápico Farmacopéia Brasileira e Formulário de Fitoterápicos Farmacopéia Brasileira. Os dados serão 
extraídos de acordo com a seguinte ficha de coleta apresentada abaixo. Após a coleta e refinamento de informações, os dados serão inseridos na base de dados da aplicação. 

## Divisão de Papéis

Misael - Controle de Versionamento e CodeReview

Leonardo - Documentação e Json Server

Pedro - JsonServer e Organização de tarefas Trello

Ana e Gabriel - Desenvolvedores

Raphael - 



## Ferramentas

| Ambiente  | Plataforma              |Link de Acesso |
|-----------|-------------------------|---------------|
|Processo de Design Thinkgin  | Trello | https://trello.com/b/iA8Uqx5h/kanban-fitoter%C3%A1pica | 
|Repositório de código | GitHub | https://github.com/PBE-TIAW-2022-1/tiaw-pbe-20221-MisaelOPereira/ | 
|Protótipo Interativo | Figma | https://www.figma.com/proto/1HQIPyMGnSMhmf5nOxpnkh/Projeto-de-interface?node-id=1%3A2&scaling=contain&page-id=0%3A1&starting-point-node-id=1%3A2 |
|Plataforma de reuniões| Microsoft Teams | https://teams.microsoft.com | 
|Editor de Código| Visual Studio Code | https://code.visualstudio.com/ | 
|Criação de Logo| Canavas | https://www.canva.com/ | 


## Controle de Versão

Na plataforma GitHub criamos um repositório com duas branchs, master e develop. Os desenvolvedores do grupo criarão branchs a partir da develop e realizarão pull requests 
nela. No final do projeto, a develop, após a revisão de código, será fundida a master.


# **############## SPRINT 1 ACABA AQUI #############**


# Projeto da Solução
Na solução, foram trabalhadas arquiteturas de implementação e disponibilização
de código na web pelo Versel e Heroku. Na plataforma Versel, realizou-se o deploy do
código em React implementado com a solução em JSON onde foram armazenadas todas
as plantas cadastradas e os usuários que acessam a solução. O deployment do JSON foi
realizado na plataforma Heroku, onde a comunicação se estabeleceu através do endpoint
gerado pela plataforma através do JSON-SERVER.

## Tecnologias Utilizadas

O projeto de interface tem por objetivo criar um protótipo da solução final, a fim de traçar metas e objetivos que devem ser alcançadas em até um determinado tempo, este esboço também pode ser usado em apresentações iniciais para fidelizar clientes e captar stakeholders.  
Para criar um protótipo de baixa fidelidade, se tratando de aplicações Web, existem muitas ferramentas e soluções disponíveis na internet. O software escolhido para realizar tal tarefa foi o Figma, que possui uma versão gratuita,  as telas de User Flow podem ser visualizadas no link a seguir: https://www.figma.com/proto/1HQIPyMGnSMhmf5nOxpnkh/Projeto-de-interface?node-id=1%3A2&scaling=contain&page-id=0%3A1&starting-point-node-id=1%3A2

Além disso, contamos com as ferramentas de edição de código VS CODE, bibliotecas de javascirpt o React JS, ferramentas de organização de times Trello, ferramentas de reuniões Microsoft Teams e ferramentas de controle de versionamento GIT e repositório remoto GITHUB;


## Arquitetura da solução


Na solução, foram trabalhadas arquiteturas de implementação e disponibilização
de código na web pelo Versel e Heroku. Na plataforma Versel, realizou-se o deploy do
código em React implementado com a solução em JSON onde foram armazenadas todas
as plantas cadastradas e os usuários que acessam a solução. O deployment do JSON foi
realizado na plataforma Heroku, onde a comunicação se estabeleceu através do endpoint
gerado pela plataforma através do JSON-SERVER. Na imagem a seguir, pode-se
observar a arquitetura da solução:
![Arqutetura drawio](https://user-images.githubusercontent.com/86787664/176811344-30640862-9b93-44c6-ac7b-af839ac1cafc.png)
Na solução implementamos os módulos seguintes:
● Navegador: Local onde a visualização da interface é possibilitada;
○ Páginas Web: Estruturação básica onde a visualização da interface é
construída. Nossa aplicação se baseia em HTML, CSS e Javascript
orientados pela biblioteca de javascript React;
○ JSON-SERVER: Local onde foram armazenadas nossa base de dados em
plantas medicinais e usuários que se cadastram na plataforma, sendo eles:
■ Plantas Medicinais: toda a base de dados em que foram salvas as
plantas utilizadas no trabalho;
■ Login e Senha: informações pessoais do usuário para utilização de
acesso a plataforma;
■ Plantas Favoritas: Plantas que os usuários salvam como favoritas em
seus perfis;
● Hospedagem: A página foi mantida em duas implementações, a base de dados foi
implementada na plataforma Heroku e o site disponibilizado no Versel;
5.1.1. Hospedagem
A hospedagem foi mantida no Versel disponível no link:
https://fitoterapica.vercel.app/
O código json está disponível no Heroku:
18
https://fitoterapica-api.herokuapp.com
A implementação é baseada no código disponibilizado no GitHub:
https://github.com/PBE-TIAW-2022-1/tiaw-pbe-20221-MisaelOPereira

# Avaliação da Aplicação



## Plano de Testes

Para que os seguintes testes de software sejam executados é necessário ter os seguintes requisitos:
Acessar o site <https://fitoterapica.vercel.app/>;
Uma boa conexão de internet;
Navegador de preferência Chrome; 

Caso de Teste
CT-01 - Filtro por nomes
Requisitos Associados
RF-01 - Filtrar consulta de plantas por nome.
Objetivo do Teste
Verificar se o componente de filtros por nome está funcionando
Passos
1) Acessar o Navegador
2) Informar o endereço do Site
3) Preencher o campo “Nome da planta” com algum nome
4) Verificar se ao apertar “Pesquisar” gera resultado
Critérios de Êxito
O navegador deve ser redirecionado para a página de “results”, contendo a planta informada ou um aviso de planta não cadastrada;


Caso de Teste
CT-02 - Filtro por ultilidades
Requisitos Associados
RF-02 - Filtrar consulta de plantas por utilidade.
Objetivo do Teste
Verificar se o componente de filtros por ultilidades está funcionando
Passos
1) Acessar o Navegador;
2) Informar o endereço do Site;
3) Preencher o campo "Utilidades" com alguma tag disponível;
4) Verificar se ao apertar “Pesquisar” gera resultado;
Critérios de Êxito
O navegador deve ser redirecionado para a página de “results”, contendo todas as plantas que apresente usos de acordo com a tag informada;  



Caso de Teste
CT-03 - Visualizar alerta
Requisitos Associados
RF-10 - Exibir alerta reforçando a não recomendação do uso das plantas a cada 24h.
Objetivo do Teste
Verificar se o componente de alerta está funcionando.
Passos
1) Acessar o Navegador, aba ânima
2) Informar o endereço do Site
3) Visualizar pop up
Critérios de Êxito
O site deverá mostrar um pop up, informando que este é apenas informativo.


Caso de Teste
CT-04 - Filtro por região
Requisitos Associados
RF-03 - Filtrar consulta de plantas por região.
Objetivo do Teste
Verificar se o componente de filtros por região está funcionando
Passos
1) Acessar o Navegador;
2) Informar o endereço do Site;
3) Preencher o campo "Região" com alguma tag disponível;
4) Verificar se ao apertar “Pesquisar” gera resultado;
Critérios de Êxito
O navegador deve ser redirecionado para a página de “results”, contendo todas as plantas estão na região informada;


Caso de Teste
CT-05 - Realizar novo cadastro
Requisitos Associados
RF-04 - Realizar cadastro de usuário.
Objetivo do Teste
Verificar se o site é capaz de realizar novos cadastros de usuários.
Passos
1) Acessar o Navegador;
2) Informar o endereço do Site;
3) Apertar no componente “Cadastrar”;
4) Informar as informações solicitadas;
5) Apertar em cadastrar
Critérios de Êxito
 O nova conta deve ser logada imediatamente, e aparecer no lugar onde estava o componente “Cadastrar”;




Caso de Teste
CT-06 - Efetuar Login
Requisitos Associados
RF-04 - Realizar cadastro de usuário.
RF-05 - Realizar login de usuário.
Objetivo do Teste
Verificar se o login de usuários está funcionando
Passos
1) Acessar o Navegador;
2) Informar o endereço do Site;
3) Apertar no componente “Entrar”; 
4) Informar o email e a senha previamente cadastrada;
Critérios de Êxito
O nova conta deve ser logada imediatamente, e aparecer no lugar onde estava o componente “Entrar”;


Caso de Teste
CT-07 - Efetuar logout
Requisitos Associados
RF-04 - Realizar cadastro de usuário.
RF-05 - Realizar login de usuário.
RF-06 - Realizar logout de usuário.
Objetivo do Teste
Verificar se é possível realizar o logout
Passos
1) Acessar o Navegador;
2) Informar o endereço do Site;
3) Apertar no seu nome no canto superior direito;
4) Apertar no símbolo com uma porta e uma seta para fora;
Critérios de Êxito
O site deverá efetuar o logout da conta, e voltar a aparecer os componentes “Entrar” e “Cadastrar”.


Caso de Teste
CT-08 - Deletar conta
Requisitos Associados
RF-04 - Realizar cadastro de usuário.
RF-05 - Realizar login de usuário.
RF-06 - Realizar logout de usuário.
Objetivo do Teste
Verificar se é possível deletar a conta
Passos
1) Acessar o Navegador;
2) Informar o endereço do Site;
3) Apertar no seu nome no canto superior direito;
4) Apertar no componente “DELETAR CONTA”;
Critérios de Êxito
O site deverá efetuar o cancelamento da conta, e voltar a aparecer os componentes “Entrar” e “Cadastrar”.


Caso de Teste
CT-09 - Visualizar dados
Requisitos Associados
RNF-03 - Os dados devem ser servidos ao front-end por meio do JSON Server.
Objetivo do Teste
Verificar se o site está comunicando com o JSON Server
Passos
1) Acessar o Navegador;
2) Informar o endereço do Site;
3) Clicar em “Pesquisar”;
4) Clicar na primeira planta;
Critérios de Êxito
O navegador deve exibir as informações da planta clicada.


Caso de Teste
CT-10 - Visualizar o TypeScript
Requisitos Associados
RNF-01 - O desenvolvimento deve ser feito com a linguagem TypeScript
Objetivo do Teste
Verificar se o requisito não funcional está sendo atingido.
Passos
1) Acessar o Navegador
2) Ir para o código fonte do site <https://github.com/PBE-TIAW-2022-1/tiaw-pbe-20221-MisaelOPereira/blob/master/codigo/src/pages/Plants/index.tsx>
Critérios de Êxito
O arquivo apresentado deve escrito em TypeScript

## Registros de Testes

Abaixo é possível visualizar as imagens e o status de cada um dos testes de Software.

Caso de Teste
CT-01 - Filtro por nomes
Imagem do resultado
![filtro nomes](https://user-images.githubusercontent.com/86787664/176812942-fd5cf5f9-12e9-40bc-9499-2b80628a4366.png)
![filtro por nomes](https://user-images.githubusercontent.com/86787664/176812949-cbb52aa6-0587-4a38-99a8-e8c0b9500be0.png)
Status do teste
Foi possível concluir o teste com êxito.


Caso de Teste
CT-02 - Filtro por ultilidades
Imagem do resultado
![filtro utilidades2](https://user-images.githubusercontent.com/86787664/176812995-66e60b44-8cbf-4845-a220-edcf14eba6ea.png)
![filtro utilidades](https://user-images.githubusercontent.com/86787664/176812998-7bb51555-885b-4145-844c-fbc4dd08d6b1.png)

Status do teste
Foi possível concluir o teste com êxito.


Caso de Teste
CT-03 - Visualizar alerta
Imagem do resultado
![alerta](https://user-images.githubusercontent.com/86787664/176813012-c3bda638-bcde-4b6f-b35d-b088906873d1.png)
Status do teste
Foi possível concluir o teste com êxito.


Caso de Teste
CT-04 - Filtro por região
Imagem do resultado
![pesquisa nome regiao](https://user-images.githubusercontent.com/86787664/176813035-15ee03fa-4268-4195-8110-ca373e80c731.png)
![pesquisa nome](https://user-images.githubusercontent.com/86787664/176813038-e754d6fd-d891-408c-ac5f-e0e5a443d963.png)
Status do teste
Foi possível concluir o teste com êxito.


Caso de Teste
CT-05 - Realizar novo cadastro
Imagem do resultado
![cadastro](https://user-images.githubusercontent.com/86787664/176813067-5f79ecb0-1fe3-4ab1-81f0-b8f4d18bc45b.png)
![cadastro2](https://user-images.githubusercontent.com/86787664/176813070-afb20cfe-395e-4529-8c0a-011c3ad67ffa.png)

Status do teste
Foi possível concluir o teste com êxito.


Caso de Teste
CT-06 - Efetuar Login
Imagem do resultado
![imagens](https://user-images.githubusercontent.com/86787664/176813077-5e5b4894-a3e5-4789-977d-468173790d7f.png)

Status do teste
Foi possível concluir o teste com êxito.


Caso de Teste
CT-08 - Deletar conta
Imagem do resultado
![plant fav](https://user-images.githubusercontent.com/86787664/176813115-4543a4ac-edd7-4a5c-8dc9-e4f2df75142e.png)
Status do teste
Foi possível concluir o teste com êxito.


Caso de Teste
CT-09 - Visualizar dados
Imagem do ![visualidar dados](https://user-images.githubusercontent.com/86787664/176813159-a6bdd7bd-e443-4954-8afc-ed5ddde05a61.png)
resultado

Status do teste
Foi possível concluir o teste com êxito.


Caso de Teste
CT-10 - Visualizar o TypeScript
Imagem do resultado
![type](https://user-images.githubusercontent.com/86787664/176813165-2b978cf1-d84e-4006-b26f-34d7d12e20ef.png)

Status do teste
Foi possível concluir o teste com êxito



# Referências
GitHub: https://github.com
Trello: https://trello.com
Kanban: https://kanbanize.com/pt/recursos-kanban/primeiros-passos/o-que-e-kanban
Plantas Medicinais Do Sus: https://avasus.ufrn.br/course/view.php?id=149 e
https://avasus.ufrn.br/course/view.php?id=153
Livro da Farmacopéia Brasileira:
https://www.gov.br/anvisa/pt-br/assuntos/farmacopeia/farmacopeia-brasileira
