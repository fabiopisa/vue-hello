/* Descrizione:
 - Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
 - Cambiare il colore del testo cliccando su dei bottoni
Bonus:
1. Aggiungere alla pagina un’immagine, presa anch’essa da un data.
2. Cambiare la classe del testo scrivendola dentro a un input ma il cambio deve avvenire solo quando viene premuto invio */

const root = new Vue({
  el:'#root',

  data: {
    messaggio:'Ciao Vue.. eccomi qui!',
    myImput:'',
    myClass:'',
    image:'assets/img/im10.jpg'
  },

  methods:{
    changeClass(style){
      this.myClass = style 
    },
    enterEvent(){
      this.myClass = this.myImput;
    }
  }

});
