let form = document.forms[0] 
 
let regEx = { 
    name: /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/, 
    email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 
    age: /^\S[0-9]{0,3}$/, 
    aboutyou: /^(\s|\w)\w*\W*$/, 
    js: /^(\s|\w)\w*\W*$/, 
    html: /^(\s|\w)\w*\W*$/, 
    css: /^(\s|\w)\w*\W*$/, 
}
 
form.onsubmit = (e) => { 
    e.preventDefault() 
 
    let obj = {} 
    let fn = new FormData(form) 
 
    fn.forEach((value, key) => { 
        obj[key] = value 
    }) 
    
    validate()

    error = 0
    succes = 0
} 

let filledbox = document.querySelector('.filled')
let unfilledbox = document.querySelector('.need_to_fill')

let error = 0
let succes = 0
function validate() { 
    let inputs = document.querySelectorAll('.required') 
     
    inputs.forEach(inp => { 
        let name = inp.getAttribute('name') 
        if (regEx[name].test(inp.value)) { 
            inp.style.border = '2px solid green'
            inp.parentElement.previousElementSibling.style.color = 'green'
            inp.nextElementSibling.style.display = 'none'
            inp.parentElement.nextElementSibling.style.color = 'green'
            inp.parentElement.nextElementSibling.innerHTML = 'Good!'
            succes++
        } else { 
            inp.style.border = '2px solid red' 
            inp.parentElement.previousElementSibling.style.color = 'red'
            inp.nextElementSibling.style.display = 'block'
            inp.parentElement.nextElementSibling.style.color = 'red'
            inp.parentElement.nextElementSibling.innerHTML = 'You wrote wrong, try it again!'
            error++
        } 
        filledbox.innerHTML = succes
        unfilledbox.innerHTML = error
    }) 
}