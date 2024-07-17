const apiToken = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNTBiMTUxZGVmYzYyNzI2MDVjZWQxYTZjZDI5YjU3MiIsIm5iZiI6MTcyMDQzODU5NS4xNTA3MDksInN1YiI6IjY2OGJiMmRjMjk5ZGU2Zjk2ODNkMmU4YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RdZwp59vudKRBx8xzYKUtHpc97UDMtUfpr6r3lzHgio";
const personId = new URLSearchParams(window.location.search).get('id');

const profileUrl = `https://api.themoviedb.org/3/person/${personId}`;

const getProfile = async () => {

    const res = await fetch(profileUrl, {
        method: "GET",
        headers: {
            "content-type": "application/json",
            Authorization: "Bearer " + apiToken,
        }
    })

    const data = await res.json();
    console.log(data)

}

getProfile()



