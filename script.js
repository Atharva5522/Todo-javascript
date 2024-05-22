let form = document.querySelector("form");
let ul = document.querySelector("ul")
let input = document.querySelector("input")
// let li = document.querySelector("li")

const todoapp = (e) =>{
    e.preventDefault()

    // if(input.value == ""){
    //     alert("Enter text");
    // }
    
    let li = document.createElement("li");
    li.innerText = input.value;
    li.className = "list-group-item rounded-0"

    ul.appendChild(li)
    

    let button = document.createElement("button")
    button.className ="btn btn-danger float-end rounded-0 btn-sm"
    button.innerText = "Delete"
    li.appendChild(button)

    form.reset();


   
};

form.addEventListener("submit",todoapp)


const deletebtn = (e) =>{

    if(e.target.className.includes("btn-danger")){
        let li = e.target.parentElement;
        if(window.confirm("Are you Sure")){
            ul.removeChild(li);
        }
    }

}

ul.addEventListener("click",deletebtn);
