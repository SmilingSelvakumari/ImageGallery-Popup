var imagecontainer = document.getElementById("imgcontainer")
var popupimage=document.getElementById("popup")
var popupimg = popupimage.querySelector("img");
var closebutton=document.querySelector("span")

// Event listener for image container
imagecontainer.addEventListener("click",function(event)

{
    if(event.target.tagName==="IMG"){
        var clickedimgsrc=event.target.src;
        popupimg.src=clickedimgsrc;

    popupimage.style.display="block"
}

})

//Event listener for close button
closebutton.addEventListener("click",function()
{
    popupimage.style.display="none"
})