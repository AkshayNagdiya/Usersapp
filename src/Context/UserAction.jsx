export const fetchUser = async()=>{
    const Response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await Response.json();
    return data ;
};

export const fetchsingleuser = async(id)=> {
    const Response= await fetch ("https://jsonplaceholder.typicode.com/users/"+ id)
    const data =Response.json();
    return data ;
};