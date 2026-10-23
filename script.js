const equipe = ["André Luiz","Arthur","Breno","Carlos Eduardo","Cauã","Davi","Davi","Eduardo","Emerson","Erick","Eris","Ezequiel","Felipe","Francisco","Gabrielly","Guilherme","Gustavo Alexandre","Gustavo Augusto","Heloa","Isabelle","Ivaneide","Jayme","Jorge","João Pedro","João Vitor","Kaio","Luis Otávio","Layson","Lorenzzo","Lucas","Lucas Matheus","Luis Gustavo","Luiz","Magsdene","Marco Antônio","Mateus","Nickson","Octavio","Otávio","Patrick","Pedro Junio","Rafael","Victor Hugo","Victor Hugo","Vinícius","Willky"];

function mostrar(id, linhas) {
  document.getElementById(id).textContent = linhas.join("\n");
}

function ex2() {
  const equipeEstoque = ["Ezequiel", "Pedro Junio"];
  equipeEstoque.push("Nickson");
  const saiu = equipeEstoque.pop();
  mostrar("out2", ["Saiu: " + JSON.stringify(saiu), "Equipe final: " + JSON.stringify(equipeEstoque)]);
}

function ex5() {
  const novatos = ["patrick", "magsdene", "willky"];
  const crachas = novatos.map(nome => "CRACHÁ • " + nome.toUpperCase());
  mostrar("out5", [JSON.stringify(crachas)]);
}

function ex7() {
  const apresentacoes = ["Isabelle", "Francisco", "Guilherme"];
  const ordem = apresentacoes.map((nome, i) => (i + 1) + "º - " + nome);
  mostrar("out7", [JSON.stringify(ordem)]);
}

function ex9() {
  const bolosPorDia = [32, 18, 25, 40, 12, 27];
  mostrar("out9", [JSON.stringify(bolosPorDia.filter(qtd => qtd >= 25))]);
}

function ex11() {
  const horasExtras = [6, 2, 8, 0, 5, 7, 3, 9, 4, 10, 1, 6, 0, 12, 5, 2];
  mostrar("out11", [JSON.stringify(horasExtras.filter(horas => horas >= 5 && horas <= 10))]);
}

function ex13() {
  const nickson = equipe.find(nome => nome.startsWith("Nic"));
  const ze = equipe.find(nome => nome.startsWith("Zé"));
  mostrar("out13", ["Busca por Nic: " + JSON.stringify(nickson), "Busca por Zé: " + (ze === undefined ? "Crachá não pertence a ninguém da equipe" : ze)]);
}

function ex15() {
  const equipeAcougue = ["Otávio", "Gustavo Augusto", "Pedro Junio"];
  const usandoLuva = [true, true, false];
  const todos = usandoLuva.every(valor => valor);
  const alguem = usandoLuva.some(valor => valor === false);
  const posicao = usandoLuva.findIndex(valor => valor === false);
  mostrar("out15", ["Todos estão de luva: " + todos, "Alguém esqueceu: " + alguem, "Posição: " + posicao, "Funcionário: " + equipeAcougue[posicao]]);
}

function ex17() {
  const vaquinha = [10, 15, 20, 5, 10];
  const arrecadado = vaquinha.reduce((total, valor) => total + valor, 0);
  mostrar("out17", ["Arrecadado: R$ " + arrecadado, "Faltam: R$ " + (80 - arrecadado)]);
}

function ex19() {
  const plantoes = ["Emerson", "Jorge", "Emerson", "Eris", "Jorge", "Emerson", "Rafael"];
  const contagem = nome => plantoes.reduce((total, plantao) => total + (plantao === nome ? 1 : 0), 0);
  mostrar("out19", ["Emerson: " + contagem("Emerson"), "Jorge: " + contagem("Jorge")]);
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
