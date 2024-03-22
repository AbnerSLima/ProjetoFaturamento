/* Pagina Home */

/* Pagina Produtos */

/* Pagina Pedidos */
function adicionarItem() {
    console.log('dando certo')
    const codigo = document.getElementById('cod_de_barras').value;
    const listaItens = document.getElementById('lista-itens').querySelectorAll('tbody tr');
    const listaPedidos = document.getElementById('lista_de_itens').querySelector('tbody');

    var qnt1 = 1
    listaItens.forEach(item => {
        if (item.cells[0].textContent === codigo) {
            const descricao = item.cells[1].textContent;
            const valor = item.cells[2].textContent;
            const newRow = listaPedidos.insertRow();
            newRow.insertCell(0).textContent = descricao;
            newRow.insertCell(1).textContent = qnt1;
            newRow.insertCell(2).textContent = valor;
            newRow.insertCell(3).textContent = valor;
        }
    });
}

var valorTotalVenda = 500 /*Precisa-se criar um cauculo onde todas as */
const valorTotalPedido = document.querySelector('#valor_total_venda')
valorTotalPedido.textContent = valorTotalVenda


const faturarButton = document.getElementById('faturarButton');

/* Pagina Faturamento */
function atualizarValorAPagar() {
    let valorTotalFaturamento = document.getElementById("valor_total").value;
    let desconto = document.getElementById("desconto").value;
    let valorAPagar = valorTotalFaturamento - desconto;
    let parcelas = document.getElementById("parcelas").value;
    if (parcelas > 1) {
        valorAPagar = valorAPagar / parcelas;
    }
    document.getElementById("valor_a_pagar").value = valorAPagar.toFixed(2);
}

/* Pagina Romaneio 
const button_print=document.getElementById("button_print")

button_print.addEventListener("click",(evt)=>{
    window.print()
})*/
