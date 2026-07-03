const produtos = [
    {
    id: 1,
    nome: "Mouse"
    preco: 49.90,
    descricao: "Mouse Gamer RGB com 6 botões programáveis e sensor óptico de alta precisão.",
    imagem:"https://images.unsplash.com/photo-1613141411244-0e4ac259d217?q=80&w=1470",
},
{
    id: 2,
    nome: "Teclado"
    preco: 129.90,
    descricao: "Teclado Mecânico com switches Cherry MX, iluminação RGB e design ergonômico.",
    imagem:"https://images.unsplash.com/photo-1633315754878-b5a3b0ce64f7?q=80&w=1476",
},
{
    id: 3,
    nome: "Monitor"
    preco: 899.90,
    descricao: "Monitor LED 27 polegadas com resolução Full HD, taxa de atualização de 144Hz e suporte ajustável.",
    imagem:"https://images.unsplash.com/photo-1548268520-f9340c2cf07b?q=80&w=765",
}
];


const produtosSelect = document.getElementosById("produtos");

//produtoSelect = <select name="produtos" id="produtos"></select>

function carregarProdutos() {
    produtosSelect.innerHTML = "";

    produtos.forEach(produto) => {
        const option = document.createElement("option");
        //<option.value"1">Mouse</option>
        //<option.value"1">Teclado</option>
        //<option.value"1">Monitor</option>
        option.value = produto.id;
        option.textContent = produto.nome;
        produtosSelect.appendChild(option);
    });
}

carregandoProdutos();