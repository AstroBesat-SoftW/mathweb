
var slider1 = document.getElementById("slider1");
var sliderValue1 = document.getElementById("slider-value1");


// Sayfa yüklendiğinde veya kaydıraçın değeri değişmediğinde varsayılan değeri 10 yap
var islemSonucu1 = 10; // Varsayılan değer olarak 10

// Kaydıraç değeri değiştikçe bu fonksiyon çalışır
slider1.oninput = function() {
var selectedValue1 = parseInt(slider1.value);
sliderValue1.textContent = selectedValue1;

if (selectedValue1 >= 1) {
    islemSonucu1 = selectedValue1 * 1; // Kaydıraç değeri 1 veya daha büyükse seçilen değeri 20 ile çarp
}

}; 



// Rastgele sayıları oluşturmak için bir yardımcı fonksiyon
function randomNum() {
return Math.floor(Math.random() * islemSonucu1) + 1; // 1 ile 20 arasında rastgele bir sayı üretir
}



// İşlem yapılacak işlem seçildiğinde bu fonksiyon çağrılır
function soruSor1(islem1) {
var sayi = randomNum();
var dogruCevap1;

switch (islem1) {
    case "km":
        dogruCevap1 = sayi *100000;
        break;
    case "cm":
        dogruCevap1 = sayi /100;
        break;
  
}

 var yanlisCevaplar1 = [];
while (yanlisCevaplar1.length < 3) {

    
    var yanlisCevap1 = randomNum();
  

     if (!yanlisCevaplar1.includes(yanlisCevap1) && yanlisCevap1 !== dogruCevap1) {

        yanlisCevaplar1.push(yanlisCevap1);
    }
  
}






yanlisCevaplar1 = yanlisCevaplar1.sort(function () {
    return Math.random() - 0.5; // Yanlış cevapları karıştır
    // bu kısmı random değilde doğru cevaba yakın olsun diye değiştircem
    
});

var soruMetni1 = sayi + " " + islem1  + " = ?";


var cevaplar1 = [yanlisCevaplar1[0], yanlisCevaplar1[1], yanlisCevaplar1[2], dogruCevap1];
cevaplar1 = cevaplar1.sort(function () {
    return Math.random() - 0.5; // Tüm cevapları karıştır
});

var cevapSecenekleri1 = "";
var secenekler1 = ["A) ", "B) ", "C) ", "D) "]; // Şıklar için harf dizisi
for (var i = 0; i < cevaplar1.length; i++) {
// Düğme stilini ve gölgesini içinde tanımlayın
cevapSecenekleri1 += `<button onclick="cevapKontrol1(${cevaplar1[i]}, ${dogruCevap1})" style="background-color: #4CAF50; color: white; border: none; padding: 10px 20px; text-align: center; text-decoration: none; display: inline-block; font-size: 16px; margin: 4px 2px; cursor: pointer; box-shadow: 2px 2px 4px 0 rgba(0,0,0,0.2);">${secenekler1[i]}${cevaplar1[i]}</button>`;
}




document.getElementById("sonucsorular1").innerHTML = "<br>" + soruMetni1 + "<br><br>" + cevapSecenekleri1;
}

counter1 = 0;
// Kullanıcının verdiği cevabı kontrol eden fonksiyon
function cevapKontrol1(verilenCevap1, dogruCevap1) {
if (verilenCevap1 == dogruCevap1) {
    document.getElementById("sonucsorular1").innerHTML = "<br>" +"Doğru! <br><br>";
    counter1 += 10;
    document.getElementById("puan1").innerHTML = "Puanınız:" + counter1; 
     if (counter1 <= 0){
      document.getElementById("puan1").innerHTML = "Puanınız 0'dan düşük pratik yapmalısınız"; 

    }
} else {
    document.getElementById("sonucsorular1").innerHTML = "<br> Yanlış! <br><br>";
    counter1 -= 10;
    
    document.getElementById("puan1").innerHTML = "Puanınız:" + counter1; 
    if (counter1 <= 0){
      document.getElementById("puan1").innerHTML = "Puanınız 0'dan düşük pratik yapmalısınız"; 

    }
}
}


// +, -, *, / düğmelerine tıklanınca ilgili işlemi sormak için event dinleyicileri ekle
document.getElementById("km").addEventListener("click", function () {
soruSor1("km");
});

document.getElementById("cm").addEventListener("click", function () {
soruSor1("cm");
});






