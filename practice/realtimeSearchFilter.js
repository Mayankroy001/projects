const users = [
    {
        name: "Mayank",
        profile : "https://images.unsplash.com/photo-1773332611574-d73d8f5cea36?q=80&w=987&auto=format&fit=crop",
        jobTitle : "Software Engineer",
        description : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet possimus qui sequi."
    },
    {
        name: "Aanya",
        profile: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=987&auto=format&fit=crop",
        jobTitle: "UI/UX Designer",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet possimus qui sequi."
    },
    {
        name: "Rohan",
        profile: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=987&auto=format&fit=crop",
        jobTitle: "Data Scientist",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet possimus qui sequi."
    },
    {
        name: "Priya",
        profile: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=987&auto=format&fit=crop",
        jobTitle: "Product Manager",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet possimus qui sequi."
    },
    {
        name: "Kabir",
        profile: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=987&auto=format&fit=crop",
        jobTitle: "DevOps Engineer",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet possimus qui sequi."
    },
    {
        name: "Ananya",
        profile: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=987&auto=format&fit=crop",
        jobTitle: "Frontend Developer",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet possimus qui sequi."
    },
    {
        name: "Arjun",
        profile: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=987&auto=format&fit=crop",
        jobTitle: "Mobile App Developer",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet possimus qui sequi."
    },
    {
        name: "Meera",
        profile: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=987&auto=format&fit=crop",
        jobTitle: "QA Automation Engineer",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet possimus qui sequi."
    }
];

const mainContainer = document.querySelector('#main');
const searchInput = document.querySelector('#search-input');

function displayUsers(arr) {
    // Clear out old rendering
    mainContainer.innerHTML = "";

    // If no users match, show a feedback message
    if(arr.length === 0) {
        mainContainer.innerHTML = `<p style="color: #666; font-size: 18px;">No profiles match your search.</p>`;
        return;
    }

    arr.forEach(function(user) {
        const card = document.createElement('div');
        card.classList.add('card');

        const profileDiv = document.createElement('div');
        profileDiv.classList.add('profile');

        const img = document.createElement('img');
        img.src = user.profile; 
        img.alt = `${user.name}'s profile picture`;
        profileDiv.appendChild(img);

        const nameHeading = document.createElement('h2');
        nameHeading.textContent = user.name;

        const jobTitle = document.createElement('h3');
        jobTitle.textContent = user.jobTitle;

        const description = document.createElement('p');
        description.textContent = user.description;

        card.appendChild(profileDiv);
        card.appendChild(nameHeading);
        card.appendChild(jobTitle);
        card.appendChild(description);

        mainContainer.appendChild(card);
    });
}

// Listen for typing events
searchInput.addEventListener('input', function(event) {
    const searchTerm = event.target.value.toLowerCase();

    const filteredUsers = users.filter(function(user) {
        return user.name.toLowerCase().includes(searchTerm);
    });

    displayUsers(filteredUsers);
});

// Initial load configuration
displayUsers(users);