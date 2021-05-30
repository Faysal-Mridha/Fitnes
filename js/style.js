// this is for change images code
var productImg=document.querySelector("#productImg");
var smallImg=document.querySelector(".smallImg");
var smallImg2=document.querySelector(".smallImg2");
var smallImg3=document.querySelector(".smallImg3");
var smallImg4=document.querySelector(".smallImg4");



$(smallImg).click(function (e) { 
    productImg.src=smallImg.src;
});
$(smallImg2).click(function (e) { 
    productImg.src=smallImg2.src;
});
$(smallImg3).click(function (e) { 
    productImg.src=smallImg3.src;
});
$(smallImg4).click(function (e) { 
    productImg.src=smallImg4.src;
});
// this is for change images code end



// ==========this for account=============


var loginFrom=$("#login");
var registerFrom=$("#register");
var indicator=$("#indicator");
function register(){
registerFrom.css("transform","translateX(0px)");
loginFrom.css("transform","translateX(0)");
indicator.css("transform","translateX(152px)");
};

function login(){
registerFrom.css("transform","translateX(300px)");
loginFrom.css("transform","translateX(300px)");
indicator.css("transform","translateX(50px)");

};


