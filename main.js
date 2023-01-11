
//Selectores
const menuEmail =document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuBurger = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer =document.querySelector('#productDetail');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
//Escuchar Eventos
menuEmail.addEventListener('click', toggleDesktopMenu);
menuBurger.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click',toggleCarritoAside);
productDetailCloseIcon.addEventListener('click',closeProductDetailAside);

//funciones
function toggleDesktopMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isAsideClosed){
        shoppingCartContainer.classList.add('inactive');
    }
    
   
    desktopMenu.classList.toggle('inactive');

}
function toggleMobileMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isAsideClosed){
        shoppingCartContainer.classList.add('inactive');
    }

    closeProductDetailAside();


    mobileMenu.classList.toggle('inactive');
} 

function toggleCarritoAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    if (!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

    if (!isProductDetailClosed){
        productDetailContainer.classList.add('inactive');
    }

    shoppingCartContainer.classList.toggle('inactive');
}
function openProductDetailAside(){
    shoppingCartContainer.classList.add('inactive');

    
    productDetailContainer.classList.remove('inactive');

}
function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive');
}
const productList =[];
productList.push({
    name: 'Bike',
    price:120,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"',
});
productList.push({
    name: 'Laptop',
    price:1200,
    image:'https://consumer.huawei.com/content/dam/huawei-cbg-site/latam/mx/support/laptop-user-guide/img/laptop.png',

});
productList.push({
    name: 'teclado',
    price:20,
    image:'https://http2.mlstatic.com/D_NQ_NP_921631-MLV43427334022_092020-O.jpg',

});

for (product of productList){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    

    const productImg = document.createElement('img');
    productImg.setAttribute('src',product.image);
    productImg.addEventListener('click',openProductDetailAside);


    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
    
    const productInfoDiv = document.createElement('div');
    
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;

    const productName = document.createElement('p');
    productName.innerText = product.name;

    const productInfoFigure = document.createElement('figure');
   
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');


//se muestras los resultados de acuerdo a la estructura html
    productInfoFigure.appendChild(productImgCart);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);


    cardsContainer.appendChild(productCard);
}