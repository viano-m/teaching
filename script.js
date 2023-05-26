let words=["simple","business"];
let currentword= 0;
let wordElement=document.getElementById("word");
setInterval(()=>{
    currentword=
    (currentword + 1)% words.length;
    wordElement.textContent=words[currentword];},1000);

    let numberRanges=[[145,150],[10,20],[6,10],[20,25]]
    let numberIntervals=[10,80,100,120]
    let numberElements=[
        document.getElementById('number-1'),
    document.getElementById('number-2'),
    document.getElementById('number-3'),
    document.getElementById('number-4')];

    let increaseNumber=(number,range)=>{
        return Math.min(number + 1, range[1]);
    }
    let updateNumbers=()=>{
        numberElements.forEach((el,i)=>{
            let range=numberRanges[i];
            let interval=numberIntervals[i];
            let number=parseInt(el.innerText);
            number= increaseNumber(number,range);
            el.innerText=number;
        })
    }
    let intervalId=setInterval(updateNumbers,1000 / numberIntervals.length);

    
    window.addEventListener('DOMContentLoaded', function() {
        var slides = document.querySelectorAll('.slide');
        var currentSlide = 0;
  
        function showSlide() {
          slides.forEach(function(slide, index) {
            if (index === currentSlide) {
              slide.classList.add('active');
            } else {
              slide.classList.remove('active');
            }
          });
        }
  
        setInterval(function() {
          currentSlide = (currentSlide + 1) % slides.length;
          showSlide();
        }, 5000);
      });
  
