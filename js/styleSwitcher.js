window.addEventListener("load",function(){ 
    /*
        To load theme style from localStorage setting by checking many function 
        - checkLanguage
        - changeLanguageLayout
        - setStyleColor
        - changeBodySkinColor
    */
   
        
       
       let langState = localStorage.getItem("lang");
       console.log(langState);
      
        
   
    loadTheme();
});

const   links = document.querySelectorAll(".alternate-style"),
        totalLinks = links.length;
    
    function setStyleColor(color){
        for(let i = 0 ; i < totalLinks ; i++){
            if(color === links[i].getAttribute("title")){
                links[i].removeAttribute("disabled");
            }else{
                links[i].setAttribute("disabled","true");
            }
        }
        localStorage.setItem("styleColor",color);
    }

    
// toggle style switcher setting 

document.querySelector(".toggle-style-switcher").addEventListener('click',()=>{
    document.querySelector(".style-switcher").classList.toggle("open");
});

//Body Skin
const bodySkin = document.querySelectorAll(".body-skin"),
      totalBodySkin = bodySkin.length;

      for( let i = 0 ; i < totalBodySkin ; i++){
          bodySkin[i].addEventListener("change",function(){
            // to change body skin color
            changeBodySkinColor(bodySkin[i].value);
            console.log(this);
            localStorage.setItem('bodyColor',this.value);

          });
      }
      //function to check the value  change in the body skin section
      function changeBodySkinColor(val){
        if(val==="dark"){
            document.body.classList.add("dark");
            bodySkin[1].setAttribute("checked",true);
        }else{
            document.body.classList.remove("dark");
        }
      }
     


      //  Language Switcher 
      
      const langStyle = document.querySelector(".languages");
      
      //to set the style that coaporate with the language activated
      function setLanguageStyle(langName){

            changeLanguageLayout(langName);
            //to set the language choosen as a local param stored in the browser
            localStorage.setItem("lang",langName);
            checkLanguage();
            // used to close the switcher after doing function above
            document.querySelector(".style-switcher").classList.toggle("open");
      }
      
      // to check the language that has been choosen to load the appropriate layout interact with language
      function changeLanguageLayout(languageName){
        if(languageName=="Arabic"){
            langStyle.removeAttribute("disabled");
        }else{
            langStyle.setAttribute("disabled",true);
        }
      }
      //function to check the language that has been choosen to load this language into the site  from the multiLang js file
      function checkLanguage(){
          var localLang =  localStorage.getItem("lang");
        switch (localLang) {
            case "Arabic":
                //to active arabic language from the 
                activeArabic();            
                break;
            case "Arabic":
                activeEnglish();            
                break;
            default:
                activeEnglish();
                console.log("language come from default");
                break;
        }
          
      }
      //To active language and layout and stylecolor and bodycolor that been choosed before reload this function called on load
      function loadTheme(){
        checkLanguage();
        changeLanguageLayout(localStorage.getItem('lang'));
        setStyleColor(localStorage.getItem('styleColor'));
        changeBodySkinColor(localStorage.getItem('bodyColor'));
      }
