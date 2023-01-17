function evalte(){
    var ep = document.getElementById('exp').value;
    if (ep == ""){
        document.getElementById('exp').value = "";
    }
    else{
    let res = eval(ep);
    document.getElementById('exp').value = res;
    }
}
function expr(ele){
    e =document.getElementById('exp').value + ele.innerText;
    document.getElementById('exp').value = e;
}
function clr(){
    document.getElementById('exp').value = "";
}