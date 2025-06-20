(() => {
    const $counter = document.getElementById("js-counter");
    const clickHandler = (e) => {
        const $targetButton = e.currentTarget;
        let currentCount =  parseInt($counter.textContent);
    
        if($targetButton.textContent === "+"){
            $counter.textContent = currentCount + 1;  
        }else if($targetButton.textContent === "+10"){
            $counter.textContent = currentCount + 10; 
        }else if($targetButton.textContent === "-10"){
            $counter.textContent = currentCount - 10; 
        }else{
            $counter.textContent = currentCount - 1;
        }
        currentCount =  parseInt($counter.textContent);
        let $counterBox  = document.querySelector(".counter");
        if(currentCount % 10 === 0 && currentCount !== 0){        
            alert(currentCount+" now");
        }
        if(currentCount === 0){
            $counterBox.style.backgroundColor = "#FFFFFF";
        }else if(currentCount > 0){
            $counterBox.style.backgroundColor = "#FFB6C1";
        }else{
            $counterBox.style.backgroundColor = "#ADD8E6";
        }    
    }
    for(let index = 0; 
        index < document.getElementsByClassName("js-button").length; index++){
            document.getElementsByClassName("js-button")[index].
            addEventListener("click",(e) => clickHandler(e))
    }
})();
