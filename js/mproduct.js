var cards = [
    {
      id: 1,
      image: "img/products/k2.webp",
      title: "Junaid-Jamshed",
      description: "GREEN COTTON KAMEEZ SHALWAR | JJKP-S-34453",
      price: "Rs.6000/=",
  },
  {
      id: 2,
      image: "img/products/k3.webp",
      title: "Junaid-Jamshed",
      description: "SKY BLUE BLENDED KURTA PAJAMA | JJKP-S-90373",
      price: "Rs.7000/=",
  },
  {
      id: 3,
      image: "img/products/k4.webp",
      title: "Junaid-Jamshed",
      description: "TWO TONE PURPLE COTTON KURTA PAJAMA | JJKP-S-32634",
      price: "Rs.6500/=",
  },
  {
      id: 4,
      image: "img/products/k5.webp",
      title: "Junaid-Jamshed",
      description: "GREY BLENDED KAMEEZ SHALWAR | JJKS-A-30820-R20-AP",
      price: "Rs.4999/=",
  },
  {
    id: 5,
    image: "img/products/k9.webp",
    title: "Junaid-Jamshed",
    description: "Off White Styling Suit SK-S22-022",
    price: "Rs.7600/=",
},
{
    id: 6,
    image: "img/products/k7.webp",
    title: "Junaid-Jamshed",
    description: "Camel Basic Suit SK-S23-006",
    price: "Rs.7000/=",
},
{
    id: 7,
    image: "img/products/k8.webp",
    title: "Junaid-Jamshed",
    description: "Anthracite Basic Suit SK-S23-007",
    price: "Rs.8000/=",
},
{
    id: 8,
    image: "img/products/k10.webp",
    title: "Junaid-Jamshed",
    description: "Deep Water Baisc Kurta KR-STY23-029",
    price: "Rs.3700/=",
},
{
    id: 9,
    image: "img/products/wsk1.webp",
    title: "Ideas",
    description: "Men's Waist Coat - Brown",
    price: "Rs.1390/=",
},
{
    id: 10,
    image: "img/products/wsk2.webp",
    title: "Ideas",
    description: "Men's Waist Coat - purple",
    price: "Rs.1300/=",
},
{
    id: 11,
    image: "img/products/wsk3.webp",
    title: "Ideas",
    description: "Men's Waist Coat - Blue",
    price: "Rs.1599/=",
},
{
    id: 12,
    image: "img/products/wsk1.webp",
    title: "Ideas",
    description: "Men's Waist Coat - Brown",
    price: "Rs.1390/=",
},
{
    id: 13,
    image: "img/products/n1.jpg",
    title: "Addidas",
    description: "Cartoon Astronut T-Shirt",
    price: "Rs.1000/=",
},
{
    id: 14,
    image: "img/products/n2.jpg",
    title: "Addidas",
    description: "Cartoon Astronut T-Shirt",
    price: "Rs.1000/=",
},
{
    id: 15,
    image: "img/products/n3.jpg",
    title: "Addidas",
    description: "Cartoon Astronut T-Shirt",
    price: "Rs.1000/=",
},
{
    id: 16,
    image: "img/products/n4.jpg",
    title: "Addidas",
    description: "Cartoon Astronut T-Shirt",
    price: "Rs.1000/=",
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
