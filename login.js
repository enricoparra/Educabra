const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Selecionando os elementos do formulário
    const nome = document.getElementById('nome');
    const email = document.getElementById('email');
    const senha = document.getElementById('senha');   


    // Função para verificar se um campo está vazio
    const estaVazio = (campo) => {
        return campo.value.trim() === '';
    };

    // Validação dos campos
    if (estaVazio(nome)) {
        alert('Por favor, preencha o campo nome.');
        return;
    }

    if (estaVazio(email)) {
        alert('Por favor, preencha o campo email.');
        return;
    }

    if (estaVazio(senha)) {
        alert('Por favor, preencha o campo senha.');
        return;
    }

    // Se todos os campos estiverem válidos, podemos enviar os dados
    // Aqui você colocaria o código para enviar os dados para o servidor
    alert('Formulário enviado com sucesso!');
});