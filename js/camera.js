function capturarImagem(){
   navigator.camera.getPicture(onSuccess, onFail,
                    {
                        destinationType : Camera.DestinationType.FILE_URI,
                        sourceType : Camera.PictureSourceType.CAMERA
                    }
                );
            }

            function onSuccess(imageURL) {
                var image = document.getElementById('htmlImagem');
                image.src = imageURL;
                console.log(image);
                
            }

            function onFail(message) {
                alert('Erro: ' + message);
            }