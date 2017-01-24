function care()
{
	 var div=document.createElement("DIV");
	div.setAttribute("class","num");
	document.body.appendChild(div);

	var a=document.createElement("h1");
	var b=document.createTextNode("Picture");
	a.setAttribute("id","hai");
	a.appendChild(b);
	div.appendChild(a);

	var c=document.createElement("img");
 	c.setAttribute("src","../images/1.jpg");
   div.appendChild(c);
   
    var d=document.createElement("button");
    var e=document.createTextNode("start");
    d.appendChild(e);
 div.appendChild(d); 

}
	