
nombrealbumchoisi=0;


function changeprix(){
    var para = document.getElementById('prix')
    if(nombrealbumchoisi == 0){
        para.textContent= "Montant du panier : 0 €"
    }
    else if(nombrealbumchoisi == 1){
        para.textContent= "Montant du panier : 7.50 €"
    }
    else if(nombrealbumchoisi == 2){
        para.textContent= "Montant du panier : 15 €"
    }
    else if(nombrealbumchoisi == 3){
        para.textContent= "Montant du panier : 22.50 €"
    }
}

var descriptionsImages = {
    "posthuman.jpg" : "Post human survival horror - Bring Me The Horizon",
    "Sleep-Token-Take-Me-Back-to-Eden-Cover.jpeg" : "Take me back to eden - Sleep Token",
    "meteora.jpg": "Meteora - Linkin Park",
};

function changerdiv1(image){
    var cheminImage = image.src.substring(image.src.lastIndexOf('/') + 1);
    var description = descriptionsImages[cheminImage];

    var divDestination = document.getElementById('choisi');
    var paragraphe = document.createElement('p');
    paragraphe.textContent = description;
    divDestination.appendChild(image);
    divDestination.appendChild(paragraphe);

    image.setAttribute('onclick','changerdiv2(this)');
    nombrealbumchoisi += 1;
    changeprix();
}

function changerdiv2(image){
    var divDestination = document.getElementById('choisi');

    var divsource = document.getElementById('dispo');
    divsource.appendChild(image);
    image.setAttribute('onclick', 'changerdiv1(this)');
    nombrealbumchoisi -= 1;
    changeprix();
}