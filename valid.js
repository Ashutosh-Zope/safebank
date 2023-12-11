//Authentication process for Admin
const form = document.querySelector("form")

form.addEventListener("submit",(e)=>{
    e.preventDefault()

    const username = form.username.value
    const password = form.password.value

    const authenticated = authentication(username,password)

    if(authenticated){
        window.location.href = "./customer.html"
    }else{
        alert("Incorrect email" +" " + "or" + " " + "password")
    }
})

// function for checking username and password

function authentication(username,password){
    if(username === "admin@gmail.com" && password === "admin@123"){
        return true
    }else{
        return false
    }
}

