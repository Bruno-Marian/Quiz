function setaPerguntaQuiz(perguntaIndex){

     var pergunta = perguntas[perguntaIndex]
    opcoesList = opcoes[perguntaIndex]

    html = "<tr>"

    html += `<tr>${pergunta}</tr>`
    html += "<br><br>"
    for (let i = 0; i < opcoesList.length; i++) {
        html += `<button id="${i}" name="${i}" onclick=isCorreto(this.id)>${arrayAlfabeto[i]}) ${opcoesList[i]}</button>`
    }

    html += "</tr>"

    return html
}


const arrayAlfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]


const gabarito = ["Verdadeiro", 'Todas as opções corretas', "Planejar, Gerenciar e Monitorar", 'O Gerenciamento das Comunicações do Projeto consiste em duas partes', "Nenhuma", "Requisitos de comunicações das partes interessadas; Informações a serem comunicadas, incluindo idioma, formato, conteúdo e nível de detalhes; Processos de escalonamento", "Em forma escrita, Formais ou informais e Através de mídias"]

const pergunta1 = ["O gerenciamento de projetos é realizado através da aplicação e integração apropriadas dos processos de gerenciamento de projetos identificados para o projeto?"]
const pergunta2 = ["Qual das opções seriam benefícios do gerenciamento de projetos? "]
const pergunta3 = ["Os processos de Gerenciamento das Comunicações do Projeto são: "]
const pergunta4 = ["O gerenciamento de comunicações consiste em quantas partes? "]
const pergunta5 = ["Quais desses benefícios seriam de comunicação no gerenciamento de projetos? "]
const pergunta6 = ["Planejar o Gerenciamento das Comunicações é o processo de desenvolver uma abordagem e um plano adequados para atividades de comunicação do projeto, com base nas necessidades de informação de cada parte interessada ou grupo, de ativos organizacionais disponíveis e nas necessidades do projeto"]
const pergunta7 = ["Essas são as principais entradas do Gerenciamento das Comunicações do Projeto? "]
const pergunta8 = ["Suas principais ferramentas e técnicas incluem coleta de dados, análise de dados e análise para seleção de fontes? "]
const pergunta9 = ["Quais são as suas principais saídas? "]
const pergunta10 = ["Comunicação é a troca de informações, intencional ou involuntária. As informações trocadas podem estar em forma de ideias, instruções ou emoções. Os mecanismos pelos quais as informações são trocadas podem ser: "]
const perguntas = [pergunta1, pergunta2, pergunta3, pergunta4, pergunta5, pergunta6, pergunta7, pergunta8, pergunta9, pergunta10]

const opqst1 = ["Verdadeiro", "Falso"]
const opqst2 = ["Cronograma para a realização dos benefícios", "Alinhamento estratégico", "Riscos", "Todas as opções corretas"]
const opqst3 = ["Planejar, Gerenciar e Monitorar", "Planejar, Identificar e Realizar", "Planejar, Conduzir e Controlar"]
const opqst4 = ["O Gerenciamento das Comunicações do Projeto consiste em duas partes", "O Gerenciamento das Comunicações do Projeto consiste em quatro partes", "O Gerenciamento das Comunicações do Projeto consiste em seis partes"]
const opqst5 = ["Clareza e Consistência", "Envolvimento das Partes Interessadas", "Redução de Riscos", "Todas as opções corretas"]
const opqst6 = ["Verdadeiro", "Falso"]
const opqst7 = ["Fatores ambientais", "Ativos de processos organizacionais", "Contratos de custos reembolsáveis", "Nenhuma"]
const opqst8 = ["Verdadeiro", "Falso"]
const opqst9 = ["Requisitos de comunicações das partes interessadas; Informações a serem comunicadas, incluindo idioma, formato, conteúdo e nível de detalhes; Processos de escalonamento", "Estratégia da aquisição, Documentos de licitação. critérios para seleção de fontes"]
const opqst10 = ["Avanços em ferramentas, Mudanças em processos contratuais e Gerenciamento de riscos mais avançado", "Em forma escrita, Formais ou informais e Através de mídias"]
const opcoes = [opqst1, opqst2, opqst3, opqst4, opqst5, opqst6, opqst7, opqst8, opqst9, opqst10]

