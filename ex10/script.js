const h2Subst = document.getElementById("h2Subst");
const btnSubst = document.getElementById("btnSubst");
const inputMin = document.getElementById("inputMin");
const inputMax = document.getElementById("inputMax");

const handleBtnSubstClick = (evt) => {
  const min = Number(inputMin.value);
  const max = Number(inputMax.value);

  if (min === 0) {
    alert("Favor digitar um valor mínimo diferente de 0");
    return;
  }
  if (max === 0) {
    alert("Favor digitar um valor máximo diferente de 0");
    return;
  }
  if (min > max) {
    alert("O valor mínimo deve ser menor que o valor máximo");
    return;
  }

  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  h2Subst.innerHTML = "Número sorteado: " + randomNumber;
  h2Subst.className = "destaque";
};
