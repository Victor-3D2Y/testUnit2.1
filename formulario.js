// Função para popular as cidades de acordo com o estado selecionado
document.getElementById("state").addEventListener("change", function() {
    var stateSelect = document.getElementById("state");
    var citySelect = document.getElementById("city");
  
    // Limpar as opções de cidade
    citySelect.innerHTML = '<option value="">Selecione uma cidade</option>';
  
    // Obter o estado selecionado
    var selectedState = stateSelect.value;
  
    // Validar se um estado válido foi selecionado
    if (selectedState !== "") {
      // Definir as cidades correspondentes ao estado selecionado
      var cities = [];
      switch (selectedState) {
        case "SP":
          cities = ["São Paulo", "Campinas", "Santo André"];
          break;
        case "RJ":
          cities = ["Rio de Janeiro", "Niterói", "Nova Iguaçu"];
          break;
        case "MG":
          cities = ["Belo Horizonte", "Contagem", "Uberlândia"];
          break;
        case "ES":
          cities = ["Vitória", "Vila Velha", "Cariacica"];
          break;
        default:
          break;
      }
  
      // Habilitar o select de cidade e adicionar as opções correspondentes
      citySelect.disabled = false;
      cities.forEach(function(city) {
        var option = document.createElement("option");
        option.value = city;
        option.textContent = city;
        citySelect.appendChild(option);
      });
    } else {
      // Se nenhum estado válido for selecionado, desabilitar o select de cidade
      citySelect.disabled = true;
    }
  });
  
  // Função para validar o formulário
  document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o comportamento padrão de recarregar a página
  
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var age = document.getElementById("age").value;
    var state = document.getElementById("state").value;
    var city = document.getElementById("city").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var specialCharacters = /[!@#$%^&*()_+\-={}[\]|:;'"<>,.?/]/;
  
    // Validar nome (apenas requerido)
    if (name === "") {
      displayFormMessage("Por favor, informe seu nome.");
      return false;
    }
  
    // Validar e-mail (apenas requerido, validação básica de formato com tipo "email")
    if (email === "") {
      displayFormMessage("Por favor, informe seu e-mail.");
      return false;
    }
  
    // Validar telefone (apenas requerido)
    if (phone === "") {
      displayFormMessage("Por favor, informe seu telefone.");
      return false;
    }
  
    // Validar idade (deve ser maior ou igual a 18 anos)
    if (age === "" || parseInt(age) < 18) {
      displayAgeMessage("Você deve ter pelo menos 18 anos para se cadastrar.");
      return false;
    }
  
    // Validar estado (deve ser selecionado)
    if (state === "") {
      displayFormMessage("Por favor, selecione um estado.");
      return false;
    }
  
    // Validar cidade (deve ser selecionada)
    if (city === "") {
      displayFormMessage("Por favor, selecione uma cidade.");
      return false;
    }
  
    // Validar senha (requerida e deve conter pelo menos um caractere especial)
    if (password === "") {
      displayPasswordMessage("Por favor, informe sua senha.");
      return false;
    } else if (!specialCharacters.test(password)) {
      displayPasswordMessage("A senha deve conter pelo menos um caractere especial.");
      return false;
    }
  
    // Validar confirmação de senha
    if (confirmPassword === "") {
      displayConfirmPasswordMessage("Por favor, confirme sua senha.");
      return false;
    } else if (password !== confirmPassword) {
      displayConfirmPasswordMessage("As senhas digitadas não correspondem. Por favor, digite novamente.");
      return false;
    }
  
    // Simulação de envio do formulário (aqui você pode realizar o envio para o backend)
  
    // Exibir mensagem de sucesso permanente
    displayFormMessage("Formulário enviado com sucesso!", "green");
  
    return true; // Permitir o envio do formulário
  });
  
  function displayPasswordMessage(message) {
    var passwordMessage = document.getElementById("passwordMessage");
    passwordMessage.textContent = message;
  }
  
  function displayConfirmPasswordMessage(message) {
    var confirmPasswordMessage = document.getElementById("confirmPasswordMessage");
    confirmPasswordMessage.textContent = message;
  }
  
  function displayFormMessage(message, color) {
    var formMessage = document.getElementById("formMessage");
    formMessage.textContent = message;
    formMessage.style.color = color || "red"; // padrão para cor vermelha se não for especificada outra cor
  }
  
  function displayAgeMessage(message) {
    var ageMessage = document.getElementById("ageMessage");
    ageMessage.textContent = message;
  }
  
  // Função para limpar mensagens de erro ao corrigir o campo
  document.getElementById("password").addEventListener("input", function() {
    displayPasswordMessage("");
  });
  
  document.getElementById("confirmPassword").addEventListener("input", function() {
    displayConfirmPasswordMessage("");
  });
  document.getElementById('invertColorsBtn').addEventListener('click', function() {
    const body = document.body;
    // Alterna entre aplicar e remover o filtro de inversão
    if (body.style.filter === 'invert(1)') {
        body.style.filter = '';
    } else {
        body.style.filter = 'invert(1)';
    }
    if (body.classList.contains('inverted')) {
      body.classList.remove('inverted');
  } else {
      body.classList.add('inverted');
  }
});
document.addEventListener('DOMContentLoaded', function() {
  const textArea = document.getElementById('textArea');
  const charCount = document.getElementById('charCount');
  const message = document.getElementById('message');
  const maxChars = parseInt(textArea.getAttribute('maxlength'), 10);

  textArea.addEventListener('input', function() {
      const currentLength = textArea.value.length;
      charCount.textContent = `Caracteres: ${currentLength}/${maxChars}`;

      // Mostrar a mensagem somente quando o limite máximo é atingido
      if (currentLength >= maxChars) {
          message.classList.remove('hidden');
      } else {
          message.classList.add('hidden');
      }
  });
});
document.addEventListener('DOMContentLoaded', function () {
  let currentFontSize = parseInt(window.localStorage.getItem('fontSize')) || 16;

  document.body.style.fontSize = currentFontSize + 'px';

  document.querySelector('#increase-font').addEventListener('click', function () {
      if (currentFontSize < 100) { // Verifica se o tamanho não ultrapassa 100px
          currentFontSize += 2; // Aumenta o tamanho da fonte
          document.body.style.fontSize = currentFontSize + 'px';
          window.localStorage.setItem('fontSize', currentFontSize);
      }
  });

  document.querySelector('#decrease-font').addEventListener('click', function () {
      if (currentFontSize > 10) { // Verifica se o tamanho não é menor que 10px
          currentFontSize -= 2; // Diminui o tamanho da fonte
          document.body.style.fontSize = currentFontSize + 'px';
          window.localStorage.setItem('fontSize', currentFontSize);
      }
  });
});