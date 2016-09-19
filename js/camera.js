var imgEnviar;
function capturarImagem(){
   navigator.camera.getPicture(onSuccess, onFail,
                    {
                        destinationType : Camera.DestinationType.DATA_URL,
                        sourceType : Camera.PictureSourceType.CAMERA
                    }
                );
            }

            function onSuccess(imageURL) {
                var image = document.getElementById('htmlImagem');
                image.src = "data:image/jpeg;base64," + imageURL;
                imgEnviar=image.src;
                console.log(imgEnviar);
                
            }

            function onFail(message) {
                alert('Erro: ' + message);
            }