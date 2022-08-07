/* -------------------------------- navbar --------------------------------- */
$(document).ready( function(){
    $(window).scroll( function(){
        /* ============ navbar هو ارتفاع ال navbar Height هي المسافة بين البكرة والقمة وال scrollTop ال ============ */
         var  navbarVar = $(".navbar") ;
        // ============ condition ? true : false ;  ============
        $(window).scrollTop() >= navbarVar.height() ? navbarVar.addClass("scrolled") : navbarVar.removeClass("scrolled") ;
    });
    // ============= navbar links :  when click on link go to section ============= -->
    $(".navbar  ul  li").click( function(){
         $("html,body").animate({
            scrollTop : $("."+$(this).data("class")).offset().top - 60 
         });
        // add "main_color" class to "active link" in navbar
        /* من كل اللينكات الاخري وهيضيف هذه الكلاس للينك اللي انا ضغطت عليه main_color لما اضغط علي اي لينك من النافبار هيتم حذف الكلاس  */
        $(this).siblings().removeClass("main_color");
        $(this).addClass("main_color");
    });
    /* ************************************* header section ************************************* */
    // ============ right part : header form ============
    // +++++++++++ name inputField +++++++++++
    // when "foucs in" name inputField
    $(".input1").focusin( function(){
        if( $(this).attr("placeholder") !== "")
            {
                $(this).removeAttr("placeholder") ; 
                
            }
    });
    // when "foucs out" name inputField
  $(".input1").focusout( function(){
            $(this).attr("placeholder","name") ; 
    });
    // +++++++++++ email inputField +++++++++++
    // when "foucs in" email inputField
    $(".input2").focusin( function(){
        if( $(this).attr("placeholder") !== "")
            {
                $(this).removeAttr("placeholder") ; 
                
            }
    });
    // when "foucs out" email inputField
  $(".input2").focusout( function(){
            $(this).attr("placeholder","email") ; 
    });
    // +++++++++++ password inputField +++++++++++
    // when "foucs in" password inputField
    $(".input3Pass").focusin( function(){
        if( $(this).attr("placeholder") !== "")
            {
                $(this).removeAttr("placeholder") ; 
                
            }
    });
    // when "foucs out" password inputField
  $(".input3Pass").focusout( function(){
            $(this).attr("placeholder","password") ; 
    });
    // +++++++++++ subject inputField +++++++++++
    // when "foucs in" password inputField
    $(".input3Subj").focusin( function(){
        if( $(this).attr("placeholder") !== "")
            {
                $(this).removeAttr("placeholder") ; 
                
            }
    });
    // when "foucs out" password inputField
  $(".input3Subj").focusout( function(){
            $(this).attr("placeholder","subject") ; 
    });
    /* ****************************************** tabs section ******************************************  */
    $(".tabs  .tabsPart  li").click(function(){
        // add "orangeTab" to selected <li></li> and remove it from others tab 
       $(this).addClass("main_bk").siblings().removeClass("main_bk") ;
        // hide all direct divs :  .tabsInfo هيخفي كل الديفات اللي موجودة بعد العنصر اللي واخد كلاس
        $(".tabs    .tabsInfo > div").hide() ; 
        $(".tabs    .tabsImg > div").hide() ; 
        // appear the tabInfo and tabImg of the "tab" that we click :  اللي تم الضغط عليها tab هيظهر المعلومات والصورة بتاع ال
        $("."+$(this).data("class")).fadeIn();  
    });
    /* ///////////////////////////////////////////// testimonials section ///////////////////////////////////////   */
    // owl-carousel library
    $('.owl-carousel').owlCarousel({
        //  يكون شغال دائما ويتكرر carousel عشان ال
        loop:true ,
        // 10px عن الاخر بمقدار item هيبعد كل 
        margin:10 ,
        /* هتخفيهم false ولو next , prev فهيظهر لي 2 زرار وهما ال true فالو قيمتها next , previous هو الزرار بتاع ال nav ال */
        nav:false ,
        /* هيخفيهم false فهيظهر لي 2 دائرة ولو true فالو قيمتها next , previous هو الدائرتين بتاع ال dots ال */
        // يكون متجاوب مع كل الشاشات carousel عشان ال
        responsive:
        {
            // small screen
            0:
            {
                items:1
            } ,
            // medium screen
            600:
            {
                items:2
            },
            // large screen
            1000:
            {
                items:3
            }
        }
    });    
});