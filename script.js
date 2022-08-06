
// 즉시 실행함수
(function(){
    const spanE1 = document.querySelector("main h2 span");
    const txtArr = ['Web Publisher', 'Front-End Developer', 'Web UI Designer', 'UX Designer', 'Back-END Developer'];
    
    let index = 0;
    let currentTxt =txtArr[index].split("");
    console.log(currentTxt);
    function writeTxt(){
        spanE1.textContent += currentTxt.shift();
        if(currentTxt.length!==0){
            setTimeout(writeTxt,Math.floor(Math.random())*100+100);
        }else{
            currentTxt= spanE1.textContent.split("");
            setTimeout(deleteTxt,3000);
        }
        
    }
    
    function deleteTxt(){
    currentTxt.pop();
    spanE1.textContent = currentTxt.join("");
    if(currentTxt.length!==0){
        setTimeout(deleteTxt,Math.floor(Math.random())*100+100);
    }else{
        index= (index+1) %txtArr.length;
        currentTxt = txtArr[index].split("");
        writeTxt();
        
    }
    }
    writeTxt();
})();

//add active class to header


(function(){
    const headerE1 =document.querySelector("header");
    window.addEventListener("scroll",function(){
        scrollCheck();
    });
    
    function scrollCheck(){
        const browserScrollY = window.scrollY ? window.scrollY : window.pageXOffset;
        if(browserScrollY>0){
            headerE1.classList.add('active');
        }else{
            headerE1.classList.remove('active');
        }
    }
})();


//header 항목 클릭 이벤트