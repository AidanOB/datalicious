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

function datalayerToImgSrc(datalayer, baseUrl) {
    // This function takes a datalayer object and converts them into a html image tag before appending them 
    // as child to the the body tag of the document
    // input 'datalayer: datalayer object
    // input 'baseUrl': string with the base url for the image queries to be attached.
    // return: false
    
    var imgString = baseUrl + "?"; 
    
    for (var key in datalayer) {
        imgString = imgString + key + "=" + datalayer[key] + "&";
    }
    
    imgString = imgString.substring(0, imgString.length -1);
    
    var imgSrc = document.createElement('img');
    imgSrc.src = imgString;
    document.body.appendChild(imgSrc);
	
    return false;
}

var baseImgUrl = "https://example.com/datacollector";

function datalayerToAndFromStorage(datalayer) {
    // This function is to demonstrate sending an object to storage and retrieving it.
    // input 'datalayer': The datalayer object from the previous tasks
    // return: datalayer object if storage is possible, else false
    
    // To prevent breakage
    if(typeof(Storage) !== "undefined") {
        // Send datalayer to HTML5 Local Storage
        localStorage.setItem('datalayer object', datalayer);
        
        //Retrieving the datalayer
        var retrievedDatalayer = localStorage.getItem('datalayer object');
    
    } else {
        console.log(" No HTML5 Storage support.");
        return false;
    }
    
    return retrievedDatalayer;
}
