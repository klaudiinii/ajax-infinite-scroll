window.onscroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(response => {
                response.forEach(user => {
                    let uzytkownik = document.createElement("div");

                    uzytkownik.innerHTML = `
                <p>ID: ${user.id}</p>
                <p>Name: ${user.name}</p>
                <p>Website: ${user.website}</p>
                <p>---------------------------</p>
            `;

                    document.body.appendChild(uzytkownik);
                })
            })
            .catch(err => console.log("Opps, something went wrong: ", err));
    }
}