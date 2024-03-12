let productsData = [];
let quantity = 0;
var cartItemNumber = 0;

//Customer needs to add items to cart.

// function populateSection(products) {
//     const section = document.getElementById('productionSection');

//     products.forEach(
//         product => {
//             let i = 0;
//             i++;
//             const productItem = document.createElement('div');
//             productItem.classList.add('card','m-2','p-2');
//             productItem.id.add('${i}');
           
//             productItem.innerHTML = `

//             <img src="${product.image_url || 'https://www.freepnglogos.com/uploads/cat-png/online-products-care-tips-food-best-1.png'}" class="card-img-top" alt="cat-png" height="150" width="200">
//             <div class="card-body">
//               <h5 class="card-title">${product.Name}</h5>
//               <p class="card-text">${product.description || 'No description available'}</p>
//               <p>$${product.selling_price || '0.00'}</p>
//               <a href="#" class="btn btn-primary">Add to cart</a>
//             </div>
//             `;
//         }
//     );


//     section.appendChild(productItem);
// }



function loadProducts() {
    productsData = [

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

}

// your-script.js

// Sample data

// Function to display data
function displayData() {
    var container = document.getElementById("data-container");
    loadProducts()
    // Clear existing content
    container.innerHTML = "";

    // Create and append elements for each item in the data array
    productsData.forEach(function(item, index) {

        var listItem = document.createElement("div");
        listItem.classList.add("card","m-2","p-2");
        listItem.setAttribute("id",index);

        listItem.innerHTML = `
        <img src="${item.image_url || 'https://www.freepnglogos.com/uploads/cat-png/online-products-care-tips-food-best-1.png'}" class="card-img-top" alt="cat-png" height="150" width="200">
        <div class="card-item-body">
          <h5 class="card-title">${item.Name}</h5>
          <p class="card-text">${item.description || 'No description available'}</p>
          <p>${item.selling_price || '0.00'}</p>
          <p>${item.quantity} available</p>
          <div class="d-flex flex-column align-items-start mb-3"> 
          <a href="#" class="btn btn-primary mb-4">Add to cart</a>
            <div id="quantitybutton" class="input-group" style="width:50%">
                <span class="input-group-btn">
                    <button id="${index}-minus" type="button" class="quantity-left-minus btn btn-danger btn-number"  data-type="minus" data-field="">
                       -
                    </button>
                </span>
                <input type="text" id="${index}-quantity" name="quantity" class="form-control input-number" value="0" min="1" max="${item.quantity}">
                <span class="input-group-btn">
                    <button id="${index}-plus" type="button" class="quantity-right-plus btn btn-success btn-number" data-type="plus" data-field="">
                     +
                    </button>
                </span>
            </div>
          </div>
        </div>`
        container.appendChild(listItem);
    });
}



// Call the displayData function when the page loads
window.onload = displayData;

var theParent = document.querySelector("#data-container");
theParent.addEventListener("click", doSomething, false);

function doSomething(e) {

    if (e.target !== e.currentTarget) {
        var clickedItem = e.target.id;
        const myTruncatedString = clickedItem.substring(0, 1);
        var inputId = myTruncatedString+"-quantity";

        var dataType = e.target.getAttribute('data-type');
        // Find the input field with the specified name
        var inputField = document.getElementById(inputId);
        
        // Get the current value of the input field
        var currentValue = parseInt(inputField.value);
        // Update the input field value based on the data-type attribute
      if (dataType === 'plus') {
        inputField.value = Math.min(currentValue + 1, parseInt(inputField.max));
      } else if (dataType === 'minus') {
        inputField.value = Math.max(currentValue - 1, parseInt(inputField.min));
      }

        console.log("CLICKED!", currentValue)
    }

    e.stopPropagation();
}