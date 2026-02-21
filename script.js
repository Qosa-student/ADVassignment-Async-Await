const usersData = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": { "city": "Gwenborough" },
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "email": "Shanna@melissa.tv",
        "address": { "city": "Wisokyburgh" },
    },
    {
        "id": 3,
        "name": "Clementine Bauch",
        "email": "Nathan@yesenia.net",
        "address": { "city": "McKenziehaven" },
    },
    {
        "id": 4,
        "name": "Patricia Lebsack",
        "email": "Julianne.OConner@kory.org",
        "address": { "city": "South Elvis" },
    },
    {
         "id": 5,
        "name": "Chelsey Dietrich",
        "email": "Lucio_Hettinger@annie.ca",
        "address": { "city": "Roscoeview" },
    },
    {
        "id": 6,
        "name": "Mrs. Dennis Schulist",
        "email": "Karley_Dach@jasper.info",
        "address": { "city": "South Christy" },
    },
    {
        "id": 7,
        "name": "Kurtis Weissnat",
        "email": "Telly.Hoeger@billy.biz",
        "address": { "city": "Howemouth" },
    },
    {
        "id": 8,
        "name": "Nicholas Runolfsdottir V",
        "email": "Sherwood@rosamond.me",
        "address": { "city": "Aliyaview" },
    },
    {
        "id": 9,
        "name": "Glenna Reichert",
        "email": "Chaim_McDermott@dana.io",
        "address": { "city": "Bartholomebury" },
    },
    {
        "id": 10,
        "name": "Clementina DuBuque",
        "email": "Rey.Padberg@karina.biz",
        "address": { "city": "Lebsackbury" },
    }
];

async function getUsers() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(usersData);
        }, 800);
    });
}

function createUserCard(user) {
    const card = document.createElement('div');
    card.className = 'user-card';
    card.innerHTML = `
    <h3>${user.name}</h3>
    <p><span class="label">Email:</span> ${user.email}</p>
    <p><span class="label">City:</span> ${user.address.city}</p>
    `;
    return card;
}

async function displayUsers() {
    const container = document.getElementById('users-container');
    const loading = document.getElementById('loading');
    const button = document.getElementById('showBtn');

    container.innerHTML = '';
    container.classList.add('hidden');
    loading.classList.remove('hidden');
    button.disabled = true;

    try {
        const users = await getUsers();
        const fragment = document.createDocumentFragment();
        users.forEach(user => {
            if (user.name && user.email && user.address?.city) {
                const card = createUserCard(user);
                fragment.appendChild(card);
            }
        });
        container.appendChild(fragment);
        container.classList.remove('hidden');
    }
    catch (err) {
        console.error('Error loading users:', err);
        container.innerHTML = `<p style="color: #dc3545; text-align: center; font-size: 1.2rem;">
        Sorry, could not load users because y'know ERROR: ${err.message}
        </p>`;
    container.classList.remove('hidden');
    }
    finally {
        loading.classList.add('hidden');
        button.disabled = false;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('showBtn').addEventListener('click', displayUsers);
});