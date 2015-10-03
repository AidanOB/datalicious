var dataliciousUrl = "http://www.datalicious.com/?pia.ca=72208039&pie.de=cbartens@datalicious.com&pin.gn=Christian&pin.fn=Bartens&pip.de=&oi.na=&ps.na=&pl.ci=&pl.re=&pl.co=&utm_source=purl&utm_medium=purl&utm_campaign=purl";

function extractDatalayer(urlGiven) {
    // This function extracts the queries from an url given as a string and then puts each query into a datalayer
    // object as a seperate key pair
    // input: urlGiven is url given, format is url?queries
    // returns the datalayer object, with the queries seperated into keypairs.
    
    var datalayer = {}; // No code style was given, so chose literal
    var splitUrl = urlGiven.split("?");
    var keyPairs = splitUrl[splitUrl.length - 1].split("&");
    
    for (var i = 0; i < keyPairs.length; i++) {
        splitPair = keyPairs[i].split("=");
        datalayer[splitPair[0]] = splitPair[1];
    }
    
    return datalayer;
}

var dataLayer = extractDatalayer(dataliciousUrl);
console.log(dataLayer);