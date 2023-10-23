let idadeInformada = parseInt(prompt("Qual a sua idade ? "))

        if(idadeInformada >= 18 && idadeInformada < 70){
            mostra("O voto é obrigatório.")
        } else if (idadeInformada >= 70){
            mostra("Voto opcional.")
        } else if (idadeInformada >= 16 && idadeInformada < 18){
            mostra("Voto opcional.")
        } else if (idadeInformada < 16) {
            mostra("Não vota")
        }