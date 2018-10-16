const negociacao = {
  
  descricao: 'Caneta',
  quantidade: 2,
  valor: 5.8,

  mostrarDados: function() {
    return `Descrição: ${this.descricao}
Quantidade: ${this.quantidade}
Valor Unitário: ${this.valor}`
  },

  valorTotal: function() {
    return `Total: ${this.quantidade * this.valor}`
  }
}
console.log(`${negociacao.mostrarDados()}
${negociacao.valorTotal()}`)