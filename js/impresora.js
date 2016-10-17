window.DatecsPrinter.listBluetoothDevices(
  function (devices) {
    window.DatecsPrinter.connect(devices[0].address, 
      function() {
        printSomeTestText();
      },
      function() {
        alert(JSON.stringify(error));
      }
    );
  },
  function (error) {
    alert(JSON.stringify(error));
  }
);

function printSomeTestText() {
  window.DatecsPrinter.printText("Print Test!", 'ISO-8859-1', 
    function() {
      printMyImage();
    }
  );
}

function printMyImage() {
  var image = new Image();
  image.src = 'img/some_image.jpg';
  image.onload = function() {
      var canvas = document.createElement('canvas');
      canvas.height = 100;
      canvas.width = 100;
      var context = canvas.getContext('2d');
      context.drawImage(image, 0, 0);
      var imageData = canvas.toDataURL('image/jpeg').replace(/^data:image\/(png|jpg|jpeg);base64,/, ""); //remove mimetype
      window.DatecsPrinter.printImage(
          imageData, //base64
          canvas.width, 
          canvas.height, 
          1, 
          function() {
            printMyBarcode();
          },
          function(error) {
              alert(JSON.stringify(error));
          }
      )
  };
}

function printMyBarcode() {
  window.DatecsPrinter.printBarcode(
    75, //here goes the barcode type code
    '13132498746313210584982011487', //your barcode data
    function() {
      alert('success!');
    },
    function() {
      alert(JSON.stringify(error));
    }
  );
}

window.broadcaster.addEventListener( "DatecsPrinter.connectionStatus", function(e) {
  if (e.isConnected) {
    alert('connect impress');
  }
});