// Classe Object - Exemplos:
// var produto = {}
// produto.nome = "Caneta";
// produto.preco = 1.99;
// produto.cor = "azul;"
// Outra forma seria:
// var produto = {nome:"Caneta"; preco:1.99; cor:"azul"}

var produto = new Object();
produto.nome = "Caneta";
produto.preco = 1.99;
produto.cor = "azul";

function retornarInfo() {
  return "Meu produto " + this.nome + " " + this.cor + ", custa: " + this.preco;
}

produto.info = retornarInfo;
alert(produto.info());
