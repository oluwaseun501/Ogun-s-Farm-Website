let products = [
{
    id: 0,
    image: 'images/1.jpg',
    name:'Riped Banana',
    price:"3500"
},
{
    id: 1,
    image: 'images/2.jpg',
    name:'Unripe Banana',
    price:"4000"
},
{
    id: 2,
    image: 'images/3.jpg',
    name:'Cocoa',
    price:"30000"
},
{
    id: 3,
    image: 'images/4.jpg',
    name:'Original Palm Oil',
    price:"10000"
},
{
    id: 4,
    image: 'images/5.jpg',
    name:'Palm Kernel',
    price:"40000"
},
{
    id: 5,
    image: 'images/6.jpg',
    name:'Bundle of Sugar Cane',
    price:"20000"
},
{
    id: 6,
    image: 'images/7.jpg',
    name:'Water Melon/1 Ton',
    price:"200000"
},
{
    id: 7,
    image: 'images/8.jpg',
    name:'Palm Oil/5Litres',
    price:"10000"
},
{
    id: 8,
    image: 'images/9.jpg',
    name:'Piglet',
    price:"15000"
},
{
    id: 9,
    image: 'images/pig1.jpg',
    name:'Pig',
    price:"100000"
},
{
    id: 10,
    image: 'images/11.jpg',
    name:'Cassava/1hectare',
    price:"300000"
},
{
    id: 11,
    image: 'images/18.jpg',
    name:'Coco yam/1 hectare',
    price:"50000"
},
{
    id: 12,
    image: 'images/16.jpg',
    name:'Original Palm Oil',
    price:"100000"
},
{
    id: 13,
    image: 'images/19.jpg',
    name:'Pawpaw/1ton',
    price:"20000"
},
{
    id: 14,
    image: 'images/20.jpg',
    name:'Maize',
    price:"100000"
},
{
    id: 14,
    image: 'images/17.jpg',
    name:'Palm Kernel seed',
    price:"150000"
}







];

let cart = JSON.parse(localStorage.getItem("cart")) || [];


function mySearchProduct () {
   


    let InputProduct = document.getElementById("inputItem").value;
    
    let foundProduct = products.filter((item) => {
        return(
            item.name.toLowerCase().includes(InputProduct.toLowerCase()) || 
            item.price.toLowerCase().includes(InputProduct.toLowerCase())
        );
        
    })
    
    if(InputProduct == "" ) {

        
             document.getElementById('anime').style.display = "block";
             
             setTimeout(() => {
                 
                 document.getElementById('anime').style.display = "none";

                }, 2000);

        location.href = "product.html";

    }
    else {


             document.getElementById('anime').style.display = "block";
             
             setTimeout(() => {
                 
                 document.getElementById('anime').style.display = "none";

                }, 1000);

        displayProduct(foundProduct)
        
    }
    

};


const displayProduct = (item) => {

    let show = ''
    show += item.map((item) => {
        return (
            `
   
           
          <div class="col">
            <div  class="prod1 mb-5" >
             <div class="ProdImg">
                <img  src=${item.image} alt=""/>
                
             </div>
             <div class="prodText" >
             <p style="font-size: 18px; font-weight: bold;">${item.name}</p>
             <p class="text-center" style="font-size: 16px;">N${item.price}</p>
             </div>
               <div class="prodBtn   w-100">
                <button class="btn btn-sm w-100" onclick="addToCart(${item.id})">Buy now</button>
             </div>

             </div>
             </div>
           
            
        
            
            `


        )
    })
    document.getElementById('display').innerHTML = show

};
displayProduct(products);




// add to cart section

function addToCart(id) {
    let selectedProduct = products.find(item => item.id === id);

    let existing = cart.find(item => item.id === id);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({...selectedProduct, quantity: 1});
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    // Show modal instead of alert
    showModal(selectedProduct);
}



function showModal(product) {
    document.getElementById("modalImg").src = product.image;
    document.getElementById("modalName").innerText = product.name;
    document.getElementById("modalPrice").innerText = "N" + product.price;

    document.getElementById("cartModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("cartModal").style.display = "none";
}






