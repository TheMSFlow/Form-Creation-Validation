async function fetchUserData () {
  const apiUrl = 'https://jsonplaceholder.typicode.com/users';
  const dataContainer = document.getElementById('api-data');
  try {
    const response = await fetch(apiUrl);
    const users = await response.json();
    // Apend User List
    dataContainer.innerHTML = '';
    userList = document.createElement('ul');
    users.forEach(user => {
      list = document.createElement('li');
      list.textContent = user.name
      userList.appendChild(list)
    });
    dataContainer.appendChild(userList);
  } catch(error) {
    dataContainer.innerHTML = '';
    dataContainer.innerHTML = 'Failed to load user data.';
  }
};

document.addEventListener('DOMContentLoaded', fetchUserData());