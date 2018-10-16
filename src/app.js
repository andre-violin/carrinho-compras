// const NegociacaoController = require('./domain/NegociacaoController')
const controller = new NegociacaoController()
document.querySelector('.formulario').addEventListener('submit', ( evento ) => {
    controller.adiciona( evento )
  })