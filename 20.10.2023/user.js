const users = [
    {
        id: 1,
        name: "User 1",
        email: "user1@example.com",
    },
    {
        id: 2,
        name: "User 2",
        email: "user2@example.com",
    },
    {
        id: 3,
        name: "User 3",
        email: "user3@example.com",
    },
    {
        id: 4,
        name: "User 4",
        email: "user4@example.com",
    },
    {
        id: 5,
        name: "User 5",
        email: "user5@example.com",
    },
    {
        id: 6,
        name: "User 6",
        email: "user6@example.com",
    },
    {
        id: 7,
        name: "User 7",
        email: "user7@example.com",
    },
    {
        id: 8,
        name: "User 8",
        email: "user8@example.com",
    },
    {
        id: 9,
        name: "User 9",
        email: "user9@example.com",
    },
    {
        id: 10,
        name: "User 10",
        email: "user10@example.com",
    },
];

const container = document.querySelector(".container");

users.forEach((user)=>{
    const userCard = document.createElement("div");
    userCard.textContent = user.name;
    userCard.addEventListener("click", ()=>{

        const stringifiedUser = JSON.stringify(user)
        localStorage.setItem("user", stringifiedUser)
    })

    container.appendChild(userCard);
})