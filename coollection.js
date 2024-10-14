
var productContainer = document.getElementById("product");
var search = document.getElementById("search");
var productlist = productContainer.querySelectorAll(".products-box");

search.addEventListener("keyup", function(event) {
    var enteredValue = event.target.value.toUpperCase();

    for (let count = 0; count < productlist.length; count++) {
        var productname = productlist[count].querySelector("p").textContent;

        if (productname.toUpperCase().indexOf(enteredValue) < 0) {
            productlist[count].style.display = "none";
        } else {
            productlist[count].style.display = "block";
        }
    }
});