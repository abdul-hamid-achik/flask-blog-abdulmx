// JavaScript Document
function getdatos(url,cad)
{
 cadena = url + cad;
 makerequest(cadena, 'pag_principal')	
}

//-----------------------------------------------------------------------------------
function informar()
{
	if(datni.txtNacionalidad.value=="Extranjera")
	{
		datni.txtPaisExtranjero.disabled = false;
	}
	else
	{
		datni.txtPaisExtranjero.disabled = true;
	}
}
//------------------------------------------------------------------------------------
function informar2(form)
{
	if(form.tiene_beca.checked)
	{
		form.otorga_beca.disabled = false;
	}
	else
	{
		form.otorga_beca.disabled = true;
	}
}


//-------------------------------------------------------------------------------------
function comprobacion()
{ 
var vacio = true;
for(t=1;t<document.datni.elements.length;t++)
{
	if(!(document.datni.elements[t].name=="otorga_beca" || document.datni.elements[t].name=="txtTelefono" || document.datni.elements[t].name=="txtCurp" || document.datni.elements[t].name=="txtPaisExtranjero"))
	{
		if(document.datni.elements[t].value=="")
		{
			vacio=false; 
		}
	}
}

if(vacio==true) 
{
	document.datni.method="post";
	var cadena,cad="",cad1="";
	var aux=document.datni.elements[0].name+"="+document.datni.elements[0].value;
    for(i=1;i<51;i++)	
    {
		cadena=document.datni.elements[i].name;
		cad=cadena+"="+document.datni.elements[i].value;
		cad1=cad1+"&"+cad;
		//  	cadena=cadena+document.datni.elements[i].value+" ";
	}
	aux=aux+cad1;
	mandadatos('Proc_IS/Licencia/Admision/Fich_NI/prcdatni.php','pag_principal',aux);}
else
{
	alert("No dejes vacío ningún campo obligatorio");
	return false;
}

}

/*-----------------------------------------------------------------------------*/

