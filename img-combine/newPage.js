// var content = "data:text/html;charset=utf-8,<head></head><body><h3>Test Document</h3></body><script>window.print();</script>"



function onClick() {
    // var urls = myUrlScraper(window.location.pathname);
    var tempPage = "<html>" + "canvas5.png" + "</html>";
    
    var w = window.open(''); 
    w.document.write(tempPage);
}