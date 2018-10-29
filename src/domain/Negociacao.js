class Negociacao {
  constructor(descricao, quantidade, valorUnitario, data) {
    this.descricao = descricao
    this.quantidade = quantidade
    this.valorUnitario = valorUnitario
    this.data = data
    this.bd = openDatabase("Teste", "1.0", "Teste Web SQL Database", 2 * 1024 * 1024)
  }

  valorUnitarioTotal(comissao) {
    return (this.quantidade * this.valorUnitario) * comissao
  }

  bancoDeDados() {

    this.bd.transaction((transaction) => {
      // criar a tabela
      transaction.executeSql(`create table if not exists negociacao (id integer primary key autoincrement, descricao text, quantidade REAL, valor_unitario REAL)`)
      transaction.executeSql(`INSERT INTO negociacao(descricao, quantidade, valor_unitario) VALUES(?,?,?)`, [this.descricao, this.quantidade, this.valorUnitario])
    })
  }

  mostrarTudo() {
    this.bd.transaction(transaction => {
      transaction.executeSql('select * from negociacao', [], (transaction, resultados) => {
        for (let i = 0; i < resultados.rows.length; i++) {
          this.mostrarDados(resultados.rows.item(i))
        }
      })
    })
  }

  mostrarDados(item) {
    let div = document.createElement('div')
    div.className = "card-item-nf"
    let p = document.createElement('p')
    let text = document.createTextNode(item.descricao)
    p.appendChild(text)
    div.appendChild(p)

    text = document.createTextNode(item.quantidade)
    p = document.createElement('p')
    p.appendChild(text)
    div.appendChild(p)

    text = document.createTextNode('R$ ' + item.valor_unitario)
    p = document.createElement('p')
    p.appendChild(text)
    div.appendChild(p)

    text = document.createTextNode('R$ ' + item.quantidade * item.valor_unitario)
    p = document.createElement('p')
    p.appendChild(text)
    div.appendChild(p)

    document.querySelector('.relatorio').appendChild(div)
    
  }

  adicionaNoFirestore( firestore ) {
    const objeto = {
      descricao: this.descricao, 
      quantidade: this.quantidade, 
      valorUnitario: this.valorUnitario
    }
    firestore.collection("negociacao").add(objeto)
      .then( refenciaDoDocumento => {
        console.log("Documento inserido com o ID:", refenciaDoDocumento)
      } )
      .catch( erro => {
        console.error("Houve um problema ao inserir o documento, erro: ", erro)
      })
  }

}