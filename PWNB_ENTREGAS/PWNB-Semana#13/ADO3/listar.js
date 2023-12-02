/**
 * Função para excluir um cliente da lista.
 * @param {Object} cliente - O objeto cliente a ser excluído.
 * @param {number} index - O índice do cliente na lista.
 */
function excluirCliente(cliente, index) {
    const clientes = JSON.parse(localStorage.getItem("clientes")) || [];
    
    // Remove o cliente do array
    clientes.splice(index, 1);

    // Atualiza o armazenamento local
    localStorage.setItem("clientes", JSON.stringify(clientes));

    // Limpa a tabela e lista os clientes novamente
    limparTabela();
    listarClientes();
    
    alert(`Cliente ${cliente.nome} excluído com sucesso!`);
}

function abrirTelaEdicao(cliente) {
    // Armazena os dados do cliente no localStorage para acesso na tela de edição
    localStorage.setItem("clienteParaEdicao", JSON.stringify(cliente));

    // Redireciona para a tela de edição
    window.location.href = "alterarClientes.html"; // Substitua pelo caminho real da tela de edição
}


/**
 * Função para listar os clientes na tabela.
 */
function listarClientes() {
    const tabelaClientes = document.getElementById("tabelaClientes");
    const clientes = JSON.parse(localStorage.getItem("clientes")) || [];

    for (const cliente of clientes) {
        const row = tabelaClientes.insertRow();
        const keys = ["nome", "sobrenome", "dataNascimento", "cep", "endereco", "numero", "uf"];

        keys.forEach((key, index) => {
            const cell = row.insertCell(index);
            cell.textContent = cliente[key];
        });

        // Adiciona uma célula para as ações
        const cellAcoes = row.insertCell(keys.length);

        // Adiciona ícones de ação
        const btnExcluir = document.createElement("i");
        btnExcluir.classList.add("fas", "fa-trash");
        btnExcluir.addEventListener("click", function () {
            excluirCliente(cliente);
        });
        cellAcoes.appendChild(btnExcluir);

        const btnAlterar = document.createElement("i");
        btnAlterar.classList.add("fas", "fa-edit");
        btnAlterar.addEventListener("click", function () {
            abrirTelaEdicao(cliente);
        });
        cellAcoes.appendChild(btnAlterar);
    }
}

/**
 * Função para voltar para a tela de inclusão.
 */
function voltarParaInclusao() {
    // Redireciona para a tela de inclusão
    window.location.href = "incluirClientes.html"; // Substitua pelo caminho real da tela de inclusão
}

/**
 * Função para limpar a tabela de clientes.
 */
function limparTabela() {
    const tabelaClientes = document.getElementById("tabelaClientes");
    while (tabelaClientes.rows.length > 1) {
        tabelaClientes.deleteRow(1);
    }
}

// Aguarda o carregamento do DOM antes de executar a função
document.addEventListener("DOMContentLoaded", function () {
 listarClientes();
});




