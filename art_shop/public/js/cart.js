const products = [
  {
    id: 1,
    name: "Abstract Art Print",
    price: 100,
    image: "abstract-art.jpg",
    description: "Colorful modern abstract artwork"
  },
  {
    id: 2,
    name: "Mountain Landscape",
    price: 200,
    image: "mountain-painting.jpg",
    description: "Scenic oil painting of mountains"
  },
  {
    id: 3,
    name: "Portrait Sketch",
    price: 120,
    image: "portrait-sketch.jpg",
    description: "Charcoal portrait of a woman"
  },
  {
    id: 4,
    name: "Cityscape at Night",
    price: 150,
    image: "cityscape.jpg",
    description: "Digital art of a neon-lit city"
  }
];

let cart = [];
const addCart = document.querySelectorAll('.add-cart-btn');

addCart.forEach(button => {
    button.addEventListener('click', (product)=>{
        addCart(productId)
    })
    
});




function addCart(productId, quantity=1){

    const existingItem = cart.find(item=> item.id == productId)
    if (existingItem){
        existingItem += quantity
    }
    if(productId){
        cart.push(productId);
        console.log("Added to Cart!")
    }
}
    