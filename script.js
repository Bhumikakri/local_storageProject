let inputText = document.querySelector("textarea");
let audio = document.querySelector("audio");

//---------auto save text in local storage-------------//

inputText.addEventListener("input", ()=>{
    localStorage.setItem("saveData",inputText.value);
});



//-------------- change the background ---------------------//
let btn = document.querySelector("button");
let background = document.querySelector(".container");

let press = true;
btn.addEventListener("click",()=>{
    audio.play();
    if(press){
        btn.textContent = `normal  ☀`
        background.style.backgroundImage = `url("https://th.bing.com/th/id/OIP.ETzTAAVsos7Jn-iGwUb-LAHaE8?w=275&h=184&c=7&r=0&o=5&pid=1.7")`;
        press = false;
        return;
    }
    else{
        btn.textContent = `mood   🌙`
        background.style.backgroundImage = `url("https://th.bing.com/th/id/OIP.Bz7ob63SG0CeR9HuwtrHIAHaEK?pid=ImgDet&rs=1")`;
        press = true;
        return;
    }
})