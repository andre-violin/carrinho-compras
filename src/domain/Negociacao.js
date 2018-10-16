class Negociacao {
  constructor( descricao, quantidade, valorUnitario, data ) {
    this.descricao = descricao
    this.quantidade = quantidade
    this.valorUnitario = valorUnitario
    this.data = data
  }

  valorUnitarioTotal(comissao) {
    return (this.quantidade * this.valorUnitario) * comissao
  }

  mostrarDados() {
    let div = document.createElement('div')
    div.className = "card-item-nf"
    let p = document.createElement('p')
    let text = document.createTextNode(this.descricao)
    p.appendChild(text) 
    div.appendChild(p)

    text = document.createTextNode(this.quantidade)
    p = document.createElement('p')
    p.appendChild(text)
    div.appendChild(p)
    
    text = document.createTextNode('R$ ' + this.valorUnitario)
    p = document.createElement('p')
    p.appendChild(text)
    div.appendChild(p)

    text = document.createTextNode('R$ ' + this.quantidade * this.valorUnitario)
    p = document.createElement('p')
    p.appendChild(text)
    div.appendChild(p)

    document.querySelector('.relatorio').appendChild(div)
  }
}
// intanciando a classe para definir um objeto
// const n = new Negociacao('Lápis', 3, 4.5, new Date())
// console.log(n.descricao)
// console.log(n.quantidade)
// console.log(n.valorUnitario)
// console.log(n.data)
// console.log(n.valorUnitarioTotal(1.02))