function setaPerguntaQuiz(perguntaIndex){

    pergunta = perguntas[perguntaIndex]
    opcoesList = opcoes[perguntaIndex]

    html = "<tr>"

    html += `<tr>${pergunta}</tr>`
    html += "<br><br>"
    for (let i = 0; i < opcoesList.length; i++) {
        html += `<button id="${i}" name="${i}" onclick=isCorreto(this.id)>${arrayAlfabeto[i]}) ${opcoesList[i]}</button>`
        html += "<br><br>"
    }

    html += "</tr>"

    return html
}


const arrayAlfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]


const gabarito = ['18', '61', "verdadeiro"]

const pergunta1 = ["Qual a sua idade?"]
const pergunta2 = ["Qual a idade dos seus pais?"]
const perguntas = [pergunta1, pergunta2]

const opqst1 = ["20", "25", "18"]
const opqst2 = ["45", "55", "61"]
const opcoes = [opqst1, opqst2]