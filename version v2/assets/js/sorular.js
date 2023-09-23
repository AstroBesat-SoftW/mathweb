    // Rastgele sayıları oluşturmak için bir yardımcı fonksiyon
function randomNum() {
    return Math.floor(Math.random() * 20) + 1; // 1 ile 20 arasında rastgele bir sayı üretir
}

// İşlem yapılacak işlem seçildiğinde bu fonksiyon çağrılır
function soruSor(islem) {
    var sayi1 = randomNum();
    var sayi2 = randomNum();
    var dogruCevap;

    switch (islem) {
        case "+":
            dogruCevap = sayi1 + sayi2;
            break;
        case "-":
            dogruCevap = sayi1 - sayi2;
            break;
        case "*":
            dogruCevap = sayi1 * sayi2;
            break;
        case "/":
            dogruCevap = (sayi1 / sayi2).toFixed(2); // Bölme işlemi sonucunu 2 ondalık basamağa yuvarla
            break;
    }

     var yanlisCevaplar = [];
    while (yanlisCevaplar.length < 3) {
   //eklediğim şey eğer bölme seçili ve çıktı tam saıdan büyükse yani vürgullüse diğer seçeneklerde virgüllü olsun
   // kısmı bu
        if (islem == "/" && dogruCevap >= (sayi1 / sayi2).toFixed(0)) {

       var yanlisCevap = (randomNum() / randomNum()).toFixed(2); 

       if (!yanlisCevaplar.includes(yanlisCevap) && yanlisCevap !== dogruCevap) {

            yanlisCevaplar.push(yanlisCevap);
        }

        }  
        // eğer bölme seçili değil ve virgüllü değilse normal tam sayı yapsın

        else { 
        var yanlisCevap = randomNum();
        if (!yanlisCevaplar.includes(yanlisCevap) && yanlisCevap !== dogruCevap) {

            yanlisCevaplar.push(yanlisCevap);
        }
      }
   }






    yanlisCevaplar = yanlisCevaplar.sort(function () {
        return Math.random() - 0.5; // Yanlış cevapları karıştır
    });

    var soruMetni = sayi1 + " " + islem + " " + sayi2 + " = ?";
    var cevaplar = [yanlisCevaplar[0], yanlisCevaplar[1], yanlisCevaplar[2], dogruCevap];
    cevaplar = cevaplar.sort(function () {
        return Math.random() - 0.5; // Tüm cevapları karıştır
    });

    var cevapSecenekleri = "";
    var secenekler = ["A) ", "B) ", "C) ", "D) "]; // Şıklar için harf dizisi
   for (var i = 0; i < cevaplar.length; i++) {
    // Düğme stilini ve gölgesini içinde tanımlayın
    cevapSecenekleri += `<button onclick="cevapKontrol(${cevaplar[i]}, ${dogruCevap})" style="background-color: #4CAF50; color: white; border: none; padding: 10px 20px; text-align: center; text-decoration: none; display: inline-block; font-size: 16px; margin: 4px 2px; cursor: pointer; box-shadow: 2px 2px 4px 0 rgba(0,0,0,0.2);">${secenekler[i]}${cevaplar[i]}</button>`;
}




    document.getElementById("sonucsorular").innerHTML = "<br>" + soruMetni + "<br><br>" + cevapSecenekleri;
}

counter = 0;
// Kullanıcının verdiği cevabı kontrol eden fonksiyon
function cevapKontrol(verilenCevap, dogruCevap) {
    if (verilenCevap == dogruCevap) {
        document.getElementById("sonucsorular").innerHTML = "<br>" +"Doğru! <br><br>";
        counter += 10;
        document.getElementById("puan").innerHTML = "Puanınız:" + counter; 
         if (counter <= 0){
          document.getElementById("puan").innerHTML = "Puanınız 0'dan düşük pratik yapmalısınız"; 

        }
    } else {
        document.getElementById("sonucsorular").innerHTML = "<br> Yanlış! <br><br>";
        counter -= 10;
        
        document.getElementById("puan").innerHTML = "Puanınız:" + counter; 
        if (counter <= 0){
          document.getElementById("puan").innerHTML = "Puanınız 0'dan düşük pratik yapmalısınız"; 

        }
    }
}


// +, -, *, / düğmelerine tıklanınca ilgili işlemi sormak için event dinleyicileri ekle
document.getElementById("toplama").addEventListener("click", function () {
    soruSor("+");
});

document.getElementById("cikarma").addEventListener("click", function () {
    soruSor("-");
});

document.getElementById("carpma").addEventListener("click", function () {
    soruSor("*");
});

document.getElementById("bolme").addEventListener("click", function () {
    soruSor("/");
});
