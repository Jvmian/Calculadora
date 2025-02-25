function appendCharacter(char) {
    const display = document.getElementById("display");
    if (display.value.length >= 20) return; // Limitar o tamanho do visor
    if (char === '.' && display.value.includes('.')) return; // Evitar múltiplos pontos
    display.value += char;
    display.classList.remove("error"); // Remove a classe de erro ao digitar
}

function clearDisplay() {
    const display = document.getElementById("display");
    display.value = "";
    display.classList.remove("error"); // Remove a classe de erro ao limpar
}

function removeLastCharacter() {
    const display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
    display.classList.remove("error"); // Remove a classe de erro ao remover caractere
}

function calculateResult() {
    const display = document.getElementById("display");
    try {
        const result = eval(display.value);
        if (result === Infinity || isNaN(result)) {
            throw new Error("Erro matemático");
        }
        display.value = result;
        display.classList.remove("error"); // Remove a classe de erro se o cálculo for bem-sucedido
    } catch (error) {
        display.value = "Erro";
        display.classList.add("error"); // Adiciona a classe de erro para animação
    }
}

// Suporte para teclado
document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (/[0-9()+\-*/.]/.test(key)) {
        appendCharacter(key);
    } else if (key === 'Enter') {
        calculateResult();
    } else if (key === 'Backspace') {
        removeLastCharacter();
    } else if (key === 'Escape') {
        clearDisplay();
    }
});

// Adicionando animação de clique nos botões
document.querySelectorAll('.buttons button').forEach(button => {
    button.addEventListener('click', () => {
        button.classList.add('clicked');
        setTimeout(() => button.classList.remove('clicked'), 100);
    });
});