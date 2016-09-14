function capturarImagem(){
         navigator.camera.getPicture(onSuccess, onFail,
                    {
                        destinationType : Camera.DestinationType.DATA_,
                        sourceType : Camera.PictureSourceType.CAMERA
                    }
                );
            }

            function onSuccess(imageURL) {
                var image = document.getElementById('htmlImagem');
                image.src = imageURL;
                image.innerHTML = imageURL;
            }

            function onFail(message) {
                alert('Erro: ' + message);
            }