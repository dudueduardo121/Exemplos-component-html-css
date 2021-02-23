// Função Relogio 

 function Relogio(){

     var dia = new Date;
     var hora = dia.getHours();
     var minuto = dia.getMinutes();
     var segundo = dia.getSeconds();

     document.getElementById('hora').innerText = hora;
     document.getElementById('minuto').innerText = minuto;
     document.getElementById('segundo').innerText = segundo;
 }

 setInterval(function(){
   Relogio();
 }, 1000)
// fim

// Carousel

 $(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    items:1,
    lazyLoad:true,
    loop:true
  });
});
// fim
