function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/fnOSka9oj/model.json',modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error, results){
    console.log('Resultado obtido');
    if(error){
        console.error(error);
    }
    else{
        console.log(results);

        random_number_r = Math.floor(Math.random()*255) + 1;
        random_number_g = Math.floor(Math.random()*255) + 1;
        random_number_b = Math.floor(Math.random()*255) + 1;


        document.getElementById("result_label").innerHTML = "Posso ouvir -> " + results[0].label;
        document.getElementById("result_confidence").innerHTML = "Precisão -> " + (results[0].confidence*100).toFixed(2) + "%";
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";


        img_1 = document.getElementById("Vaca");
        img_2 = document.getElementById("Cachorro");
        img_3 = document.getElementById("Gato");
        img_4 = document.getElementById("Leão");
        img_5 = document.getElementById("Fundo")
        

        if(results[0].label == "Vaca"){
            img_1.src = "vaca.png";
        }

        if(results[0].label == "Cachorro"){

            img_2.src = "Cachorro.png";
        }

        if(results[0].label == "Gato"){
            img_3.src = "Gato.png";
        }

        if(results[0].label == "leao"){
            img_4.src = "Leão.png";
        }

        if(results[0].label == "Background Noise"){
            img_5.src = "ouvido.png";
        }
    }
}