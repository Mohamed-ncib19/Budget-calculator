let btn=document.getElementById('btnI')
let btn1=document.getElementById('btnE')
let s=0
sommeI=parseInt(s)
sommeE=parseInt(s)

btn.addEventListener('click',(event)=>{ 
    event.preventDefault()
    let container = document.createElement("div")
    container.setAttribute("class","cont")
    let node=document.createElement("h3");
    let span = document.createElement("span")
    let span1 = document.createElement("span")
    span.setAttribute("class","styleIN")
    span1.setAttribute("class","StyleIN1")
    //getting values of income input
    var valueI = document.getElementById('valueI').value;
    if(valueI!=""){
    var valueD = document.getElementById('descI').value;
    
    var txt = document.createTextNode(valueI)
    var txt1=document.createTextNode(valueD)
    span1.append("+",txt,".00$")
    span.append(txt1)
    node.append(span1,"      ",span)
    container.append(node)
    document.getElementById('dispIN').append(container)

    valueI=parseInt(valueI)
    sommeI=sommeI+valueI 
    }
    
});




btn1.addEventListener('click',(event)=>{
    event.preventDefault()
    let container = document.createElement("div")
    container.setAttribute("class","cont")
    console.log(container)
    let node=document.createElement("h3");
    let span = document.createElement("span")
    let span1 = document.createElement("span")
    span.setAttribute("class","styleEX")
    span1.setAttribute("class","styleEX1")
    //getting values of income input
    var valueI = document.getElementById('valueE').value;
    if(valueI!=""){
    var valueD = document.getElementById('descE').value;
    var txt = document.createTextNode(valueI)
    var txt1=document.createTextNode(valueD)
    span1.append("-",txt,".00$")
    span.append(txt1)

    node.append(span1,"      ",span)
    container.append(node)
    document.getElementById("dispEX").appendChild(container)

    valE = parseInt(valueI)
    sommeE+=valE
    
    }
    
});

document.addEventListener('click',(event)=>{
    event.preventDefault()
    budget = sommeI-sommeE
    let screen= document.getElementById('demo')
    
    if(budget<0){
        screen.style.color="red"
    }else{
        screen.style.color="green"
    }
    screen.innerHTML=budget+".00 $"
   
});