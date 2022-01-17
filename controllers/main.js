var sanPhamService = new SanPhamService();

function getEle(id) {
    return document.getElementById(id);
}


getListProducts();
function getListProducts() {
    sanPhamService.layDSSP()
        .then(function (result) {
            renderProduct(result.data);
        })
        .catch(function (error) {
            console.log(error);
        });
}

function renderProduct(mangSP) {
    var contentHTML = "";
    mangSP.map(function (item, index) {
        contentHTML += `
                <div class="col-12 col-md-6 col-lg-4">
                    <div class="card cardPhone">
                        <img src="./assets/img/${item.hinhAnh}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <div class="d-flex justify-content-between">
                                <div>
                                    <h3 class="cardPhone__title">${item.tenSP}</h3>
                                    <p class="cardPhone__text">${item.moTa}</p>
                                </div>
                                <div>
                                    <h3 class="cardPhone__title">$${item.gia}</h3>
                                </div>
                            </div>
                            <div class="d-flex justify-content-between">
                                <div class="cardPhone__rating">
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                </div>
                                <div>
                                    <button class="btnPhone-shadow"><i class="fa fa-shopping-cart"></i> Buy Now</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
              `;
    });
    getEle("productsList").innerHTML = contentHTML;
}