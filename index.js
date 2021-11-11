//selectors
const coffeeInput = document.querySelector(".coffee-input");
const coffeeButton = document.querySelector(".coffee-button");
const coffeeList = document.querySelector(".coffee-list");
const filterOption = document.querySelector(".filter-coffee");


//even listeners
coffeeButton.addEventListener("click", addCoffee);
coffeeList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterCoffee);
//functions

function addCoffee(event){
    //prevent form form submitting 
    event.preventDefault();
    // coffee DIV
    const coffeeDiv = document.createElement("div");
    coffeeDiv.classList.add("coffee");
    //create LI
    const newCoffee = document.createElement("li");
    newCoffee.innerText = coffeeInput.value;
    newCoffee.classList.add("coffee-item");
    coffeeDiv.appendChild(newCoffee);
    //Check mark button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-check">+</i>';
    completedButton.classList.add("complete-btn");
    coffeeDiv.appendChild(completedButton);
     //Check trash button
     const trashButton = document.createElement("button");
     trashButton.innerHTML = '<i class="fas fa-trash">-</i>';
     trashButton.classList.add("trash-btn");
     coffeeDiv.appendChild(trashButton);
     //append to list
     coffeeList.appendChild(coffeeDiv);
     //Clear Coffee INPUT Value
     coffeeInput.value = "";
}

function deleteCheck(e){
    const item = e.target;
    //delete
    if(item.classList[0] === "trash-btn") {
        const coffee = item.parentElement;
        //Animation
        coffee.classList.add("remove"); 
        coffee.addEventListener("transitionend", function(){
            coffee.remove();
        });
    }

    //check mark
    if(item.classList[0] === "complete-btn") {
        const coffee = item.parentElement;
        coffee.classList.toggle("completed");
    }

}
function filterCoffee(e){
    const coffees = coffeeList.childNodes;
   console.log(  coffees )
    coffees.forEach(function(coffee){
       // coffee.classList=[]
        console.log(coffee.classList)
        switch (e.target.value) {
            case "all":
                coffee.style.display = "flex"; 
                break;
            case "completed":
                if (coffee.classList.includes("completed")){
                    
                    console.log(coffee)
                    coffee.style.display = "flex"; 
                } else {
                    console.log(coffee)
                    coffee.style.display = "none";
                }
        }
    });
}
 