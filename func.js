document.addEventListener('DOMContentLoaded', function() {
    const sesAlgilamaButon = document.getElementById('sesAlgilamaButon');
    const algilananMetin = document.getElementById('algilananMetin');
    const baslaButon = document.getElementById('baslaButon');
    const durButon = document.getElementById('durButon');
    let recognition; // Recognition nesnesini global olarak tanımlayın

    // Başlat Butonuna Tıklama Olayını Ekle
    baslaButon.addEventListener('click', function() {
        recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
        recognition.lang = 'tr-TR'; // Algılama Dilini Türkçe olarak ayarlayın
/*
        recognition.onresult = function(event) {
            const sonuc = event.results[0][0].transcript;
            algilananMetin.value = sonuc.replace(/\s+/g, ''); // Algılanan metni input kutusuna yaz
        };

normalde öyledi fakat çarpı dediğimde x algılıyor bu da hesaplama hatası oluyor bende x i * e çevirdim
*/
recognition.onresult = function(event) {
    const sonuc = event.results[0][0].transcript;
    const duzenlenmisSonuc = sonuc.replace(/\s+/g, '').replace(/x/g, '*'); // Algılanan metni düzenle ve "*" karakterini ekleyin
    algilananMetin.value = duzenlenmisSonuc; // Düzenlenmiş metni input kutusuna yaz
};

        recognition.onend = function() {
            recognition.start(); // Algılamayı tekrar başlat
        };

        recognition.start(); // Algılamayı Başlat
        baslaButon.disabled = true; // Başlat Butonunu devre dışı bırak
        durButon.disabled = false; // Durdur Butonunu etkinleştir
    });

    // Durdur Butonuna Tıklama Olayını Ekle
    durButon.addEventListener('click', function() {
        recognition.stop(); // Algılamayı Durdur
        baslaButon.disabled = false; // Başlat Butonunu etkinleştir
        durButon.disabled = true; // Durdur Butonunu devre dışı bırak
    });
});