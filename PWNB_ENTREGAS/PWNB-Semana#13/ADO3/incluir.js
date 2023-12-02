// Função para validar campos numéricos
function validarCamposNumericos(event) {
  const input = event.target;
  const value = input.value;

  if (!value.match(/^[0-9]+$/)) {
      alert("O campo deve conter apenas números.");
      input.value = value.replace(/[^0-9]/g, "");
  }
}

// Adiciona evento de validação para o campo 'numero'
document.querySelector("input[name='numero']").addEventListener("keyup", validarCamposNumericos);

// Função para validar campos de texto (letras)
function validarCamposLetras(event) {
  const input = event.target;
  const value = input.value;

  if (!value.match(/^[a-zA-Z ]+$/)) {
      alert("O campo deve conter apenas letras.");
      input.value = value.replace(/[^a-zA-Z ]/g, "");
  }
}

// Adiciona eventos de validação para os campos 'nome' e 'sobrenome'
document.querySelector("input[name='nome']").addEventListener("keyup", validarCamposLetras);
document.querySelector("input[name='sobrenome']").addEventListener("keyup", validarCamposLetras);

// Função para validar o campo CEP
function validarCEP(event) {
  const input = event.target;
  const value = input.value;

  // Verifica se o comprimento do valor é maior ou igual a 9
  if (value.length >= 9 && !value.match(/^[0-9]{5}-[0-9]{3}$/)) {
      alert("O campo CEP deve estar no formato 00000-000 (cinco dígitos – hífen – três dígitos).");
      input.value = value.replace(/[^0-9-]/g, "");
  }
}

// Adiciona evento de validação para o campo 'cep'
document.querySelector("input[name='cep']").addEventListener("input", validarCEP);

// Função para validar todos os campos do formulário
function validarCampos(formulario) {
  for (let i = 0; i < formulario.elements.length; i++) {
      const input = formulario.elements[i];

      if (input.type !== "button" && input.type !== "submit" && input.value.trim() === "") {
          alert(`O campo ${input.name} é obrigatório.`);
          return false;
      }
  }

  return true;
}

// Função para adicionar um cliente
function adicionarCliente() {
  const formulario = document.getElementById("formularioCliente");

  // Validar os campos antes de adicionar o cliente
  if (validarCampos(formulario)) {
      const cliente = {
          nome: formulario.elements.nome.value,
          sobrenome: formulario.elements.sobrenome.value,
          dataNascimento: formulario.elements.dataNascimento.value,
          cep: formulario.elements.cep.value,
          endereco: formulario.elements.endereco.value,
          numero: formulario.elements.numero.value,
          uf: formulario.elements.uf.value
      };

      // Simulação de utilização de localStorage
      let clientes = JSON.parse(localStorage.getItem("clientes")) || [];
      clientes.push(cliente);
      localStorage.setItem("clientes", JSON.stringify(clientes));

      alert("Cliente adicionado com sucesso!");
      formulario.reset();
  }
}

// Função para listar clientes
function listarClientes() {
  // Simulação de utilização de localStorage
  const clientes = JSON.parse(localStorage.getItem("clientes")) || [];

  if (clientes.length > 0) {
      // Redireciona para a página de listagem de clientes
      window.location.href = "listarClientes.html"; // Substitua pelo caminho real da página
  } else {
      alert("Nenhum cliente cadastrado.");
  }
}

