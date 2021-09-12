let writerEle = document.body.querySelector(".box");
let buttonEle = document.querySelector(".button");

let animals = ["dog", "fish", "cat", "shark", "cat", "dog"];

dataList(animals);

function dataList(list) {
    for(let i=0; i<list.length; i++){
        let ele = document.createElement("div");

        if(list[i] === "dog"){
            ele.innerHTML = "borf borf";

        } else if(list[i] === "cat"){
            ele.innerHTML = "I am a cat";

        } else {
            ele.innerHTML = "I'm an animal";

        }
        writerEle.appendChild(ele);

    }
}

function shuffle(list){
    list = list.sort(() => Math.random() - 0.5);
    writerEle.innerHTML = "";
    dataList(list);
}

buttonEle.addEventListener("click", function () {
    shuffle(animals);
});