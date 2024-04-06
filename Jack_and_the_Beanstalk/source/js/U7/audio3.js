$(document).ready(function(){

	var isPlaying=false;
	
	var lista57 = $('#ren57 li').hide();
	var lista58 = $('#ren58 li').hide();
	var lista59 = $('#ren59 li').hide();
	var lista59a = $('#ren59a li').hide();
	var lista60 = $('#ren60 li').hide();
	var lista60a = $('#ren60a li').hide();
	
	var lista61 = $('#ren61 li').hide();
	var lista61a = $('#ren61a li').hide();
	var lista61b = $('#ren61b li').hide();
	var lista62 = $('#ren62 li').hide();
	var lista62a = $('#ren62a li').hide();
	var lista63 = $('#ren63 li').hide();
	var lista63a = $('#ren63a li').hide();
	
	var lista64 = $('#ren64 li').hide();
	var lista65 = $('#ren65 li').hide();
	var lista66 = $('#ren66 li').hide();
	var lista67 = $('#ren67 li').hide();
	var lista68 = $('#ren68 li').hide();
	var lista69 = $('#ren69 li').hide();
	var lista69b = $('#ren69b li').hide();
	var lista70 = $('#ren70 li').hide();

	var lista71 = $('#ren71 li').hide();
	var lista71b = $('#ren71b li').hide();
	var lista72 = $('#ren72 li').hide();
	var lista72b = $('#ren72b li').hide();
	var lista73 = $('#ren73 li').hide();
	var lista73b = $('#ren73b li').hide();
	var lista74 = $('#ren74 li').hide();

	var lista75 = $('#ren75 li').hide();
	var lista75b = $('#ren75b li').hide();
	var lista76 = $('#ren76 li').hide();
	var lista76b = $('#ren76b li').hide();
	var lista77 = $('#ren77 li').hide();
	var lista77b = $('#ren77b li').hide();

	var lista78 = $('#ren78 li').hide();
	var lista79 = $('#ren79 li').hide();
	var lista80 = $('#ren80 li').hide();

	var lista81 = $('#ren81 li').hide();
	var lista81b = $('#ren81b li').hide();
	var lista82 = $('#ren82 li').hide();
	var lista82b = $('#ren82b li').hide();
	var lista83 = $('#ren83 li').hide();
	var lista83a = $('#ren83a li').hide();
	var lista84 = $('#ren84 li').hide();

	var lista85 = $('#ren85 li').hide();
	var lista85a = $('#ren85a li').hide();
	var lista86 = $('#ren86 li').hide();
	var lista86a = $('#ren86a li').hide();
	var lista87 = $('#ren87 li').hide();
	var lista87a = $('#ren87a li').hide();
	var lista87b = $('#ren87b li').hide();
	var lista88 = $('#ren88 li').hide();
	var lista88a = $('#ren88a li').hide();

	var funcionPlay9=function(){
	if(isPlaying)
	return;
	var a = 0;
	var b = 0;
	var c = 0;
	var d = 0;
	var e = 0;
	var f = 0;

	$("#musica9")[0].play();
	isPlaying=true;
	lista57 = $('#ren57 li').hide();
	lista58 = $('#ren58 li').hide();
	lista59 = $('#ren59 li').hide();
	lista59a = $('#ren59a li').hide();
	lista60 = $('#ren60 li').hide();
	lista60a = $('#ren60a li').hide();
		
        function mostrarimg57() {
        if(isPlaying){
        lista57.eq(a++).fadeIn(273, mostrarimg57);
    	}
		};

		setTimeout(mostrarimg57,338);

		function mostrarimg58() {
		if(isPlaying){
        lista58.eq(b++).fadeIn(250, mostrarimg58);
    	}
		};

		setTimeout(mostrarimg58,3784);

		function mostrarimg59() {
		if(isPlaying){
        lista59.eq(c++).fadeIn(400, mostrarimg59);
    	}
		};

		setTimeout(mostrarimg59,6124);

		function mostrarimg59a() {
		if(isPlaying){
        lista59a.eq(d++).fadeIn(545, mostrarimg59a);
    	}
		};

		setTimeout(mostrarimg59a,8884);

		function mostrarimg60() {
		if(isPlaying){
        lista60.eq(e++).fadeIn(230, mostrarimg60);
    	}
		};

		setTimeout(mostrarimg60,11307);

		function mostrarimg60a() {
		if(isPlaying){
        lista60a.eq(f++).fadeIn(280, mostrarimg60a);
    	}
		};

		setTimeout(mostrarimg60a,12700);

		};

	$(".inicia9").click(funcionPlay9);

	$(".inicia9").click(function(){
	if(isPlaying){
			$("#musica9")[0].pause();
			$("#musica9")[0].currentTime = 0;			
			isPlaying=false;
			setTimeout(function(){
				
				funcionPlay9();
			}, 400);
		} else {
			funcionPlay9();
		}

		});


	var funcionPlay10=function(){
	if(isPlaying)
	return;
	var g = 0;
	var h = 0;
	var i = 0;
	var j = 0;
	var k = 0;
	var l = 0;
	var m = 0;
	

	$("#musica10")[0].play();
	isPlaying=true;
	lista61 = $('#ren61 li').hide();
	lista61a = $('#ren61a li').hide();
	lista61b = $('#ren61b li').hide();
	lista62 = $('#ren62 li').hide();
	lista62a = $('#ren62a li').hide();
	lista63 = $('#ren63 li').hide();
	lista63a = $('#ren63a li').hide();

		function mostrarimg61() {
		if(isPlaying){
        lista61.eq(g++).fadeIn(250, mostrarimg61);
    	}
		};

		setTimeout(mostrarimg61,618);

		function mostrarimg61a() {
		if(isPlaying){
        lista61a.eq(h++).fadeIn(240, mostrarimg61a);
    	}
		};

		setTimeout(mostrarimg61a,2268);

		function mostrarimg61b() {
		if(isPlaying){
        lista61b.eq(i++).fadeIn(190, mostrarimg61b);
    	}	
		};

		setTimeout(mostrarimg61b,4165);

		function mostrarimg62() {
		if(isPlaying){
        lista62.eq(j++).fadeIn(320, mostrarimg62);
    	}
		};

		setTimeout(mostrarimg62,5511);

		function mostrarimg62a() {
		if(isPlaying){
        lista62a.eq(k++).fadeIn(360, mostrarimg62a);
    	}
		};

		setTimeout(mostrarimg62a,7676);

		function mostrarimg63() {
		if(isPlaying){
        lista63.eq(l++).fadeIn(370, mostrarimg63);
    	}
		};

		setTimeout(mostrarimg63,11710);

		function mostrarimg63a() {
		if(isPlaying){
        lista63a.eq(m++).fadeIn(310, mostrarimg63a);
    	}
		};

		setTimeout(mostrarimg63a,15477);

		};

		$(".inicia10").click(funcionPlay10);

		$(".inicia10").click(function(){
			if(isPlaying){
			$("#musica10")[0].pause();
			$("#musica10")[0].currentTime = 0;			
			isPlaying=false;
			setTimeout(function(){
				
				funcionPlay10();
			}, 200);
		} else {
			funcionPlay10();
		}

    	});


	var funcionPlay11=function(){
	if(isPlaying)
	return;
	var n = 0;
	var o = 0;
	var p = 0;
	var q = 0;
	var r = 0;
	var s = 0;
	var t = 0;
	var u = 0;
	
	$("#musica11")[0].play();
	isPlaying=true;
	lista64 = $('#ren64 li').hide();
	lista65 = $('#ren65 li').hide();
	lista66 = $('#ren66 li').hide();
	lista67 = $('#ren67 li').hide();
	lista68 = $('#ren68 li').hide();
	lista69 = $('#ren69 li').hide();
	lista69b = $('#ren69b li').hide();
	lista70 = $('#ren70 li').hide();
	
		function mostrarimg64() {
		if(isPlaying){
        lista64.eq(n++).fadeIn(240, mostrarimg64);
    	}
		};

		setTimeout(mostrarimg64,608); 

		function mostrarimg65() {
		if(isPlaying){
        lista65.eq(o++).fadeIn(450, mostrarimg65);
    	}
		};

		setTimeout(mostrarimg65,3183); 

		function mostrarimg66() {
		if(isPlaying){
        lista66.eq(p++).fadeIn(359, mostrarimg66);
    	}
		};

		setTimeout(mostrarimg66,6014); 
		
		function mostrarimg67() {
		if(isPlaying){
        lista67.eq(q++).fadeIn(280, mostrarimg67);
    	}
		};

		setTimeout(mostrarimg67,9660); 

		function mostrarimg68() {
		if(isPlaying){
        lista68.eq(r++).fadeIn(305, mostrarimg68);
    	}
		};

		setTimeout(mostrarimg68,12319); 

		function mostrarimg69() {
		if(isPlaying){
        lista69.eq(s++).fadeIn(290, mostrarimg69);
    	}
		};

		setTimeout(mostrarimg69,15568); 

		function mostrarimg69b() {
		if(isPlaying){
        lista69b.eq(t++).fadeIn(290, mostrarimg69b);
    	}
		};

		setTimeout(mostrarimg69b,18336); 

		function mostrarimg70() {
		if(isPlaying){
        lista70.eq(u++).fadeIn(290, mostrarimg70);
    	}
		};

		setTimeout(mostrarimg70,18677); 

		};

		$(".inicia11").click(funcionPlay11);

		$(".inicia11").click(function(){
			if(isPlaying){
			$("#musica11")[0].pause();
			$("#musica11")[0].currentTime = 0;			
			isPlaying=false;
			setTimeout(function(){
				
				funcionPlay11();
			}, 200);
		} else {
			funcionPlay11();
		}

		});
	

	var funcionPlay12=function(){
	if(isPlaying)
	return;
	var v = 0;
	var w = 0;
	var x = 0;
	var y = 0;
	var z = 0;
	var a1 = 0;
	var b1 = 0;

	$("#musica12")[0].play();
	isPlaying=true;
	lista71 = $('#ren71 li').hide();
	lista71b = $('#ren71b li').hide();
	lista72 = $('#ren72 li').hide();
	lista72b = $('#ren72b li').hide();
	lista73 = $('#ren73 li').hide();
	lista73b = $('#ren73b li').hide();
	lista74 = $('#ren74 li').hide();

		function mostrarimg71() {
		if(isPlaying){
        lista71.eq(v++).fadeIn(250, mostrarimg71);
    	}
		};

		setTimeout(mostrarimg71,103); 

		function mostrarimg71b() {
		if(isPlaying){
        lista71b.eq(w++).fadeIn(240, mostrarimg71b);
    	}
		};

		setTimeout(mostrarimg71b,2809); 

		function mostrarimg72() {
		if(isPlaying){
        lista72.eq(x++).fadeIn(420, mostrarimg72);
    	}
		};

		setTimeout(mostrarimg72,4285); 

		function mostrarimg72b() {
		if(isPlaying){
        lista72b.eq(y++).fadeIn(390, mostrarimg72b);
    	}
		};

		setTimeout(mostrarimg72b,7056); 

		function mostrarimg73() {
		if(isPlaying){
        lista73.eq(z++).fadeIn(220, mostrarimg73);
    	}
		};

		setTimeout(mostrarimg73,9813); 

		function mostrarimg73b() {
		if(isPlaying){
        lista73b.eq(a1++).fadeIn(360, mostrarimg73b);
    	}
		};

		setTimeout(mostrarimg73b,11429); 

		function mostrarimg74() {
		if(isPlaying){
        lista74.eq(b1++).fadeIn(220, mostrarimg74);
    	}
		};

		setTimeout(mostrarimg74,15204); 

		};

		$(".inicia12").click(funcionPlay12);

		$(".inicia12").click(function(){
			if(isPlaying){
			$("#musica12")[0].pause();
			$("#musica12")[0].currentTime = 0;			
			isPlaying=false;
			setTimeout(function(){
				
				funcionPlay12();
			}, 200);
		} else {
			funcionPlay12();
		}

		});
	

	var funcionPlay13=function(){
	if(isPlaying)
	return;
	var c1 = 0;
	var d1 = 0;
	var e1 = 0;
	var f1 = 0;
	var g1 = 0;
	var h1 = 0;
	
	$("#musica13")[0].play();
	isPlaying=true;
	lista75 = $('#ren75 li').hide();
	lista75b = $('#ren75b li').hide();
	lista76 = $('#ren76 li').hide();
	lista76b = $('#ren76b li').hide();
	lista77 = $('#ren77 li').hide();
	lista77b = $('#ren77b li').hide();
	
		function mostrarimg75() {
		if(isPlaying){
        lista75.eq(c1++).fadeIn(205, mostrarimg75);
    	}
		};

		setTimeout(mostrarimg75,184); 

		function mostrarimg75b() {
		if(isPlaying){
        lista75b.eq(d1++).fadeIn(390, mostrarimg75b);
    	}
		};

		setTimeout(mostrarimg75b,2150); 

		function mostrarimg76() {
		if(isPlaying){
        lista76.eq(e1++).fadeIn(310, mostrarimg76);
    	}
		};

		setTimeout(mostrarimg76,5798); 

		function mostrarimg76b() {
		if(isPlaying){
        lista76b.eq(f1++).fadeIn(410, mostrarimg76b);
    	}
		};

		setTimeout(mostrarimg76b,8158); 

		function mostrarimg77() {
		if(isPlaying){
        lista77.eq(g1++).fadeIn(240, mostrarimg77);
    	}
		};

		setTimeout(mostrarimg77,10912); 
		
		function mostrarimg77b() {
		if(isPlaying){
        lista77b.eq(h1++).fadeIn(370, mostrarimg77b);
    	}
		};

		setTimeout(mostrarimg77b,12102);

		};

		$(".inicia13").click(funcionPlay13);

		$(".inicia13").click(function(){
			if(isPlaying){
			$("#musica13")[0].pause();
			$("#musica13")[0].currentTime = 0;			
			isPlaying=false;
			setTimeout(function(){
				
				funcionPlay13();
			}, 200);
		} else {
			funcionPlay13();
		} 

		});
	
	var funcionPlay14=function(){
	if(isPlaying)
	return;
	var i1 = 0;
	var j1 = 0;
	var k1 = 0;
	
	$("#musica14")[0].play();
	isPlaying=true;
	lista78 = $('#ren78 li').hide();
	lista79 = $('#ren79 li').hide();
	lista80 = $('#ren80 li').hide();	

		function mostrarimg78() {
		if(isPlaying){
        lista78.eq(i1++).fadeIn(240, mostrarimg78);
    	}
		};

		setTimeout(mostrarimg78,125); 

		function mostrarimg79() {
		if(isPlaying){
        lista79.eq(j1++).fadeIn(410, mostrarimg79);
    	}
		};

		setTimeout(mostrarimg79,2198); 

		function mostrarimg80() {
		if(isPlaying){
        lista80.eq(k1++).fadeIn(190, mostrarimg80);
    	}
		};

		setTimeout(mostrarimg80,5204); 

		};

		$(".inicia14").click(funcionPlay14);

		$(".inicia14").click(function(){
			if(isPlaying){
			$("#musica14")[0].pause();
			$("#musica14")[0].currentTime = 0;			
			isPlaying=false;
			setTimeout(function(){
				
				funcionPlay14();
			}, 200);
		} else {
			funcionPlay14();
		}

		});
	

	var funcionPlay15=function(){
	if(isPlaying)
	return;
	var l1 = 0;
	var m1 = 0;
	var n1 = 0;
	var o1 = 0;
	var p1 = 0;
	var q1 = 0;
	var r1 = 0;
	var s1 = 0;
	
	$("#musica15")[0].play();
	isPlaying=true;
	lista81 = $('#ren81 li').hide();
	lista81b = $('#ren81b li').hide();
	lista82 = $('#ren82 li').hide();
	lista82b = $('#ren82b li').hide();
	lista83 = $('#ren83 li').hide();
	lista83a = $('#ren83a li').hide();
	lista84 = $('#ren84 li').hide();

		function mostrarimg81() {
		if(isPlaying){
        lista81.eq(l1++).fadeIn(360, mostrarimg81);
    	}
		};

		setTimeout(mostrarimg81,167); 

		function mostrarimg81b() {
		if(isPlaying){
        lista81b.eq(n1++).fadeIn(265, mostrarimg81b);
    	}
		};

		setTimeout(mostrarimg81b,2458); 

		function mostrarimg82() {
		if(isPlaying){
        lista82.eq(o1++).fadeIn(290, mostrarimg82);
    	}
		};

		setTimeout(mostrarimg82,4699); 

		function mostrarimg82b() {
		if(isPlaying){
        lista82b.eq(p1++).fadeIn(370, mostrarimg82b);
    	}
		};

		setTimeout(mostrarimg82b,7357); 

		function mostrarimg83() {
		if(isPlaying){
        lista83.eq(q1++).fadeIn(285, mostrarimg83);
    	}
		};

		setTimeout(mostrarimg83,8601); 

		function mostrarimg83a() {
		if(isPlaying){
        lista83a.eq(r1++).fadeIn(670, mostrarimg83a);
    	}
		};

		setTimeout(mostrarimg83a,10276); 

		function mostrarimg84() {
		if(isPlaying){
        lista84.eq(s1++).fadeIn(470, mostrarimg84);
    	}
		};

		setTimeout(mostrarimg84,13784); 

		};

		$(".inicia15").click(funcionPlay15);

		$(".inicia15").click(function(){
			if(isPlaying){
			$("#musica15")[0].pause();
			$("#musica15")[0].currentTime = 0;			
			isPlaying=false;
			setTimeout(function(){
				
				funcionPlay15();
			}, 200);
		} else {
			funcionPlay15();
		}


		});
	
	
	var funcionPlay16=function(){
	if(isPlaying)
	return;
	var t1 = 0;
	var u1 = 0;
	var v1 = 0;
	var w1 = 0;
	var x1 = 0;
	var y1 = 0;
	var z1 = 0;
	var a3 = 0;
	var b3 = 0;
	
	$("#musica16")[0].play();
	isPlaying=true;
	lista85 = $('#ren85 li').hide();
	lista85a = $('#ren85a li').hide();
	lista86 = $('#ren86 li').hide();
	lista86a = $('#ren86a li').hide();
	lista87 = $('#ren87 li').hide();
	lista87a = $('#ren87a li').hide();
	lista87b = $('#ren87b li').hide();
	lista88 = $('#ren88 li').hide();
	lista88a = $('#ren88a li').hide();

	

		function mostrarimg85() {
		if(isPlaying){
        lista85.eq(t1++).fadeIn(210, mostrarimg85);
    	}
		};

		setTimeout(mostrarimg85,348); 

		function mostrarimg85a() {
		if(isPlaying){
        lista85a.eq(u1++).fadeIn(275, mostrarimg85a);
    	}
		};

		setTimeout(mostrarimg85a,3131); 

		function mostrarimg86() {
		if(isPlaying){
        lista86.eq(v1++).fadeIn(285, mostrarimg86);
    	}
		};

		setTimeout(mostrarimg86,3718); 

		function mostrarimg86a() {
		if(isPlaying){
        lista86a.eq(w1++).fadeIn(290, mostrarimg86a);
    	}
		};

		setTimeout(mostrarimg86a,6196); 

		function mostrarimg87() {
		if(isPlaying){
        lista87.eq(x1++).fadeIn(490, mostrarimg87);
    	}
		};

		setTimeout(mostrarimg87,8874); 

		function mostrarimg87a() {
		if(isPlaying){
        lista87a.eq(y1++).fadeIn(235, mostrarimg87a);
    	}
		};

		setTimeout(mostrarimg87a,10044); 

		function mostrarimg87b() {
		if(isPlaying){
        lista87b.eq(z1++).fadeIn(270, mostrarimg87b);
    	}
		};

		setTimeout(mostrarimg87b,11132); 

		function mostrarimg88() {
		if(isPlaying){
        lista88.eq(a3++).fadeIn(200, mostrarimg88);
    	}
		};

		setTimeout(mostrarimg88,13127); 

		function mostrarimg88a() {
		if(isPlaying){
        lista88a.eq(b3++).fadeIn(310, mostrarimg88a);
	    }
		};

		setTimeout(mostrarimg88a,14508); 

		};

		$(".inicia16").click(funcionPlay16);

		$(".inicia16").click(function(){
			if(isPlaying){
			$("#musica16")[0].pause();
			$("#musica16")[0].currentTime = 0;			
			isPlaying=false;
			setTimeout(function(){
				
				funcionPlay16();
			}, 200);
		} else {
			funcionPlay16();
		}

		});


		});
		        

	