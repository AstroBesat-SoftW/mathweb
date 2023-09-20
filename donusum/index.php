<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hesap Makinesi</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="calculator">
        <input type="text" id="algilananMetin" placeholder="Sesli ifadeyi buraya girin">
    
        <div class="button-container">
            <button id="baslaButon" class="calc-button"><i class="fas fa-microphone" style="color: red;"></i></button>
            <button id="islemekle" class="calc-button" style="color: white;">İşlem Ekle <i class="fas fa-plus" style="color: white;"></i></button>
            <button id="hesaplaButon" class="calc-button">Hesapla</button>
            <button id="silButon" class="calc-button"><i class="fas fa-trash" style="color: black;"></i></button>
        </div>
    
        <!-- Sonuç gösterilecek div -->
        <div id="sonucDiv">
            <p id="sonuc"></p>
        </div>
    </div>
    
    <script src="func.js"></script>
    <script src="islemekle.js"></script>
    <script src="hesapla.js"></script>
    <script src="sil.js"></script>
    <script>
      document.addEventListener('DOMContentLoaded', function() {
    const algilananMetin = document.getElementById('algilananMetin');
    const sonuc = document.getElementById('sonuc');
    const sonucDiv = document.getElementById('sonucDiv');
    
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
    
    document.getElementById('hesaplaButon').addEventListener('click', function() {
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

    </script>
</body>
</html>
