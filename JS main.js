function criacartao(categoria,pergunta,resposta){
    let container = document.getElement('container');
    let cartao = document.createElement('article');
    cartao.className = 'cartao';
cartao.innerHTML =
<div class="conteudo-cartao">
    <h3>${categoria}</h3>
<div class = "pergunta-cartao">
<p>${pergunta}</p>
</div>