let btn = document.querySelector("button");

let inp = document.querySelector("input");
let ul = document.querySelector("ul");


btn.addEventListener("click", function() {
    let item = document.createElement("li");
    item.innerText = inp.value;

    let dltbtn = document.createElement("button");
    dltbtn.innerText = "delete";
    this.classList.add("delete");

    item.appendChild(dltbtn);
    ul.appendChild(item);
    inp.value = "";
});

ul.addEventListener("click", function (event) {
    if(event.target.nodeName == "BUTTON") {
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("deleted");
    } else {
        console.log("don't delete");
    }
})

let dltbtns = document.querySelectorAll(".delete");
for(dltbtn of dltbtns) {
    dltbtn.addEventListener("click", function() {
        
        let par = this.parentElement;
        console.log(par);
        par.remove();
    })
}

