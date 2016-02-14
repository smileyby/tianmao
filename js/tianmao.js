window.onload=function()
{
/*搜索框效果实现开始*/
var text=$(".sous-right-top-text")[0];
      text.onfocus=function()
      {
      	if(text.value=="搜索天猫 商品/品牌/店铺")
/*获取焦点是判断如果里面的信息如果为默认值时，则清空文本框的内容*/
      	{
      		text.value="";
      	}
      }
      text.onblur=function()
      {
      	if(text.value)
/*离开焦点是判断文本框内的值是否为空，若为空则赋值为默认值，不为空则不进行任何操作*/
      	{
      		
      	}
      	else
      	{
      		text.value="搜索天猫 商品/品牌/店铺";
      	}
      }
 var headtopInput=$(".headtop-input")[0];
 headtopInput.onfocus=function()
      {
      	if(headtopInput.value=="搜索天猫 商品/品牌/店铺")
      	{
      		headtopInput.value="";
      	}
      }
      headtopInput.onblur=function()
      {
      	if(headtopInput.value){}
      	else
      	{
      		headtopInput.value="搜索天猫 商品/品牌/店铺";
      	}
      }
/*搜索框效果实现结束*/
/*选项卡效果实现开始*/
	//声明数组，保存IMGs文件夹下的图片
     	var onearr=[];
     	var twoarr=[];
     	var threearr=[];
     	var fourarr=[];
     	var arr=[onearr,twoarr,threearr,fourarr];
     	var con=$(".imgsbox");
     	for(var i=0;i<35;i++)
     	{
     		onearr.push("./image/pinpai/pinpai/"+i+".jpg");
     		twoarr.push("./image/pinpai/pinpai/"+i+".jpg");
     		threearr.push("./image/pinpai/pinpai/"+i+".jpg");
     		fourarr.push("./image/pinpai/pinpai/"+i+".jpg");
     	}
     	//parseInt(Math.random()*35);
     	//取随机数，乘35在35的范围内取随机数
     	function randomImg(arr)
     	//随机去除24张图片的地址
     	{
     		var newarr=[];
	     	for(var i=0;i<24;i++)
	     	{
	            newarr.push(arr[parseInt(Math.random()*35)]);
	     	}
	     	return newarr;
     	}
        function show(num)
        {
        	var imgarr=randomImg(arr[num]);
        	for(var i=0;i<imgarr.length;i++)
        	{
        		var divs=document.createElement("div");
        		divs.style.cssText="width:132px;height:81px;float:left;position:relative;margin-right:1px;margin-bottom:1px;background:#ff6700";
                con[num].appendChild(divs);
                var as=document.createElement("a");
                as.href="#";
                divs.appendChild(as);
                var imgs=document.createElement("img");
                imgs.style.cssText="width:90px,height:45px"
                imgs.src=imgarr[i];
                as.appendChild(imgs);
                /*con[num].onmouseover=function()
                {
                  var divx=document.createElement("div");
                  divx.style.cssText="width:15px;height:12px;position:absolute";
                  divx.style.right=5+"px";
                  divx.style.top=5+"px";
                  divs.appendChild(divx);
                  var imgx=document.createElement("img");
                  imgx.src="./image/xin.png";
                  divx.appendChild(imgx);
                }*/
        	}
        }
        show(0);
        var title=$(".hot-daoh-righta-word");
        for(var i=0;i<title.length;i++)
        {
        	title[i].index=i;
        	title[i].flag=true;
        	title[0].flag=false;
        	var now=0;
        	//外部定义全局变量，保存当前点击对象的下标
        	title[i].onclick=function()
        	{
        	   
        	   now=this.index;
        	   for(var j=0;j<title.length;j++)
        	   {
        	   	 con[j].style.display="none";
        	   	 title[j].style.fontWeight="normal";
			     title[j].style.textDecoration="none";
        	   }
               con[this.index].style.display="block";
               title[this.index].style.fontWeight="bold";
			     title[this.index].style.textDecoration="underline";
               if(this.flag)
               {
               	 show(this.index);
               	 this.flag=false;
               }
        	}
        }
        var btn=$(".hot-daoh-rightb-a")[0];
        btn.onclick=function()
        {
            con[now].innerHTML="";
            show(now);
        }
/*选项卡效果实现开始*/
/*实现banner轮播效果开始*/
	var banner=getClass("banner-img");
	var li=getClass("diand-li");
	var bannerbox=$(".banner-box")[0];
	var why=setInterval(lb,2000);
	var num=1;
	var bgarr=["#b80bfb","#dcdcdc","#fff701","#dddddd","#77efc9","#e8e8e8"];
	var newarr=["#b80bfb","#dcdcdc","#fff701","#dddddd","#77efc9","#e8e8e8","#b80bfb","#dcdcdc","#fff701","#dddddd","#77efc9","#e8e8e8","#b80bfb","#dcdcdc","#fff701","#dddddd"];
	var newnum;
	function lb()
	{
		
		if(num==6)
		{
			num=0;
		}
		for(var i=0;i<banner.length;i++)
		{
			banner[i].style.display="none";
			li[i].style.background="#000";
		}
		newnum=num;
		//显示当前banner
		banner[num].style.display="block";
		//改变对应盒子的背景色
		bannerbox.style.background=bgarr[num];
		//改变对应序号的背景色
		li[num].style.background="#c40000";
		num++;
	}
	for(var j=0;j<li.length;j++)
	{
		li[j].index=j;
		//序号划上事件
		li[j].onmouseover=function()
		{
			//清除事件函数
			clearInterval(why);
			for(var k=0;k<li.length;k++)
			{
				banner[k].style.display="none";
			    li[k].style.background="#000";
			}
			banner[this.index].style.display="block";
		    li[this.index].style.background="#c40000";
		    bannerbox.style.background=bgarr[this.index];
		}
		li[j].onmouseout=function()
		{
			why=setInterval(lb,2000);
			num=this.index+1;
		}
	}
	var leftul=$(".bannerbox-left-ul")[0];
	var leftli=$("li",leftul);
	var btnM=$(".banner-onmouse")[0];
	var btnimgs=$("img",btnM);
	var cehua=$(".cehua");
	var bgcolor=$(".banner-bgcolor")[0];
	var bgcolorli=$("li",bgcolor);
	for(var i=0;i<leftli.length;i++)
	{
		leftli[i].index=i;
		leftli[i].onmouseover=function()
		{
		    
		    clearInterval(why);
		    btnimgs[this.index].style.display="block"
			bannerbox.style.background=newarr[this.index];
			bgcolorli[this.index].style.background="#b0b0b0";
			animate(leftli[this.index],{left:20},200,Tween.Linear);
			btnM.style.display="block";
			cehua[this.index].style.display="block";
		}
		leftli[i].onmouseout=function()
		{ 
			animate(leftli[this.index],{left:0},200,Tween.Linear);
			btnM.style.display="none";
			btnimgs[this.index].style.display="none"
			bannerbox.style.background=bgarr[newnum];
			cehua[this.index].style.display="none";
			bgcolorli[this.index].style.background="";
		}
	}
	var cehua=$(".cehua");
	for(var i=0;i<cehua.length;i++)
	{
		 cehua[i].index=i;
         cehua[i].onmouseover=function()
         {
         	clearInterval(why);
         	why=setInterval(lb,2000);
            cehua[this.index].style.display="block";
         }
         cehua[i].onmouseout=function()
         {
            cehua[this.index].style.display="none";
         }
	}
	/*实现banner轮播效果结束*/
	/*弹出搜索框开始*/
	var headtop=$(".headtop")[0];
	var flag1=true;
	var flag2=true;
	var leftnav=$(".leftnav")[0];
	var btn=$(".navbox",leftnav);
	var floor=$(".firstbox");
	var father=$(".rightnav")[0];
	var fanH=getLast(father);
	var jiazai=$(".jiazai");
	var ch=document.documentElement.clientHeight;
	window.onscroll=function()
	{
        var scrollT=getScrollT();
        if(scrollT>=730)
        {
        	if(flag1)
        	{
        	   animate(headtop,{top:0});
        	   flag1=false;
	           flag2=true;
        	}
        }
        else
        {
        	if(flag2)
        	{
        	   animate(headtop,{top:-50});
        	   flag1=true;
	           flag2=false;
        	}
        }
        if(scrollT>=1000&&scrollT<=6550)
		{
			leftnav.style.display="block";
		}
		else
		{
			leftnav.style.display="none";
		}
		for(var i=0;i<floor.length;i++)
		{
			if(scrollT>=floor[i].offsetTop-130)
			{
				for(var j=0;j<btn.length;j++)
				{
					btn[j].style.background="white";
					btn[j].style.color="black";
				}
				btn[i].style.background="red";
			    btn[i].style.color="#fff";	
			}
		}
		for(var i=0;i<btn.length;i++)
		{
			btn[i].index=i;
			btn[i].onclick=function()
			{
				var obj=document.documentElement.scrollTop?document.documentElement:document.body;
				animate(obj,{scrollTop:floor[this.index].offsetTop});
			}
		}
		if(scrollT>0)
		{
			fanH.style.display="block";
		}
		else
		{
			fanH.style.display="none";
		}
		fanH.onclick=function()
		{
			var obj=document.documentElement.scrollTop?document.documentElement:document.body;
			obj.scrollTop=0;
		}
		/*for(var i=0;i<jiazai.length;i++)
		{
			if(jiazai[i].offsetTop<scrollT+ch)
			{
				var imgs=$("img",jiazai[i]);
				for(var j=0;j<imgs.length;j++)
				{
					imgs[j].src=imgs[j].getAttribute("aa");
				}
			} 
		}*/
	}
	/*弹出搜索框结束*/
	/*左右滑动效果开始*/
	aa(0);
	aa(1);
	aa(2);
	aa(3);
	aa(4);
	aa(5);
	/*左右滑动效果结束*/
/*右侧导航条开始*/
	var rightnavbox=$(".rightnavbox");
	var rightimgs=$(".rightimgs");
	for(var i=0;i<rightnavbox.length;i++)
	{
		rightnavbox[i].index=i;
		rightnavbox[i].onmouseover=function()
		{
			for(var j=0;j<rightnavbox.length;j++)
			{
				rightnavbox[j].style.background="black";
				rightimgs[j].style.right=80+"px";
			}
			rightnavbox[this.index].style.background="#c40000";
			rightimgs[this.index].style.display="block";
			animate(rightimgs[this.index],{right:28,opacity:1},300);
		}
		rightnavbox[i].onmouseout=function()
		{
			for(var j=0;j<rightnavbox.length;j++)
			{
				rightimgs[j].index=j;
				rightnavbox[j].style.background="black";
				animate(rightimgs[this.index],{right:80,opacity:0},100,function(){
					rightimgs[this.index].style.display="none";
				});
			}
		}
	}
/*右侧导航条结束*/
    var leftDX=$(".move");
    for(var i=0;i<leftDX.length;i++)
    {
    	leftDX[i].index=i;
    	leftDX[i].onmouseover=function()
    	{
            leftDX[this.index].style.cssText="right:2px";
    	}
    	leftDX[i].onmouseout=function()
    	{
              leftDX[this.index].style.cssText="right:0;";
    	}
    }
    /*顶部导航下拉菜单开始*/
    var wodtb=$(".wodtb")[0];
    var tbxiala=$(".tbxiala")[0];
    var shouc=$(".shouc")[0]
    var scxiala=$(".scxiala")[0]
    var erweima=$(".erweima")[0];
    var sjxiala=$(".sjxiala")[0];
    var shangj=$(".shangj")[0];
    var zcxiala=$(".zcxiala")[0]; 
    var netbox=$(".netbox")[0];
    var wangzhan=$(".wangzhan")[0];''
    wangzhan.onmouseover=function()
    {
    	animate(netbox,{height:200});;
    }
    wangzhan.onmouseout=function()
    {
        animate(netbox,{height:0});
    }
    wodtb.onmouseover=function()
    {
    	animate(tbxiala,{height:70});
    }
    wodtb.onmouseout=function()
    {
        animate(tbxiala,{height:0});
    }

    shouc.onmouseover=function()
    {
    	animate(scxiala,{height:70});
    }
    shouc.onmouseout=function()
    {
        animate(scxiala,{height:0});
    }

    erweima.onmouseover=function()
    {
    	animate(sjxiala,{height:228});
    }
    erweima.onmouseout=function()
    {
        animate(sjxiala,{height:0});
    }

    shangj.onmouseover=function()
    {
    	animate(zcxiala,{height:170});
    }
    shangj.onmouseout=function()
    {
        animate(zcxiala,{height:0});
    }
    /*顶部导航下拉菜单结束*/ 

}
