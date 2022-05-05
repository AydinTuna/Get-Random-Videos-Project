const request = require('request');
const cheerio = require('cheerio');

request("https://www.youtube.com/playlist?list=WL", (error, response, html) => {
    if (!error && response.statusCode == 200) {
        const $ = cheerio.load(html);

        const aTag = $("yt-img-shadow.ytd-topbar-menu-button-renderer");
        const link = aTag;

        console.log(aTag.html());
    
    }
});
