function aumentarSi() {
    var botonSi = document.getElementById('si');
    var scale = parseFloat(botonSi.style.transform.replace('scale(', '').replace(')', '')) || 1;
    botonSi.style.transform = 'scale(' + (scale + 0.1) + ')';
  }

  function disminuirNo() {
    var botonNo = document.getElementById('no');
    var scale = parseFloat(botonNo.style.transform.replace('scale(', '').replace(')', '')) || 1;
    botonNo.style.transform = 'scale(' + (scale - 0.1) + ')';
    
    if (scale <= 0.2) {
      botonNo.classList.add('hidden');
    } else {
      var botonSi = document.getElementById('si');
      var scaleSi = parseFloat(botonSi.style.transform.replace('scale(', '').replace(')', '')) || 1;
      botonSi.style.transform = 'scale(' + (scaleSi + 0.1) + ')';
    }
  }

  function redireccionar() {
  window.location.href = 'SII.html';
  }