let inputBox= document.querySelector('#input')
let listBoard = document.querySelector('.list')
let button = document.querySelector('#button')

button.addEventListener('click',function addTask(){
    if(inputBox.value === ''){
        alert('You must write something')
    }
    else{
        let li=document.createElement('li')
        li.innerText=inputBox.value
        li.setAttribute('contenteditable', 'true')
        listBoard.appendChild(li)
        let span=document.createElement('span')
        span.innerText = '❌'
        li.appendChild(span)
    }
    inputBox.value=''
})

listBoard.addEventListener('click',function(e){
    // console.log(e.target)
    if(e.target.tagName==='LI'){
        e.target.classList.add('checked')
    }else if(e.target.tagName==='SPAN'){
        e.target.parentNode.remove()
    }
})

