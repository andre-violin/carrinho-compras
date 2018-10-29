var config = {
  apiKey: "AIzaSyDfi9iEgZcHUhsBqPSzzdSKy_P-PS5Bz0w",
  authDomain: "info-6-2018.firebaseapp.com",
  databaseURL: "https://info-6-2018.firebaseio.com",
  projectId: "info-6-2018",
  storageBucket: "info-6-2018.appspot.com",
  messagingSenderId: "752885114958",
  timestampsInSnapshots: true
}

const fire = firebase.initializeApp(config)
const firestore = firebase.firestore()


const controller = new NegociacaoController()
document.querySelector('.formulario').addEventListener('submit', ( evento ) => {
    controller.adiciona( evento, firestore )
  })

const mostrarDadosFirestore = ( firestore ) => {
  firestore.collection("negociacao").get()
    .then( negociacao => {
      negociacao.forEach(doc => {
        console.log(`${doc.id} - ${doc.data().descricao} - ${doc.data().valorUnitario}`)
      })
    })
}

mostrarDadosFirestore(firestore)