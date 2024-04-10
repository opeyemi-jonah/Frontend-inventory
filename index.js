let  materialData = [

    {
        Name:"wood 30cm",
        description: "lorem ipsem psee ddowe asfdef fsaf",
        image_url: "https://www.freepnglogos.com/uploads/cat-png/online-products-care-tips-food-best-1.png",
        selling_price: "$30.00",
        quantity: 45
    },
    {
        Name:"wood 330cm",
        description: "lorem ipsem psee ddowe asfdef fsaf",
        image_url: "https://www.freepnglogos.com/uploads/cat-png/online-products-care-tips-food-best-1.png",
        selling_price: "$30.00",
        quantity: 55
    },
    {
        Name:"wood 350cm",
        description: "lorem ipsem psee ddowe asfdef fsaf",
        image_url: "https://www.freepnglogos.com/uploads/cat-png/online-products-care-tips-food-best-1.png",
        selling_price: "$30.00",
        quantity: 25
    },
    {
        Name:"laser 30m",
        description: "lorem ipsem psee ddowe asfdef fsaf",
        image_url: "https://www.freepnglogos.com/uploads/cat-png/online-products-care-tips-food-best-1.png",
        selling_price: "$30.00",
        quantity: 15
    },
    {
        Name:"laser 730m",
        description: "lorem ipsem psee ddowe asfdef fsaf",
        image_url: "https://www.freepnglogos.com/uploads/cat-png/online-products-care-tips-food-best-1.png",
        selling_price: "$30.00",
        quantity: 70
    },
    {
        Name:"metal 50mm",
        description: "lorem ipsem psee ddowe asfdef fsaf",
        image_url: "https://www.freepnglogos.com/uploads/cat-png/online-products-care-tips-food-best-1.png",
        selling_price: "$30.00",
        quantity: 30
    },
    {
        Name:"metal 30mm",
        description: "lorem ipsem psee ddowe asfdef fsaf",
        image_url: "https://www.freepnglogos.com/uploads/cat-png/online-products-care-tips-food-best-1.png",
        selling_price: "$30.00",
        quantity: 110
    },
    {
        Name:"laser 130m",
        description: "lorem ipsem psee ddowe asfdef fsaf",
        image_url: "https://www.freepnglogos.com/uploads/cat-png/online-products-care-tips-food-best-1.png",
        selling_price: "$30.00",
        quantity: 90
    },
    {
        Name:"digital blazer 300cm",
        description: "lorem ipsem psee ddowe asfdef fsaf",
        image_url: "https://www.freepnglogos.com/uploads/cat-png/online-products-care-tips-food-best-1.png",
        selling_price: "$30.00",
        quantity: 50
    },
    {
        Name:"metal 750mm",
        description: "lorem ipsem psee ddowe asfdef fsaf",
        image_url: "https://www.freepnglogos.com/uploads/cat-png/online-products-care-tips-food-best-1.png",
        selling_price: "$30.00",
        quantity: 20
    }
]
let quantity = 0;
var cartItemNumber = 0;

// Initialize cart as an empty array
var shoppingCart = [];

// Function to display data
function displayData() {
    var container = document.getElementById("material-container");
    // Clear existing content
    container.innerHTML = "";

    // Create and append elements for each item in the data array
    materialData.forEach(function(item, index) {

        var listMaterialItem = document.createElement("div");
        listMaterialItem.classList.add("card","m-2","p-2");
        listMaterialItem.setAttribute("id",index);

        listMaterialItem.innerHTML = `
        <img src="${item.image_url || 'https://www.freepnglogos.com/uploads/cat-png/online-products-care-tips-food-best-1.png'}" class="card-img-top" alt="cat-png" height="150" width="200">
        <div class="card-item-body">
          <h5 class="card-title">${item.Name}</h5>
          <p class="card-text">${item.description || 'No description available'}</p>
          <p>${item.selling_price || '0.00'}</p>
          <p>${item.quantity} available</p>
          <div class="d-flex flex-column align-items-start mb-3"> 
          <a href="#offcanvasExample" id="${index}" class="addToCartBtn btn btn-primary mb-4" data-bs-toggle="offcanvas" name="AddToCart" aria-controls="offcanvasExample">Add to cart</a>
            <div id="quantitybutton" class="input-group" style="width:50%">
                <span class="input-group-btn">
                    <button id="${index}-minus" type="button" class="quantity-left-minus btn btn-danger btn-number"  math-operator="minus" data-field="">
                       -
                    </button>
                </span>
                <input type="text" id="${index}-quantity" name="quantity" class="form-control input-number" value="${quantity}" min="0" max="${item.quantity}">
                <span class="input-group-btn">
                    <button id="${index}-plus" type="button" class="quantity-right-plus btn btn-success btn-number" math-operator="plus" data-field="">
                     +
                    </button>
                </span>
            </div>
          </div>
        </div>`
        container.appendChild(listMaterialItem);
    });
}


// Call the displayData function when the page loads
window.onload = displayData;

var materialContainer = document.querySelector("#material-container");
materialContainer.addEventListener("click", handleQuantityChangeEvent, false);

function handleQuantityChangeEvent(e) {

    if (e.target !== e.currentTarget) {
        var clickedItemId = e.target.id;
        const truncatedClickedItemId = clickedItemId.substring(0, 1);
        var inputFieldId = truncatedClickedItemId+"-quantity";

        var mathOperator = e.target.getAttribute('math-operator');

        var addToCartBtn = e.target.getAttribute('name');
        
        // Find the input field with the specified name
        var inputField = document.getElementById(inputFieldId);
        
        // Get the current value of the input field
        var currentValue = parseInt(inputField.value);

        // Update the input field value based on the math-operator attribute
        if (mathOperator === 'plus') {
            inputField.value = Math.min(currentValue + 1, parseInt(inputField.max));
        } else if (mathOperator === 'minus') {
            inputField.value = Math.max(currentValue - 1, parseInt(inputField.min));
        }
        else if (addToCartBtn === 'AddToCart') {
            addToCart(truncatedClickedItemId);  
        }
    
    }
    e.stopPropagation();
}

function addToCart(index) {
    var quantityInput = document.getElementById(`${index}-quantity`);
    var quantity = parseInt(quantityInput.value);

    if (quantity > 0) {
        // Find the corresponding item in materialData
        var selectedItem = materialData[index];

        // Check if there is enough quantity available
        if (quantity <= selectedItem.quantity) {
            // Subtract the selected quantity from the available quantity
            // selectedItem.quantity -= quantity;

            // Add the item to the shopping cart with the selected quantity
            shoppingCart.push({ id: index, name: selectedItem.Name, quantity: quantity });
            
            // Optionally, update the quantity input to 0 after adding to the cart
            quantityInput.value = 0;
           
            materialData[index].quantity = materialData[index].quantity - quantity

            // Display the updated cart and materialData
            displayCart();
            displayData();
            
        }
        else {
            alert("Quantity not available");
        }
    }
}


function displayCart() {
    var cartContainer = document.getElementById("cart-container");
    // Clear existing content
    cartContainer.innerHTML = "";

    // Display each item in the cart
    shoppingCart.forEach(function (item) {
        var cartItem = document.createElement("div");
        cartItem.textContent = `Item: ${item.name}, Quantity: ${item.quantity}`;
        cartContainer.appendChild(cartItem);
    });
}
