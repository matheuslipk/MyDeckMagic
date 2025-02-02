function juntarTodasAsCartas() {
  const p1 = document.getElementById('pilha1');
  const cartasP1 = p1.getElementsByClassName('card');
  const cartas = document.getElementsByClassName('card');

  for (let i = 0; i < cartas.length - 1; i += 1) {
    const distX = cartasP1[0].offsetLeft - cartas[i + 1].offsetLeft;
    const distY = cartasP1[0].offsetTop - cartas[i + 1].offsetTop;
    cartas[i + 1].style.transform = `translate(${distX}px, ${distY}px)`;
  }
}

function juntarPilha(pilha) {
  const p1 = document.getElementById(pilha);
  const cartasP1 = p1.getElementsByClassName('card');

  for (let i = 0; i < cartasP1.length - 1; i += 1) {
    const distX = cartasP1[0].offsetLeft - cartasP1[i + 1].offsetLeft;
    const distY = cartasP1[0].offsetTop - cartasP1[i + 1].offsetTop;
    cartasP1[i + 1].style.transform = `translate(${distX}px, ${distY}px)`;
  }
}

function juntarColunas() {
  const p1 = document.getElementById('pilha1');
  const p2 = document.getElementById('pilha2');
  const p3 = document.getElementById('pilha3');

  const distX2 = p1.offsetLeft - p2.offsetLeft;
  const distY2 = p1.offsetTop - p2.offsetTop;
  const distX3 = p1.offsetLeft - p3.offsetLeft;
  const distY3 = p1.offsetTop - p3.offsetTop;

  p2.style.transform = `translate(${distX2}px, ${distY2}px)`;
  p3.style.transform = `translate(${distX3}px, ${distY3}px)`;
}

function separarColunas() {
  const p2 = document.getElementById('pilha2');
  const p3 = document.getElementById('pilha3');

  p2.style.transform = 'translate(0, 0)';
  p3.style.transform = 'translate(0, 0)';
}

export function espalharTodas() {
  const cartas = document.getElementsByClassName('card');

  for (let i = 0; i < cartas.length; i += 1) {
    cartas[i].style.transform = 'translate(0, 0)';
  }
}

export function juntaESepara(pilha) {
  juntarPilha(`pilha${pilha}`);

  setTimeout(() => {
    juntarTodasAsCartas();
  }, 500);

  setTimeout(() => {
    espalharTodas();
  }, 1000);
}
