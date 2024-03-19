/*function f(){
nom=prompt("Entrez votre nom");
alert("bonjour " + nom);}

f()

function facto(n){
    if(n==0){return 1;}
    return n*facto(n-1);
    
}
nombre=prompt("quel nombre bb ?");
alert(facto(nombre));

tab=["farine","oeuf","sel"];

tab.push("oeuf 2")


for (i=0;i<tab.length;i++){
    alert("ingredient " +i+ " "+tab[i]);
}


tab.pop(3);

for (element in tab){
    alert(tab[element]);
}

tablo=[1,2,-4,-5,3]

function accepte(tablo){
    tab=[]
    for (i of tablo){
        if( i > 0){
            tab.push(i);
        }
    }
    for (i in tab){
        alert(tab[i]);
    }

}

accepte(tablo)*/

/*function multipli(){
    chiffre = 10;
    while(chiffre >9 || chiffre <1){
        chiffre = prompt("donne chiffre entre 1 et 9 bb");
    }
    ch="";
    for(i=0;i<11;i++){
        res=i*chiffre;
        ch+=i + "x" + chiffre + "=" + res + "\n";
    }
    alert(ch);
}

multipli()




function multipli(){
    tab=[]
    chiffre = 10;
    while(chiffre >9 || chiffre <1){
        chiffre = prompt("donne chiffre entre 1 et 9 bb");
    }
    for(i=0;i<11;i++){
        tab.push(i*chiffre);
        alert(tab[i]);
    }

}*/

function tablo(){
    tab=[];
    chiffre = 9;
    while(chiffre < 10){
        chiffre = prompt("donne un chiffre plus que 10 bb");
    }
    for(i=0; i < chiffre; i++){
        tab.push(Math.floor(Math.random()* (99) + 1));
    }
    return tab;

}

function moyenne(tab){
    longue = tab.length;
    moy = 0;
    for(i=0; i<longue;i++){
        moy = moy + tab[i];
    }
    moy = moy / longue;
    return moy;
    
}


function variance (tab,moy){
    longue = tab.length;
    somme = 0;
    for(i=0; i<longue;i++){
        somme = somme + (tab[i]-moy)**2;
    }
    somme = somme / (tab.length);
    return somme;

}

function ecartype (somme){
    ecar = 0;
    ecar = Math.sqrt(somme);
    return ecar;
}


function normalisation(tab,moy,ecar){
    tablo=[];
    longue = tab.length;
    for(i=0; i<longue;i++){
        tablo.push((tab[i]-moy)/ecar);
    }
    return tablo;
}

function multipli(tab){
    longue = tab.length;
    ch="";
    for(i=0;i<longue;i++){
        ch+= tab[i] + "\n";
    }
    alert(ch);
}

tab = tablo()

moy = moyenne(tab)

somme = variance(tab,moy)

ecar = ecartype(somme)

normal = normalisation(tab,moy,ecar);

alert("Tableau avant normalisation")
console.log(multipli(tab))
alert("Tableau après normalisation")
console.log(multipli(normal))
