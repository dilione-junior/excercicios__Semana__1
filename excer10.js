//enviar email automatico 
function enviaEmail(nomeDoCliente, destino, valorPassagem, diariaHotel, guia, quantidadeDias, valorTotal ){
    let email = (nomeDoCliente + " , você vai viajar para " + destino + " . A sua passagemcustará R$ " + valorPassagem + " , a diária do hotel será de R$ " + diariaHotel + " e o valor do guia será de R$ " + guia + " . Sua viagem de " + quantidadeDias + " ficará com o valor total de R$ " + valorTotal)
    document.write(email)
}
    enviaEmail("Dilione", "Nova York" , 5.000 , 150 , 350 , 15 , (valorPassagem = diariaHotel + guia))