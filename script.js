const bteAdd=document.querySelector('#bteAdd')
const bteAddMultiple=document.querySelector('#bteAddMultiple');
const ZoneTache=document.querySelectorAll('.ZoneTache')
const bteClose=document.querySelector('#bteClose')
const fenterModale=document.querySelector('#fenter-modale')
//***************************************/
const addTitre=document.querySelector('#addTitre')
const addDescription=document.querySelector('#addDescription')
const addDate=document.querySelector('#addDate')
const addTime=document.querySelector('#addTime')
const addStatus=document.querySelector('#addStatus')
const addPriorite=document.querySelector('#addPriorite')





   function fermerFenetre()
   {
    fenterModale.classList.add('hidden')
   }
   function ouvrireModale(){
    fenterModale.classList.remove('hidden')
   }
   function testErr()
   {
    let titre =addTitre.value;
    console.log(titre)
   }
   function ajouterTache(){
     
   }
   
