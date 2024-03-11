let productsData = [];

//Customer needs to add items to cart.

function populateSection(products) {
    const section = document.getElementById('productionSection');

    products.forEach(
        product => {
            const productItem = document.createElement('div');
            productItem.classList.add('card','m-2','p-2');
           
            productItem.innerHTML = `

            <img src="${product.image_url || 'https://www.freepnglogos.com/uploads/cat-png/online-products-care-tips-food-best-1.png'}" class="card-img-top" alt="cat-png" height="150" width="200">
            <div class="card-body">
              <h5 class="card-title">${product.Name}</h5>
              <p class="card-text">${product.description || 'No description available'}</p>
              <p>$${product.selling_price || '0.00'}</p>
              <a href="#" class="btn btn-primary">Add to cart</a>
            </div>
            `;
        }
    );


    section.appendChild(productItem);
}



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
    productsData.forEach(function(item) {
        var listItem = document.createElement("div");
        listItem.classList.add("card","m-2");
        // listItem.textContent = item.Name;
        listItem.innerHTML = `<img src="${item.image_url || 'https://www.freepnglogos.com/uploads/cat-png/online-products-care-tips-food-best-1.png'}" class="card-img-top" alt="cat-png" height="150" width="200">
        <div class="card-item-body">
          <h5 class="card-title">${item.Name}</h5>
          <p class="card-text">${item.description || 'No description available'}</p>
          <p>${item.selling_price || '0.00'}</p>
          <a href="#" class="btn btn-primary">Add to cart</a>
        </div>`
        container.appendChild(listItem);
    });
}

// Call the displayData function when the page loads
window.onload = displayData;
