function shindan() {
var aa = document.getElementsByName("res1");
var bb = document.getElementsByName("res2");

for (var i = 0; i< aa.length; i = i + 1){
  if (aa[0].checked && bb[0].checked){
  window.location.href ='yacht.html';
  break;
}
}

  for (var i = 0; i< aa.length; i = i + 1){
  if (aa[0].checked && bb[1].checked){
    window.location.href ='sup.html';
    break;
  }
}

for (var i = 0; i< aa.length; i = i + 1){
    if (aa[1].checked && bb[0].checked){
      window.location.href ='wind.html';
      break;
    }
}
for (var i = 0; i< aa.length; i = i + 1){
    if (aa[1].checked && bb[1].checked){
      window.location.href ='surf.html';
      break;
    }
}

};
