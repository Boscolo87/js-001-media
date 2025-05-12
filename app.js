function calcular(){
        var n1, n2,n3, n4, media;
        n1= document.getElementById("nota_1").value;
        n2= document.getElementById("nota_2").value;
        n3= document.getElementById("nota_3").value;
        n4= document.getElementById("nota_4").value;

        media = (parseFloat(n1) + parseFloat(n2) + parseFloat(n3) + parseFloat(n4)) / 4

        document.getElementById("media").innerHTML = media

       if(media>=5){
    console.log("parabéns,você passou")
}else{
    console.log("que pena volte na próxima")
}
}

