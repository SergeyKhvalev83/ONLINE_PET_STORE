//!add product to cart
const addProdToCartAllBtn = document.querySelectorAll('.add-to-cart-btn');
// console.log(addProdToCartAllBtn)

//add to cart from main page
addProdToCartAllBtn.forEach((addProdToCart) => {
  addProdToCart.addEventListener('click', async (event) => {
    event.preventDefault();

    const user_id = event.target.dataset.userid;
    const prod_id = event.target.dataset.prodid;
    // console.log("DATA SET: ", user_id, prod_id)

    const response = await fetch('/api-cart-product/addcart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prod_id: prod_id,
        user_id: user_id,
      }),
    });

    // const data = await response.json();
    if (response.ok) {
      alert('Product added to cart');
    } else {
      alert('PLEASE LOGIN AND CONTINUE TO SHOP');
      window.location.assign('/login');
    }
  });
});

//add to cart from product card
const addToCartBtn = document.getElementById('add-to-cart-btn');
if (addToCartBtn) {
  addToCartBtn.addEventListener('click', async (event) => {
    event.preventDefault();

    const user_id = event.target.dataset.userid;
    const prod_id = event.target.dataset.prodid;
    // console.log("DATA SET: ", user_id, prod_id)

    const response = await fetch('/api-cart-product/addcart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prod_id: prod_id,
        user_id: user_id,
      }),
    });

    // const data = await response.json();
    if (response.ok) {
      alert('Product added to cart');
    } else {
      alert('PLEASE LOGIN AND CONTINUE TO SHOP');
      window.location.assign('/login');
    }
  });
}

//! remove certain product from cart
const removeFromCartBtn = document.querySelectorAll('.removeItemBtn');

console.log(removeFromCartBtn);

removeFromCartBtn.forEach((eachBtn) => {
  eachBtn.addEventListener('click', async (event) => {
    event.preventDefault();
    try {
      const user_id_front = event.target.dataset.userid;
      const prod_id_front = event.target.dataset.prodid;
      if (event.target.className === 'removeItemBtn') {
        const response = await fetch('/api-cart-product/remove-item-cart', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            prod_id: prod_id_front,
            user_id: user_id_front,
          }),
        });

        if (response.ok) {
          console.log('VALUEEEEE!: ', eachBtn.parentNode.innerText);
          if (Number(eachBtn.previousSibling.innerText) > 1) {
            let newCount = Number(eachBtn.previousSibling.innerText) - 1;
            eachBtn.previousSibling.innerText = newCount;
            window.location.assign('/cart');
          } else {
            eachBtn.parentNode.remove();
            window.location.assign('/cart');
          }
        }
      }
    } catch (error) {
      console.log('ERROR TO CATCH EACH REMOVE BATON ON CART PAGE: ', error);
    }
  });
});
