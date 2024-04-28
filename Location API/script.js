const button=document.querySelector("button");

button.addEventListener("click",()=>
{
    //if browser support geolocation
    
    if(navigator.geolocation)
    {
    //geolocation.getCurrentPosition method get current position
//  geolocation takes succes, error, option parameter
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }
    else{
        button.innerText="Your browser  not support";

    }
});
function onSuccess(position)
{
    console.log(position);
}
function onError(error)
{
    if(error.code ==1)
    {
        button.innerText="You denied the request";
    }
    else if(error.code ==2)
    {
        button.innerText="Loacation not available";
    }
    else
    {
        button.innerText="Something went wrong";
    }
}