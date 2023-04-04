let form = document.getElementById('form');
let input = document.getElementById('input');
let appList = document.getElementById('app-list');

form.addEventListener("submit", function(e){
  e.preventDefault();
  console.log("button clicked");
  formValidation();
});

let formValidation =()=>{
    if (input.value === ""){
        window.alert("Task cannot be blank");
    } 
    else{
            console.log("success");
            acceptData();
        }
 
};


let data ={};

let acceptData =()=>{
    data["inputContent"] = input.value;
    console.log(data);
    // TO ACCEPT DATA( THE VALUE ENTERED IN THE INPUT SPACE)
// WHICH IS NOW INVOKED IN THE SUCCESS VALIDATION
createData();
};

let createData =()=>{
    appList.innerHTML +=`
    <li> <h5>${data.inputContent}</h5>
              <div class="app-icon">
                <i onClick= "editPost(this)" class="fa-solid fa-pen-to-square edit"></i>
                <i onClick= "deletePost(this)" class="fa-solid fa-trash delete"></i>
              </div>
            </li>
    `;
  input.value = "";  // AFTER THE POST HAS BEEN SUCCESSFULLY ENTERED, THE VALUE BECOMES EMPTY;
};


let deletePost =(e)=>{
  e.parentElement.parentElement.remove();  //the first parentelement is to target the whole icons(app-icon)
  // the second parentelement targets the whole list
};

let editPost=(e)=>{
    input.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
};