import './reset.css'
import './style.css'

type Item = {
    id : number,
    name : string,
    price : number,
    inCart : number,
    imgSrc : string,
}

type State = {
    storeitems : Item[]
}

let state : State = {
  storeitems: [
  {
      id : 1,
      name : 'beetroot',
      price : 0.45,
      inCart : 0,
      imgSrc : 'Images/001-beetroot.svg'

  },
  {
      id : 2,
      name : 'carrot',
      price : 0.25,
      inCart : 0,
      imgSrc : 'Images/002-carrot.svg'

  },
  {
      id : 3,
      name : 'apple',
      price : 0.45,
      inCart : 0,
      imgSrc : 'Images/003-apple.svg'

  },
  {
      id : 4,
      name : 'apricot',
      price : 0.80,
      inCart : 0,
      imgSrc : 'Images/004-apricot.svg'

  },
  {
      id : 5,
      name : 'avocado',
      price : 1.25,
      inCart : 0,
      imgSrc : 'Images/005-avocado.svg'

  },
  {
      id : 6,
      name : 'bananas',
      price : 2,
      inCart : 0,
      imgSrc : 'Images/006-bananas.svg'

  },
  {
      id : 7,
      name : 'bell-pepper',
      price : 0.45,
      inCart : 0,
      imgSrc : 'Images/007-bell-pepper.svg'

  },
  {
      id : 8,
      name : 'berry',
      price : 0.15,
      inCart : 0,
      imgSrc : 'Images/008-berry.svg'

  },
  {
      id : 9,
      name : 'blueberry',
      price : 0.95,
      inCart : 0,
      imgSrc : 'Images/009-blueberry.svg'

  },
  {
      id : 10,
      name : 'eggplant',
      price : 1.45,
      inCart : 0,
      imgSrc : 'Images/010-eggplant.svg'

  },],
}

function render(){
renderStoreItems()
renderCartItems()
renderTotal()
}


function renderStoreItems() {
 let storeItemsUl = document.querySelector('.store--item-list')
 if (!storeItemsUl) return
    
 storeItemsUl.textContent = ""

 for (let item of state.storeitems) {
  let storeItemsUlLi = document.createElement('li')
  let storeItemsImgWraper = document.createElement('div')
  storeItemsImgWraper.className = 'store--item-icon'

  let storeItemsImg = document.createElement('img')
  storeItemsImg.src = item.imgSrc
  storeItemsImg.alt = item.name
  
  storeItemsImgWraper.appendChild(storeItemsImg)

  let addToCartButton = document.createElement('button')
  addToCartButton.textContent = 'Add To Cart'

  addToCartButton.addEventListener('click' , function () {
      item.inCart++
      renderCartItems()
      render()
  })

  storeItemsUlLi.append(storeItemsImgWraper , addToCartButton)
  
  storeItemsUl.append(storeItemsUlLi)
 }
}

function renderCartItems(){
  let cartItemsUl = document.querySelector('.cart--item-list')
  if (!cartItemsUl) return
    
  cartItemsUl.textContent = ""
  
  for (let item of state.storeitems) {
      if (item.inCart > 0) {
          
      
    let cartItemsUlLi = document.createElement('li')
    
    let cartItemImg = document.createElement('img')
    cartItemImg.className = "cart--item-icon"
    cartItemImg.src = item.imgSrc
    cartItemImg.alt = item.name

    let cartItemP = document.createElement('p')
    cartItemP.textContent = item.name

    let minusButton = document.createElement('button')
    minusButton.className = "quantity-btn remove-btn center"
    minusButton.textContent = '-'

    minusButton.addEventListener('click', function () {
       item.inCart--
       render()
    })

    let quantitySpan = document.createElement('span')
    quantitySpan.className = 'quantity-text center'
    quantitySpan.textContent = String(item.inCart)

    let plusButton = document.createElement('button')
    plusButton.className = 'quantity-btn remove-btn center'
    plusButton.textContent = '+'

    plusButton.addEventListener('click' , function () {
      item.inCart++
      render()
    })

    cartItemsUlLi.append(cartItemImg, cartItemP, minusButton, quantitySpan, plusButton)

    cartItemsUl.appendChild(cartItemsUlLi)
  }
  }
}

function renderTotal() {
  let totalSpan = document.querySelector('.total-number')
  if (!totalSpan) return
  
  totalSpan.textContent = ''

  let total = 0
  for (let item of state.storeitems) {
      let price = item.price * item.inCart
      total += price
  
  }
  totalSpan.textContent = `${total.toFixed(2)}$`
  renderTotal()
}


render()