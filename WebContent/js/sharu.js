function array()
{
	var div=document.createElement("DIV");
	div.setAttribute("id","naa");
	document.body.appendChild(div);
	
   var ul=document.createElement("ul");
   div.appendChild(ul);
   var list=document.createElement("li");
   var listText=document.createTextNode("Home");
   list.appendChild(listText);
   ul.appendChild(list);

   var list=document.createElement("li");
   var listText=document.createTextNode("Project");
   list.appendChild(listText);
   ul.appendChild(list);

   var list=document.createElement("li");
   var listText=document.createTextNode("About");
   list.appendChild(listText);
   ul.appendChild(list);

   var list=document.createElement("li");
   var listText=document.createTextNode("Exit");
   list.appendChild(listText);
   ul.appendChild(list);

   var div1=document.createElement("DIV");
	div1.setAttribute("id","nee");
	div.appendChild(div1);

	var a=document.createElement("h1")
	var b=document.createTextNode("Responsive HTML5/CSS3 Template");
	a.setAttribute("id","u");
	a.appendChild(b);
	div1.appendChild(a)
    
    var c=document.createElement("h2");
    var d=document.createTextNode("The possible of they clear work for with correct");
    c.setAttribute("id","wo");
    c.appendChild(d);
    div1.appendChild(c);

    var z=document.createElement("img");
    z.setAttribute("src","../images/10.jpg") 
   div1.appendChild(z);

    var x=document.createElement("img");
    x.setAttribute("id","io");
    x.setAttribute("src","../images/4.png") 
   div1.appendChild(x);

     var y=document.createElement("img");
     y.setAttribute("id","ty");
     y.setAttribute("src","../images/12.jpg") 
   div1.appendChild(y);

       var x=document.createElement("img");
    x.setAttribute("id","oo");
    x.setAttribute("src","../images/4.png") 
   div1.appendChild(x);
 

    var s=document.createElement("img");
    s.setAttribute("id","pl");
    s.setAttribute("src","../images/pne.jpg") 
   div1.appendChild(s);


    var e=document.createElement("button");
    var f=document.createTextNode("Download Templates");
    e.setAttribute("id","y");
    e.appendChild(f);
    div1.appendChild(e); 

    var g=document.createElement("button");
    var h=document.createTextNode("View Transformed");
    g.setAttribute("id","z");
    g.appendChild(h);
    div1.appendChild(g); 


}