window.onload = function()
{
  var a=0,b=0,c=0,r=0;
  setvalue=function(o)
  {
    var t=document.getElementById('number').value;
    if(t==0)
    {
    document.getElementById('number').value=o;
    document.getElementById('show').value+=o;
    }
    else if(r!=0)
    {
      r=0;
      document.getElementById('number').value=o;
      document.getElementById('show').value=o;
    }
    else {

      document.getElementById('number').value+=o;
      document.getElementById('show').value+=o;
    }

    var sound = document.getElementById("audio");
    sound.play()
  }

  setop=function(k)
  {
    if(a==0)
    {
    a= (document.getElementById('number').value *10) /10;
    document.getElementById('number').value="";
    document.getElementById('show').value+=k;
    }
    else {
      a= (document.getElementById('number').value *10) /10;
      document.getElementById('number').value="";
      document.getElementById('show').value=a+k;
    }
    b=k;

    var sound = document.getElementById("audio");
    sound.play()
  }
  setc=function()
  {
    var sound = document.getElementById("audio");
    sound.play()
    document.getElementById('number').value="0";
    a=0;
    b=0;
    document.getElementById('show').value="";

  }
  setshow=function()
  {
    var sound = document.getElementById("audio");
    sound.play()
    c=(document.getElementById('number').value *10)/10;
    document.getElementById('show').value=a+b+c+"=";


    switch(b)
    {
      case '*':
      r=a*c;
      break;
      case '+':
      r=a+c;
      break;
      case '/':
      r=a/c;
      break;
      case '-':
      r=a-c;
      break;
    }
    document.getElementById('number').value=r.toFixed(3);
;



  }
};
