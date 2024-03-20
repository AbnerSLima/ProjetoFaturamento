/* Pagina Home */

/* Pagina Produtos */

/* Pagina Pedidos */

/*Precisa-se criar um cauculo onde todas as */
var valorTotalVenda = 500
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

/* Pagina Romaneio */
const button_print=document.getElementById("button_print")

button_print.addEventListener("click",(evt)=>{
    window.print()
})
