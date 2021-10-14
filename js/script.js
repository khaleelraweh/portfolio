//preloader
window.addEventListener("load",function(){
    //to make the opacity of the preloader vinish soo quicker than the layout of preloader itself
    document.querySelector(".preloader").classList.add("opacity-0");
    setTimeout(function () {
        //used to remove the preloader layout from the pages 
        document.querySelector(".preloader").style.display="none";
        //we can make the opacity vinish here
        //document.querySelector(".preloader").classList.add("opacity-0");
    }, 1000);
})
//Portfolio Item Filter 

const filterContainer= document.querySelector(".Portfolio-filter"),
filterBtn = filterContainer.children,
totalFilterBtn = filterBtn.length,
portfolioItem=document.querySelectorAll(".Portfolio-item"),
totalPortfolioItem=portfolioItem.length;


//console.log(totalfilter);
for(let i = 0 ; i < totalFilterBtn ; i++ ){
    filterBtn[i].addEventListener("click", function(){
        // for(let j = 0 ; j < totalFilterBtn ; j++ ){
        //     filterBtn[j].classList.remove("active");
        // }
        filterContainer.querySelector(".active").classList.remove("active");
        this.classList.add("active");
        /*
            used to show the profilio item when click on filter buttom by comparing
            data-falter in falter part with data-category in portfolio item
         */
        let filterValue =this.getAttribute("data-filter");
        
        for(let k = 0 ; k < totalPortfolioItem ; k++){
            if(filterValue ===portfolioItem[k].getAttribute("data-category")){
                portfolioItem[k].classList.remove("hide");
                portfolioItem[k].classList.add("show");
            }else{
                portfolioItem[k].classList.remove("show");
                portfolioItem[k].classList.add("hide"); 
            }
            if(filterValue ==="all"){
                portfolioItem[k].classList.remove("hide");
                portfolioItem[k].classList.add("show");
            }
        }

        
    });
}

/* LightBox */
let lightBox = document.querySelector(".lightbox"),
lightBoxImage = lightBox.querySelector(".lightbox-content .lightbox-image"),
lightBoxText = lightBox.querySelector(".lightbox-content .lightbox-caption .lightbox-text"),
lightBoxCounter = lightBox.querySelector(".lightbox-content .lightbox-caption .lightbox-counter"),
lightBoxControl = lightBox.querySelector(".lightbox-control"),
lightBoxClose = lightBox.querySelector(".lightbox-content .lightbox-close");


let lightIndex = 0;
for(let i = 0 ; i < totalPortfolioItem ; i++){
    portfolioItem[i].addEventListener("click",function(){
        lightIndex = i;
        changeItem();
        lightBoxToggle();
    })
}

function lightBoxToggle(){
    lightBox.classList.toggle("open");
}
// to change the lightbox item from the portfolioItem items
function changeItem(){
    let src = portfolioItem[lightIndex].querySelector(".portfolio-image img").getAttribute("src");
    lightBoxImage.src = src;
    lightBoxText.innerHTML = portfolioItem[lightIndex].querySelector("h4").innerHTML;
    lightBoxCounter.innerHTML = ( lightIndex + 1 ) + " / " + totalPortfolioItem;
}

//LightBox Controler to change the image on click in pre and next 
function nextItem(){
    if(lightIndex == totalPortfolioItem-1){
        lightIndex = 0
    }else{
        lightIndex++;
    }
    changeItem();
}
function preItem(){
    if(lightIndex == 0){
        lightIndex = totalPortfolioItem -1;
    }else{
        lightIndex--;
    }
    changeItem();
}
// to show next image one click on the image showing now
lightBoxImage.addEventListener('click',function(){
    nextItem();
});

// lightbox close 
lightBox.addEventListener('click',function(event){
    //console.log(event.target) will give me any element clicked in the lightbox layout
    if(event.target === lightBoxClose||event.target ===lightBox){
        lightBoxToggle();
    }
});


// change section 
let nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;
    
    // Used to let the link on the nav active
    for ( let i = 0 ; i < totalNavList ;i++){
        navList[i].querySelector("a").addEventListener("click",function(){

            //to remove backsection from all section to be added one in the only the section before the active section
            removeBackSection();

            for ( let j = 0 ; j < totalNavList ; j++){
                if(navList[j].querySelector("a").classList.contains("active")){
                    // used to add backsection class to the pre section to be shown under the active section 
                    // السكشن الذي يحمل اندكس مساوي للاندكس التابع لهذا الرابط خلي الباك لوج فعال
                    addBackSection(j);
                    
                }
                navList[j].querySelector("a").classList.remove("active");
            }
            this.classList.add("active");
            //function call to open the section related to the linked clicked
            showSection(this);
            asideSectionTogglerBtn();
        })
    }

function removeBackSection(){
    for ( let i = 0 ; i < totalSection ; i++){
        allSection[i].classList.remove("backSection");
    }
}
function addBackSection(num){
    allSection[num].classList.add("backSection");
}

function showSection(element){
    let target = element.getAttribute("href").split("#")[1];

    for ( let i = 0 ; i < totalSection ; i++){
        allSection[i].classList.remove("active");

        // if(target ==allSection[i].getAttribute("id") ){
        //     allSection[i].classList.add("active");
        // }

        document.querySelector("#"+target).classList.add("active");
    }
    
}
function updateNav(element){

    for ( let i = 0 ; i < totalNavList ; i++){
        navList[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#")[1];
        if( target === navList[i].querySelector("a").getAttribute("href").split("#")[1]){
            navList[i].querySelector("a").classList.add("active");
        }else{
           
        }
    }

}
//active hire me button
document.querySelector(".hire-me").addEventListener("click",function(){
    const sectionIndex = document.querySelector(".hire-me").getAttribute("data-section-index");
    removeBackSection()
    addBackSection(sectionIndex);
    console.log(sectionIndex);
    showSection(this);
    updateNav(this);
    
});



// switcher toggle 
let aside = document.querySelector(".aside"),
    navTogglerBtn = document.querySelector(".nav-toggler");
    navTogglerBtn.addEventListener("click",function(){
    asideSectionTogglerBtn();    
});

function asideSectionTogglerBtn(){
    navTogglerBtn.classList.toggle("open");
    aside.classList.toggle("open");
    for ( let i = 0 ; i < totalSection ; i++){
        allSection[i].classList.toggle("open");
    }
}


























