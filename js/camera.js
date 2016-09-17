function capturarImagem(){
   navigator.camera.getPicture(onSuccess, onFail,
                    {
                        destinationType : Camera.DestinationType.DATA_URL,
                        sourceType : Camera.PictureSourceType.CAMERA
                    }
                );
            }

           function onSuccess(imageData) {
                var image = document.getElementById('htmlImagem');
                image.src = "data:image/jpeg;base64," + imageData;
            }

            function onFail(message) {
                alert('Erro: ' + message);
            }