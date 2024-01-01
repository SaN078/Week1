const userLogin = new Promise(function(resolve, reject)
{
    setTimeout(function()
    {
        let isLoggedIn = false;
        if (isLoggedIn)
        {
            resolve({username : 'Ram', password: '123'});
        }
        else
        {
            reject('auth error');
        }
    },3000);
})



userLogin
    .then((user) =>{
        console.log(user);
        return user.username;
    })

    .then((data) => 
    {
        console.log(data);
    })
    .catch((err)=>{console.log(err);}
    )


async function consumePromise()
{
    try{
        const response = await userLogin;
        console.log(response);
        console.log(response.username);
    }
    catch(error){
        console.log(error);
    }
}

consumePromise();



fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        console.log(response);
    })

    .catch((error) =>
    {
        console.log(error);
    })


async function fetchUsers()
{
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json;
        console.log(data);
    }
    catch (error){
        console.log(error);
    }
}

fetchUsers();