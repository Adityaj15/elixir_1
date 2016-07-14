var To_do_list = new Array();

window.onload=function ()
{
	console.log("Loading");
	if(localStorage.getItem('To_Do_List')==null)
		{
			return;
		}
	To_do_list = JSON.parse(localStorage.getItem('To_Do_List'));
	ShowTodo();
	return;
}

function AddTodo()
{
	var Work = document.getElementById("Work").value;
	document.getElementById("Work").value="";
	if(Work == "")
		{
			window.alert("Null string cannot be added.");
			return;
		}
	console.log("Work is " + Work);
	var temp = new Object();
	temp[0] = Work;
	temp[1] = false;
	To_do_list.push(temp);
	SaveTodo();
	ShowTodo();
}

function SaveTodo()
{
	var T = JSON.stringify(To_do_list);	
	localStorage.setItem('To_Do_List',T);
}

function ShowTodo()
{
	//No need of local storage here
	//Everything can be manipulated using Todo
	
	var L = document.getElementById("list");
	var str = '';
	for(var i = 0; i<To_do_list.length; i++)
		{
					str = str + '<li id="l' + i +'">' +
					To_do_list[i][0] + '<input type="checkbox" id="'+i+'" onclick="action('+i+')"></li>';

		}
	L.innerHTML=str;
	for(var i = 0; i<To_do_list.length; i++)
		{
			//Strike off
			if(To_do_list[i][1])
				{
					document.getElementById('l'+i).setAttribute('style','text-decoration:line-through');
				}
		}
	
	//Finished
}

function action(arg)
{
	var i = arg;
	if((document.getElementById(arg).checked))
		{

			document.getElementById('l'+i).setAttribute('style','text-decoration:line-through');
			To_do_list[i][1] = true;
		}
	else
		{

			document.getElementById('l'+i).setAttribute('style','text-decoration:none');
			To_do_list[i][1] = false;
		}
	var T = JSON.stringify(To_do_list);
	localStorage.setItem('To_Do_List',T);
}

function D()
{
	//Lets do it
	if(To_do_list.length==0)
		{
			return;
		}
	var T = new Array;
	for(var i=0; i<To_do_list.length; i++)
		{
			if(To_do_list[i][1])
				{
					continue;
				}
			else
				{
					T.push(To_do_list[i]);
				}
			
		}
	To_do_list = T;
	var J = JSON.stringify(To_do_list);
	localStorage.setItem('To_Do_List',J);
	ShowTodo();
	
}

function Clear()
{
	document.getElementById("list").innerHTML="";
	To_do_list = [];
	localStorage.clear();
}
