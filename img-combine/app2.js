var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
var imageObj1 = new Image();
var imageObj2 = new Image();
var imageObj3 = new Image();
var imageObj4 = new Image();
PHBcaster = "PHB: Jake Kelton"
colorCaster = "Color: Axeman"
// blueTeam = "Jet Black Clover"
blueTeam = "Figure 8"
// redTeam = "Figure 8"
redTeam = "JetBlackClover"
// redScore = "2-1"
redScore = "1-2"
// blueScore = "1-2"
blueScore = "2-1"
title = "Midweight Scrim Gym"
week = "Week 12"
overlay1 = "BroadcasterPostGame.png"
// blueSide = "JetBlackLogo2.png"
blueSide = "F8-logo-blue-2019.png"
redSide = "JetBlackLogo2.png"
// redSide = "F8-logo-blue-2019.png"
eventLogo = "ScrimGymTest3.png"
// eventLogo = "RisenEsports.png"

// jetblack redside width = 290 height = 178.319....
// f8 logo width = 154 height = 190

var maxRWidth = 372; // Max width for the image
var maxRHeight = 256;    // Max height for the image
var ratioR = 0;  // Used for aspect ratio

var maxBWidth = 372; // Max width for the image
var maxBHeight = 256;    // Max height for the image
var ratioB = 0;  // Used for aspect ratio

var maxLWidth = 290;
var maxLHeight = 170;
var ratioL = 0;

{
function drawTitle() {
   ctx.font = "100px Arial";
   ctx.textAlign = "left";
   ctx.fillStyle = "white";
   ctx.fillText(title, 305, 920);
};

   function drawWeek() {
      ctx.font = "30px Arial";
      ctx.textAlign = "left";
      ctx.fillStyle = "white";
      ctx.fillText(Week, 445, 1500);
};

function drawPHBcaster() {
   ctx.font = "25px Arial";
   ctx.textAlign = "center";
   ctx.fillStyle = "white";
   ctx.fillText(PHBcaster, 1521, 835);
};

function drawColorCaster() {
   ctx.font = "25px Arial";
   ctx.textAlign = "center";
   ctx.fillStyle = "white";
   ctx.fillText(colorCaster, 1521, 860);
};

function drawRScore() {
   ctx.font = "35px Arial";
   ctx.textAlign = "center";
   ctx.fillStyle = "white";
   ctx.fillText(redScore, 1513, 766);
}

function drawBScore() {
   ctx.font = "35px Arial";
   ctx.textAlign = "center";
   ctx.fillStyle = "white";
   ctx.fillText(blueScore, 1513, 410);
}

function drawRteam() {
   ctx.font = "50px Arial";
   ctx.textAlign = "left";
   ctx.fillStyle = "white";
   ctx.fillText(redTeam, 120, 497);
}

function drawBteam() {
   ctx.font = "50px Arial";
   ctx.textAlign = "left";
   ctx.fillStyle = "white";
   ctx.fillText(blueTeam, 120, 160);
}

function drawTest() {
   ctx.font = "20px Arial";
   // ctx.textAlign = "center";
   ctx.fillStyle = "red";
   ctx.fillText("test", 315, 795);
   //left is 15
   //right is 315
   //bottom is 965
   //top is 795
}
}
console.log(redSide.naturalWidth + " " + redSide.naturalHeight)

imageObj1.src = overlay1

imageObj1.onload = function() {
   ctx.drawImage(imageObj1, 0, 0, 1920, 1080);
   drawTitle();
   drawPHBcaster();
   drawColorCaster();
   drawRScore();
   drawBScore();
   drawRteam();
   drawBteam();
   // drawTest();
   imageObj2.src = blueSide;

   imageObj2.onload = function() {
      console.log(imageObj2.naturalWidth + " " + imageObj2.naturalHeight)
            var width = imageObj2.naturalWidth   // Current image width
            var height = imageObj2.naturalHeight   // Current image height

              // Check if the current width is larger than the max
              if(width > maxBWidth){
               ratioB = maxBWidth / width;   // get ratio for scaling image
               newBWidth = maxBWidth; // Set new width
               newBHeight = height * ratioB;  // Scale height based on ratio
               height = height * ratioB;    // Reset height to match scaled image
               width = width * ratioB;    // Reset width to match scaled image
           }
   
           // Check if current height is larger than max
           if(height > maxBHeight){
               ratioB = maxBHeight / height; // get ratio for scaling image
               newBHeight = maxBHeight   // Set new height
               newBWidth = width * ratioB    // Scale width based on ratio
               width = width * ratioB;    // Reset width to match scaled image
               height = height * ratioB;    // Reset height to match scaled image
           }
           xBPlacement = (186.5 - (width / 2)) + 1335
         //   yBPlacement = 810 - (95 + (height / 2))


         console.log(width + " " + height)
      ctx.drawImage(imageObj2, xBPlacement, 110, width, height);
      imageObj3.src = redSide;

      imageObj3.onload = function() {
         console.log(imageObj3.naturalWidth + " " + imageObj3.naturalHeight)
         var width = imageObj3.naturalWidth   // Current image width
         var height = imageObj3.naturalHeight   // Current image height

           // Check if the current width is larger than the max
           if(width > maxRWidth){
            ratioR = maxRWidth / width;   // get ratio for scaling image
            newRWidth = maxRWidth; // Set new width
            newRHeight = height * ratioR;  // Scale height based on ratio
            height = height * ratioR;    // Reset height to match scaled image
            width = width * ratioR;    // Reset width to match scaled image
        }

        // Check if current height is larger than max
        if(height > maxRHeight){
            ratioR = maxRHeight / height; // get ratio for scaling image
            newRHeight = maxRHeight   // Set new height
            newRWidth = width * ratioR    // Scale width based on ratio
            width = width * ratioR;    // Reset width to match scaled image
            height = height * ratioR;    // Reset height to match scaled image
        }
        xRPlacement = (186.5 - (width / 2)) + 1382
      //   yRPlacement = 810 + (93 - (height / 2))
        console.log(width + " " + height)
         ctx.drawImage(imageObj3, xRPlacement, 830, width, height);
         imageObj4.src = eventLogo
         imageObj4.onload = function() {
            var width = imageObj4.naturalWidth 
            var height = imageObj4.naturalHeight

               if(width > maxLWidth) {
                  ratioL = maxLWidth / width;
                  newLWidth = maxLWidth;
                  newLHeight = height * ratioL
                  width = width * ratioL
                  height = height * ratioL
               }

               if(height > maxLHeight){
                  ratioL = maxLHeight / width;
                  newLHeight = maxLHeight;
                  newLWidth = width * ratioL
                  width = width * ratioL
                  height = height * ratioL
               }

               xLPlacement = (145 - (width / 2)) + 8
               yLPlacement = 795 + (75 - (height / 2))
            ctx.drawImage(imageObj4, xLPlacement, yLPlacement, width, height);
            var img = c.toDataURL("image/png");
            document.write('<img src="' + img + '" width="1920" height="1080"/>');
         }
      }
   }
};								