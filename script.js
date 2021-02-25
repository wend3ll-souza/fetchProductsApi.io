const createCards = (products) => {
    const anchor = document.getElementById('anchor');
    products.map(item => {
        const card = document.createElement('section');
        const container = document.createElement('div');
        const describe = document.createElement('div');

        const img = document.createElement('img');
        const h3 = document.createElement('h3');
        const p = document.createElement('p');
        const btn = document.createElement('button');

        img.setAttribute('src', item.imagePath);
        img.setAttribute('alt', 'product image')
        h3.innerText = item.name;
        p.innerText = item.price;
        btn. innerText = "comprar";
        
        img.className = "card-img-top w-75";
        h3.className = "card-title";
        p.className = "card-text text-danger";
        btn.className = "btn btn-success text-uppercase";
        container.className ="m-auto"

        describe.className = "card-body";
        card.className = "card my-5 text-center shadow";
        card.style = "width: 10rem;";

        container.appendChild(img);
        describe.appendChild(h3);
        describe.appendChild(p);
        describe.appendChild(btn);
        container.appendChild(describe);
        card.appendChild(container);
        anchor.appendChild(card);
    })
} 

const FETCH = async () => {
    await fetch('https://my-json-server.typicode.com/wend3ll-souza/productsApi/products')
   .then((response) => {
      
      response.json()
                .then(resultado=> {

                    createCards(resultado);

                })
                .catch((erro) => {

                   console.log('Erro ao converter JSON: ' + erro);

                });

   })
   .catch((erro) => {

      console.log(erro);

   });
};

FETCH();
