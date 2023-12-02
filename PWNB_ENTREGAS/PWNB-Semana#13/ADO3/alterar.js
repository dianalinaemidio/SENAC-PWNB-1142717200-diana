document.addEventListener("DOMContentLoaded", function () {
    // Recupera os dados do cliente do armazenamento local
    const clienteParaEdicao = JSON.parse(localStorage.getItem("clienteParaEdicao"));

    // Preenche o formulário com os dados do cliente
    preencherFormulario(clienteParaEdicao);
});

function preencherFormulario(cliente) {
    // Preencha os campos do formulário com os dados do cliente
    document.getElementById("nome").value = cliente.nome;
    document.getElementById("sobrenome").value = cliente.sobrenome;
    document.getElementById("dataNascimento").value = cliente.dataNascimento;
    document.getElementById("cep").value = cliente.cep;
    document.getElementById("endereco").value = cliente.endereco;
    document.getElementById("numero").value = cliente.numero;
    document.getElementById("uf").value = cliente.uf;
}

// Função para salvar as alterações no cliente
function salvarAlteracoes() {
    // Recupera os dados do cliente do formulário
    const clienteEditado = obterDadosDoFormulario();

    // Recupera a lista de clientes do armazenamento local
    const clientes = JSON.parse(localStorage.getItem("clientes")) || [];

    // Encontra o índice do cliente a ser editado
    const indiceCliente = encontrarIndiceCliente(clienteEditado.id);

    // Substitui o cliente antigo pelo cliente editado
    clientes[indiceCliente] = clienteEditado;

    // Atualiza o armazenamento local com a lista de clientes modificada
    localStorage.setItem("clientes", JSON.stringify(clientes));

    // Redireciona de volta para a lista de clientes
    window.location.href = "listarClientes.html"; // Substitua pelo caminho real da tela de listagem
}

function obterDadosDoFormulario() {
    // Obtenha os dados do formulário e retorne como um objeto cliente
    const clienteEditado = {
        nome: document.getElementById("nome").value,
        sobrenome: document.getElementById("sobrenome").value,
        dataNascimento: document.getElementById("dataNascimento").value,
        cep: document.getElementById("cep").value,
        endereco: document.getElementById("endereco").value,
        numero: document.getElementById("numero").value,
        uf: document.getElementById("uf").value
    };

    return clienteEditado;
}

function encontrarIndiceCliente(clienteId) {
    // Encontre o índice do cliente na lista com base no ID
    const clientes = JSON.parse(localStorage.getItem("clientes")) || [];
    return clientes.findIndex(cliente => cliente.id === clienteId);
}

