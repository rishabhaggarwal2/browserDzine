$(document).ready(function(){
	//Global Variables
	var adjectives = new Array();
	var no_of_adjectives = 0;
	$(".variables, .sample, .footer").hide();
	var check_suggested_type=0;
	var check_custom_type=0;
	var fontname;

	//Tagline Generation
	var random=Math.floor(Math.random()*3);
	console.log(random);
	console.log("Hello");

	if(random==0)
		$("span.tagline").html("Coz There are better things to do on Diwali than burn crackers");
	if(random==1)
		$("span.tagline").html("The ultimate design resource");
	if(random==2)
		$("span.tagline").html("Designing in the browser made easy");
	
	//Font CSS Loader
	function loadjscssfile(filename, filetype, fontname){
		var fileref=document.createElement("link");
		fileref.setAttribute("rel", "stylesheet");
		fileref.setAttribute("type", "text/css");
		fileref.setAttribute("href", filename);
		$("head").append(fileref);
		console.log(fileref);
		if(check_suggested_type==0){
			$("<div class='putted'><h4 class='suggestedheading'>"+fontname+"</h4></div>").appendTo(".putemhere").each(function(){
				$(this).find("h4").css("font-family",fontname);
			});
		}
		if(check_suggested_type==1){
			$("<div class='putted'><p class='suggestedtext'>"+fontname+"</p></div>").appendTo(".putemhere").each(function(){
				$(this).find("p").css("font-family",fontname);
			});
		}
	}

	function loadjscssfile2(filename, filetype, fontname){
		var fileref=document.createElement("link");
		fileref.setAttribute("rel", "stylesheet");
		fileref.setAttribute("type", "text/css");
		fileref.setAttribute("href", filename);
		$("head").append(fileref);
		console.log(fileref);
		if(check_suggested_type==0){
			$("h4.customheading").css("font-family",fontname);
			$("h4.customheading").html(fontname);		
		}
	}

	function loadjscssfile3(filename, filetype, fontname){
		var fileref=document.createElement("link");
		fileref.setAttribute("rel", "stylesheet");
		fileref.setAttribute("type", "text/css");
		fileref.setAttribute("href", filename);
		$("head").append(fileref);
		console.log(fileref);
		if(check_suggested_type==0){
			$("p.customtext").css("font-family",fontname);
			$("p.customtext").html(fontname);		
		}
	}



	//Suggestion Functions
	var suggestedcolor;
	function setcolorsuggestion(suggestedcolor)
	{	
		if(suggestedcolor=="red"){
			var setthiscolor = "<div class='suggestion'><div style='background:#000000; color:#fff'>#000000</div><div style='background:#550000; color:#fff'>#550000</div><div style='background:#770306; color:#fff'>#770306</div><div style='background:#AA0007; color:#fff'>#AA0007</div><div style='background:#FFFBFB; color:#000'>#FFFBFB</div></div>";
			$('.suggestions').append(setthiscolor);
			check_suggested_type=0;
			loadjscssfile("http://fonts.googleapis.com/css?family=Sacramento", "css", "Sacramento");

			check_suggested_type=1;
			loadjscssfile("http://fonts.googleapis.com/css?family=ABeeZee", "css", "ABeeZee");
			
			
			
		}

		if(suggestedcolor=="white"){
			var setthiscolor = "<div class='suggestion'><div style='background:#AFAFAF; color:#000'>#AFAFAF</div><div style='background:#BEBEBE; color:#000'>#BEBEBE</div><div style='background:#CDCDCD; color:#000'>#CDCDCD</div><div style='background:#E6E6E6; color:#000'>#E6E6E6</div><div style='background:#FFFFFF; color:#000'>#FFFFFF</div></div>";
			$('.suggestions').append(setthiscolor);
			check_suggested_type=0;
			loadjscssfile("http://fonts.googleapis.com/css?family=Yanone+Kaffeesatz", "css", "Yanone Kaffeesatz");
			check_suggested_type=1;
			loadjscssfile("http://fonts.googleapis.com/css?family=Mako", "css", "Mako");
		}

		if(suggestedcolor=="blue"){
			var setthiscolor = "<div class='suggestion'><div style='background:#00305A; color:#fff'>#00305A</div><div style='background:#00448D; color:#fff'>#00448D</div><div style='background:#0074D9; color:#fff'>#0074D9</div><div style='background:#4192D9; color:#fff'>#4192D9</div><div style='background:#7ABAF2; color:#000'>#7ABAF2</div></div>";
			$('.suggestions').append(setthiscolor);
			check_suggested_type=0;
			loadjscssfile("http://fonts.googleapis.com/css?family=Yanone+Kaffeesatz", "css", "Yanone Kaffeesatz");
			check_suggested_type=1;
			loadjscssfile("http://fonts.googleapis.com/css?family=Molengo", "css", "Molengo");
		}

		if(suggestedcolor=="royal"){
			var setthiscolor = "<div class='suggestion'><div style='background:#201030; color:#fff'>#201030</div><div style='background:#BF9959; color:#fff'>#BF9959</div><div style='background:#FFFFFF; color:#000'>#FFFFFF</div><div style='background:#391015; color:#fff'>#391015</div><div style='background:#000000; color:#fff'>#000000</div></div>";
			$('.suggestions').append(setthiscolor);
			check_suggested_type=0;
			loadjscssfile("http://fonts.googleapis.com/css?family=Dancing+Script", "css", "Dancing Script");
			check_suggested_type=1;
			loadjscssfile("http://fonts.googleapis.com/css?family=Goudy+Bookletter+1911", "css", "Goudy Bookletter 1911");
		}

		if(suggestedcolor=="eco"){
			var setthiscolor = "<div class='suggestion'><div style='background:#222222; color:#fff'>#222222</div><div style='background:#545454; color:#fff'>#545454</div><div style='background:#1D5925; color:#fff'>#1D5925</div><div style='background:#298C1F; color:#fff'>#298C1F</div><div style='background:#FFFFFF; color:#000'>#FFFFFF</div></div>";
			$('.suggestions').append(setthiscolor);
			check_suggested_type=0;
			loadjscssfile("http://fonts.googleapis.com/css?family=Economica", "css", "Economica");
			check_suggested_type=1;
			loadjscssfile("http://fonts.googleapis.com/css?family=Open+Sans", "css", "Open Sans");
			
		}

		if(suggestedcolor=="child"){
			var setthiscolor = "<div class='suggestion'><div style='background:#FF5980; color:#fff'>#FF5980</div><div style='background:#1F2226; color:#fff'>#1F2226</div><div style='background:#594DFF; color:#fff'>#594DFF</div><div style='background:#ACBFC5; color:#fff'>#ACBFC5</div><div style='background:#FFFFFF; color:#000'>#FFFFFF</div></div>";
			$('.suggestions').append(setthiscolor);
			check_suggested_type=0;
			loadjscssfile("http://fonts.googleapis.com/css?family=Underdog", "css", "Underdog");
			check_suggested_type=1;
			loadjscssfile("http://fonts.googleapis.com/css?family=Abel", "css", "Abel");
		}




	}



	//Decribe Design Loader
	var adjectiveGet;
	
	$(".adjective_container input.enterhere").keyup(function(e){
		adjectiveGet = $(".adjective_container input.enterhere").val();
		console.log(adjectiveGet);

		if((e.keyCode || e.which)==13)
		{
			var adjectivePut = "<div>"+adjectiveGet+"</div>";
			$(this).before(adjectivePut);
			$(this).val("");
			adjectives.push(adjectiveGet);
			no_of_adjectives++;

			//Color Suggestions
			var checkthiscolor = adjectives[no_of_adjectives-1];
			if(checkthiscolor.indexOf("hot")!=-1||checkthiscolor.indexOf("fire")!=-1||checkthiscolor.indexOf("lush")!=-1||checkthiscolor.indexOf("aggress")!=-1||checkthiscolor.indexOf("power")!=-1||checkthiscolor.indexOf("excit")!=-1||checkthiscolor.indexOf("warn")!=-1||checkthiscolor.indexOf("red")!=-1){
				setcolorsuggestion("red");
			}
			else if(checkthiscolor.indexOf("minimal")!=-1||checkthiscolor.indexOf("clean")!=-1||checkthiscolor.indexOf("white")!=-1||checkthiscolor.indexOf("simple")!=-1||checkthiscolor.indexOf("plain")!=-1){
				setcolorsuggestion("white");
			}
			else if(checkthiscolor.indexOf("blue")!=-1||checkthiscolor.indexOf("cool")!=-1||checkthiscolor.indexOf("calm")!=-1||checkthiscolor.indexOf("soothing")!=-1||checkthiscolor.indexOf("relax")!=-1||checkthiscolor.indexOf("corporate")!=-1||checkthiscolor.indexOf("business")!=-1||checkthiscolor.indexOf("profess")!=-1){				
				setcolorsuggestion("blue");
			}
			else if(checkthiscolor.indexOf("royal")!=-1||checkthiscolor.indexOf("purple")!=-1||checkthiscolor.indexOf("rich")!=-1||checkthiscolor.indexOf("gleam")!=-1||checkthiscolor.indexOf("majest")!=-1){
				setcolorsuggestion("royal");
			}
			else if(checkthiscolor.indexOf("eco")!=-1||checkthiscolor.indexOf("env")!=-1||checkthiscolor.indexOf("green")!=-1||checkthiscolor.indexOf("nature")!=-1||checkthiscolor.indexOf("tranquil")!=-1||checkthiscolor.indexOf("yoga")!=-1){				
				setcolorsuggestion("eco");
			}
			else if(checkthiscolor.indexOf("play")!=-1||checkthiscolor.indexOf("fun")!=-1||checkthiscolor.indexOf("child")!=-1||checkthiscolor.indexOf("baby")!=-1){				
				setcolorsuggestion("child");
			}
		}

	});
	
	//Done Button
	$(".adjectives .done").click(function(){
		$(this).slideUp("fast");
		$(".variables").slideDown("medium");
	});


	//Colors suggestions
	console.log(adjectives);


	//Custom Colors
	$(".custom textarea").keyup(function(e){
		var customback = $(this).val();
		console.log(customback);
		$(this).css("background",customback);
	});

	var filename2;
	var fontname2;
	var filename3;
	var fontname3;


	//Custom Text
	$(".fontcustom input[type='url']").keyup(function(e){
		filename2 = $(this).val();
		console.log(filename2);
	});

	

	$(".fontcustom input[type='name']").keyup(function(e){
		fontname2 = $(this).val();
		console.log(fontname2);
		if((e.keyCode || e.which)==13){
			check_custom_type=0;
			loadjscssfile2(filename2, "css", fontname2);
			$("h4.customheading").css("font-family",fontname2);
			$("h4.customheading").html(fontname2);
		}

	});

	$(".fontcustom input[type='url']:last-child").keyup(function(e){
		filename3 = $(this).val();
		console.log(filename3);
	});

	$(".fontcustom input[type='name']:last-child").keyup(function(e){
		fontname3 = $(this).val();
		console.log(fontname3);
		if((e.keyCode || e.which)==13){
			check_custom_type=1;
			loadjscssfile3(filename3, "css", fontname3);
			$("p.customtext").css("font-family",fontname3);
			$("p.customtext").html(fontname3);
		}

	});

	

	//finalizing texts and colors
	var fcolor1;
	var fcolor2;
	var fcolor3;
	var fcolor4;
	var fcolor5;
	var ftext2;
	var ftext1;
	
	$('body').on('click', '.col2 .suggestions div', function() {
    	$(".col2 .suggestions").children().removeClass("frozen").addClass("unfreeze");
    	$(".col2 .custom").removeClass("frozen").addClass("unfreeze");
		$(this).removeClass("unfreeze").addClass("frozen");
		fcolor1 = $(this).children(':nth-child(1)').text();
		fcolor2 = $(this).children(':nth-child(2)').text();
		fcolor3 = $(this).children(':nth-child(3)').text();
		fcolor4 = $(this).children(':nth-child(4)').text();
		fcolor5 = $(this).children(':nth-child(5)').text();

		$(".sample h1, .sample h2, .sample h3, .sample h4").css({"font-family":ftext1, "color":fcolor1});
		$(".sample p b, .sample p.caption b, .sample em").css({"font-family":ftext2, "color":fcolor4});
		$(".sample .c1").css("background",fcolor1);
		$(".sample .c2").css("background",fcolor2);
		$(".sample .c3").css("background",fcolor3);
		$(".sample .c4").css("background",fcolor4);
		$(".sample .c5").css("background",fcolor5);

	});

	$('.col2 .custom').click(function() {
    	$(".col2 .suggestions").children().removeClass("frozen").addClass("unfreeze");
		$(this).removeClass("unfreeze").addClass("frozen");
		fcolor1 = $(this).children(':nth-child(2)').val();
		fcolor2 = $(this).children(':nth-child(3)').val();
		fcolor3 = $(this).children(':nth-child(4)').val();
		fcolor4 = $(this).children(':nth-child(5)').val();
		fcolor5 = $(this).children(':nth-child(6)').val();

		$(".sample h1, .sample h2, .sample h3, .sample h4").css({"font-family":ftext1, "color":fcolor1});
		$(".sample p b, .sample p.caption b, .sample em").css({"font-family":ftext2, "color":fcolor4});
		$(".sample .c1").css("background",fcolor1);
		$(".sample .c2").css("background",fcolor2);
		$(".sample .c3").css("background",fcolor3);
		$(".sample .c4").css("background",fcolor4);
		$(".sample .c5").css("background",fcolor5);
		
	});

	$('body').on('click', '.putted:odd', function() {
   		$(".putted:odd").removeClass("frozen").addClass("unfreeze");
   		$(".fontcustom .suggestion").removeClass("frozen").addClass("unfreeze");
   		$(this).removeClass("unfreeze").addClass("frozen");
   		ftext2 = "'"+$(this).text()+"'";
   		console.log(ftext2);

   		$(".sample h1, .sample h2, .sample h3, .sample h4").css({"font-family":ftext1, "color":fcolor1});
		$(".sample p b, .sample p.caption b, .sample em").css({"font-family":ftext2, "color":fcolor4});
		$(".sample .c1").css("background",fcolor1);
		$(".sample .c2").css("background",fcolor2);
		$(".sample .c3").css("background",fcolor3);
		$(".sample .c4").css("background",fcolor4);
		$(".sample .c5").css("background",fcolor5);
	});

	$('body').on('click', '.putted:even', function() {
   		$(".putted:even").removeClass("frozen").addClass("unfreeze");
   		$(".fontcustom .suggestion").removeClass("frozen").addClass("unfreeze");
   		$(this).removeClass("unfreeze").addClass("frozen");
   		ftext1 = "'"+$(this).text()+"'";
   		console.log(ftext1);

   		$(".sample h1, .sample h2, .sample h3, .sample h4").css({"font-family":ftext1, "color":fcolor1});
		$(".sample p b, .sample p.caption b, .sample em").css({"font-family":ftext2, "color":fcolor4});
		$(".sample .c1").css("background",fcolor1);
		$(".sample .c2").css("background",fcolor2);
		$(".sample .c3").css("background",fcolor3);
		$(".sample .c4").css("background",fcolor4);
		$(".sample .c5").css("background",fcolor5);
	});

	$('.fontcustom .suggestion').click(function() {
    	$(".putted").removeClass("frozen").addClass("unfreeze");
    	$(this).removeClass("unfreeze").addClass("frozen");
    	ftext1 = "'"+$("h4.customheading").text()+"'";
    	ftext2 = "'"+$("p.customtext").text()+"'";
    	console.log(ftext2);
    	console.log(ftext1);

    	$(".sample h1, .sample h2, .sample h3, .sample h4").css({"font-family":ftext1, "color":fcolor1});
		$(".sample p b, .sample p.caption b, .sample em").css({"font-family":ftext2, "color":fcolor4});
		$(".sample .c1").css("background",fcolor1);
		$(".sample .c2").css("background",fcolor2);
		$(".sample .c3").css("background",fcolor3);
		$(".sample .c4").css("background",fcolor4);
		$(".sample .c5").css("background",fcolor5);
	});

	

	//Show the sample
	$(".done2").click(function(){
		var x = $(".sample").offset().top;
		x=x+650;
		$('html, body').animate({scrollTop:x}, 1000);
		$(".sample").fadeIn(4000);
		$(".footer").fadeIn(2000);
	});
});
