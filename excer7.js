let raioPiscina = 3.5
let alturaPiscina = 1.6

let areaPscina = Math.round(Math.PI * Math.pow(raioPiscina, 2))
let volumePiscina = areaPscina * alturaPiscina

let volumePiscinaLitros = Math.round(volumePiscina * 1000)

//o problema de software foi que ao inves de multiplicar o volume da piscina por valor 1000 litros ele dividiu esse valor resultando em 0.68