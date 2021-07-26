LABEDDIT
Link para o site criado por meio do surge: https://labeedit-carlos-azeredo.surge.sh/

DESCRIÇÃO

Projeto em React criado para uma atividade do curso de programação da Labenu com o intuito de ser uma simulação de uma rede social similar ao Reddit, chamada Labeddit. 

Foi utilizada a seguinte API:

https://documenter.getpostman.com/view/9133542/TzeZG78H#intro

Segue uma descrição das páginas e de suas funcionalidades:

Login
Inicialmente, o usuário é conduzido a uma página de login, no qual será possível acessar as páginas principais da aplicação por meio do preenchimento de dois campos de input (um referente ao email e outro, à senha), ambos dentro de um formulário que será enviado ao clicar em um botão FAZER LOGIN ou na tecla Enter.

LOGIN: permite efetuar o login e acessar as páginas protegidas do site, caso o formulário da página seja preenchido. Se o usuário já tiver um cadastro na API, o botão irá direcioná-lo à página de Feed.  
CADASTRE-SE: direcionará o usuário à página de cadastro.

Cadastro
Permite ao usuário realizar um cadastro na API de modo que possa acessar as páginas protegidas. Tal cadastro exigirá o preenchimento de um formulário com os seguintes campos e regras de validação:

NOME DE USUÁRIO: deve conter ao menos 3 caracteres, incluindo espaços e caracteres especiais;
EMAIL: deve conter um @;
SENHA: deve conter ao menos 3 caracteres, incluindo espaços e caracteres especiais.


Feed
Exibirá todos os posts da API em ordem aleatória. Como tal página está protegida, ela apenas será acessível caso o usuário esteja logado; em caso contrário, ele será automaticamente conduzido à página de login.


POSTAR: permitirá ao usuário criar um post por meio do preenchimento dois campos, um de título e um de texto. Ambos devem ser obrigatoriamente preenchidos. A criação do post será feita ao clicar na tecla Enter ou no botão POSTAR.


COMENTÁRIOS: exibirá a quantidade total de comentários daquele post. Caso clicado, tal campo direcionará o usuário à página de detalhes do referido post.



Algumas das ferramentas utilizadas foram:

ESTADO GLOBAL NÃO FOI UTILIZADO.
REACT ROUTER: a navegação entre páginas utilizou as tags BrowserRouter, Switch e Route, bem como os hooks useHistory e useParams, próprios do React Router.
COMPONENTES FUNCIONAIS: não foram usados componentes de classe, visando ao melhor desempenho do código;
HOOKS: os hooks useState e useEffect foram utilizados;
ESTILIZAÇÃO: a estilização foi realizada por meio do Design System MATERIAL UI e do styled-components. 

O QUE FUNCIONA

Todas as funcionalidades supracitadas estão funcionando.

O QUE NÃO FUNCIONA
A funcionalidade de curtir e descurtir possui um bug. Caso o usuário clique duas vezes rapidamente no botão de curtir, a quantidade de curtidas irá aumentar em duas unidades em vez de uma, o que também ocorre no botão de descurtir. Caso o botão de curtir já esteja selecionado e o de descurtir for clicado duas vezes rapidamente, a quantidade de curtidas será reduzida em quatro unidades e vice-versa.
Para entrada no posto poderá clicar duas vezes.
O botão de login só atualiza com o refresh da página.