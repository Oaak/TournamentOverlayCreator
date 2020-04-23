var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
var imageObj1 = new Image();
var imageObj2 = new Image();
var imageObj3 = new Image();
var imageObj4 = new Image();
PHBcaster = "PHB: Jake Kelton"
colorCaster = "Color: Axeman"
blueTeam = "Jet Black Clover"
// blueTeam = "Figure 8"
redTeam = "Figure 8"
// redTeam = "JetBlackClover"
// redScore = "2-1"
redScore = "1-2"
// blueScore = "1-2"
blueScore = "2-1"
title = "XLNC Light Testing Grounds"
week = "Week 12"
overlay1 = "BroadcasterPickAndBanPNG.png"
blueSide = "JetBlackLogo2.png"
// blueSide = "F8-logo-blue-2019.png"
// redSide = "JetBlackLogo2.png"
redSide = "F8-logo-blue-2019.png"
// eventLogo = "ScrimGymTest3.png"
eventLogo = "RisenEsports.png"

// jetblack redside width = 290 height = 178.319....
// f8 logo width = 154 height = 190

var maxRWidth = 232; // Max width for the image
var maxRHeight = 160;    // Max height for the image
var ratioR = 0;  // Used for aspect ratio

var maxBWidth = 234; // Max width for the image
var maxBHeight = 160;    // Max height for the image
var ratioB = 0;  // Used for aspect ratio

var maxLWidth = 262;
var maxLHeight = 228;
var ratioL = 0;

{
function drawTitle() {
   ctx.font = "60px Arial";
   ctx.textAlign = "center";
   ctx.fillStyle = "white";
   ctx.fillText(title, 960, 470);
};

function drawWeek() {
   ctx.font = "50px Arial";
   ctx.textAlign = "center";
   ctx.fillStyle = "white";
   ctx.fillText(week, 960, 540);
};

function drawPHBcaster() {
   ctx.font = "30px Arial";
   ctx.textAlign = "center";
   ctx.fillStyle = "white";
   ctx.fillText(PHBcaster, 960, 995);
};

function drawColorCaster() {
   ctx.font = "30px Arial";
   ctx.textAlign = "center";
   ctx.fillStyle = "white";
   ctx.fillText(colorCaster, 960, 1025);
};

function drawRScore() {
   ctx.font = "35px Arial";
   ctx.textAlign = "center";
   ctx.fillStyle = "white";
   ctx.fillText(redScore, 1672, 984);
}

function drawBScore() {
   ctx.font = "35px Arial";
   ctx.textAlign = "center";
   ctx.fillStyle = "white";
   ctx.fillText(blueScore, 247, 984);
}

function drawRteam() {
   ctx.font = "35px Arial";
   ctx.textAlign = "center";
   ctx.fillStyle = "white";
   ctx.fillText(redTeam, 1273, 85);
}

function drawBteam() {
   ctx.font = "35px Arial";
   ctx.textAlign = "center";
   ctx.fillStyle = "white";
   ctx.fillText(blueTeam, 653, 85);
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
   drawWeek();
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
           xBPlacement = (122 - (width / 2)) + 125
           yBPlacement = ((774 + 944) / 2) - (height / 2)


         console.log(width + " " + height)
      ctx.drawImage(imageObj2, xBPlacement, yBPlacement, width, height);
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
        xRPlacement = (121 - (width / 2)) + 1551
        yRPlacement = ((774 + 944) / 2) - (height / 2)
        console.log(width + " " + height)
         ctx.drawImage(imageObj3, xRPlacement, yRPlacement, width, height);
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

               xLPlacement = (1920 / 2) - (width / 2)
               yLPlacement = 290 - (height / 2)
            ctx.drawImage(imageObj4, xLPlacement, yLPlacement, width, height);
            var img = c.toDataURL("image/png");
            document.write('<img src="' + img + '" width="1920" height="1080"/>');
         }
      }
   }
};								