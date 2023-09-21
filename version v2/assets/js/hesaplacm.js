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
        if (birim1 === 'kilometre' && birim2 === 'hektometre') {
            sonucDegeri = sayi * 10; // Metreyi kilometreye çevir
        } else if (birim1 === 'kilometre' && birim2 === 'dekametre') {
            sonucDegeri = sayi * 100; // Kilometreyi metreye çevir
        }
        else if (birim1 === 'kilometre' && birim2 === 'metre') {
            sonucDegeri = sayi * 1000; // Kilometreyi metreye çevir
        }
        else if (birim1 === 'kilometre' && birim2 === 'desimetre') {
            sonucDegeri = sayi * 10000; // Kilometreyi metreye çevir
        }
        else if (birim1 === 'kilometre' && birim2 === 'santimetre') {
            sonucDegeri = sayi * 100000; // Kilometreyi metreye çevir
        } 
        else if (birim1 === 'kilometre' && birim2 === 'milimetre') {
            sonucDegeri = sayi * 1000000; // Kilometreyi metreye çevir
        }
        else if (birim2 === 'kilometre' && birim1 === 'hektometre') {
            sonucDegeri = sayi / 10; // Metreyi kilometreye çevir
        } 
        else if (birim2 === 'kilometre' && birim1 === 'dekametre') {
            sonucDegeri = sayi / 100; // Kilometreyi metreye çevir
        }
        else if (birim2 === 'kilometre' && birim1 === 'metre') {
            sonucDegeri = sayi / 1000; // Kilometreyi metreye çevir
        }
        else if (birim2 === 'kilometre' && birim1 === 'desimetre') {
            sonucDegeri = sayi / 10000; // Kilometreyi metreye çevir
        }
        else if (birim2 === 'kilometre' && birim1 === 'santimetre') {
            sonucDegeri = sayi / 100000; // Kilometreyi metreye çevir
        } 
        else if (birim2 === 'kilometre' && birim1 === 'milimetre') {
            sonucDegeri = sayi / 1000000; // Kilometreyi metreye çevir
        }


        else if (birim1 === 'hektometre' && birim2 === 'dekametre') {
            sonucDegeri = sayi*10; // Kilometreyi metreye çevir
        }
        else if (birim1 === 'hektometre' && birim2 === 'metre') {
            sonucDegeri = sayi * 100; // Kilometreyi metreye çevir
        }
        else if (birim1 === 'hektometre' && birim2 === 'desimetre') {
            sonucDegeri = sayi * 1000; // Kilometreyi metreye çevir
        }
        else if (birim1 === 'hektometre' && birim2 === 'santimetre') {
            sonucDegeri = sayi * 10000; // Kilometreyi metreye çevir
        } 
        else if (birim1 === 'hektometre' && birim2 === 'milimetre') {
            sonucDegeri = sayi * 100000; // Kilometreyi metreye çevir
        }
       
        else if (birim2 === 'hektometre' && birim1 === 'dekametre') {
            sonucDegeri = sayi / 10; // Kilometreyi metreye çevir
        }
        else if (birim2 === 'hektometre' && birim1 === 'metre') {
            sonucDegeri = sayi / 100; // Kilometreyi metreye çevir
        }
        else if (birim2 === 'hektometre' && birim1 === 'desimetre') {
            sonucDegeri = sayi / 1000; // Kilometreyi metreye çevir
        }
        else if (birim2 === 'hektometre' && birim1 === 'santimetre') {
            sonucDegeri = sayi / 10000; // Kilometreyi metreye çevir
        } 
        else if (birim2 === 'hektometre' && birim1 === 'milimetre') {
            sonucDegeri = sayi / 100000; // Kilometreyi metreye çevir
        }

    
        
        else if (birim1 === 'dekametre' && birim2 === 'metre') {
            sonucDegeri = sayi * 10; // Kilometreyi metreye çevir
        }
        else if (birim1 === 'dekametre' && birim2 === 'desimetre') {
            sonucDegeri = sayi * 100; // Kilometreyi metreye çevir
        }
        else if (birim1 === 'dekametre' && birim2 === 'santimetre') {
            sonucDegeri = sayi * 1000; // Kilometreyi metreye çevir
        } 
        else if (birim1 === 'dekametre' && birim2 === 'milimetre') {
            sonucDegeri = sayi * 10000; // Kilometreyi metreye çevir
        }
       
        else if (birim2 === 'dekametre' && birim1 === 'metre') {
            sonucDegeri = sayi / 10; // Kilometreyi metreye çevir
        }
        else if (birim2 === 'dekametre' && birim1 === 'desimetre') {
            sonucDegeri = sayi / 100; // Kilometreyi metreye çevir
        }
        else if (birim2 === 'dekametre' && birim1 === 'santimetre') {
            sonucDegeri = sayi / 1000; // Kilometreyi metreye çevir
        } 
        else if (birim2 === 'dekametre' && birim1 === 'milimetre') {
            sonucDegeri = sayi / 10000; // Kilometreyi metreye çevir
        }

        
        else if (birim1 === 'metre' && birim2 === 'desimetre') {
            sonucDegeri = sayi * 10; // Kilometreyi metreye çevir
        }
        else if (birim1 === 'metre' && birim2 === 'santimetre') {
            sonucDegeri = sayi * 100; // Kilometreyi metreye çevir
        } 
        else if (birim1 === 'metre' && birim2 === 'milimetre') {
            sonucDegeri = sayi * 1000; // Kilometreyi metreye çevir
        }
       
        
        else if (birim2 === 'metre' && birim1 === 'desimetre') {
            sonucDegeri = sayi / 10; // Kilometreyi metreye çevir
        }
        else if (birim2 === 'metre' && birim1 === 'santimetre') {
            sonucDegeri = sayi / 100; // Kilometreyi metreye çevir
        } 
        else if (birim2 === 'metre' && birim1 === 'milimetre') {
            sonucDegeri = sayi / 1000;// Kilometreyi metreye çevir
        }
        

    
        else if (birim1 === 'desimetre' && birim2 === 'santimetre') {
            sonucDegeri = sayi * 10; // Kilometreyi metreye çevir
        } 
        else if (birim1 === 'desimetre' && birim2 === 'milimetre') {
            sonucDegeri = sayi * 100; // Kilometreyi metreye çevir
        }
       
        else if (birim2 === 'desimetre' && birim1 === 'santimetre') {
            sonucDegeri = sayi / 10; // Kilometreyi metreye çevir
        } 
        else if (birim2 === 'desimetre' && birim1 === 'milimetre') {
            sonucDegeri = sayi / 100; // Kilometreyi metreye çevir
        }

        else if (birim1 === 'santimetre' && birim2 === 'milimetre') {
            sonucDegeri = sayi * 10; // Kilometreyi metreye çevir
        }
       
        else if (birim2 === 'santimetre' && birim1 === 'milimetre') {
            sonucDegeri = sayi / 10 // Kilometreyi metreye çevir
        }
        
        else {
            
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
