function calculoDigito(primeiroResultado){  // Realiza o cálculo para saber qual o digito verificador.
   let digito = 11 - (primeiroResultado % 11);
   if(digito > 9) {                                 
       digito = 0;
   }

   return digito;
}

function ValidaCPF(cpf = 0) {
    cpf = cpf.replace(/\D+/g, '') // Retira da string enviada qualquer caractere que não seja número

    if (cpf.length > 11) return false; // Se a string for superior a 11 digitos, o cpf já é considerado inválido

    let soma = 0;
    let primeiroResultado = 0
    let segundoResultado = 0
    
    for(let j = 10; j >= 2; j--){ // Multiplicação para descoberta do primeiro resultado para o primeiro digito
        primeiroResultado += j * cpf[soma]
        soma ++
    }
    soma = 0
    

    for(let i = 11; i>= 2; i--){ // Multiplicação para descoberta do segundo resultado para o segundo digito
        segundoResultado += i * cpf[soma]
        soma ++
    }


    let primeiroDigito = calculoDigito(primeiroResultado);
    let segundoDigito = calculoDigito(segundoResultado);

    if(primeiroDigito != cpf[9] || segundoDigito != cpf[10]){ // verifica se os valores que foram obtidos conferem com os digitos do cpf repassado
        return false;
    }

    return true;
}

let cpf = '354.838.170-79'; //CPF fictíco apenas para fins de estudo.
let resultado = ValidaCPF(cpf);


if(resultado){
    console.log(`O CPF: ${cpf} é válido!`)
} else {
    console.log(`O CPF: ${cpf} é inválido!`)
}