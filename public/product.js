let products = [
{
    id: 0,
    image: '/1.jpg',
    name:'Riped Banana',
    price:"3500"
},
{
    id: 1,
    image: '/2.jpg',
    name:'Unripe Banana',
    price:"4000"
},
{
    id: 2,
    image: '/3.jpg',
    name:'Cocoa',
    price:"30000"
},
{
    id: 3,
    image: '/4.jpg',
    name:'Original Palm Oil',
    price:"10000"
},
{
    id: 4,
    image: '/5.jpg',
    name:'Palm Kernel',
    price:"40000"
},
{
    id: 5,
    image: '/6.jpg',
    name:'Bundle of Sugar Cane',
    price:"20000"
},
{
    id: 6,
    image: '/7.jpg',
    name:'Water Melon/1 Ton',
    price:"200000"
},
{
    id: 7,
    image: '/8.jpg',
    name:'Palm Oil/5Litres',
    price:"10000"
},
{
    id: 8,
    image: '/9.jpg',
    name:'Piglet',
    price:"15000"
},
{
    id: 9,
    image: '/pig1.jpg',
    name:'Pig',
    price:"100000"
},
{
    id: 10,
    image: '/11.jpg',
    name:'Cassava/1hectare',
    price:"300000"
},
{
    id: 11,
    image: '/18.jpg',
    name:'Coco yam/1 hectare',
    price:"50000"
},
{
    id: 12,
    image: '/16.jpg',
    name:'Original Palm Oil',
    price:"100000"
},
{
    id: 13,
    image: '/19.jpg',
    name:'Pawpaw/1ton',
    price:"20000"
},
{
    id: 14,
    image: '/20.jpg',
    name:'Maize',
    price:"100000"
},
{
    id: 14,
    image: '/17.jpg',
    name:'Palm Kernel seed',
    price:"150000"
}







];

function mySearchProduct () {
   


    let InputProduct = document.getElementById("inputItem").value;
    
    let foundProduct = products.filter((item) => {
        return(
            item.name.toLowerCase().includes(InputProduct.toLowerCase()) || 
            item.price.toLowerCase().includes(InputProduct.toLowerCase())
        );
        
    })
    
    if(InputProduct == "" ) {
        alert('Please Input Product')
    }
    else {


             document.getElementById('anime').style.display = "block";
             
             setTimeout(() => {
                 
                 document.getElementById('anime').style.display = "none";

                }, 2000);

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
             <p style="font-size: 20px; font-weight: bold;">${item.name}</p>
             <p class="text-center" style="font-size: 18px;">N${item.price}</p>
             </div>
               <div class="prodBtn   w-100">
                 <button class="btn btn-lg w-100" >Buy now</button>
             </div>

             </div>
             </div>
           
            
        
            
            `


        )
    })
    document.getElementById('display').innerHTML = show

};
displayProduct(products);





