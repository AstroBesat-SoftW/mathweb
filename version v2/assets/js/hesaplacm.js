  document.addEventListener('DOMContentLoaded', function() {
    const algilananMetin = document.getElementById('algilananMetincm');
    const sonuc = document.getElementById('sonuccm');
    const sonucDiv = document.getElementById('sonucDivcm');
    
    function hesaplaBirimDonusumu(ifade) {
        // Sesli ifadeyi analiz etmek ve birim dönüşümünü yapmak için burada gerekli işlemleri gerçekleştirin.
        // Örneğin, ifadeyi parçalayın ve birimleri belirleyin.
        
        // Örnek birim dönüşümü işlemi:
        // "4 metre kilometre" ifadesini işleyelim.
        const ifadeParcalari = ifade.split(' '); // Boşluklara göre ifadeyi bölelim
        if (ifadeParcalari.length !== 3) {
            throw new Error('Geçersiz ifade. Lütfen "x birim1 birim2" formatında girin.');
        }
        
        const sayi = parseFloat(ifadeParcalari[0]); // Sayıyı alın
        const birim1 = ifadeParcalari[1].toLowerCase(); // İlk birimi alın
        const birim2 = ifadeParcalari[2].toLowerCase(); // İkinci birimi alın
        
        let sonucDegeri = 0;
        
        // Burada birim dönüşümünü yapın
        // Örnek birim dönüşümü:
        if (birim1 === 'metre' && birim2 === 'kilometre') {
            sonucDegeri = sayi / 1000; // Metreyi kilometreye çevir
        } else if (birim1 === 'kilometre' && birim2 === 'metre') {
            sonucDegeri = sayi * 1000; // Kilometreyi metreye çevir
        } else {
            throw new Error('Geçersiz birimler. Desteklenen birimler: metre, kilometre');
        }
        
        return sonucDegeri;
    }
    
    document.getElementById('hesaplaButoncm').addEventListener('click', function() {
        try {
            const ifade = algilananMetin.value;
            const sonucDegeri = hesaplaBirimDonusumu(ifade);
            sonuc.textContent = `Sonuç: ${sonucDegeri}`;
            sonucDiv.style.display = 'block';
        } catch (error) {
            sonuc.textContent = `Hata: ${error.message}`;
            sonucDiv.style.display = 'block';
        }
    });
});