class GitHub {
    async getUserDetails(username) {
        try {
            const response = await fetch(`https://api.github.com/users/${username}`);
            if (!response.ok) throw new Error('User not found');
            const data = await response.json();
            this.createUserCard(data);
        } catch (error) {
            alert(error.message);
        }
    }

    createUserCard(user) {
        const main = document.getElementById('main');
        main.innerHTML = ''; // Clear previous cards

        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
            <img src="${user.avatar_url}" alt="${user.name}'s avatar" />
            <h2>${user.name || 'N/A'}</h2>
            <p><strong>Bio:</strong> ${user.bio || 'No bio available'}</p>
            <p><strong>Followers:</strong> ${user.followers}</p>
            <p><strong>Following:</strong> ${user.following}</p>
            <p><strong>Repos:</strong> ${user.public_repos}</p>
            <p><strong>Twitter:</strong> ${user.twitter_username || 'N/A'}</p>
            <p><strong>Location:</strong> ${user.location || 'N/A'}</p>
        `;

        main.appendChild(card);
    }
}

// Initialize GitHub class and set up event listener
const github = new GitHub();
document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('search').value;
    github.getUserDetails(username);
});

// Load your GitHub profile by default
github.getUserDetails('Mridul9A'); // Replace 'your-username' with your actual GitHub username
