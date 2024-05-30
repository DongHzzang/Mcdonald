

// window.onload = function(){}

window.addEventListener('load' , function(){
    const header = document.querySelector('.header')
    const hMenu = document.querySelector('.hMenu')
    const topSearch = document.querySelector('.topSearch')
    const srch = document.querySelector('.topSearch .srch')
    const close = document.querySelector('.topSearch .close')
    const aside = document.querySelector('.aside')
    const btnTop = document.querySelector('.btnTop')

    //hMenu에 마우스가 들어가면
    hMenu.addEventListener('mouseenter' , function(){
        header.classList.add('open')
    })

    //hMenu에 마우스가 떠나면
    hMenu.addEventListener('mouseleave' , function(){
        header.classList.remove('open')

    })

    //srch를 클릭하면
    srch.addEventListener('click' , function(){
        topSearch.classList.add('open')
    })
        
    //close를 클릭하면
    close.addEventListener('click' , function(){
        topSearch.classList.remove('open')

    })

    //윈도우가 스크롤되면
    window.addEventListener('scroll' , function(){
        const docScrollTop = document.querySelector('html').scrollTop

        if(docScrollTop > 100){
            aside.style.display = 'block'
            header.classList.add('fixed')
        }else{
            aside.style.display = 'none'
            header.classList.remove('fixed')

        }

        console.log("html 문서를 수직으로 얼마나 스크롤 했는지" , docScrollTop)
        console.log("윈도우 문서를 수직으로 얼마나 스크롤 했는지" , window.scrollY)
    })

    //top버튼을 누르면 맨위로 스무스하게 이동하기
    btnTop.addEventListener('click' , function(){
        window.scrollTo({
            top : 0 , 
            left : 0 , 
            behavior : 'smooth'
        })
    })

    //스와이퍼 슬라이드 설정

    var swiper = new Swiper(".mainSlide", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable : true,
      },
      autoplay:{
        delay: 2500, // 시간 설정
        disableOnInteraction: false, // false-스와이프 후 자동 재생
  },
    });

})


