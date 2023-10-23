//converte moeda  
let passagemNZ = 13996 //reais
let hotelNZ = 79.15 // dolar   
let guiaNZ = 200 //dolar

let dolarNZ = 3.25

let hotelNZReal = hotelNZ * dolarNZ
document.write("O Valor em real do hotel em Nova Zelândia em Real é R$ " + hotelNZReal)

let guiaNZReal = guiaNZ * dolarNZ
document.write("O valor em real para o guia é R$ " + guiaNZReal)

let passagemNZDolar = passagemNZ / dolarNZ
document.write("O valor da passagem em dolar neozelandês para Nova Zelândia é R$ " + passagemNZDolar)
