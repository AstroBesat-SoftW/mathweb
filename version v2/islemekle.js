document.addEventListener('DOMContentLoaded', function() {
    const algilananMetin = document.getElementById('algilananMetin');
    const islemekle = document.getElementById('islemekle');
    let recognition; // Recognition nesnesini global olarak tanımlayın

    // Başlat Butonuna Tıklama Olayını Ekle
    islemekle.addEventListener('click', function() {
        recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
        recognition.lang = 'tr-TR'; // Algılama Dilini Türkçe olarak ayarlayın

        recognition.onresult = function(event) {
            const sonuc = event.results[0][0].transcript;
            const duzenlenmisSonuc = sonuc.replace(/\s+/g, '').replace(/x/g, '*'); // Algılanan metni düzenle ve "*" karakterini ekleyin
            algilananMetin.value = algilananMetin.value + duzenlenmisSonuc; // Düzenlenmiş metni input kutusuna yaz
        };

        recognition.start(); // Algılamayı Başlat

       

        
    });
});