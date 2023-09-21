document.addEventListener('DOMContentLoaded', function() {
    const sesAlgilamaButon = document.getElementById('sesAlgilamaButoncm');
    const algilananMetin = document.getElementById('algilananMetincm');
    const baslaButon = document.getElementById('baslaButoncm');
    const islemekle= document.getElementById('islemeklecm');
    //const durButon = document.getElementById('durButon');
    let recognition; // Recognition nesnesini global olarak tanımlayın

    // Başlat Butonuna Tıklama Olayını Ekle
    baslaButon.addEventListener('click', function() {
        recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
        recognition.lang = 'tr-TR'; // Algılama Dilini Türkçe olarak ayarlayın

recognition.onresult = function(event) {
    const sonuc = event.results[0][0].transcript;
    const duzenlenmisSonuc = sonuc.replace(/x/g, '*'); // Algılanan metni düzenle ve "*" karakterini ekleyin
    algilananMetin.value = duzenlenmisSonuc; // Düzenlenmiş metni input kutusuna yaz
};

        
    

        recognition.start(); // Algılamayı Başlat
   


    });
   


});
//deneme12345678:)