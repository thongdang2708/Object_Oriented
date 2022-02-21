let products = [
    {
        "tyypi" : "Takki",
        "price" : 199,
        "image" : 'https://www.xxl.fi/filespin/35371dd89122492d89affe680adade8f?resize=1400,1400&quality=95&bgcolor=efefef',
        'id' : 1,
        'numInstock' : 10,
        "Available" : "L.I.M Critus Jacket, miesten kuoritakki, Sininen",
    },
    {
        "tyypi" : "T-paita",
        "price" : 25,
        "image" : 'https://www.xxl.fi/filespin/b3ebffff7d0f48df9776be3946527964?resize=722,722&quality=90&bgcolor=efefef',
        'id' : 2,
        'numInstock' : 12,
        "Available" :  "Icon Futura Tee, miesten T-paita, Sininen"
    },
    {
        "tyypi" : 'Shortsit',
        "price" : 20,
        "image" : 'https://www.xxl.fi/filespin/c746a0b16e8f47e7bff7fcbe34d5b850?resize=722,722&quality=90&bgcolor=efefef',
        'id' : 3,
        'numInstock' : 20,
        "Available" :  "UA Tech Graphic Shorts, miesten treenishortsit, Musta"
    },
    {
        "tyypi" : 'Kengät',
        "price" : 40,
        "image" : 'https://www.xxl.fi/filespin/72c92db6e3274362a19afbd6f94f95a4?resize=722,722&quality=90&bgcolor=efefef',
        'id' : 4,
        'numInstock' : 40,
        "Available" :  "Puma Rebound JOY Fur, unisex talvilenkkarit, Musta"
    },
    {
        "tyypi" : 'Hattu',
        "price" : 3,
        "image" : 'https://www.xxl.fi/filespin/feab3c2e62f841338857007ff75fba49?resize=1400,1400&quality=95&bgcolor=efefef',
        'id' : 5,
        'numInstock' : 50,
        "Available" : "Finland Admiral Fan Caps, unisex lippis, Sininen"
    },
    {
        "tyypi" : 'Kuoritakki',
        "price" : 90,
        "image" : 'https://www.xxl.fi/filespin/6250c610c3704209b2e95801b9716723?resize=722,722&quality=90&bgcolor=efefef',
        'id' : 6,
        'numInstock' : 60,
        "Available" : "Velum Jacket, naisten kuoritakki, Musta"
    },
    {
        "tyypi" : 'Sadetakki',
        "price" : 30,
        "image" : 'https://www.xxl.fi/filespin/9d016bff772d4e05a2abd7ab7d8cd3fa?resize=317,317&quality=90&bgcolor=efefef',
        'id' : 7,
        'numInstock' : 0,
        "Available" :  "Wings Fleece Rainset, lasten sadetakki ja -housut, Keltainen"
    },
    {
        "tyypi" : 'Talvitakki',
        "price" : 95,
        "image" : 'https://www.xxl.fi/filespin/7c3d6417b0db41cdb447806d1c575e8f?resize=722,722&quality=90&bgcolor=efefef',
        'id' : 8,
        'numInstock' : 45,
        "Available" :  "Luca Puffy Parka, nuorten talviparka, Musta"
    },
    {
        "tyypi" : 'Kevyttoppatakki',
        "price" : 120,
        "image" : 'https://www.xxl.fi/filespin/d7a94208be5d4b72af6f762fd9dfb789?resize=317,317&quality=90&bgcolor=efefef',
        'id' : 9,
        'numInstock' : 65,
        "Available" :  "Essens Mimic Hood, naisten kevyttoppatakki, Purple"
    },
    {
        "tyypi" : 'Ruskeatakki',
        "price" : 65,
        "image" : 'https://www.xxl.fi/filespin/b4ae9887eb59413db9ec5532cf32465d?resize=722,722&quality=90&bgcolor=efefef',
        'id' : 10,
        'numInstock' : 100,
        "Available" :  "Loma Vista Hooded Jacket, miesten takki, Ruskea"
    },
    {
        "tyypi" : 'Untuvatakki',
        "price" : 39,
        "image" : 'https://www.xxl.fi/filespin/8829ae5ccb9b4136834fff611409238f?resize=317,317&quality=90&bgcolor=efefef',
        'id' : 11,
        'numInstock' : 20,
        "Available" :  "Resolve Down Hoodie, miesten untuvatakki, Sininen"
    },
    {
        "tyypi" : 'Pyöräilytakki',
        "price" : 80,
        "image" : 'https://www.xxl.fi/filespin/7dcf9529fd7b407cb339da6607037680?resize=722,722&quality=90&bgcolor=efefef',
        'id' : 12,
        'numInstock' : 30,
        "Available" :  "Me Posta softshell jacket V 2021, unisex pyöräilytakki, Vihreä"
    }
]


let shoppinglist = document.querySelector('.shoppinglist');

document.querySelector('.shopping-cart-icon-first-part').addEventListener('click',function (ede) {
    ede.preventDefault()

    document.querySelector('.shopping-cart').classList.add('active');
})

document.querySelector('.back-button-cart').addEventListener('click',function (etv) {
    etv.preventDefault();

    document.querySelector('.shopping-cart').classList.remove('active');
})

let cartlist = document.querySelector('.list-item');

//Display products in a product list
function renderCart () {

        products.forEach((product) => {
            shoppinglist.innerHTML += `
            <div class='item'>
            <div class='description'>   <h2> ${product.tyypi}  </h2>      </div>
            <div class='image'>    <img src="${product.image}" alt="" width='50%' height='80%'>   </div>
            <div class='price'>  <h3>  Hinta: ${product.price} € </h3> </div>
            <div class='available'>  <h3> ${product.Available}   </h3>     </div> 
            <div class='phanduoi'>
            <div> </div>
            <div class='add-to-cart' onclick=addToCart(${product.id})> 
            <p class='info-cart'>   Add to cart (Lisää)                </p>
            <img src="./cart-plus-solid.svg" alt="" height='30px'>
            </div>
            </div>
            </div>     
            `
        })

}

renderCart();

let cart = []

// Add to cart
function addToCart(id) {
    
    if (cart.some(item => item.id === id)) {
        alert('Samanlainen tuote lisättiin ostoskorille ja määränkasvu voidaan näyttää ostoskorilta!\nThe similar item was added into cart with an increased number!')
        checkQuantity('plus',id)
    } else {
        let item = products.find(product => product.id === id);
        cart.push({
            ...item,
            numberOfUnits: 1,
        })
    }

    updateCart();
   
}

function updateCart() {
    updatePrice();
    renderItems();
    updateLength();
    updateEachProduct();
}

// Update each total price of each product
function updateEachProduct() {
    const maara = cart.map(dovat => dovat.price*dovat.numberOfUnits);
    let thinh = document.querySelectorAll('.total-each');
    thinh.forEach((inter,index) => {
        maara.forEach((soluong,indexTwo) => {
            if (index === indexTwo) {
                inter.innerHTML = `${soluong}`
            }
        })
    })
}

// Update a number of items in shopping cart
function updateLength () {
    
    let numberOfItems = cart.map(items => items.id);
    let lenglet = numberOfItems.length;

    document.querySelectorAll('.number-items').forEach(display => {
        display.innerHTML = `${lenglet}`;
    })
    
}

// Render items in a shopping cart
function renderItems() {
    document.querySelector('.list-item').innerHTML = '';
    cart.forEach((tool)  => {
        cartlist.innerHTML += 
        `
        <div class='single-product'>
        <div class='product-name'> Tuote: ${tool.tyypi}              </div>    
        <div class='price-name'>   Hinta: ${tool.price} €           </div>    
        <div class='quantity'>
        <div class='minus-part' onclick=checkQuantity('minus',${tool.id})>     -      </div>
        <div class='number'>      ${tool.numberOfUnits}         </div>
        <div class='plus-part' onclick=checkQuantity('plus',${tool.id})>          +              </div>
        </div>

        <div class='each-one'>   Yhteensä: <span class='total-each'>       </span> €               </div>
        <div class='remove' onclick=removeButton(${tool.id})>     <span>   <img src="./trash-can.png" alt="">           </span>              </div>
        </div>
        `
    })
}


// Set up a remove button
function removeButton (idQ) {
    cart = cart.filter(items => items.id !== idQ);

    updateCart();
}

// Set up to increase or decrease a quantity

function checkQuantity(sign,id) {

    cart.map((tool,index) => {
        // console.log(tool.numberOfUnits);
        if (tool.id === id) {
            if (sign === 'minus' & tool.numberOfUnits > 0) {
                tool.numberOfUnits--;
                if (tool.numberOfUnits === 0) {
                    cart.splice(index,1);
                }
            } else if (sign === 'plus' & tool.numberOfUnits < tool.numInstock) {
                tool.numberOfUnits++;
            } 
            
        }
        return {
            ...tool,
            numberOfUnits: tool.numberOfUnits
        }

    })
    updateCart();

}

//Update price

function updatePrice () {

    const amount = cart.map(dovat => dovat.price*dovat.numberOfUnits);

    const sum = amount.reduce((a,c) => a+=c, 0);
    
    document.querySelector('.outcome').innerHTML = `${sum}`;
    
}


document.querySelector('.purchase').addEventListener('click', function (nft) {
        nft.preventDefault();

        alert('Kiitos Ostoksille\nThank you for your purchase!');
        location.reload();
})




