const url = "https://striveschool-api.herokuapp.com/api/product/";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMjk1NTg4Zjc0MDAwMTQyODc2ZDEiLCJpYXQiOjE2ODM4OTI1NjUsImV4cCI6MTY4NTEwMjE2NX0.4ya10MvjXWPHS6BdOGxSy0St76gpF4Wt0as3ptRhKSY";

window.onload = () => {
  fetch(url, {
    method: "GET",

    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.json())

    .then((data) => {
      console.log("Oggetti ottenuti con successo:", data);

      let card = "";
      data.forEach((product) => {
        card += `
              <div class="col-md-3 mb-4">
              <div class="card mb-4 shadow-sm h-100 ">
              <img src="${product.imageUrl}" alt="">
                <div class="card-body">
                  <h5 class="card-title">${product.name}</h5>
                  <p class="card-text">
                  ${product.brand}
                  </p>
                  <p class="card-text">
                  ${product._id}
                  </p>
                  <p class="card-text text-truncate">
                  ${product.description}
                  </p>
                  <p class="card-text">
                  ${product.price} €
                  </p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                    <a class="btn btn-primary"  role="button" href="details.html?id=${product._id}">Details</a>
                    <a class="btn btn-info" href="back-office.html?id=${product._id}">Edit</a>
                   </div>
                  </div>
                </div>
              </div>
            </div>
              `;
        console.log(product);
      });
      cardsRow.innerHTML = card;
    })

    .catch((error) => {
      console.error(
        "Si è verificato un errore durante il recupero dei prodotti:",error);
    });
};
