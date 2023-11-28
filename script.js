async function buscaEndereco(cep) {
  var mensagemErro = document.querySelector('#erro');
  mensagemErro.innerHTML = "";
  try {
    var consultaCEP =   (`https://viacep.com.br/ws/${cep}/json/`);
    var consultaCEPConvertida = await consultaCEP.json();
    if (consultaCEPConvertida.erro) {
      throw Error("CEP não existente!");
    }
    var cidade = document.querySelector('#cidade');
    var longradouro = document.querySelector('#endereco');
    var estado = document.querySelector('#estado');


    cidade.value = consultaCEPConvertida.localidade;
    longradouro.value = consultaCEPConvertida.logradouro;
    estado.value = consultaCEPConvertida.uf;
    console.log(consultaCEPConvertida);
    return consultaCEPConvertida;
  } catch (erro) {
    mensagemErro.innerHTML = ` <p> CEP inválido.Tente novamente! </p>`
    console.log(erro);
  }
}

var cep = document.querySelector('#cep');
cep.addEventListener("focusout", ()=> buscaEndereco(cep.value));