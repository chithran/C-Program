function nee()
{
	var div=document.createElement("DIV");
	div.setAttribute("id","io");
	document.body. appendChild(div);
 
 

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
	div1.setAttribute("id","hee");
	div.appendChild(div1);

   var z=document.createElement("img");
   z.setAttribute("src","../images/bulp.jpg");
   div1.appendChild(z);


	var a=document.createElement("h1")
	var b=document.createTextNode("THE AXIS GROUPE");
	a.setAttribute("id","v");
	a.appendChild(b);
	div1.appendChild(a)
    
    var c=document.createElement("h2");
    var d=document.createTextNode("Financial Consulting.Let Us Do The Month");
    c.setAttribute("id","w");
    c.appendChild(d);
    div1.appendChild(c);

   
    var e=document.createElement("button");
    var f=document.createTextNode("Get Started");
     e.appendChild(f);
    div1.appendChild(e);

        
}