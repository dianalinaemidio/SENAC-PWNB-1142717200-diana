 // Máscaras
 document.addEventListener('DOMContentLoaded', function () {
    Inputmask({ mask: '99999-999' }).mask(document.getElementById('cep'));
    Inputmask({ mask: '999999' }).mask(document.getElementById('numero'));
});

function adicionarCliente() {
    if (validarCampos()) {
        // Lógica para adicionar o cliente (pode ser implementada aqui ou chamando uma função específica)
        alert('Cliente adicionado com sucesso!');
        limparCampos();
    }
}

function validarCampos() {
    const nome = document.getElementById('nome').value;
    const sobrenome = document.getElementById('sobrenome').value;
    const dataNascimento = document.getElementById('dataNascimento').value;
    const cep = document.getElementById('cep').value;
    const endereco = document.getElementById('endereco').value;
    const numero = document.getElementById('numero').value;

    if (!nome || !sobrenome || !dataNascimento || !cep || !endereco || !numero) {
        exibirErro("Todos os campos são obrigatórios");
        return false;
    }

    // Validar CEP
    const cepRegex = /^[0-9]{5}-[0-9]{3}$/;
    if (!cepRegex.test(cep)) {
        exibirErro("O campo CEP deve estar no formato nnnnn-ccc");
        return false;
    }


    // Limpar mensagens de erro caso todos os campos sejam válidos
    limparErros();
    return true;
}

function exibirErro(mensagem) {
    const erroDiv = document.getElementById('mensagemErro');
    erroDiv.textContent = mensagem;
}

function limparErros() {
    const erros = document.querySelectorAll('.mensagem-erro');
    erros.forEach(erro => erro.textContent = '');
}

function limparCampos() {
    document.getElementById('formularioCliente').reset();
}
