class NegociacaoController {

  constructor() {
    this.dados = []
  }

  adiciona(evento) {
    evento.preventDefault()
    let inputs = document.querySelectorAll('.campos')
    
    const descricao = inputs[0].value
    const quantidade = parseFloat(inputs[1].value)
    const valorUnitario =  parseFloat(inputs[2].value)
    const data = inputs[3].value

    const negociacao = new Negociacao(descricao, quantidade, valorUnitario, data)
    
    this.dados.push(negociacao)

    negociacao.mostrarDados()

  }
}