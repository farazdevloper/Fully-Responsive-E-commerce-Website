
const cards = [
    {
      id: 1,
      image: "img/products/f1.jpg",
      title: "Addidas",
      description: "Cartoon Astronut T-Shir",
      price: "Rs.1000/=",
  },
  {
      id: 2,
      image: "img/products/k1.webp",
      title: "Eminent",
      description: "Eminent Men's Trim Fit Kurta - Green",
      price: "Rs.1399/=",
  },
  {
      id: 3,
      image: "img/products/fs1.webp",
      title: "Eminent",
      description: "Eminent Men's Formal Shirt - Black",
      price: "Rs.1499/=",
  },
  {
      id: 4,
      image: "img/products/p3.webp",
      title: "Chino",
      description: "Men's Cotton Chino Pant - Navy Blue",
      price: "Rs.1399/=",
  },
  {
    id: 5,
    image: "img/products/fs2.webp",
    title: "Eminantes",
    description: "Men's Formal Shirt - Light Grey",
    price: "Rs.799/=",
},
{
    id: 6,
    image: "img/products/p4.webp",
    title: "Eminent",
    description: "Eminent Men's Dress Pant - Light Grey",
    price: "Rs.2299/=",
},
{
    id: 7,
    image: "img/products/p5.webp",
    title: "Denim",
    description: "Men's Denim Fashion Pant - Blue",
    price: "Rs.1499/=",
},
{
    id: 8,
    image: "img/products/t-s2.webp",
    title: "T-Shirt",
    description: "Men's Half Sleeves T-Shirt - Navy Blue",
    price: "Rs.699/=",
},
{
    id: 9,
    image: "img/products/t-s3.webp",
    title: "Eminent",
    description: "Men's Eminent Round Neck T-Shirt - Black",
    price: "Rs.599/=",
},
{
    id: 10,
    image: "img/products/t-s4.webp",
    title: "POLO",
    description: "Men's Half Sleeves Polo T-Shirt - Brown",
    price: "Rs.699/=",
},
{
    id: 11,
    image: "img/products/p6.webp",
    title: "Wrinkle",
    description: "Men's Wrinkle free Dress Pant - Khaki",
    price: "Rs.1599/=",
},
{
    id: 12,
    image: "img/products/f3.jpg",
    title: "Addidas",
    description: "Cartoon Astronut T-Shirt",
    price: "Rs.1600/=",
},
  ];

  
  cards.forEach((card, index)=>{
   
    document.getElementById("pro-container").innerHTML += `<div class="pro">
    <img src="${card.image}" alt="">
    <div class="des">
        <span>${card.title}</span>
        <h5>${card.description}</h5>
        <div class="star">  
           <i class="fas fa-star"></i>
           <i class="fas fa-star"></i>
           <i class="fas fa-star"></i>
           <i class="fas fa-star"></i>
        </div>
        <h4>${card.price}</h4>
    </div>
    <a href="#" class="cart"><i class="fas fa-shopping-cart"></i></a>
  </div>`
  })