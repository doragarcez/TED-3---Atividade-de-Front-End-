const telaForm = document.getElementById("tela-form");
const telaResultado = document.getElementById("tela-resultado");
const inputBase = document.getElementById("base");
const inputAltura = document.getElementById("altura");
const erro = document.getElementById("erro");
const valorArea = document.getElementById("valor-area");
const formula = document.getElementById("formula");

function lerNumero(texto) {
  return parseFloat(texto.replace(",", ".").trim());
}

function formatar(numero) {
  return numero.toLocaleString("pt-BR", { maximumFractionDigits: 2 });
}

function calcular() {
  const base = lerNumero(inputBase.value);
  const altura = lerNumero(inputAltura.value);

  if (!(base > 0) || !(altura > 0)) {
    erro.textContent = "Informe base e altura com valores maiores que zero.";
    return;
  }

  erro.textContent = "";

  const area = (base * altura) / 2;

  valorArea.textContent = formatar(area);
  formula.textContent = "(" + formatar(base) + " × " + formatar(altura) + ") ÷ 2";

  telaForm.classList.remove("ativa");
  telaResultado.classList.add("ativa");
}

function voltar() {
  inputBase.value = "";
  inputAltura.value = "";
  telaResultado.classList.remove("ativa");
  telaForm.classList.add("ativa");
  inputBase.focus();
}

document.getElementById("btn-calcular").addEventListener("click", calcular);
document.getElementById("btn-voltar").addEventListener("click", voltar);

[inputBase, inputAltura].forEach(function (campo) {
  campo.addEventListener("keydown", function (e) {
    if (e.key === "Enter") calcular();
  });
});