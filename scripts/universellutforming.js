var factsArray = ["UU står for Universell Utforming", "Utformingen skal være brukbar og lett tilgjengelig for personer med ulike evner", "Utformingen skal minimalisere farer", "Utformingen må være lett å forstå", "Det er forskjellige nivåer innenfor WCAG: fra A (mild) til AAA (strengt)", "For oppnå UU bør man bruke alt-attributt for bilder i HTML", "Lenker burde være markert med mer enn kun farger, f.eks med understreking", "Tekst burde ha god kontrast for å kunne leses komfortabelt", "Lurt å velge språk i HTML taggen"];

// random fact generator
function UUfacts() {
    var randomizedFact = Math.floor(Math.random() * factsArray.length);
    document.getElementById("UU-fakta-output").innerHTML = factsArray[randomizedFact];
}

// for å vise alle fakta i en liste
function allFacts() {
    
    if (window.confirm("Er du helt sikker på at du vil jukse og se alle faktaene på en gang?")){
        var text;

    text = "<ol>";
    for (i = 0; i < factsArray.length; i++) {
        text += "<li>" + factsArray[i] + "</li>";
    }
    text += "</ol>";

    document.getElementById("p-output").innerHTML = text; 
    }else{
        
    }
    
    /*
    var text;

    text = "<ol>";
    for (i = 0; i < factsArray.length; i++) {
        text += "<li>" + factsArray[i] + "</li>";
    }
    text += "</ol>";

    document.getElementById("demo").innerHTML = text; */
}
