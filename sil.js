document.addEventListener('DOMContentLoaded', function() {
    const algilananMetin = document.getElementById('algilananMetin');
    const silButon = document.getElementById('silButon');
    const ifade="Sesli ifadeyi buraya girin";

    // Başlat Butonuna Tıklama Olayını Ekle
    silButon.addEventListener('click', function() {
     

        if(algilananMetin.value===ifade){
            
        }
        else{
            algilananMetin.value='';
        }
        
    });      
    });
