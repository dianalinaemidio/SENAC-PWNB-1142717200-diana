    function validateForm() {
        var nome = document.getElementById('nome').value;
        var sobrenome = document.getElementById('sobrenome').value;
        var cidade = document.getElementById('cidade').value;
        var cep = document.getElementById('cep').value;

        var nomeRegex = /^[a-zA-Z]+$/;
        var cidadeRegex = /^[a-zA-Z]+$/;
        var cepRegex = /^\d{5}-\d{3}$/;

        if (!nomeRegex.test(nome)) {
            alert('Nome inválido. Somente letras são permitidas.');
            return false;
        }

        if (!nomeRegex.test(sobrenome)) {
            alert('Sobrenome inválido. Somente letras são permitidas.');
            return false;
        }

        if (!cidadeRegex.test(cidade)) {
            alert('Cidade inválida. Somente letras são permitidas.');
            return false;
        }

        // Utilize a máscara para validar o formato do CEP
        var cepInput = document.getElementById('cep');
        cepInput.inputmask('99999-999');

        if (!cepRegex.test(cep)) {
            alert('CEP inválido. Formato válido: 12345-678.');
            return false;
        }

        return true;
    }


    function incluirCliente() {
        // Obtenha os valores dos campos
        var nome = document.getElementById('nome').value;
        var sobrenome = document.getElementById('sobrenome').value;
        var dataNascimento = document.getElementById('data-nascimento').value;
        var tipoCliente = document.getElementById('tipo-cliente').value;
        var cidade = document.getElementById('cidade').value;
        var cep = document.getElementById('cep').value;
        var endereco = document.getElementById('endereco').value;
    
        // Verifique se todos os campos obrigatórios estão preenchidos
        if (nome === '' || sobrenome === '' || dataNascimento === '' || tipoCliente === '' || cidade === '' || cep === '' || endereco === '') {
            alert('Por favor, preencha todos os campos antes de incluir o cliente.');
        } else {
            // Se todos os campos estiverem preenchidos, continue com a lógica de inclusão
            alert('Cliente incluído com sucesso!');
    
            // Adicione uma nova linha à tabela
            adicionarLinhaTabela(nome, sobrenome, dataNascimento, tipoCliente, cidade, cep, endereco);
    
            // Limpe o formulário após a inclusão
            limparFormulario();
        }
    }


    function excluirCliente() {
        // Obtém a referência para a tabela
        var tabela = document.getElementById('tabelaClientes');

        // Obtém a referência para a linha selecionada
        var linhaSelecionada = tabela.querySelector('.selecionado');

        // Verifica se uma linha foi selecionada
        if (linhaSelecionada) {
            // Remove a linha da tabela
            tabela.deleteRow(linhaSelecionada.rowIndex);
            alert('Cliente excluído com sucesso!');
        } else {
            alert('Por favor, selecione um cliente para excluir.');
        }
    }
    
    function consultarCliente() {
        // Pede ao usuário para inserir o ID
        var idCliente = prompt('Digite o ID do cliente:');
    
        // Verifica se o usuário clicou em "Cancelar" ou deixou o campo em branco
        if (idCliente === null || idCliente.trim() === '') {
            alert('Operação cancelada. Por favor, insira um ID válido.');
            return;
        }
    
        // Chame a função que realiza a consulta com base no ID inserido
        consultarClientePorId(idCliente);
    }
    

    // Função para consultar o cliente por ID
    function consultarClientePorId(idCliente) {
        // Obtém a referência para a tabela
        var tabela = document.getElementById('tabelaClientes');
        
        // Encontrar a célula correspondente ao ID na primeira coluna da tabela
        var celulaId;
        for (var i = 0, row; row = tabela.rows[i]; i++) {
            if (row.cells[0].textContent === idCliente) {
                celulaId = row.cells[0];
                break;
            }
        }

        // Verifica se o cliente foi encontrado
        if (celulaId) {
            // Mostra os detalhes do cliente
            alert('Detalhes do Cliente:\n\n' +
                'ID: ' + celulaId.textContent + '\n' +
                'Nome: ' + row.cells[1].textContent + '\n' +
                'Sobrenome: ' + row.cells[2].textContent + '\n' +
                'Data de Nascimento: ' + row.cells[3].textContent + '\n' +
                'Tipo de Cliente: ' + row.cells[4].textContent + '\n' +
                'Cidade: ' + row.cells[5].textContent + '\n' +
                'CEP: ' + row.cells[6].textContent + '\n' +
                'Endereço: ' + row.cells[7].textContent);
        } else {
            alert('Cliente não encontrado. Verifique o ID inserido.');
        }
    }

    
    function alterarCliente() {
        // Obtém a referência para a tabela
        var tabela = document.getElementById('tabelaClientes');
    
        // Obtém a referência para a linha selecionada
        var linhaSelecionada = tabela.querySelector('.selecionado');
    
        // Verifica se uma linha foi selecionada
        if (linhaSelecionada) {
            // Preenche o formulário com os dados do cliente selecionado
            document.getElementById('nome').value = linhaSelecionada.cells[1].textContent;
            document.getElementById('sobrenome').value = linhaSelecionada.cells[2].textContent;
            document.getElementById('data-nascimento').value = linhaSelecionada.cells[3].textContent;
            document.getElementById('tipo-cliente').value = linhaSelecionada.cells[4].textContent;
            document.getElementById('cidade').value = linhaSelecionada.cells[5].textContent;
            document.getElementById('cep').value = linhaSelecionada.cells[6].textContent;
            document.getElementById('endereco').value = linhaSelecionada.cells[7].textContent;
    
            // Remove a classe 'selecionado' da linha
            linhaSelecionada.classList.remove('selecionado');
    
            // Exibe mensagem informando que os dados foram preenchidos para edição
            alert('Dados do cliente preenchidos para edição. Após as alterações, clique em "Incluir".');
    
        } else {
            alert('Por favor, selecione um cliente para alterar.');
        }
    }
    
    
    

    function limparFormulario() {
        // Adicione aqui a lógica para limpar o formulário
        document.getElementById('nome').value = '';
        document.getElementById('sobrenome').value = '';
        document.getElementById('data-nascimento').value = '';
        document.getElementById('tipo-cliente').value = '';
        document.getElementById('cidade').value = '';
        document.getElementById('cep').value = '';
        document.getElementById('endereco').value = '';
    }
    
    let idContador = 1; // Inicializa o contador de ID

    function adicionarLinhaTabela(nome, sobrenome, dataNascimento, tipoCliente, cidade, cep, endereco) {
        var tabela = document.getElementById('tabelaClientes');
        var linha = tabela.insertRow(-1); // Insere uma nova linha no final da tabela
        
        // Adiciona as células com os dados do cliente
        var celulaId = linha.insertCell(0);
        var celulaNome = linha.insertCell(1);
        var celulaSobrenome = linha.insertCell(2);
        var celulaDataNascimento = linha.insertCell(3);
        var celulaTipoCliente = linha.insertCell(4);
        var celulaCidade = linha.insertCell(5);
        var celulaCep = linha.insertCell(6);
        var celulaEndereco = linha.insertCell(7);

        // Incrementa o contador de ID e atribui à célula correspondente
        celulaId.textContent = idContador++;
        
        // Preenche as células com os dados do cliente
        celulaNome.innerHTML = nome;
        celulaSobrenome.innerHTML = sobrenome;
        celulaDataNascimento.innerHTML = dataNascimento;
        celulaTipoCliente.innerHTML = tipoCliente;
        celulaCidade.innerHTML = cidade;
        celulaCep.innerHTML = cep;
        celulaEndereco.innerHTML = endereco;

         // Adiciona a classe 'selecionado' à linha
        linha.classList.add('selecionado');
    }
