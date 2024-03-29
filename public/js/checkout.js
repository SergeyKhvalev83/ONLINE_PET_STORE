const checkOutBtn = document.getElementById('checkout');
// console.log(checkOutBtn)

if (checkOutBtn) {
  checkOutBtn.addEventListener('click', async (event) => {
    event.preventDefault();
    try {
     
      const user_id = event.target.dataset.userid;
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_id,
        }),
      });
      console.log({ response });
      if (response.ok) {
        const data = await response.json();
        console.log({data})

        alert('PURCHASE COMPLETED');
        window.location.assign('/');
      } else{
        alert('NO PRODUCT FOR PURCHASE SELECTED');
        window.location.assign('/');
      }
    } catch (error) {
      console.log('ERROR CHECKOUT BTN FRONT: ', error);
    }
  });
}