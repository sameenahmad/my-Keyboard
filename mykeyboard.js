window.onload= main;

function main()
{
var button= document.querySelector('.button');
function myfunction(event)
{var btnText=event.target.innerText;
    console.log(btnText);

}
button.addeventlistener('click', myfunction) ;
}