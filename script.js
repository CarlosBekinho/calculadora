
function insert(num){
    let res = document.getElementById('res')
    res.innerHTML += num 
       
}

function clean(){
    res.innerHTML = ''
}

function back(){
    let res = document.getElementById('res').innerHTML
    document.getElementById('res').innerHTML = res.substring(0, res.length -1)
}

function calcular(){
    let res = document.getElementById('res').innerHTML;
    if(res)
    {
        document.getElementById('res').innerHTML = eval(res);
    }
    else
    {
        document.getElementById('res').innerHTML = "Nada..."
    }
}