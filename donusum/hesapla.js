document.addEventListener('DOMContentLoaded', function() {
    const algilananMetin = document.getElementById('algilananMetin');
    const neredenBirimleri = document.getElementById('neredenBirimleri');
    const nereyeBirimleri = document.getElementById('nereyeBirimleri');
    const hesaplaButon = document.getElementById('hesaplaButon');
    const sonucDiv = document.getElementById('sonucDiv');
    const sonuc = document.getElementById('sonuc');

    hesaplaButon.addEventListener('click', function() {
        try {
            const ifade = algilananMetin.value;
            const neredenBirim = neredenBirimleri.value;
            const nereyeBirim = nereyeBirimleri.value;

            // Kullanıcının girdiği ifadeyi bir sayıya dönüştürün
            const deger = parseFloat(ifade);

            if (isNaN(deger)) {
                sonuc.textContent = 'Hesaplama hatası: Geçerli bir sayı girin.';
                sonucDiv.style.display = 'block'; // Hata mesajını göster
                return;
            }

            // Kullanıcının seçtiği birimlere göre dönüşüm yap
            let sonucDegeri = 0;

            if (neredenBirim === 'cm' && nereyeBirim === 'm') {
                sonucDegeri = deger / 100; // cm'yi m'ye çevir
            } else if (neredenBirim === 'cm' && nereyeBirim === 'km') {
                sonucDegeri = deger / 100000; // cm'yi km'ye çevir
            } else if (neredenBirim === 'm' && nereyeBirim === 'cm') {
                sonucDegeri = deger * 100; // m'yi cm'ye çevir
            } else if (neredenBirim === 'm' && nereyeBirim === 'km') {
                sonucDegeri = deger / 1000; // m'yi km'ye çevir
            } else if (neredenBirim === 'km' && nereyeBirim === 'cm') {
                sonucDegeri = deger * 100000; // km'yi cm'ye çevir
            } else if (neredenBirim === 'km' && nereyeBirim === 'm') {
                sonucDegeri = deger * 1000; // km'yi m'ye çevir
            } else {
                // Geçersiz birimler için hata mesajı
                sonuc.textContent = 'Geçersiz birim seçimi.';
                sonucDiv.style.display = 'block'; // Hata mesajını göster
                return;
            }

            sonuc.textContent = `Sonuç: ${sonucDegeri} ${nereyeBirim}`;
            sonucDiv.style.display = 'block'; // Sonucu göster
        } catch (error) {
            sonuc.textContent = 'Hesaplama hatası: Geçerli bir ifade girin.';
            sonucDiv.style.display = 'block'; // Hata mesajını göster
        }
    });
});
