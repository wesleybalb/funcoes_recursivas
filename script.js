
document.querySelector('#btn').addEventListener('click', (e) => {
    // Previne o comportamento padrão do botão
    e.preventDefault();
    let numero = parseInt(document.querySelector('#numero').value);
    
    if (isNaN(numero) || numero < 0) {
        alert('Por favor, insira um número inteiro não negativo.');
        return;
    }

    console.log(`Calculando o fatorial de ${numero}...`);

    // Limpa o conteúdo anterior da div de memória de cálculo
    document.querySelector('#calc_memory').innerHTML = '';

    // Chama a função fatorial e exibe o resultado

    let resultado = fatorial(numero);
    document.querySelector('#resultado').textContent = `Fatorial de ${numero} é: ${resultado}`;
    

});

console.log('Script carregado.');

console.log(document.getElementById('calc_memory').innerHTML)

function fatorial(n) {
    const m_calc = document.getElementById('calc_memory')
    
    m_calc.innerHTML += `Calculando fatorial de ${n}...<br>
    Passo: ${n} * fatorial(${n - 1})<br>
    `;

    if (n === 0 || n === 1) {

        return 1; // Caso base

    } else {

        return n * fatorial(n - 1); // Chamada recursiva
    }
}

function limparCampos() {
    document.querySelector('#resultado').textContent = '';
    document.querySelector('#calc_memory').innerHTML = '';
    document.querySelector('#numero').value = '';
    console.log('Memória de cálculo limpa.');
}