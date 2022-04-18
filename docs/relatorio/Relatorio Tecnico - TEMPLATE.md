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

......  Raphael Henrique Oliveira Santos  ......


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

......  COLOQUE AQUI O SEU TEXTO ......

> Descreva quem serão as pessoas que usarão a sua aplicação indicando os
> diferentes perfis. O objetivo aqui não é definir quem serão os
> clientes ou quais serão os papéis dos usuários na aplicação. A ideia
> é, dentro do possível, conhecer um pouco mais sobre o perfil dos
> usuários: conhecimentos prévios, relação com a tecnologia, relações
> hierárquicas, etc.
>
> Adicione informações sobre o público-alvo por meio de uma descrição
> textual, ou diagramas de personas, mapa de stakeholders, ou como o
> grupo achar mais conveniente.
> 
> **Links Úteis**:
> - [Público-alvo: o que é, tipos, como definir seu público e exemplos](https://klickpages.com.br/blog/publico-alvo-o-que-e/)
> - [Qual a diferença entre público-alvo e persona?](https://rockcontent.com/blog/diferenca-publico-alvo-e-persona/)
 
# Especificações do Projeto

......  COLOQUE AQUI O SEU TEXTO ......

> Apresente uma visão geral do que será abordado nesta parte do
> documento, enumerando as técnicas e/ou ferramentas utilizadas para
> realizar a especificações do projeto

## Personas e Mapas de Empatia

......  COLOQUE AQUI O SEU TEXTO ......


> Relacione as personas identificadas no seu projeto e os respectivos mapas de empatia. Lembre-se que 
> você deve ser enumerar e descrever precisamente e de forma
> personalizada todos os principais envolvidos com a solução almeja. 
> 
> Para tanto, baseie-se tanto nos documentos disponibilizados na disciplina
> e/ou nos seguintes links:
>
> **Links Úteis**:
> - [Persona x Público-alvo](https://flammo.com.br/blog/persona-e-publico-alvo-qual-a-diferenca/)
> - [O que é persona?](https://resultadosdigitais.com.br/blog/persona-o-que-e/)
> - [Rock Content](https://rockcontent.com/blog/personas/)
> - [Hotmart](https://blog.hotmart.com/pt-br/como-criar-persona-negocio/)
> - [Mapa de Empatia](https://resultadosdigitais.com.br/blog/mapa-da-empatia/)
> - [Como fazer um mapa de empatia - Vídeo](https://www.youtube.com/watch?v=JlKHGpVoA2Y)
> 
> 
> **Exemplo de Persona**
> 
> ![Exemplo de Persona](imaages/../images/persona.png)
> 
> Fonte: [Como criar uma persona para o seu negócio](https://raissaviegas.com.br/como-criar-uma-persona/)


## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Usuário do sistema  | Registrar minhas tarefas           | Não esquecer de fazê-las               |
|Administrador       | Alterar permissões                 | Permitir que possam administrar contas |

> Apresente aqui as histórias de usuário que são relevantes para o
> projeto de sua solução. As Histórias de Usuário consistem em uma
> ferramenta poderosa para a compreensão e elicitação dos requisitos
> funcionais e não funcionais da sua aplicação. Se possível, agrupe as
> histórias de usuário por contexto, para facilitar consultas
> recorrentes à essa parte do documento.
>
> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Consulta de plantas medicinais por nome, sintomas e localização. | ALTA | 
|RF-002| Visualização de descrição, imagens e referências bibliográficas de cada planta.  | MÉDIA |
|RF-003| Permitir que o usuário salve as plantas favoritas | BAIXA |
|RF-004| Permitir que o usuário cadastre-se | ALTA |

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
|01| Quantidade limitada de plantas medicinais que estarão disponíveis para consulta. |
|02| Não é um site de indicação médica |


# Projeto de Interface

......  COLOQUE AQUI O SEU TEXTO DE INTRODUÇÃO ......

> Apresente as principais interfaces da solução. Discuta como 
> foram elaboradas de forma a atender os requisitos funcionais, não
> funcionais e histórias de usuário abordados nas [Especificações do
> Projeto](#especificações-do-projeto).

## User Flow

......  INCLUA AQUI O DIAGRAMA COM O FLUXO DO USUÁRIO NA APLICAÇÃO ......

> Fluxo de usuário (User Flow) é uma técnica que permite ao desenvolvedor
> mapear todo fluxo de telas do site ou app. Essa técnica funciona
> para alinhar os caminhos e as possíveis ações que o usuário pode
> fazer junto com os membros de sua equipe.
>
> **Links Úteis**:
> - [User Flow: O Quê É e Como Fazer?](https://medium.com/7bits/fluxo-de-usu%C3%A1rio-user-flow-o-que-%C3%A9-como-fazer-79d965872534)
> - [User Flow vs Site Maps](http://designr.com.br/sitemap-e-user-flow-quais-as-diferencas-e-quando-usar-cada-um/)
> - [Top 25 User Flow Tools & Templates for Smooth](https://www.mockplus.com/blog/post/user-flow-tools)
>
> **Exemplo**:
> 
> ![Exemplo de UserFlow](images/userflow.jpg)


## Wireframes

......  INCLUA AQUI OS WIREFRAMES DAS TELAS DA APLICAÇÃO COM UM BREVE DESCRITIVO ......

> Wireframes são protótipos das telas da aplicação usados em design de interface para sugerir a
> estrutura de um site web e seu relacionamentos entre suas
> páginas. Um wireframe web é uma ilustração semelhante ao
> layout de elementos fundamentais na interface.
> 
> **Links Úteis**:
> - [Ferramentas de Wireframes](https://rockcontent.com/blog/wireframes/)
> - [Figma](https://www.figma.com/)
> - [Adobe XD](https://www.adobe.com/br/products/xd.html#scroll)
> - [MarvelApp](https://marvelapp.com/developers/documentation/tutorials/)
> 
> **Exemplo**:
> 
> ![Exemplo de Wireframe](images/wireframe-example.png)


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

......  COLOQUE AQUI O SEU TEXTO ......

## Tecnologias Utilizadas

......  COLOQUE AQUI O SEU TEXTO ......

> Descreva aqui qual(is) tecnologias você vai usar para resolver o seu
> problema, ou seja, implementar a sua solução. Liste todas as
> tecnologias envolvidas, linguagens a serem utilizadas, serviços web,
> frameworks, bibliotecas, IDEs de desenvolvimento, e ferramentas.
> Apresente também uma figura explicando como as tecnologias estão
> relacionadas ou como uma interação do usuário com o sistema vai ser
> conduzida, por onde ela passa até retornar uma resposta ao usuário.
> 
> Inclua os diagramas de User Flow, esboços criados pelo grupo
> (stoyboards), além dos protótipos de telas (wireframes). Descreva cada
> item textualmente comentando e complementando o que está apresentado
> nas imagens.

## Arquitetura da solução

......  COLOQUE AQUI O SEU TEXTO E O DIAGRAMA DE ARQUITETURA .......

> Inclua um diagrama da solução e descreva os módulos e as tecnologias
> que fazem parte da solução. Discorra sobre o diagrama.
> 
> **Exemplo do diagrama de Arquitetura**:
> 
> ![Exemplo de Arquitetura](images/arquitetura-exemplo.png)


# Avaliação da Aplicação

......  COLOQUE AQUI O SEU TEXTO ......

> Apresente os cenários de testes utilizados na realização dos testes da
> sua aplicação. Escolha cenários de testes que demonstrem os requisitos
> sendo satisfeitos.

## Plano de Testes

......  COLOQUE AQUI O SEU TEXTO ......

> Enumere quais cenários de testes foram selecionados para teste. Neste
> tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo
> de usuários que foi escolhido para participar do teste e as
> ferramentas utilizadas.
> 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e Técnicas de Testes Ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)

## Ferramentas de Testes (Opcional)

......  COLOQUE AQUI O SEU TEXTO ......

> Comente sobre as ferramentas de testes utilizadas.
> 
> **Links Úteis**:
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)

## Registros de Testes

......  COLOQUE AQUI O SEU TEXTO ......

> Discorra sobre os resultados do teste. Ressaltando pontos fortes e
> fracos identificados na solução. Comente como o grupo pretende atacar
> esses pontos nas próximas iterações. Apresente as falhas detectadas e
> as melhorias geradas a partir dos resultados obtidos nos testes.


# Referências

......  COLOQUE AQUI O SEU TEXTO ......

> Inclua todas as referências (livros, artigos, sites, etc) utilizados
> no desenvolvimento do trabalho.
> 
> **Links Úteis**:
> - [Formato ABNT](https://www.normastecnicas.com/abnt/trabalhos-academicos/referencias/)
> - [Referências Bibliográficas da ABNT](https://comunidade.rockcontent.com/referencia-bibliografica-abnt/)
