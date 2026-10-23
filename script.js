const laEle1 = ["André Luiz","Arthur","Breno","Carlos Eduardo","Cauã","Davi","Davi","Eduardo","Emerson","Erick","Eris","Ezequiel","Felipe","Francisco","Gabrielly","Guilherme","Gustavo Alexandre","Gustavo Augusto","Heloa","Isabelle","Ivaneide","Jayme","Jorge","João Pedro","João Vitor","Kaio","Luis Otávio","Layson","Lorenzzo","Lucas","Lucas Matheus","Luis Gustavo","Luiz","Magsdene","Marco Antônio","Mateus","Nickson","Octavio","Otávio","Patrick","Pedro Junio","Rafael","Victor Hugo","Victor Hugo","Vinícius","Willky"];

function mostrar(id, linhas) {
  document.getElementById(id).textContent = linhas.join("\n");
}

function ex2() {
  const laEle2 = ["Ezequiel", "Pedro Junio"];
  laEle2.push("Nickson");
  const laEle3 = laEle2.pop();
  mostrar("out2", ["Saiu: " + JSON.stringify(laEle3), "Equipe final: " + JSON.stringify(laEle2)]);
}

function ex5() {
  const laEle4 = ["patrick", "magsdene", "willky"];
  const laEle5 = laEle4.map(laEle6 => "CRACHÁ • " + laEle6.toUpperCase());
  mostrar("out5", [JSON.stringify(laEle5)]);
}

function ex7() {
  const laEle7 = ["Isabelle", "Francisco", "Guilherme"];
  const laEle8 = laEle7.map((laEle9, laEle10) => (laEle10 + 1) + "º - " + laEle9);
  mostrar("out7", [JSON.stringify(laEle8)]);
}

function ex9() {
  const laEle11 = [32, 18, 25, 40, 12, 27];
  mostrar("out9", [JSON.stringify(laEle11.filter(laEle12 => laEle12 >= 25))]);
}

function ex11() {
  const laEle13 = [6, 2, 8, 0, 5, 7, 3, 9, 4, 10, 1, 6, 0, 12, 5, 2];
  mostrar("out11", [JSON.stringify(laEle13.filter(laEle14 => laEle14 >= 5 && laEle14 <= 10))]);
}

function ex13() {
  const laEle15 = laEle1.find(laEle16 => laEle16.startsWith("Nic"));
  const laEle17 = laEle1.find(laEle18 => laEle18.startsWith("Zé"));
  mostrar("out13", ["Busca por Nic: " + JSON.stringify(laEle15), "Busca por Zé: " + (laEle17 === undefined ? "Crachá não pertence a ninguém da equipe" : laEle17)]);
}

function ex15() {
  const laEle19 = ["Otávio", "Gustavo Augusto", "Pedro Junio"];
  const laEle20 = [true, true, false];
  const laEle21 = laEle20.every(laEle22 => laEle22);
  const laEle23 = laEle20.some(laEle24 => laEle24 === false);
  const laEle25 = laEle20.findIndex(laEle26 => laEle26 === false);
  mostrar("out15", ["Todos estão de luva: " + laEle21, "Alguém esqueceu: " + laEle23, "Posição: " + laEle25, "Funcionário: " + laEle19[laEle25]]);
}

function ex17() {
  const laEle27 = [10, 15, 20, 5, 10];
  const laEle28 = laEle27.reduce((laEle29, laEle30) => laEle29 + laEle30, 0);
  mostrar("out17", ["Arrecadado: R$ " + laEle28, "Faltam: R$ " + (80 - laEle28)]);
}

function ex19() {
  const laEle31 = ["Emerson", "Jorge", "Emerson", "Eris", "Jorge", "Emerson", "Rafael"];
  const laEle32 = laEle33 => laEle31.reduce((laEle34, laEle35) => laEle34 + (laEle35 === laEle33 ? 1 : 0), 0);
  mostrar("out19", ["Emerson: " + laEle32("Emerson"), "Jorge: " + laEle32("Jorge")]);
}

function executarTodos() {
  ex2();
  ex5();
  ex7();
  ex9();
  ex11();
  ex13();
  ex15();
  ex17();
  ex19();
}
