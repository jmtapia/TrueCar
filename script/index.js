   $(document).on("pagecreate","#pag1", function(){ 
        alert("Pulsa en el texto para Ocultarlo");
       	$("p").on("swipe", function(){
		$(this).hide();
	});
       $(window).on("orientationchange", function(e){
		alert(e.orientation);
		}); 	

    });