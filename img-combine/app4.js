var c=document.getElementById("overlay4");
var ctx=c.getContext("2d");
var imageObj1 = new Image();
var imageObj2 = new Image();
var imageObj3 = new Image();
var imageObj4 = new Image();
var imageObj5 = new Image();
var imageObj6 = new Image();
var imageObj7 = new Image();
var imageObj8 = new Image();
var imageObj9 = new Image();
var imageObj10 = new Image();
console.log("-----------------")
console.log("app4")
console.log(c)



blueSide2 = "F8-logo-blue-2019.png"
redSide2 = "JetBlackLogo2.png"
blueSide3 = "JetBlackLogo2.png"
redSide3 = "F8-logo-blue-2019.png"
blueSide4 = "F8-logo-blue-2019.png"
redSide4 = "JetBlackLogo2.png"
PHBcaster = "PHB: Jake Kelton"
colorCaster = "Color: Axeman"
blueTeam = "Jet Black Clover"
redTeam = "JetBlackClover"
redScore = "1-2"
blueScore = "2-1"
title = "Lightweight Testing Grounds"
week = "Week 12"
overlay1 = "Broadcasterintermission.png"
blueSide = "JetBlackLogo2.png"
redSide = "F8-logo-blue-2019.png"
eventLogo = "RisenEsports.png"
comingUp = "COMING UP"
type = "Lightweight"

var maxRWidth = 112; // Max width for the image
var maxRHeight = 122;    // Max height for the image
var ratioR = 0;  // Used for aspect ratio

var maxBWidth = 112; // Max width for the image
var maxBHeight = 122;    // Max height for the image
var ratioB = 0;  // Used for aspect ratio

var maxTWidth = 112;
var maxTHeight = 122;
var ratioT = 0;

var maxLWidth = 286;
var maxLHeight = 155;
var ratioL = 0;

{
function drawTitle() {
   if (title !== null) {
      ctx.font = "40px Arial";
      ctx.textAlign = "center";
      ctx.fillStyle = "white";
      ctx.fillText(title, 307, 241);
   }
};

function drawWeek() {
   if (week !== null) {
      ctx.font = "40px Arial";
      ctx.textAlign = "center";
      ctx.fillStyle = "white";
      ctx.fillText(week, 307, 346);
   }
};

function drawType() {
   if (type !== null) {
   ctx.font = "40px Arial";
   ctx.textAlign = "center";
   ctx.fillStyle = "white";
   ctx.fillText(type, 307, 296);
   }
};

function drawPHBcaster() {
   if (PHBcaster !== null) {
   ctx.font = "30px Arial";
   ctx.textAlign = "center";
   ctx.fillStyle = "white";
   ctx.fillText(PHBcaster, 960, 995);
   }
};

function drawColorCaster() {
   if (colorCaster !== null) {
   ctx.font = "30px Arial";
   ctx.textAlign = "center";
   ctx.fillStyle = "white";
   ctx.fillText(colorCaster, 960, 1025);
   }
};

function drawRScore() {
   if (redScore !== null) {
   ctx.font = "35px Arial";
   ctx.textAlign = "center";
   ctx.fillStyle = "white";
   ctx.fillText(redScore, 1672, 984);
   }
}

function drawBScore() {
   if (blueScore !== null) {
   ctx.font = "35px Arial";
   ctx.textAlign = "center";
   ctx.fillStyle = "white";
   ctx.fillText(blueScore, 247, 984);
   }
}

function drawRteam() {
   if (redTeam !== null) {
   ctx.font = "35px Arial";
   ctx.textAlign = "center";
   ctx.fillStyle = "white";
   ctx.fillText(redTeam, 1273, 85);
   }
}

function drawBteam() {
   if (blueTeam !== null) {
   ctx.font = "35px Arial";
   ctx.textAlign = "center";
   ctx.fillStyle = "white";
   ctx.fillText(blueTeam, 653, 85);
   }
}

function drawComingUp() {
   if (comingUp !== null) {
   ctx.font = "35px Arial";
   ctx.textAlign = "center";
   ctx.fillStyle = "white";
   ctx.fillText(comingUp, 307, 477);
   }
}

function drawVS() {
   // if (blueSide !==null && redSide !==null){
   //    ctx.font = "35px Arial";
   //    ctx.textAlign = "center";
   //    ctx.fillStyle = "white";
   //    ctx.fillText("VS", 307, 556);
   // }
   if (blueSide2 !==null && redSide2 !==null){
      ctx.font = "35px Arial";
      ctx.textAlign = "center";
      ctx.fillStyle = "white";
      ctx.fillText("VS", 307, 682);
   }
   if (blueSide3 !==null && redSide3 !==null){
      ctx.font = "35px Arial";
      ctx.textAlign = "center";
      ctx.fillStyle = "white";
      ctx.fillText("VS", 307, 800);
   }
   if (blueSide4 !==null && redSide4 !==null){
      ctx.font = "35px Arial";
      ctx.textAlign = "center";
      ctx.fillStyle = "white";
      ctx.fillText("VS", 307, 922);
   }
}

function drawTest() {
   ctx.font = "20px Arial";
   // ctx.textAlign = "center";
   ctx.fillStyle = "red";
   ctx.fillText("test", 315, 795);

   //title height 251 203

   //logo width 160 and 446 286 pixel width
   //133 logo width
   //logo height 122 2.5
   //team 1 x = 
   //logo area height 477 1007
   // teams 1 and 2 482
   // teams 3 and 4 604
   // teams 5 and 6 726
   // teams 7 and 8 848
}
}
// console.log(redSide.naturalWidth + " " + redSide.naturalHeight)

imageObj1.src = overlay1

imageObj1.onload = function() {
   ctx.drawImage(imageObj1, 0, 0, 1920, 1080);
   drawTitle();
   // drawPHBcaster();
   // drawColorCaster();
   // drawRScore();
   // drawBScore();
   // drawRteam();
   // drawBteam();
   drawWeek();
   drawComingUp();
   drawType();
   drawVS();
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
           xBPlacement = (56 - (width / 2)) + 163
           yBPlacement = ((485 + 607) / 2) - (height / 2)


         console.log(width + " " + height)
      ctx.drawImage(imageObj2, xBPlacement, yBPlacement, width, height);

      if (blueSide2 !== null) {
         imageObj5.src = blueSide2;

         imageObj5.onload = function() {
            console.log(imageObj5.naturalWidth + " " + imageObj5.naturalHeight)
                  var width = imageObj5.naturalWidth   // Current image width
                  var height = imageObj5.naturalHeight   // Current image height
      
                    // Check if the current width is larger than the max
                    if(width > maxTWidth){
                     ratioT = maxTWidth / width;   // get ratio for scaling image
                     newTWidth = maxTWidth; // Set new width
                     newTHeight = height * ratioT;  // Scale height based on ratio
                     height = height * ratioT;    // Reset height to match scaled image
                     width = width * ratioT;    // Reset width to match scaled image
                 }
         
                 // Check if current height is larger than max
                 if(height > maxTHeight){
                     ratioT = maxTHeight / height; // get ratio for scaling image
                     newTHeight = maxTHeight   // Set new height
                     newTWidth = width * ratioT    // Scale width based on ratio
                     width = width * ratioT;    // Reset width to match scaled image
                     height = height * ratioT;    // Reset height to match scaled image
                 }
                 xTPlacement = (56 - (width / 2)) + 163
                 yTPlacement = ((610 + 732) / 2) - (height / 2)
      
      
               console.log(width + " " + height)
            ctx.drawImage(imageObj5, xTPlacement, yTPlacement, width, height);
      }
      }

         if (blueSide3 !== null) {
            imageObj6.src = blueSide3;
         
            imageObj6.onload = function() {
               console.log(imageObj6.naturalWidth + " " + imageObj6.naturalHeight)
                     var width = imageObj6.naturalWidth   // Current image width
                     var height = imageObj6.naturalHeight   // Current image height
            
                       // Check if the current width is larger than the max
                       if(width > maxTWidth){
                        ratioT = maxTWidth / width;   // get ratio for scaling image
                        newTWidth = maxTWidth; // Set new width
                        newTHeight = height * ratioT;  // Scale height based on ratio
                        height = height * ratioT;    // Reset height to match scaled image
                        width = width * ratioT;    // Reset width to match scaled image
                    }
                 
                    // Check if current height is larger than max
                    if(height > maxTHeight){
                        ratioT = maxTHeight / height; // get ratio for scaling image
                        newTHeight = maxTHeight   // Set new height
                        newTWidth = width * ratioT    // Scale width based on ratio
                        width = width * ratioT;    // Reset width to match scaled image
                        height = height * ratioT;    // Reset height to match scaled image
                    }
                    xTPlacement = (56 - (width / 2)) + 163
                    yTPlacement = ((732 + 854) / 2) - (height / 2)
                 
                 
                  console.log(width + " " + height)
               ctx.drawImage(imageObj6, xTPlacement, yTPlacement, width, height);
         }
      }

            if (blueSide4 !== null) {
               imageObj7.src = blueSide4;
            
               imageObj7.onload = function() {
                  console.log(imageObj7.naturalWidth + " " + imageObj7.naturalHeight)
                        var width = imageObj7.naturalWidth   // Current image width
                        var height = imageObj7.naturalHeight   // Current image height
               
                          // Check if the current width is larger than the max
                          if(width > maxTWidth){
                           ratioT = maxTWidth / width;   // get ratio for scaling image
                           newTWidth = maxTWidth; // Set new width
                           newTHeight = height * ratioT;  // Scale height based on ratio
                           height = height * ratioT;    // Reset height to match scaled image
                           width = width * ratioT;    // Reset width to match scaled image
                       }
                    
                       // Check if current height is larger than max
                       if(height > maxTHeight){
                           ratioT = maxTHeight / height; // get ratio for scaling image
                           newTHeight = maxTHeight   // Set new height
                           newTWidth = width * ratioT    // Scale width based on ratio
                           width = width * ratioT;    // Reset width to match scaled image
                           height = height * ratioT;    // Reset height to match scaled image
                       }
                       xTPlacement = (56 - (width / 2)) + 163
                       yTPlacement = ((854 + 976) / 2) - (height / 2)
                    
                    
                     console.log(width + " " + height)
                  ctx.drawImage(imageObj7, xTPlacement, yTPlacement, width, height);
            }
            }

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
        xRPlacement = (56 - (width / 2)) + 331
        yRPlacement = ((485 + 607) / 2) - (height / 2)
        console.log(width + " " + height)
         ctx.drawImage(imageObj3, xRPlacement, yRPlacement, width, height);

         if (redSide2 !== null) {
            imageObj8.src = redSide2;
            
            imageObj8.onload = function() {
               console.log(imageObj8.naturalWidth + " " + imageObj8.naturalHeight)
                     var width = imageObj8.naturalWidth   // Current image width
                     var height = imageObj8.naturalHeight   // Current image height
            
                       // Check if the current width is larger than the max
                       if(width > maxTWidth){
                        ratioT = maxTWidth / width;   // get ratio for scaling image
                        newTWidth = maxTWidth; // Set new width
                        newTHeight = height * ratioT;  // Scale height based on ratio
                        height = height * ratioT;    // Reset height to match scaled image
                        width = width * ratioT;    // Reset width to match scaled image
                    }
                 
                    // Check if current height is larger than max
                    if(height > maxTHeight){
                        ratioT = maxTHeight / height; // get ratio for scaling image
                        newTHeight = maxTHeight   // Set new height
                        newTWidth = width * ratioT    // Scale width based on ratio
                        width = width * ratioT;    // Reset width to match scaled image
                        height = height * ratioT;    // Reset height to match scaled image
                    }
                    xTPlacement = (56 - (width / 2)) + 331
                    yTPlacement = ((610 + 732) / 2) - (height / 2)
                 
                 
                  console.log(width + " " + height)
               ctx.drawImage(imageObj8, xTPlacement, yTPlacement, width, height);
         }
         }

         if (redSide3 !== null) {
            imageObj9.src = redSide3;
            
            imageObj9.onload = function() {
               console.log(imageObj9.naturalWidth + " " + imageObj9.naturalHeight)
                     var width = imageObj9.naturalWidth   // Current image width
                     var height = imageObj9.naturalHeight   // Current image height
            
                       // Check if the current width is larger than the max
                       if(width > maxTWidth){
                        ratioT = maxTWidth / width;   // get ratio for scaling image
                        newTWidth = maxTWidth; // Set new width
                        newTHeight = height * ratioT;  // Scale height based on ratio
                        height = height * ratioT;    // Reset height to match scaled image
                        width = width * ratioT;    // Reset width to match scaled image
                    }
                 
                    // Check if current height is larger than max
                    if(height > maxTHeight){
                        ratioT = maxTHeight / height; // get ratio for scaling image
                        newTHeight = maxTHeight   // Set new height
                        newTWidth = width * ratioT    // Scale width based on ratio
                        width = width * ratioT;    // Reset width to match scaled image
                        height = height * ratioT;    // Reset height to match scaled image
                    }
                    xTPlacement = (56 - (width / 2)) + 331
                    yTPlacement = ((732 + 854) / 2) - (height / 2)
                 
                 
                  console.log(width + " " + height)
               ctx.drawImage(imageObj9, xTPlacement, yTPlacement, width, height);
         }
         }

         if (redSide4 !== null) {
            imageObj10.src = redSide4;
            
            imageObj10.onload = function() {
               console.log(imageObj10.naturalWidth + " " + imageObj10.naturalHeight)
                     var width = imageObj10.naturalWidth   // Current image width
                     var height = imageObj10.naturalHeight   // Current image height
            
                       // Check if the current width is larger than the max
                       if(width > maxTWidth){
                        ratioT = maxTWidth / width;   // get ratio for scaling image
                        newTWidth = maxTWidth; // Set new width
                        newTHeight = height * ratioT;  // Scale height based on ratio
                        height = height * ratioT;    // Reset height to match scaled image
                        width = width * ratioT;    // Reset width to match scaled image
                    }
                 
                    // Check if current height is larger than max
                    if(height > maxTHeight){
                        ratioT = maxTHeight / height; // get ratio for scaling image
                        newTHeight = maxTHeight   // Set new height
                        newTWidth = width * ratioT    // Scale width based on ratio
                        width = width * ratioT;    // Reset width to match scaled image
                        height = height * ratioT;    // Reset height to match scaled image
                    }
                    xTPlacement = (56 - (width / 2)) + 331
                    yTPlacement = ((854 + 976) / 2) - (height / 2)
                 
                 
                  console.log(width + " " + height)
               ctx.drawImage(imageObj10, xTPlacement, yTPlacement, width, height);
         }
         }

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

               xLPlacement = (138 - (width / 2)) + 165
               yLPlacement = ((33 + 198) / 2) - (height / 2)
            ctx.drawImage(imageObj4, xLPlacement, yLPlacement, width, height);
            var img = c.toDataURL("image/png");
            document.writeIn('<img src="' + img + '" width="1920" height="1080"/>');
         }
      }
   }
};								