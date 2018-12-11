var array=["11.jpg","12.jpg","13.jpg","14.jpg","15.jpg","16.jpg","17.jpg","18.jpg","19.jpg","20.jpg"];
var count=0;var i=1;
var nof= document.getElementById('ailo');
function changeback()
{if(i<=10)
  {i+=1;
    nof.src= array[count-i];}
    if(i==11)
      {i=1;
      count=0;
      nof.src= array[count];
    }
}
function changephoto()
{if (count>=10)
  {changeback();
    }
    else{
  nof.src= array[count];
  count+=1;
}}

setInterval(changephoto,100 );
