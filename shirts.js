// Shirts
function getShirt() {
  var number = Math.floor(Math.random()*randomShirt.length);
  document.getElementById("shirtDisplay").innerHTML =('<img src="'+randomShirt[number]+'" />');
}

var randomShirt = new Array();
randomShirt[0] = "https://i.s-madewell.com/is/image/madewell/MA651_PP0156_ld?wid=1400&hei=1779&fmt=jpeg&fit=crop&qlt=75,1&resMode=bisharp&op_usm=0.5,1,5,0";
randomShirt[1] = "https://i.s-madewell.com/is/image/madewell/AN127_BK5229_ld?wid=1400&hei=1779&fmt=jpeg&fit=crop&qlt=75,1&resMode=bisharp&op_usm=0.5,1,5,0";
randomShirt[2] = "https://i.s-madewell.com/is/image/madewell/MA571_WY2361_ld?wid=1400&hei=1779&fmt=jpeg&fit=crop&qlt=75,1&resMode=bisharp&op_usm=0.5,1,5,0";
