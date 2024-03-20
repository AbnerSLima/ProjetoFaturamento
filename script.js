/* Pagina Pedidos */
const faturarButton = document.getElementById('faturarButton');

faturarButton.addEventListener('click', function() {
    const valorTotal = document.getElementById("valor_total_venda").value;
    window.location.href = "faturamento.html?valor_total=" + valorTotal;
});

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
