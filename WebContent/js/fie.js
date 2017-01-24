function vani()
{
    var a=document.createElement("DIV");
	a.setAttribute("class","un");
	document.body.appendChild(a);

var b=document.createElement("h1");
b.setAttribute("id","balu");
var c=document.createTextNode("Playstore");
b.appendChild(c);
a.appendChild(b);
 

var div1=document.createElement("DIV");	
var ul=document.createElement("ul");
div1.appendChild(ul);
a.appendChild(div1);

var list=document.createElement("li");
var listtext=document.createTextNode("Home");
list.appendChild(listtext);
ul.appendChild(list);


var lists=document.createElement("li");
var listtexts=document.createTextNode("About");
lists.appendChild(listtexts);
ul.appendChild(lists);

var list1=document.createElement("li");
var listtext1=document.createTextNode("Exit");
list1.appendChild(listtext1);
ul.appendChild(list1);

var div=document.createElement("Div");
div.setAttribute("id","venkat");
var d=document.createElement("p");
d.setAttribute("id","shalu");
var e=document.createTextNode("The possible of they store between colorfull of they direct.");
d.appendChild(e);
div.appendChild(d);
div1.appendChild(div);


}

