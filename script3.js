const numerosValidados = new Array;
const buttonFinalizar = document.querySelector('input.mostrarResult');
const listaExibicaoPrevia = document.querySelector('select.lista-operacoes');
buttonFinalizar.addEventListener('click', finalizar);

function adicionarElemento(numero, caixa) {
     if(!numero || typeof Number(numero) === 'NaN'){ 
          alert('Digite um número');
     }
     else if(numero < 1 || numero > 100) alert('Digite um número entre 1 e 100');
     else if(numerosValidados.includes(numero)) alert('Sem números repetidos!');
     else {
          let itemOpt = document.createElement('option')
          itemOpt.innerHTML = `Número ${numero} adicionado!`;
          itemOpt.setAttribute("class","options")
          listaExibicaoPrevia.appendChild(itemOpt)
          numerosValidados.push(numero);
          document.querySelector('span.resul').innerHTML = '';
     }
     caixa.focus(); 
     caixa.value = '';
}
function finalizar() {
     if(numerosValidados.length === 0) alert('Digite ao menos algum número primeiro!');
     else {
          let span = document.querySelector('span.resul')
          const numerosCadastrados = numerosValidados.length;
          let somaNumeros = 0;
          let minNumero;
          let maxNumero;

          numerosValidados.forEach((el, indice, array) => {
               somaNumeros += Number(el);

               maxNumero = maxNumeros(el, maxNumero);
               minNumero = minNumeros(el, minNumero);
          })

          mostrarHtml(span, numerosCadastrados, somaNumeros, maxNumero, minNumero);
     }
}
const maxNumeros = (num, maxNum = -Infinity) => {
     if(Number(num) >  Number(maxNum)) {
          return num 
     }
     else {
          return maxNum
     }
}
const minNumeros = (num, minNumero = Infinity) => {
     if(Number(num) <  Number(minNumero)) {
          return num;
     }
     else {
          return minNumero;
     }
}
const mostrarHtml = (span, qtdeNumeros, somaNumeros, maiorNumero, menorNumero) => {
     span.innerHTML = `<p>Foram Cadastrados ${qtdeNumeros} no total.</p>
                         <p>O maior número foi: ${maiorNumero}</p>
                         <p>O menor número foi: ${menorNumero}</p>
                         <p>A soma de todos: ${somaNumeros}</p>
                         <p>A média foi de ${(somaNumeros/qtdeNumeros).toFixed(2)}</p>`;
}