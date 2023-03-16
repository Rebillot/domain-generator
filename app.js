
listaPronombres = ["I", "you", "he", "she", "it", "we", "they", "what", "who","mine", "yours", "his", "hers", "ours", "theirs" , "this", "that", "these", "those", "who", "whom", "which", "what", "whose", "whoever", "whatever", "whichever", "whomever"];
listaAdjetivos = ["accidentally", "angrily", "anxiously", "awkwardly", "badly", "beautifully", "blindly", "boldly", "bravely", "brightly", "busily", "calmly", "carefully", "carelessly", "cautiously", "cheerfully", "clearly", "closely", "correctly", "courageously", "cruelly", "daringly", "deliberately", "doubtfully", "eagerly", "easily", "elegantly", "enormously", "enthusiastically", "equally", "eventually", "exactly", "faithfully", "fast", "fatally", "fiercely", "fondly", "foolishly", "fortunately", "frankly", "frantically", "generously", "gently", "gladly", "gracefully", "greedily", "happily", "hard", "hastily", "healthily", "honestly", "hungrily", "hurriedly", "inadequately", "ingeniously", "innocently", "inquisitively", "irritably", "joyously", "justly", "kindly", "lazily", "loosely", "loudly", "madly", "mortally", "mysteriously", "neatly", "nervously", "noisily", "obediently", "openly", "painfully", "patiently", "perfectly", "politely", "poorly", "powerfully", "promptly", "punctually", "quickly", "quietly", "rapidly", "rarely", "really", "recklessly", "regularly", "reluctantly", "repeatedly", "rightfully", "roughly", "rudely", "sadly", "safely", "selfishly", "sensibly", "seriously", "sharply", "shyly", "silently", "sleepily", "slowly", "smoothly", "so", "softly", "solemnly", "speedily", "stealthily", "sternly", "straight", "stupidly", "successfully", "suddenly", "suspiciously", "swiftly", "tenderly", "tensely", "thoughtfully", "tightly", "truthfully", "unexpectedly", "victoriously", "violently", "vivaciously", "warmly", "weakly", "wearily", "well", "wildly", "wisely"];
listaSustantivos = ["eCommerce-website", "Business-website", "Blog-website", "Portfolio-website", "Event-website", "Personal-website", "Membership-website", "Nonprofit-website", "Informational website", "Online-forum"];


let generateRandomDomainName = () =>{


    var pronombre = listaPronombres[Math.floor(Math.random() * listaPronombres.length)+1];
    var adjetivo = listaAdjetivos[Math.floor(Math.random()* listaAdjetivos.length)+1];
    var sustantivo = listaSustantivos[Math.floor(Math.random()* listaSustantivos.length)+1];


    return (console.log(pronombre + "-" + adjetivo + "-made-this-" + sustantivo + ".com"))
        
    
}

for (let i = 0; i < listaPronombres.length; i++){
    for (let w = 0; w < listaAdjetivos.length; w++){
        for (let e = 0; e < listaSustantivos.length; e++){
            generateRandomDomainName();
        }
    }
}
    
