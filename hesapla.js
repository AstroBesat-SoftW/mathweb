document.addEventListener('DOMContentLoaded', function() {
    const algilananMetin = document.getElementById('algilananMetin');
    const hesaplaButon = document.getElementById('hesaplaButon');
    const sonuc = document.getElementById('sonuc');


    hesaplaButon.addEventListener('click', function() {
        try {
            const ifade = algilananMetin.value;

            // Kök kelimesini bul ve uygun matematiksel ifadeye dönüştür
            const matematikselIfade = ifade.replace(/kök[üün]*\s*(\d+)/gi, 'Math.sqrt($1)');
        
            // Elde edilen matematiksel ifadeyi hesapla
            const sonucDegeri = eval(matematikselIfade);

            sonuc.textContent = `Sonuç: ${sonucDegeri}`;

           
            const a=window.speechSynthesis;
            const b=new SpeechSynthesisUtterance(`Sonuç: ${sonucDegeri}`);
            a.speak(b);
           
        } catch (error) {
            sonuc.textContent = 'Hesaplama hatası: Geçerli bir ifade girin.';
        }
    });
});
