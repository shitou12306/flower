window.onload=function(){
	// 导航开始
	let dhz=document.getElementsByClassName("dhz");
    // 隐藏下拉
	let rxgsBox=document.getElementsByClassName("rxgsBox")[0];
     dhz[1].onmouseenter=function(){
     	rxgsBox.style.display="block";
     }
     dhz[1].onmouseleave=function(){
     	rxgsBox.style.display="none";
     }
     let rxxlBox=document.getElementsByClassName("rxxlBox")[0];
     dhz[2].onmouseenter=function(){
     	rxxlBox.style.display="block";
     }
     dhz[2].onmouseleave=function(){
     	rxxlBox.style.display="none";
     }
     let jfhlBox=document.getElementsByClassName("jfhlBox")[0];
     dhz[3].onmouseenter=function(){
     	jfhlBox.style.display="block";
     }
     dhz[3].onmouseleave=function(){
     	jfhlBox.style.display="none";
     }

    // 正常下拉
    let rxgsBox1=document.getElementsByClassName("rxgsBox")[1];
     dhz[7].onmouseenter=function(){
        rxgsBox1.style.display="block";
     }
     dhz[7].onmouseleave=function(){
        rxgsBox1.style.display="none";
     }
     let rxxlBox1=document.getElementsByClassName("rxxlBox")[1];
     dhz[8].onmouseenter=function(){
        rxxlBox1.style.display="block";
     }
     dhz[8].onmouseleave=function(){
        rxxlBox1.style.display="none";
     }
     let jfhlBox1=document.getElementsByClassName("jfhlBox")[1];
     dhz[9].onmouseenter=function(){
        jfhlBox1.style.display="block";
     }
     dhz[9].onmouseleave=function(){
        jfhlBox1.style.display="none";
     }
	// 导航结束
	
    
    // 隐藏开始
    let head=document.querySelector(".yc");
    let backtop=document.querySelector(".backtop");
    let body=document.querySelector("body");
    // console.log(h);
    body.onscroll=function(){
        let h=document.body.scrollTop||document.documentElement.scrollTop;
        if(h>20){
            head.style.display="block";
            backtop.style.display="block";
        }
        else{
            head.style.display="none";
            backtop.style.display="none";
        }

    }
    backtop.onclick=function(){
        document.body.scrollTop=0;
        document.documentElement.scrollTop=0;
    }
    let button=document.querySelector("button");
    let langlist=document.querySelector(".langlist");
    let jiantou=document.querySelector(".icon-shangsanjiao");
    button.onclick=function(){
        langlist.classList.toggle("xs");
        jiantou.classList.toggle("rotate");
    }
    let imgbox=document.querySelectorAll(".arealist.areaboxtop");
    let lis=document.querySelectorAll(".slick li");
    console.log(imgbox);

   // 热门开始
   
    function sj(num){
    let areabox=document.querySelectorAll(".areabox")[num];
    let active1=areabox.querySelector(".active1");
    let active2=areabox.querySelector(".active2");
    let tu1=areabox.querySelector(".tu1 img");
    let tu2=areabox.querySelector(".tu2 img");
    console.log(areabox)
    active1.onclick=function(){
        tu1.style.display="block";
        tu2.style.display="none";
        active1.style.boxShadow="inset 0 0 0 2px #b2b2b2";
        active2.style.boxShadow="inset 0 0 0 2px #e5e5e5";
    }
    active2.onclick=function(){
        tu1.style.display="none";
        tu2.style.display="block";
        active2.style.boxShadow="inset 0 0 0 2px #b2b2b2";
        active1.style.boxShadow="inset 0 0 0 2px #e5e5e5";
    }

    }
    sj(0);
    sj(1);
    sj(2);
    sj(3);
    sj(4);
   // 热门结束
  
}