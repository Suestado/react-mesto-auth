const baseURL = 'https://auth.nomoreparties.co';

export function registration(email, password) {
  return (
    fetch(`${baseURL}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        'password': password,
        'email': email,
      }),
    })
      .then((res) => res.json())
  );
}

export function authorization(email, password) {
  return (
    fetch(`${baseURL}/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        'password': password,
        'email': email,
      }),
    })
      .then((res) => res.json())
  );
}

export function getToken(jwt) {
  return (
    fetch(`${baseURL}/users/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${jwt}`,
      },
    })
      .then((data) => data.json())
  );
}
