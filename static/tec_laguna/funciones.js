//-------------------------------------------------------------------------------------------------------------------------
var b, inicial = false;
window.dhtmlHistory.create
({
	//debugMode: true//set this to false, or just don't pass in an options bundle, to see real-world, non-debug conditions 
});
//-------------------------------------------------------------------------------------------------------------------------
window.onload = function() 
{
	//initialize our DHTML history
	dhtmlHistory.initialize();
    //subscribe to DHTML history change events
	dhtmlHistory.addListener(historyChange);
	if(inicial == false)
	{
		auxiliar("Principal.html","pag_principal");
	}
};
//-------------------------------------------------------------------------------------------------------------------------
function replacecad(cad, s1, s2)
{
	var cad1 = cad.split(s1);
	var x, cad2 = cad;
	if ( cad1.length > 1)
	{
		cad2 = cad1[0] + s2;
	
		for (x = 1; x < cad1.length -1 ; x++)
		{
			cad2 += cad1[x] + s2;
		}
		cad2 = cad2 + cad1[x];		
	}
	return cad2;
}
//-------------------------------------------------------------------------------------------------------------------------
function historyChange(newLocation, historyData) 
{
		inicial = false;
		var historyMsg = (typeof historyData == "object" && historyData != null
		? historyStorage.toJSON(historyData)
		: historyData
	    );
		if(historyData!=null)
		{   
			var cadena = historyData.split(",");
			var aux = replacecad(cadena[1], "$", " ");
			var aux2 = replacecad(cadena[2], "$", " ");

			if(cadena[0]==0)
			{  			
     			auxiliar(aux,aux2);
			}
			if(cadena[0]==1)
			{				
     			auxiliar2(aux,aux2,cadena[3]);
			}
			/*if(cadena[0]==2)
			{
     			auxiliar3(aux,aux2);
				document.getElementById(b).style.visibility = "hidden";
			}*/
			inicial = true;
		}
		else
		{	
			auxiliar("principal.html","pag_principal");
		}
		return inicial;
};
//-------------------------------------------------------------------------------------------------------------------------
function crearAjax()
{
  var xmlhttp = false;
 try{
	  xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
  }catch (e){
	  try{
		  xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	  }catch (E){
		  xmlhttp = false;
	  }
  }
  if (!xmlhttp && typeof XMLHttpRequest != 'undefined') {
	  xmlhttp = new XMLHttpRequest();
 }
 return xmlhttp;
}
//-------------------------------------------------------------------------------------------------------------------------
var xmlhttp = new crearAjax();
//-------------------------------------------------------------------------------------------------------------------------
function makerequest(serverPage, objID) 
{
  	var aux = replacecad(serverPage, " ", "$");	//url que voy a cargar es serverpage
  	var aux2 = "0," + aux + "," + objID;  //el 0 es para el if si es 0 o es 1 o 2
	aux2 = replacecad(aux2, " ", "$"); // le pones un espacio done haya $
  	dhtmlHistory.add(aux,aux2);  // la añado al historial
  	var obj = document.getElementById(objID);
  	xmlhttp.open("GET", serverPage);
	xmlhttp.onreadystatechange = function() 
	{
  		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) 
		{
	  		obj.innerHTML = xmlhttp.responseText;
  		}
	}
	xmlhttp.send(null);
}
//------
//-------------------------------------------------------------------------------------------------------------------------
function MM_findObj(n, d) { //v4.01
var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
if(!x && d.getElementById) x=d.getElementById(n); return x;
}

//-------------------------------------------------------------------------------------------------------------------------
function MM_showHideLayers() { //v6.0
var i,p,v,obj,args=MM_showHideLayers.arguments;
for (i=0; i<(args.length-2); i+=3) if ((obj=MM_findObj(args[i]))!=null) { v=args[i+2];
if (obj.style) { obj=obj.style; v=(v=='show')?'visible':(v=='hide')?'hidden':v; }
obj.visibility=v; }
}
//-------------------------------------------------------------------------------------------------------------------------
function MM_jumpMenu(targ,selObj,restore){ //v3.0
eval(targ+".location='"+selObj.options[selObj.selectedIndex].value+"'");
if (restore) selObj.selectedIndex=0;
}
//-------------------------------------------------------------------------------------------------------------------------
//function AbrirVentana(elURL,winNombre) 
function AbrirVentana(elURL) 
{ 
 	window.open(elURL,'departamento','width=488,height=475 ');
}
function AbrirVentanaGDE(elURL) 
{ 
 	window.open(elURL,'departamento','width=520,height=525');
}
//-------------------------------------------------------------------------------------------------------------------------
function Enviar() 
{
	var ok = 0;
	if (document.form_enviar.nombre.value == "") 
	{
 		alert("Escribe tu nombre en el espacio correspondiente.");
 		ok = 1;
	}
	if ( ok == 0 ) 
	{
 		if (document.form_enviar.texto.value == "") 
		{
	 		alert("Escribe el mensaje que nos quieras dar.");
	 		ok = 1;
		}
		else 
		{
	 		document.form_enviar.submit();
		}
	}
}
//-------------------------------------------------------------------------------------------------------------------------
function Cerrar() 
{
	 self.close()
}
//-------------------------------------------------------------------------------------------------------------------------
function openNewWindow(newurl) 
{
	NewWindow=window.open(newurl, "awindow", "width=640,height=300, scrollbars=1, resizable=1, menubar=1, toolbar=1");
}	
//-------------------------------------------------------------------------------------------------------------------------
function verifica(control, pwd, forma, dir)
{
	var numcon= document.getElementById(control).value;
	if(pwd !="")
	{
		var pwd= document.getElementById(pwd).value;
	}
	var varforma= document.getElementById(forma);
	var numero=numcon.length;
	if (numcon=="" )
	{	
		alert("No dejes vacío ningún campo!");
	}
	else if (numero<8)
	{	alert("Error: el número de control no puede tener menos de 8 dígitos"); }
		else if (numcon<1)
		{	
			alert("Error: el número de control no puede ser menor de cero"); 
		}
		else
			{	 			 
				 varforma.method="post";
                 switch(dir)
				 {
				  case "0": varforma.action="javascript:makerequest('2014/servicios/escolares/credenciales/muesfoto.asp','pag_principal')";
				  			break;
				  case "1": varforma.action="javascript:mandadatos('2014/servicios/escolares/estatus_alumno/prepcon.asp', 'pag_principal','cCONTROL='+document.getElementById('control').value+'&amp;cCONTRASENA='+document.getElementById('pwd').value)')";
					break;
				 }
 	  		}
}
//-------------------------------------------------------------------------------------------------------------------------
function verifica_per(control, pwd, forma, dir)
{
	var numcon=document.getElementById(control).value;
	var numero=numcon.length;
	var varforma= document.getElementById(forma);
	if(dir == 0)
	{
		var pwd= document.getElementById(pwd).value;
		if (numcon=="" || pwd=="")
		{	alert("No dejes vacío ningún campo!"); }
        else if (numero<4)
		{	alert("Error: el número de control no puede tener menos de 4 dígitos"); }
		else if (numcon<1)
		{	alert("Error: el número de control no puede ser menor de cero"); }
		else
			{	
			    var cadena="servicios/personal/catedraticos/prepcat.asp?cCONTROL="+numcon+"&cCONTRASENA="+pwd;
                makerequest(cadena,'pag_principal');
			}
	}
	else
	{
  	if (numcon=="")
	{	alert("No dejes vacío ningún campo!"); }
        else if (numero<4)
	{	alert("Error: el número de control no puede tener menos de 4 dígitos"); }
		else if (numcon<1)
		{	alert("Error: el número de control no puede ser menor de cero"); }
		else
		{	 	  		
			var cadena="servicios/personal/catedraticos/prepcat_sc.asp?cCon_sc="+numcon;
			makerequest(cadena, 'pag_principal');
		}
	}
}
//-------------------------------------------------------------------------------------------------------------------------
function comprueba_catedratico(ctrl,pwd) 
{  
	 var re=/^\d+\d+\d+\d+/;
	 var control = document.getElementById(ctrl).value;
	 if(document.getElementById("cCONTRASENA").value=="")
	 {
		 alert("Error: No hay contraseña"); 
	 }
	 else
	 {
	   alert(control);
	   if (re.test(control))
	   {
			makerequest('servicios/personal/catedraticos/prepcat.asp','pag_principal');     
	   }
	   else
	   {
			alert("Error: el número de control es incorrecto");
	   }
	 }
}
//-------------------------------------------------------------------------------------------------------------------------
function direcciona(objID, op,valor)
{
	var serverPage;
    var opcion = window.document.getElementById(op).value;
	switch(opcion)
	{
     case "kardex":	  serverPage = "servicios/escolares/estatus_alumno/kardex.asp";
					  break;
     case "cursando": serverPage ="servicios/escolares/estatus_alumno/matcursa.asp";
					  break;
	 case "boleta":   serverPage ="servicios/escolares/estatus_alumno/boleta.asp";
 					  break;
 	}
	mandadatos(serverPage, objID,valor); 
}
//-------------------------------------------------------------------------------------------------------------------------
function openNewWindow(newurl) 
{
	NewWindow=window.open(newurl, "awindow", "width=200,height=250, scrollbars=0, resizable=0, menubar=0, toolbar=0, left= 350, top= 200");
}	
//-------------------------------------------------------------------------------------------------------------------------
/*function click_menu()
{	
	request('servicios/academicos/examen_ingles/ExaIngles.htm','pag_principal');	
	document.getElementById("boton").style.visibility = "hidden";
}*/
//-------------------------------------------------------------------------------------------------------------------------
/*function request(serverPage, objID) 
{
	var aux = replacecad(serverPage, " ", "$");
  	var aux2 = "2," + aux + "," + objID;
	aux2 = replacecad(aux2, " ", "$");
  	dhtmlHistory.add(aux,aux2);
  	var obj = document.getElementById(objID);
  	xmlhttp.open("GET", serverPage, false);
  	xmlhttp.send(null);
  	if((xmlhttp.readyState == 4) && (xmlhttp.status == 200))
  	obj.innerHTML = xmlhttp.responseText;
}*/
//-------------------------------------------------------------------------------------------------------------------------
/*function auxiliar3(serverPage, objID) 
{
  	var obj = document.getElementById(objID);
  	xmlhttp.open("GET", serverPage, false);
  	xmlhttp.send(null);
  	if((xmlhttp.readyState == 4) && (xmlhttp.status == 200))
  	obj.innerHTML = xmlhttp.responseText;
}*/
//-------------------------------------------------------------------------------------------------------------------------
function verifica2()
{
	var numcon=document.index.cCONTROL.value;
	var longitud = numcon.length;
	if (numcon=="")
	{	alert("No dejes vacío ningún campo!"); }
	else if (longitud<4)
	{       alert("Error: el número de ficha no puede tener menos de 4 dígitos"); }
	else if (numcon<1)
	{	alert("Error: el número de control no puede ser menor de cero"); }
	else
	{	
		document.index.method="post";
		document.index.action="javascript:makerequest('Proc_IS/Licencia/Admision/FDep_NI/direcciona.asp', 'pag_principal')";	
	}
}	  
//-------------------------------------------------------------------------------------------------------------------------
/*function click_m(serverPage, objID, boton)
{
	b = boton;
	request(serverPage, objID);
	document.getElementById(boton).style.visibility = "hidden";
}*/
//-------------------------------------------------------------------------------------------------------------------------
function mandadatos(serverPage, objID,valores) 
{

	
  	var aux = replacecad(serverPage, " ", "$");	
  	var aux2 = "1," + aux + "," + objID + "," + valores; 
	aux2 = replacecad(aux2, " ", "$");
  	dhtmlHistory.add(aux,aux2);	
  	var obj = document.getElementById(objID);
	
    xmlhttp.open("POST", serverPage);
  	xmlhttp.onreadystatechange = function() 
  	{
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) 
	  	{
		  obj.innerHTML = xmlhttp.responseText;
	  	}
  	}
  	xmlhttp.setRequestHeader('Content-Type','application/x-www-form-urlencoded');

  	xmlhttp.send(valores); //aqui enviar la variable valores Enrique
	
}
//-------------------------------------------------------------------------------------------------------------------------
function auxiliar2(serverPage, objID,valores) 
{
  	var obj = document.getElementById(objID);
  	xmlhttp.open("POST", serverPage);
  	xmlhttp.onreadystatechange = function() 
  	{
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) 
		{
			  obj.innerHTML = xmlhttp.responseText;
		}
  	}
  	xmlhttp.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
  	xmlhttp.send(valores);
}
//-------------------------------------------------------------------------------------------------------------------------
function comprueba(serverPage, objID,ctrl,cCONTRASENA) 
{  
	//var re=/^\d+\d+\d+\d+\d+\d+\d+\d+/;
	var re=/^[A-Z]{0,1}[0-9]{7,9}$/;
//    var re2=/^\w+\w+\d+\lag+/;
	//var re2=/^\w+\w+\[0-9]{4,}+\lag+/;
	var re2= /^[a-zA-Z]{2}[0-9]{1,4}(lag)$/;

	ctrl=ctrl.concat("&");
	ctrl=ctrl.concat(cCONTRASENA);
	if ((re.test(document.getElementById("cCONTROL").value))&&(re2.test(document.getElementById("cCONTRASENA").value)))
	{	
		 mandadatos(serverPage, objID,ctrl);
	}
	else
	{
		alert("Error: El número de control es incorrecto ***");
	}
}
//-------------------------------------------------------------------------------------------------------------------------
function comprueba_credencial(serverPage, objID,ctrl) 
{  
	var re=/^\d+\d+\d+\d+\d+\d+\d+\d+/;
	if (re.test(document.getElementById("cCONTROL").value))
	{	
 		mandadatos(serverPage, objID,ctrl);
	}
	else
	{
		alert("Error: El número de control es incorrecto");
	}
}
//-------------------------------------------------------------------------------------------------------------------------
function imprimir(divid) 
{
	var ventana = window.open("", "", "");
	var contenido = "<html><body onload='window.print();window.close();'>" + document.getElementById(divid).innerHTML + "</body></html>";
	ventana.document.open();
	ventana.document.write(contenido);
	ventana.document.close();
}
//-------------------------------------------------------------------------------------------------------------------------