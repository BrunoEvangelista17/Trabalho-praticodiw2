$(document).ready(function() {
  // Pega o ID de produto na URL
  const urlParams = new URLSearchParams(window.location.search);

  const productId = urlParams.get('id');

  fetch(`https://diwserver.vps.webdock.cloud/products/${productId}`)
  .then(function(res){res.json()})
  .then(function(json){
    //$('#product-image').attr('src', json.image);
    //$('#product-image').attr('alt', json.title);
    //$('#product-title').text(json.title);
    //$('#product-description').text(json.description);
    //$('#product-price').text(`Price: ${json.price}`);
    //$('#edit-btn').attr('href', `add.html?id=${json.id}`);
    let text =  `<h1>Detalhes do Produto</h1>
    <div class="row">
      <div class="col-md-4">
        <img id="product-image" src="${json.image}" class="img-fluid" alt="Descricao da imagem">
      </div>
      <div class="col-md-8">
        <h2 id="product-title"> ${json.title} </h2>
        <p id="product-description"> ${json.description} </p>
        <p id="product-price">${json.price}</p>
        <button id="add-to-cart-btn" class="btn btn-primary">Adicionar ao Carrinho</button>
      </div>
    </div>`
    let tabela = document.getElementById("product-detail")
    tabela.innerHTML = text
  })

});