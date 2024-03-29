const addProdForm = document.forms['add-new-prod'];
const editForm = document.forms['edit-product'];
const deleteBtn = document.getElementById('delete-btn');

// console.log(addProdForm);
if (addProdForm) {
  addProdForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    try {
      const dataForm = Object.fromEntries(new FormData(addProdForm));
      dataForm.owner_id = addProdForm.dataset.userid;
      const stringifyData = JSON.stringify(dataForm);
      console.log(stringifyData);

      const response = await fetch('/api-product/actions/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: stringifyData,
      });

      if (response.ok) {
        alert('New prodact added, and available on market');
        window.location.assign('/profile');
      } else {
        alert('SMT happaned, try add product one more time');
      }
    } catch (error) {
      xonsole.log('ERROR TO SEND FETCH TO ADD NED PROD TO DB FRONT: ', error);
    }
  });
}

//! edit product
// console.log(editForm);

if (editForm) {
  editForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    try {
      const prod_id = event.target.dataset.prodid;
      const owner_id = event.target.dataset.userid;
      console.log()
      const formData = Object.fromEntries(new FormData(editForm));
      formData.ownerid = owner_id;
      formData.prod_id = prod_id;

      const stringifyData = JSON.stringify(formData);
      const response = await fetch(`/api-product/actions/edit/${prod_id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: stringifyData,
      });

      console.log(stringifyData);
      if (response.ok) {
        alert('PRODUCT WAS EDITED');
        window.location.assign('/');
      } else {
        alert('YOU NOT AUTHORIZED TO UPDATE THIS PRODUCT');
      }
    } catch (error) {
      console.log('ERROR CHECKOUT BTN FRONT: ', error);
    }
  });
}


//! delete product from DB

// console.log(deleteBtn);

if (deleteBtn) {
  deleteBtn.addEventListener('click', async (event) => {
    try {
      const user_id = deleteBtn.dataset.userid;
      const prod_id = deleteBtn.dataset.prodid;

      const response = await fetch(`/api-product/actions/delete/${prod_id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prod_id, user_id }), 
      });

      // const res = await response.json();
      if (response.ok) {
        alert('PRODUCT DELETED');
        window.location.assign('/');
      } else  {
        alert('YOU NOT AUTHORIZED TO DELETE THIS PRODUCT');
        window.location.assign('/');
      }
    } catch (error) {
      console.log('DELETE PRODUCT ERROR FRONT: ', error);
    }
  });
}