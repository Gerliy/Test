export const fetchUsers = () => {
    return new Promise((resolve) =>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(json => {
            resolve(json)
        })
    }) 
}
