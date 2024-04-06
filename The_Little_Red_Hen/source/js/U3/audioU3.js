$(document).ready(function(){

	var isPlaying=false;

	var lista166 = $('#ren166 li').hide();
	var lista1666 = $('#ren1666 li').hide();
	var lista166a = $('#ren166a li').hide();
	var lista166b = $('#ren166b li').hide();
	/*var lista166c = $('#ren166c li').hide();
	var lista166d = $('#ren166d li').hide();*/

	var lista177 = $('#ren177 li').hide();
	var lista177a = $('#ren177a li').hide();
	//var lista177 = $('#ren177 li').hide();

	var lista188 = $('#ren188 li').hide();

	var lista199 = $('#ren199 li').hide();
	var lista199a = $('#ren199a li').hide();
	var lista199b = $('#ren199b li').hide();

	/*var lista77 = $('#ren25 li').hide();
	var lista78 = $('#ren26 li').hide();
	var lista79 = $('#ren27 li').hide();
	var lista80 = $('#ren28 li').hide();

	var lista81 = $('#ren29 li').hide();
	var lista82 = $('#ren30 li').hide();
	var lista83 = $('#ren31 li').hide();
	var lista84 = $('#ren32 li').hide();

	var lista85 = $('#ren33 li').hide();
	var lista86 = $('#ren34 li').hide();
	var lista87 = $('#ren35 li').hide();
	var lista88 = $('#ren36 li').hide();*/

	var funcionPlay13=function(){
	if(isPlaying)
	return;

	var a = 0;
	var b = 0;
	var c = 0;
	var d = 0;
	
		$("#musica166")[0].play();
		isPlaying=true;
		lista166 = $('#ren166 li').hide();
		lista1666 = $('#ren1666 li').hide();
		lista166a = $('#ren166a li').hide();
		lista166b = $('#ren166b li').hide();
		
        function mostrarimg166() {
        if(isPlaying){
        lista166.eq(a++).fadeIn(405, mostrarimg166);
        }
			};

		setTimeout(mostrarimg166,50);

		function mostrarimg1666() {
		if(isPlaying){
        lista1666.eq(d++).fadeIn(405, mostrarimg1666);
        }
			};

		setTimeout(mostrarimg1666,3620);

		function mostrarimg166a() {
		if(isPlaying){
        lista166a.eq(b++).fadeIn(465, mostrarimg166a);
        }
			};

		setTimeout(mostrarimg166a,7410);

		function mostrarimg166b() {
		if(isPlaying){
        lista166b.eq(c++).fadeIn(465, mostrarimg166b);
        }
			};

		setTimeout(mostrarimg166b,12480);

		};

		$(".inicia166").click(funcionPlay13);

		$(".inicia166").click(function(){
		if(isPlaying){
			$("#musica166")[0].pause();
			$("#musica166")[0].currentTime = 0;			
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
	var e = 0;
	var f = 0;


		$("#musica177")[0].play();
		isPlaying=true;
		lista177 = $('#ren177 li').hide();
		lista177a = $('#ren177a li').hide();
		
        function mostrarimg177() {
        if(isPlaying){
        lista177.eq(e++).fadeIn(335, mostrarimg177);
        }
			};

		setTimeout(mostrarimg177,95);

		function mostrarimg177a() {
		if(isPlaying){
        lista177a.eq(f++).fadeIn(465, mostrarimg177a);
        }
			};

		setTimeout(mostrarimg177a,7530);

		/*function mostrarimg38() {
        lista79.eq(g++).fadeIn(260, mostrarimg38);
			};

		setTimeout(mostrarimg38,5944);

		function mostrarimg39() {
        lista80.eq(h++).fadeIn(300, mostrarimg39);
			};

		setTimeout(mostrarimg39,8127);*/

	};

	$(".inicia177").click(funcionPlay14);

	$(".inicia177").click(function(){
	if(isPlaying){
			$("#musica177")[0].pause();
			$("#musica177")[0].currentTime = 0;			
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

	var i = 0;

		$("#musica188")[0].play();

		isPlaying=true;
		lista188 = $('#ren188 li').hide();
		
        function mostrarimg188() {
        if(isPlaying){
        lista188.eq(i++).fadeIn(410, mostrarimg188);
        }
			};

		setTimeout(mostrarimg188,100);

		/*function mostrarimg41() {
        lista82.eq(j++).fadeIn(230, mostrarimg41);
			};

		setTimeout(mostrarimg41,2229);

		function mostrarimg42() {
        lista83.eq(k++).fadeIn(300, mostrarimg42);
			};

		setTimeout(mostrarimg42,4598);

		function mostrarimg43() {
        lista84.eq(l++).fadeIn(260, mostrarimg43);
			};

		setTimeout(mostrarimg43,6873);*/

	};

	$(".inicia188").click(funcionPlay15);

	$(".inicia188").click(function(){
		if(isPlaying){
			$("#musica188")[0].pause();
			$("#musica188")[0].currentTime = 0;			
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

	var n = 0;
	var m = 0;
	var o = 0;

	
		$("#musica199")[0].play();

		isPlaying=true;

		lista199 = $('#ren199 li').hide();
		lista199a = $('#ren199a li').hide();
		lista199b = $('#ren199b li').hide();
		
        function mostrarimg199() {
        if(isPlaying){
        lista199.eq(n++).fadeIn(350, mostrarimg199);
        }
			};

		setTimeout(mostrarimg199,170); 

		function mostrarimg199a() {
		if(isPlaying){
        lista199a.eq(m++).fadeIn(298, mostrarimg199a);
        }
			};

		setTimeout(mostrarimg199a,4570);

		function mostrarimg199b() {
		if(isPlaying){
        lista199b.eq(o++).fadeIn(290, mostrarimg199b);
        }
			};

		setTimeout(mostrarimg199b,7991);

		/*function mostrarimg47() {
        lista88.eq(p++).fadeIn(250, mostrarimg47);
			};

		setTimeout(mostrarimg47,7712); */   

	};

	$(".inicia199").click(funcionPlay16);

	$(".inicia199").click(function(){
	if(isPlaying){
			$("#musica199")[0].pause();
			$("#musica199")[0].currentTime = 0;			
			isPlaying=false;
			setTimeout(function(){
				
				funcionPlay16();
			}, 200);
		} else {
			funcionPlay16();
		}
		});     

	});