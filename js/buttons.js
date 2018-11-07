function Openbox(id)
{
var el=document.getElementById(id);
for(var i = 1; i < 5; i++){
	var el1=document.getElementById('lab'+i);
	if(el.style.display!=el1.style.display )
	{
		el1.style.display="none";
	}
	else
	{
		el1.style.display=="block";
	}
}
if( el.style.display!="block") el.style.display="block";
}