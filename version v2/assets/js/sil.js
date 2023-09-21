document.addEventListener('DOMContentLoaded', function() {
    const algilananMetin = document.getElementById('algilananMetin');
    const silButon = document.getElementById('silButon');
    const algilananMetincm = document.getElementById('algilananMetincm');
    const silButoncm = document.getElementById('silButoncm');
    const ifade="Sesli ifadeyi buraya girin";

    // Başlat Butonuna Tıklama Olayını Ekle
    silButon.addEventListener('click', function() {
     

        if(algilananMetin.value===ifade){
            
        }
        else{
            algilananMetin.value='';
        }
        
    }); 
 // Başlat Butonuna Tıklama Olayını Ekle cm
    silButoncm.addEventListener('click', function() {
     

        if(algilananMetincm.value===ifade){
            
        }
        else{
            algilananMetincm.value='';
        }
        
    });
    
    });
