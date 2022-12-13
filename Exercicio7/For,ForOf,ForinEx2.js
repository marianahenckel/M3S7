const notas = {
    bimestre1: 7.0,
    bimestre2: 3.7,
    bimestre3: 6.4,
    bimestre4: 8.6
   }
   soma =0;
   quant = 0
   for(let bimestre in notas) {
    soma = soma + notas[bimestre];
    quant++;
}
media = soma /quant;
if(media > 7){
    console.log(`Sua média é: ${media}, e você foi aprovado.`);
    
}else{
    console.log(`Sua média é: ${media}, e você foi reprovado.`);
}