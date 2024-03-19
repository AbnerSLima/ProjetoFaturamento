
function atualizarValorAPagar() {
    let valorTotal = document.getElementById("valor_total").value;
    let desconto = document.getElementById("desconto").value;
    let valorAPagar = valorTotal - desconto;
    let parcelas = document.getElementById("parcelas").value;
    if (parcelas > 1) {
        valorAPagar = valorAPagar / parcelas;
    }
    document.getElementById("valor_a_pagar").value = valorAPagar.toFixed(2);
}

const button_print=document.getElementById("button_print")

button_print.addEventListener("click",(evt)=>{
    window.print()
})
