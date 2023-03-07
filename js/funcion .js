function comprar(){
  let tipobloque=(document.getElementById("tipo").value);
  const bloque1= 20;
  const bloque2= 40;
  const bloque3= 30;

  if(tipobloque== "1"){
    let tiketscomprados=parseInt( prompt("cuantos tikets desea adquirir? "))

    while(tiketscomprados<bloque1){
      let tiketsrestantes= bloque1-tiketscomprados;
      let tikets=prompt("desea adquirir mas tikets? Quedan: "+tiketsrestantes)
      let tiketsInt=parseInt(tikets)
      tiketscomprados+=tiketsInt;
      
      if (tiketscomprados>=bloque1){
        alert("los cupos estan llenos mira en otro bloque 2 y 3")

      }
  }
}
if(tipobloque== "2"){
  let tiketscomprados=parseInt( prompt("cuantos tikets desea adquirir? "))

  while(tiketscomprados<bloque2){
    let tiketsrestantes= bloque2-tiketscomprados;
    let tikets=prompt("desea adquirir mas tikets? Quedan: "+tiketsrestantes)
    let tiketsInt=parseInt(tikets)
    tiketscomprados+=tiketsInt;
    
    if (tiketscomprados>=bloque2){
      alert("los cupos estan llenos mira en otro bloque 1 y 3")

    }
}
}
if(tipobloque== "3"){
  let tiketscomprados=parseInt( prompt("cuantos tikets desea adquirir? "))

  while(tiketscomprados<bloque3){
    let tiketsrestantes= bloque3-tiketscomprados;
    let tikets=prompt("desea adquirir mas tikets? Quedan: "+tiketsrestantes)
    let tiketsInt=parseInt(tikets)
    tiketscomprados+=tiketsInt;
    
    if (tiketscomprados>=bloque3){
      alert("los cupos estan llenos mira en otro bloque 1 y 2")

    }
}
}
}