<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"> <!-- icon eklecem -->


    <title>Hesap Makinesi</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="calculator">
        <input type="text" id="algilananMetin" placeholder="Sesli ifadeyi buraya girin">
        
        <div class="button-container">
            
            <button id="baslaButon" class="calc-button"><i class="fas fa-microphone" style="color: red;"></i></button>
            <button id="islemekle" class="calc-button" style="color: white;" >İşlem Ekle <i class="fas fa-plus" style="color: white;"></i></button>
            <button id="hesaplaButon" class="calc-button">Hesapla</button>
            <button id="silButon" class="calc-button"><i class="fas fa-trash" style="color: black;"></i></button>
        </div>
        
        <p id="sonuc"></p>
    </div>

    <script src="func.js"></script>
    <script src="islemekle.js"></script>
    <script src="hesapla.js"></script>
    <script src="sil.js"></script>
</body>
</html>