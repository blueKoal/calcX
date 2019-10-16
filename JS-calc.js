let e = document.getElementById('equals2');
e.addEventListener('click',function(){

    let a = document.getElementById('x').value;
    let b = document.getElementById('y').value;
    let o = document.getElementById('operator').value;
    let r = document.getElementById('output');

    switch(o){

        case '+':
                r.innerHTML = parseInt(a) + parseInt(b);
                console.log(r);
                break;
        
        case '-':
               r.innerHTML = a - b;
               console.log(r);
                break;

        case '*':
               r.innerHTML = a * b;
               console.log(r);
               break;

        case '/':
              r.innerHTML = a / b;
              console.log(r);
              break;
    }
    
});

