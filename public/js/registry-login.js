const formRegistry = document.forms['registry'];
console.log(formRegistry);

if (formRegistry) {
  formRegistry.addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = Object.fromEntries(new FormData(formRegistry));
    // console.log(formData)
    const stringifyData = JSON.stringify(formData);

    const request = await fetch('/api/registry', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: stringifyData,
    });
    const response = await request.json();
    if (response.message === 'OK') {
      alert('You were registred');
      window.location.assign('/login');
    } else if (response.message === 'ALREADY REGISTRED')
      alert('YOU HAS ALRGEDY REGISTRED...JUST LOGIN');
    window.location.assign('/login');
  });
}

///login

const formLogin = document.forms['login'];

if (formLogin) {
  formLogin.addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = Object.fromEntries(new FormData(formLogin));
    // console.log(formData)
    const stringifyData = JSON.stringify(formData);

    const request = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: stringifyData,
    });

    // const response = await request.json();
    if (request.ok) {
      alert('You are login successfully!');
      window.location.assign('/');
    } else {
      alert('PLEASE PROVIDE CORRECT CREDANTIALS OR REGISTER');
      window.location.assign('/registry');
    }
  });
}
