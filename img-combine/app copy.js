var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
var imageObj1 = new Image();
var imageObj2 = new Image();
var imageObj3 = new Image();
overlay1 = "/imgs/Broadcaster.png"
blueSide = "/imgs/JetBlackLogo2.png"
// redSide = "/imgs/F8-logo-blue-2019.png"
redSide = "/imgs/JetBlackLogo2.png"



imageObj1.src = overlay1
imageObj1.onload = function() {
   ctx.drawImage(imageObj1, 0, 0, 1920, 1080);
   imageObj2.src = blueSide;
   imageObj2.onload = function() {
      // ctx.drawImage(imageObj2, 314, 830, 275, 190);
      imageObj3.src = redSide;
      imageObj3.onload = function() {
         console.log(imageObj3.naturalWidth + " " + imageObj3.height)
         ctx.drawImage(imageObj3, 600, 830, 290, 190);
         var img = c.toDataURL("image/png");
         document.write('<img src="' + img + '" width="1920" height="1080"/>');
      }
   }
};
