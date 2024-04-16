function countNodes() {
    var div1Count = document.getElementById('div1').childNodes.length;
    var div2Count = document.getElementById('div2').childNodes.length;
    document.getElementById('result').innerHTML = 'Div 1: ' + div1Count + ' nodos hijos<br>' +
    
    'Div 2: ' + div2Count + ' nodos hijos';
  }
  
  function countElementNodes() {
    var div1Count = document.getElementById('div1').children.length;
    var div2Count = document.getElementById('div2').children.length;
    document.getElementById('result').innerHTML = 'Div 1: ' + div1Count + ' nodos hijos de tipo elemento<br>' +
    
    
    'Div 2: ' + div2Count + ' nodos hijos de tipo elemento';
  }
  