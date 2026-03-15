
//selecionado os elementos globais
const calcular = document.getElementById('calcular');

//criando a função
function imc (){
// selecionando as minhas variaveis dentro da função
    const nome = document.getElementById ('nome').value;
    const altura = document.getElementById ('altura').value;
    const peso = document.getElementById('peso').value;

    const resultado = document.getElementById('resultado');

    // validaçao
    if  (nome!== '' && altura !=='' && peso !=='') {
       const valorImc = (peso / (altura * altura)).toFixed(2);

       let classificacao = "";
        if (valorImc < 18.5) {
            classificacao = ' esta abaixo do peso';
        } else if(valorImc < 25 ){
            classificacao = "tem o peso ideial";
        }else if (valorImc < 30 ){
            classificacao = "levemente acima do peso";
        }else if (valorImc < 35 ){
            classificacao = "com obesidade grau I"
        }else if (valorImc < 40){
            classificacao = "com obesidade grau II"
        }
        else{
            classificacao = "com obesidade grau III"
        }
        
       resultado.textContent = `${nome} seu IMC é ${valorImc}, e você esta ${classificacao}` ;
    }else {
        resultado.textContent = 'preencha todos os campos' //serve para mostrar o texto (nesse caso é a variavel resultado)
    }
}

//adicionando o evento de click
calcular.addEventListener('click',imc);