function setaPerguntaQuiz(perguntaIndex){

    pergunta = perguntas[perguntaIndex]
    opcoesList = opcoes[perguntaIndex]

    html = "<tr>"

    html += `<tr>${pergunta}</tr>`
    html += "<br><br>"
    for (let i = 0; i < opcoesList.length; i++) {
        html += `<button id="${i}" name="${i}" class="buttonNew" onclick=isCorreto(this.id)>${arrayAlfabeto[i]}) ${opcoesList[i]}</button>`
        html += "<br><br>"
    }

    html += "</tr>"

    return html
}


const arrayAlfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]


const gabarito = ['Todas as opções corretas', "Verdadeiro"]

const pergunta1 = ["O gerenciamento de projetos é realizado através da aplicação e integração apropriadas dos processos de gerenciamento de projetos identificados para o projeto?"]
const pergunta2 = ["Qual das opções seriam benefícios do gerenciamento de projetos? "]
const perguntas = [pergunta1, pergunta2]

const opqst1 = ["Verdadeiro", "Falso"]
const opqst2 = ["Cronograma para a realização dos benefícios", "Alinhamento estratégico", "Riscos", "Todas as opções corretas"]
const opcoes = [opqst1, opqst2]