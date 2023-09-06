let count=0;
function init(){
    declareEvents();
}


function declareEvents(){
    let btn1= document.querySelector("#btn1");
    btn1.addEventListener("click",function(){
        if(count==0){
            readMore();
            count++;
        }
        else{
            readLess();
            count--;
        }
    })
}

function readMore(){
    document.querySelector("#btn1").innerHTML =` <span class="pe-2">Read Less</span> <i class="fa fa-caret-up" aria-hidden="true"></i>`;
    document.querySelector("#id_p").innerHTML+= `
    The courses were built by me and my amazing, carefully selected team. Our courses guide the student
    step by step through written explanations, explanations in video classes, exercises with solutions
    for self-testing, listening comprehension videos with exercises, texts adapted to each level,
    pronunciation exercises, audios and much more.
    so join us, we can't wait to hear from you..! <br> <br>
    <img src="img_about/pexels-fauxels-3184418 (1).jpg" alt="team work" class = "img-fluid">
    `

}
function readLess(){
   
    document.querySelector("#btn1").innerHTML =` <span class="pe-2">Read more</span> <i class="fa fa-caret-down" aria-hidden="true"></i>`;
    document.querySelector("#id_p").innerHTML= " ";
    window.scroll({
        top:300,
        left:0,
        behavior: `smooth`
    })
}
 init();
