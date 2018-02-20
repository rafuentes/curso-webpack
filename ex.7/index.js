const produto = {
    nome: 'caneta Bic Preta',
    preco: 1.90,
    desconto: 0.50
}

function clone(obj){
    return {...obj}
}

const novoProduto = clone(produto)
novoProduto.nome = "now is blue"

console.log(produto, novoProduto)