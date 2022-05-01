$(document).ready(function(){
	var articalContent = '';

    //
    function containerWidth() {
        if ($(window).width()>768 && $(window).width()<=1442) {
            $(".container").css("width",$(window).width()-272);
        } else if ($(window).width()<=768){
            $(".container").css("width","100%");
        }
    }
    containerWidth();
	
	$("#topsection, .artical").css("height",$(window).height());
	$(window).resize(function () {
    	$("#topsection, .artical").css("height",$(window).height());
        containerWidth();
	});

	
	$('.navbar-nav a, .btn-up, .btn-down').click(function(){
		$('body').removeClass('showartical');
        //
        $('html,body').animate({scrollTop: ($($(this).attr('data-href')).offset().top -50 )},500);
        if ($('.navbar-toggle').hasClass('collapsed')==false) {
                $('.navbar-toggle').click();
            }
    });
    // 
    $('.navbar-brand').click(function(){
    	if($('body').hasClass('showartical')){
    		$('body').removeClass('showartical');
            if ($('.navbar-toggle').hasClass('collapsed')==false) {
                $('.navbar-toggle').click();
            }
    	}
		else {
			//
        $('html,body').animate({scrollTop: ($($(this).attr('data-href')).offset().top -50 )},500);
        if ($('.navbar-toggle').hasClass('collapsed')==false) {
                $('.navbar-toggle').click();
            }
		}  
    });
    // 
    // $(".btn-work, .btn-work-xs").click(function(){
    //     // 
    //     var atcNb = $(this).attr('mata-work');
    //     console.log(atcNb);
    //     $.ajax({
    //         url:'./atc/exp/p'+atcNb+'.txt',
    //         type:"post",
    //         dataType:'text',
    //         data:{},
    //         async:false,
    //         success:function(data){
    //             articalContent = data;          
    //         }
    //     });
    //     console.log(articalContent);
    //     $("#previewContent").html(marked(articalContent));
    //     // 
    //     $('body').addClass("showartical");
    // });
    // 
    $(document).scroll(function() {
        var scroH = $(document).scrollTop();  //
        var viewH = $(window).height();  // 
        // 
        if (scroH >= viewH) {
            $(".btn-up").removeClass("hidden");
        } else {
            $(".btn-up").addClass("hidden");
        }
        if (scroH >= 36) {
            $(".btn-down").addClass("hidden");
        } else {
            $(".btn-down").removeClass("hidden");
        }
    });
    //logos
    for (var i = 26; i >0; i--) {
        $(".cocom").after("<div class='logo-c col-md-2 col-xs-4'><img src='img/logos/logo"+i+".jpg'><img class='img-h' src='img/logos/logo"+i+"-h.jpg"+"'></div>");
    }
    // $(".logo-c").hover(function(){
    //     $(this).children(".img-h").css("opacity",1);
    //     },function(){
    //     $(this).children(".img-h").css("opacity",0.00001);
    // });

    
})