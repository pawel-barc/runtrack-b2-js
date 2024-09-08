let count = 0;

function myAddCount(){
    count ++ ;
    document.getElementById('counter-score').textContent = count;
    
}

document.getElementById('count-adder').addEventListener('click', myAddCount);