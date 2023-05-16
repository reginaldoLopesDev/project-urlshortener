const urlMap = new Map();
let shortUrlAcc = 0;
class Url{
    constructor(){}

    short(url){
        shortUrlAcc++
        urlMap.set(shortUrlAcc, url);
        return shortUrlAcc;
    }
    get(shortUrl){
        console.log(`Tô no get, url: ${shortUrl}`);
        return urlMap.get(Number(shortUrl));
    }
}
module.exports = Url;