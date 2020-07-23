//START OF FIRST PAGE
console.log("new version mk8")
var eventLogo = "soon"
var blueSide2 = "F8-logo-blue-2019.png"
var redSide2 = "JetBlackLogo2.png"
var blueSide3 = "JetBlackLogo2.png"
var redSide3 = "F8-logo-blue-2019.png"
var blueSide4 = "F8-logo-blue-2019.png"
var redSide4 = "JetBlackLogo2.png"
var PHBcaster = document.getElementById("PHBcaster").value
var colorCaster = document.getElementById("colorCaster").value
var blueTeam = document.getElementById("blueTeam").value
var redTeam = document.getElementById("redTeam").value
var redScore = document.getElementById("redScore").value
var blueScore = document.getElementById("blueScore").value
var title = document.getElementById("title").value
var week = document.getElementById("week").value
var overlay1 = "Broadcaster.png"
var overlay2 = "BroadcasterPostGame.png"
var overlay3 = "BroadcasterPickAndBanPNG.png"
var overlay4 = "BroadcasterIntermission.png"
var blueSide = "soon"
var redSide = "soon"
// console.log(redSide)

function addImg(imgsrc) {
   // var img = document.createElement("img");
   // img.setAttribute("src", imgsrc.target.result);
   // document.getElementById("myForm").insertBefore(img, null);
   redSide = imgsrc.target.result
   onSubmit2()
 }
    function getAsImage(theFile) {
   var reader = new FileReader();
   reader.readAsDataURL(theFile);
   reader.onload = addImg;
 }
    function onSubmit() {
   var uploadElement = document.getElementById('fileToUploadRed');
   var theFile = uploadElement.files[0];
   if (theFile.type.match("image.*")) {
     getAsImage(theFile);
   } else {
     // unexpected type
   }
    }

    function addImg2(imgsrc) {
      // var img = document.createElement("img");
      // img.setAttribute("src", imgsrc.target.result);
      // document.getElementById("myForm").insertBefore(img, null);
      blueSide = imgsrc.target.result
      onSubmit3()
    }
       function getAsImage2(theFile) {
      var reader = new FileReader();
      reader.readAsDataURL(theFile);
      reader.onload = addImg2;
    }
       function onSubmit2() {
      var uploadElement = document.getElementById('fileToUploadBlue');
      var theFile = uploadElement.files[0];
      if (theFile.type.match("image.*")) {
        getAsImage2(theFile);
      } else {
        // unexpected type
      }

       }
       function addImg3(imgsrc) {
         // var img = document.createElement("img");
         // img.setAttribute("src", imgsrc.target.result);
         // document.getElementById("myForm").insertBefore(img, null);
         eventLogo = imgsrc.target.result
         execute()
       }
          function getAsImage3(theFile) {
         var reader = new FileReader();
         reader.readAsDataURL(theFile);
         reader.onload = addImg3;
       }
          function onSubmit3() {
         var uploadElement = document.getElementById('fileToUploadEvent');
         var theFile = uploadElement.files[0];
         if (theFile.type.match("image.*")) {
           getAsImage3(theFile);
         } else {
           // unexpected type
         }
          }


function execute() {

var c1=document.getElementById("overlay1");
var ctx1=c1.getContext("2d");
var imageObj11 = new Image();
var imageObj21 = new Image();
var imageObj31 = new Image();
var imageObj41 = new Image();

// console.log("-----------------")
// console.log("app1")

// eventLogo = "RisenEsports.png"

var maxRWidth1 = 290; // Max width1 for the image
var maxRHeight1 = 190;    // Max height1 for the image
var ratioR1 = 0;  // Used for aspect ratio

var maxBWidth1 = 275; // Max width1 for the image
var maxBHeight1 = 190;    // Max height1 for the image
var ratioB1 = 0;  // Used for aspect ratio

var maxLWidth1 = 290;
var maxLHeight1 = 170;
var ratioL1 = 0;

{
function drawTitle1() {
   if (title !== null) {
      ctx1.font = "30px Arial";
      ctx1.textAlign = "center";
      ctx1.fillStyle = "white";
      ctx1.fillText(title, 960, 830);
   }
};

function drawPHBcaster1() {
   if (PHBcaster !== null) {   
      ctx1.font = "25px Arial";
      ctx1.textAlign = "center";
      ctx1.fillStyle = "white";
      ctx1.fillText(PHBcaster, 145, 1003);
   }
};

function drawColorCaster1() {
   if (colorCaster !== null) {
      ctx1.font = "25px Arial";
      ctx1.textAlign = "center";
      ctx1.fillStyle = "white";
      ctx1.fillText(colorCaster, 145, 1033);
   }
};

function drawRScore1() {
   if (redScore !== null) {
      ctx1.font = "15px Arial";
      ctx1.textAlign = "center";
      ctx1.fillStyle = "white";
      ctx1.fillText(redScore, 1490, 1057);
   }
}

function drawBScore1() {
   if (blueScore !== null) {
      ctx1.font = "15px Arial";
      ctx1.textAlign = "center";
      ctx1.fillStyle = "white";
      ctx1.fillText(blueScore, 450, 1057);
   }
}

function drawRteam1() {
   if (redTeam !== null) {
      ctx1.font = "20px Arial";
      ctx1.textAlign = "center";
      ctx1.fillStyle = "white";
      ctx1.fillText(redTeam, 1490, 1040);
   }
}

function drawBteam1() {
   if (blueTeam !== null) {
      ctx1.font = "20px Arial";
      ctx1.textAlign = "center";
      ctx1.fillStyle = "white";
      ctx1.fillText(blueTeam, 450, 1040);
   }
}

function drawTest1() {
   ctx1.font = "20px Arial";
   // ctx1.textAlign = "center";
   ctx1.fillStyle = "red";
   ctx1.fillText("test", 315, 795);
   //left is 15
   //right is 315
   //bottom is 965
   //top is 795
}
}

imageObj11.src = overlay1

imageObj11.onload = function() {
   ctx1.drawImage(imageObj11, 0, 0, 1920, 1080);
   drawTitle1();
   drawPHBcaster1();
   drawColorCaster1();
   drawRScore1();
   drawBScore1();
   drawRteam1();
   drawBteam1();
   // drawTest();
   imageObj21.src = blueSide;

   imageObj21.onload = function() {
            var width1 = imageObj21.naturalWidth   // Current image width1
            var height1 = imageObj21.naturalHeight   // Current image height1

              // Check if the current width1 is larger than the max
              if(width1 > maxBWidth1){
               ratioB1 = maxBWidth1 / width1;   // get ratio for scaling image
               newBWidth1 = maxBWidth1; // Set new width1
               newBHeight1 = height1 * ratioB1;  // Scale height1 based on ratio
               height1 = height1 * ratioB1;    // Reset height1 to match scaled image
               width1 = width1 * ratioB1;    // Reset width1 to match scaled image
           }
   
           // Check if current height1 is larger than max
           if(height1 > maxBHeight1){
               ratioB1 = maxBHeight1 / height1; // get ratio for scaling image
               newBHeight1 = maxBHeight1   // Set new height1
               newBWidth1 = width1 * ratioB1    // Scale width1 based on ratio
               width1 = width1 * ratioB1;    // Reset width1 to match scaled image
               height1 = height1 * ratioB1;    // Reset height1 to match scaled image
           }
           xBPlacement1 = (137.5 - (width1 / 2)) + 314
           yBPlacement1 = ((822 + 1013) / 2) - (height1 / 2)
      ctx1.drawImage(imageObj21, xBPlacement1, yBPlacement1, width1, height1);
      imageObj31.src = redSide;

      imageObj31.onload = function() { 
         var width1 = imageObj31.naturalWidth   // Current image width1
         var height1 = imageObj31.naturalHeight   // Current image height1

           // Check if the current width1 is larger than the max
           if(width1 > maxRWidth1){
            ratioR1 = maxRWidth1 / width1;   // get ratio for scaling image
            newRWidth1 = maxRWidth1; // Set new width1
            newRHeight1 = height1 * ratioR1;  // Scale height1 based on ratio
            height1 = height1 * ratioR1;    // Reset height1 to match scaled image
            width1 = width1 * ratioR1;    // Reset width1 to match scaled image
        }

        // Check if current height1 is larger than max
        if(height1 > maxRHeight1){
            ratioR1 = maxRHeight1 / height1; // get ratio for scaling image
            newRHeight1 = maxRHeight1   // Set new height1
            newRWidth1 = width1 * ratioR1    // Scale width1 based on ratio
            width1 = width1 * ratioR1;    // Reset width1 to match scaled image
            height1 = height1 * ratioR1;    // Reset height1 to match scaled image
        }
        xRPlacement2 = (145 - (width1 / 2)) + 1345
        yRPlacement2 = ((822 + 1013) / 2) - (height1 / 2)
        
         ctx1.drawImage(imageObj31, xRPlacement2, yRPlacement2, width1, height1);
         imageObj41.src = eventLogo
         imageObj41.onload = function() {
            var width1 = imageObj41.naturalWidth 
            var height1 = imageObj41.naturalHeight

               if(width1 > maxLWidth1) {
                  ratioL1 = maxLWidth1 / width1;
                  newLWidth1 = maxLWidth1;
                  newLHeight1 = height1 * ratioL1
                  width1 = width1 * ratioL1
                  height1 = height1 * ratioL1
               }

               if(height1 > maxLHeight1){
                  ratioL1 = maxLHeight1 / width1;
                  newLHeight1 = maxLHeight1;
                  newLWidth1 = width1 * ratioL1
                  width1 = width1 * ratioL1
                  height1 = height1 * ratioL1
               }

               xLPlacement1 = (145 - (width1 / 2)) + 8
               yLPlacement1 = ((782 + 952) / 2) - (height1 / 2)
            ctx1.drawImage(imageObj41, xLPlacement1, yLPlacement1, width1, height1);
            var img1 = c1.toDataURL("image/png");
            var z = document.createElement('IMG'); // is a node
            z.setAttribute("src", img1)
            z.setAttribute("width", "1920")
            z.setAttribute("height", "1080")
            // z.innerHTML = img1;
            document.appendChild(z);
            // document.appendChild('<img src="' + img1 + '" width="1920" height="1080"/>');
         }
      }
   }   
};	

//START OF SECOND PAGE
            
var c2=document.getElementById("overlay2");
var ctx2=c2.getContext("2d");
var imageObj12 = new Image();
var imageObj22 = new Image();
var imageObj32 = new Image();
var imageObj42 = new Image();

// console.log("-----------------")
// console.log("app2")


var maxRWidth2 = 352; // Max width2 for the image
var maxRHeight2 = 246;    // Max height2 for the image
var ratioR2 = 0;  // Used for aspect ratio

var maxBWidth2 = 352; // Max width2 for the image
var maxBHeight2 = 246;    // Max height2 for the image
var ratioB2 = 0;  // Used for aspect ratio

var maxLWidth2 = 262;
var maxLHeight2 = 228;
var ratioL2 = 0;

{
function drawTitle2() {
   if (title !== null) {
      ctx2.font = "90px Arial";
      ctx2.textAlign = "left";
      ctx2.fillStyle = "white";
      ctx2.fillText(title, 305, 910);
   }
};

function drawWeek2() {
   if (week !== null) {
      ctx2.font = "75px Arial";
      ctx2.textAlign = "left";
      ctx2.fillStyle = "white";
      ctx2.fillText(week, 313, 1000);
   }
};

function drawPHBcaster2() {
   if (PHBcaster !== null) {
      ctx2.font = "25px Arial";
      ctx2.textAlign = "center";
      ctx2.fillStyle = "white";
      ctx2.fillText(PHBcaster, 1521, 835);
   }
};

function drawColorCaster2() {
   if (colorCaster !== null) {
      ctx2.font = "25px Arial";
      ctx2.textAlign = "center";
      ctx2.fillStyle = "white";
      ctx2.fillText(colorCaster, 1521, 860);
   }
};

function drawRScore2() {
   if (redScore !== null) {
      ctx2.font = "35px Arial";
      ctx2.textAlign = "center";
      ctx2.fillStyle = "white";
      ctx2.fillText(redScore, 1513, 766);
   }
}

function drawBScore2() {
   if (blueScore !== null) {
      ctx2.font = "35px Arial";
      ctx2.textAlign = "center";
      ctx2.fillStyle = "white";
      ctx2.fillText(blueScore, 1513, 410);
   }
}

function drawRteam2() {
   if (redTeam !== null) {
      ctx2.font = "50px Arial";
      ctx2.textAlign = "left";
      ctx2.fillStyle = "white";
      ctx2.fillText(redTeam, 120, 497);
   }
}

function drawBteam2() {
   if (blueTeam !== null) {
      ctx2.font = "50px Arial";
      ctx2.textAlign = "left";
      ctx2.fillStyle = "white";
      ctx2.fillText(blueTeam, 120, 160);
   }
}

function drawTest2() {
   ctx2.font = "20px Arial";
   // ctx2.textAlign = "center";
   ctx2.fillStyle = "red";
   ctx2.fillText("test", 315, 795);
   //left is 15
   //right is 315
   //bottom is 965
   //top is 795 var.sync = false
}
}

imageObj12.src = overlay2

imageObj12.onload = function() {
   ctx2.drawImage(imageObj12, 0, 0, 1920, 1080);
   drawTitle2();
   drawPHBcaster2();
   drawColorCaster2();
   drawRScore2();
   drawBScore2();
   drawRteam2();
   drawBteam2();
   drawWeek2();
   // drawTest();
   imageObj22.src = blueSide;

   imageObj22.onload = function() {   
            var width2 = imageObj22.naturalWidth   // Current image width2
            var height2 = imageObj22.naturalHeight   // Current image height2

              // Check if the current width2 is larger than the max
              if(width2 > maxBWidth2){
               ratioB2 = maxBWidth2 / width2;   // get ratio for scaling image
               newBWidth2 = maxBWidth2; // Set new width2
               newBHeight2 = height2 * ratioB2;  // Scale height2 based on ratio
               height2 = height2 * ratioB2;    // Reset height2 to match scaled image
               width2 = width2 * ratioB2;    // Reset width2 to match scaled image
           }
   
           // Check if current height2 is larger than max
           if(height2 > maxBHeight2){
               ratioB2 = maxBHeight2 / height2; // get ratio for scaling image
               newBHeight2 = maxBHeight2   // Set new height2
               newBWidth2 = width2 * ratioB2    // Scale width2 based on ratio
               width2 = width2 * ratioB2;    // Reset width2 to match scaled image
               height2 = height2 * ratioB2;    // Reset height2 to match scaled image
           }
           xBPlacement2 = (184 - (width2 / 2)) + 1329
           yBPlacement2 = ((112 + 368) / 2) - (height2 / 2)

   
      ctx2.drawImage(imageObj22, xBPlacement2, yBPlacement2, width2, height2);
      imageObj32.src = redSide;

      imageObj32.onload = function() {  
         var width2 = imageObj32.naturalWidth   // Current image width2
         var height2 = imageObj32.naturalHeight   // Current image height2

           // Check if the current width2 is larger than the max
           if(width2 > maxRWidth2){
            ratioR2 = maxRWidth2 / width2;   // get ratio for scaling image
            newRWidth2 = maxRWidth2; // Set new width2
            newRHeight2 = height2 * ratioR2;  // Scale height2 based on ratio
            height2 = height2 * ratioR2;    // Reset height2 to match scaled image
            width2 = width2 * ratioR2;    // Reset width2 to match scaled image
        }

        // Check if current height2 is larger than max
        if(height2 > maxRHeight2){
            ratioR2 = maxRHeight2 / height2; // get ratio for scaling image
            newRHeight2 = maxRHeight2   // Set new height2
            newRWidth2 = width2 * ratioR2    // Scale width2 based on ratio
            width2 = width2 * ratioR2;    // Reset width2 to match scaled image
            height2 = height2 * ratioR2;    // Reset height2 to match scaled image
        }
        xRPlacement2 = (182.5 - (width2 / 2)) + 1331
        yRPlacement2 = ((458 + 715) / 2) - (height2 / 2)
        
         ctx2.drawImage(imageObj32, xRPlacement2, yRPlacement2, width2, height2);
         imageObj42.src = eventLogo
         imageObj42.onload = function() {
            var width2 = imageObj42.naturalWidth 
            var height2 = imageObj42.naturalHeight

               if(width2 > maxLWidth2) {
                  ratioL2 = maxLWidth2 / width2;
                  newLWidth2 = maxLWidth2;
                  newLHeight2 = height2 * ratioL2
                  width2 = width2 * ratioL2
                  height2 = height2 * ratioL2
               }

               if(height2 > maxLHeight2){
                  ratioL2 = maxLHeight2 / width2;
                  newLHeight2 = maxLHeight2;
                  newLWidth2 = width2 * ratioL2
                  width2 = width2 * ratioL2
                  height2 = height2 * ratioL2
               }

               xLPlacement2 = (136 - (width2 / 2)) + 33
               yLPlacement2 = 808 + (119 - (height2 / 2))
            ctx2.drawImage(imageObj42, xLPlacement2, yLPlacement2, width2, height2);
            var img2 = c2.toDataURL("image/png");
            // var x = document.createElement('IMG'); // is a node
            // x.setAttribute("src", img2)
            // x.setAttribute("width", "1920")
            // x.setAttribute("height", "1080")
            // document.appendChild(x);
            document.appendChild('<img src="' + img2 + '" width="1920" height="1080"/>');
         }
      }
   }
};								

//START OF THIRD PAGE

var c3=document.getElementById("overlay3");
var ctx3=c3.getContext("2d");
var imageObj13 = new Image();
var imageObj23 = new Image();
var imageObj33 = new Image();
var imageObj43 = new Image();

// console.log("-----------------")
// console.log("app3")
// console.log(c3)

var maxRWidth3 = 232; // Max width3 for the image
var maxRHeight3 = 160;    // Max height3 for the image
var ratioR3 = 0;  // Used for aspect ratio

var maxBWidth3 = 234; // Max width3 for the image
var maxBHeight3 = 160;    // Max height3 for the image
var ratioB3 = 0;  // Used for aspect ratio

var maxLWidth3 = 262;
var maxLHeight3 = 228;
var ratioL3 = 0;

{
function drawTitle3() {
   if (title !== null) {
      ctx3.font = "60px Arial";
      ctx3.textAlign = "center";
      ctx3.fillStyle = "white";
      ctx3.fillText(title, 960, 470);
   }
};

function drawWeek3() {
   if (week !== null) {
      ctx3.font = "50px Arial";
      ctx3.textAlign = "center";
      ctx3.fillStyle = "white";
      ctx3.fillText(week, 960, 540);
   }
};

function drawPHBcaster3() {
   if (PHBcaster !== null) {
      ctx3.font = "30px Arial";
      ctx3.textAlign = "center";
      ctx3.fillStyle = "white";
      ctx3.fillText(PHBcaster, 960, 995);
   }
};

function drawColorCaster3() {
   if (colorCaster !== null) {
      ctx3.font = "30px Arial";
      ctx3.textAlign = "center";
      ctx3.fillStyle = "white";
      ctx3.fillText(colorCaster, 960, 1025);
   }
};

function drawRScore3() {
   if (redScore !== null) {
      ctx3.font = "35px Arial";
      ctx3.textAlign = "center";
      ctx3.fillStyle = "white";
      ctx3.fillText(redScore, 1672, 984);
   }
}

function drawBScore3() {
   if (blueScore !== null) {
      ctx3.font = "35px Arial";
      ctx3.textAlign = "center";
      ctx3.fillStyle = "white";
      ctx3.fillText(blueScore, 247, 984);
   }
}

function drawRteam3() {
   if (redTeam !== null) {
      ctx3.font = "35px Arial";
      ctx3.textAlign = "center";
      ctx3.fillStyle = "white";
      ctx3.fillText(redTeam, 1273, 85);
   }
}

function drawBteam3() {
   if (blueTeam !== null) {
      ctx3.font = "35px Arial";
      ctx3.textAlign = "center";
      ctx3.fillStyle = "white";
      ctx3.fillText(blueTeam, 653, 85);
   }
}

function drawTest3() {
   ctx3.font = "20px Arial";
   // ctx3.textAlign = "center";
   ctx3.fillStyle = "red";
   ctx3.fillText("test", 315, 795);
   //left is 15
   //right is 315
   //bottom is 965
   //top is 795
}
}

imageObj13.src = overlay3

imageObj13.onload = function() {
   ctx3.drawImage(imageObj13, 0, 0, 1920, 1080);
   drawTitle3();
   drawPHBcaster3();
   drawColorCaster3();
   drawRScore3();
   drawBScore3();
   drawRteam3();
   drawBteam3();
   drawWeek3();
   // drawTest();
   imageObj23.src = blueSide;

   imageObj23.onload = function() {   
            var width3 = imageObj23.naturalWidth   // Current image width3
            var height3 = imageObj23.naturalHeight   // Current image height3

              // Check if the current width3 is larger than the max
              if(width3 > maxBWidth3){
               ratioB3 = maxBWidth3 / width3;   // get ratio for scaling image
               newBWidth3 = maxBWidth3; // Set new width3
               newBHeight3 = height3 * ratioB3;  // Scale height3 based on ratio
               height3 = height3 * ratioB3;    // Reset height3 to match scaled image
               width3 = width3 * ratioB3;    // Reset width3 to match scaled image
           }
   
           // Check if current height3 is larger than max
           if(height3 > maxBHeight3){
               ratioB3 = maxBHeight3 / height3; // get ratio for scaling image
               newBHeight3 = maxBHeight3   // Set new height3
               newBWidth3 = width3 * ratioB3    // Scale width3 based on ratio
               width3 = width3 * ratioB3;    // Reset width3 to match scaled image
               height3 = height3 * ratioB3;    // Reset height3 to match scaled image
           }
           xBPlacement3 = (122 - (width3 / 2)) + 125
           yBPlacement3 = ((774 + 944) / 2) - (height3 / 2)

  
      ctx3.drawImage(imageObj23, xBPlacement3, yBPlacement3, width3, height3);
      imageObj33.src = redSide;

      imageObj33.onload = function() {  
         var width3 = imageObj33.naturalWidth   // Current image width3
         var height3 = imageObj33.naturalHeight   // Current image height3

           // Check if the current width3 is larger than the max
           if(width3 > maxRWidth3){
            ratioR3 = maxRWidth3 / width3;   // get ratio for scaling image
            newRWidth3 = maxRWidth3; // Set new width3
            newRHeight3 = height3 * ratioR3;  // Scale height3 based on ratio
            height3 = height3 * ratioR3;    // Reset height3 to match scaled image
            width3 = width3 * ratioR3;    // Reset width3 to match scaled image
        }

        // Check if current height3 is larger than max
        if(height3 > maxRHeight3){
            ratioR3 = maxRHeight3 / height3; // get ratio for scaling image
            newRHeight3 = maxRHeight3   // Set new height3
            newRWidth3 = width3 * ratioR3    // Scale width3 based on ratio
            width3 = width3 * ratioR3;    // Reset width3 to match scaled image
            height3 = height3 * ratioR3;    // Reset height3 to match scaled image
        }
        xRPlacement3 = (121 - (width3 / 2)) + 1551
        yRPlacement3 = ((774 + 944) / 2) - (height3 / 2)
        
         ctx3.drawImage(imageObj33, xRPlacement3, yRPlacement3, width3, height3);
         imageObj43.src = eventLogo
         imageObj43.onload = function() {
            var width3 = imageObj43.naturalWidth 
            var height3 = imageObj43.naturalHeight

               if(width3 > maxLWidth3) {
                  ratioL3 = maxLWidth3 / width3;
                  newLWidth3 = maxLWidth3;
                  newLHeight3 = height3 * ratioL3
                  width3 = width3 * ratioL3
                  height3 = height3 * ratioL3
               }

               if(height3 > maxLHeight3){
                  ratioL3 = maxLHeight3 / width3;
                  newLHeight3 = maxLHeight3;
                  newLWidth3 = width3 * ratioL3
                  width3 = width3 * ratioL3
                  height3 = height3 * ratioL3
               }

               xLPlacement3 = (1920 / 2) - (width3 / 2)
               yLPlacement3 = 290 - (height3 / 2)
            ctx3.drawImage(imageObj43, xLPlacement3, yLPlacement3, width3, height3);
            var img3 = c3.toDataURL("image/png");
            document.appendChild('<img src="' + img3 + '" width="1920" height="1080"/>');
         }
      }
   }
};								

//START OF FOURTH PAGE

var c4=document.getElementById("overlay4");
var ctx4=c4.getContext("2d");
var imageObj14 = new Image();
var imageObj24 = new Image();
var imageObj34 = new Image();
var imageObj44 = new Image();
var imageObj54 = new Image();
var imageObj64 = new Image();
var imageObj74 = new Image();
var imageObj84 = new Image();
var imageObj94 = new Image();
var imageObj104 = new Image();
// console.log("-----------------")
// console.log("app4")
// console.log(c4)

var maxRWidth4 = 112; // Max width4 for the image
var maxRHeight4 = 122;    // Max height4 for the image
var ratioR4 = 0;  // Used for aspect ratio

var maxBWidth4 = 112; // Max width4 for the image
var maxBHeight4 = 122;    // Max height4 for the image
var ratioB4 = 0;  // Used for aspect ratio

var maxTWidth4 = 112;
var maxTHeight4 = 122;
var ratioT4 = 0;

var maxLWidth4 = 286;
var maxLHeight4 = 155;
var ratioL4 = 0;

{
function drawTitle4() {
   if (title !== null) {
      ctx4.font = "40px Arial";
      ctx4.textAlign = "center";
      ctx4.fillStyle = "white";
      ctx4.fillText(title, 307, 241);
   }
};

function drawWeek4() {
   if (week !== null) {
      ctx4.font = "40px Arial";
      ctx4.textAlign = "center";
      ctx4.fillStyle = "white";
      ctx4.fillText(week, 307, 346);
   }
};

// function drawType4() {
//    if (type !== null) {
//    ctx4.font = "40px Arial";
//    ctx4.textAlign = "center";
//    ctx4.fillStyle = "white";
//    ctx4.fillText(type, 307, 296);
//    }
// };

function drawPHBcaster4() {
   if (PHBcaster !== null) {
   ctx4.font = "30px Arial";
   ctx4.textAlign = "center";
   ctx4.fillStyle = "white";
   ctx4.fillText(PHBcaster, 960, 995);
   }
};

function drawColorCaster4() {
   if (colorCaster !== null) {
   ctx4.font = "30px Arial";
   ctx4.textAlign = "center";
   ctx4.fillStyle = "white";
   ctx4.fillText(colorCaster, 960, 1025);
   }
};

function drawRScore4() {
   if (redScore !== null) {
   ctx4.font = "35px Arial";
   ctx4.textAlign = "center";
   ctx4.fillStyle = "white";
   ctx4.fillText(redScore, 1672, 984);
   }
}

function drawBScore4() {
   if (blueScore !== null) {
   ctx4.font = "35px Arial";
   ctx4.textAlign = "center";
   ctx4.fillStyle = "white";
   ctx4.fillText(blueScore, 247, 984);
   }
}

function drawRteam4() {
   if (redTeam !== null) {
   ctx4.font = "35px Arial";
   ctx4.textAlign = "center";
   ctx4.fillStyle = "white";
   ctx4.fillText(redTeam, 1273, 85);
   }
}

function drawBteam4() {
   if (blueTeam !== null) {
   ctx4.font = "35px Arial";
   ctx4.textAlign = "center";
   ctx4.fillStyle = "white";
   ctx4.fillText(blueTeam, 653, 85);
   }
}

function drawComingUp4() {
    if (blueTeam !== null) {
   ctx4.font = "35px Arial";
   ctx4.textAlign = "center";
   ctx4.fillStyle = "white";
   ctx4.fillText("Coming Up", 307, 477);
    }
}

function drawVS4() {
   if (blueSide !==null && redSide !==null){
      ctx4.font = "35px Arial";
      ctx4.textAlign = "center";
      ctx4.fillStyle = "white";
      ctx4.fillText("VS", 307, 556);
   }
   if (blueSide2 !==null && redSide2 !==null){
      ctx4.font = "35px Arial";
      ctx4.textAlign = "center";
      ctx4.fillStyle = "white";
      ctx4.fillText("VS", 307, 682);
   }
   if (blueSide3 !==null && redSide3 !==null){
      ctx4.font = "35px Arial";
      ctx4.textAlign = "center";
      ctx4.fillStyle = "white";
      ctx4.fillText("VS", 307, 800);
   }
   if (blueSide4 !==null && redSide4 !==null){
      ctx4.font = "35px Arial";
      ctx4.textAlign = "center";
      ctx4.fillStyle = "white";
      ctx4.fillText("VS", 307, 922);
   }
}

function drawTest4() {
   ctx4.font = "20px Arial";
   // ctx4.textAlign = "center";
   ctx4.fillStyle = "red";
   ctx4.fillText("test", 315, 795);

   //title height4 251 203

   //logo width4 160 and 446 286 pixel width4
   //133 logo width4
   //logo height4 122 2.5
   //team 1 x = 
   //logo area height4 477 1007
   // teams 1 and 2 482
   // teams 3 and 4 604
   // teams 5 and 6 726
   // teams 7 and 8 848
}
}

imageObj14.src = overlay4

imageObj14.onload = function() {
   ctx4.drawImage(imageObj14, 0, 0, 1920, 1080);
   drawTitle4();
   // drawPHBcaster4();
   // drawColorCaster4();
   // drawRScore4();
   // drawBScore4();
   // drawRteam4();
   // drawBteam4();
   drawWeek4();
//    drawComingUp4();
//    drawType4();
   drawVS4();
   // drawTest();
   imageObj24.src = blueSide;

   imageObj24.onload = function() {
            var width4 = imageObj24.naturalWidth   // Current image width4
            var height4 = imageObj24.naturalHeight   // Current image height4

              // Check if the current width4 is larger than the max
              if(width4 > maxBWidth4){
               ratioB4 = maxBWidth4 / width4;   // get ratio for scaling image
               newBWidth4 = maxBWidth4; // Set new width4
               newBHeight4 = height4 * ratioB4;  // Scale height4 based on ratio
               height4 = height4 * ratioB4;    // Reset height4 to match scaled image
               width4 = width4 * ratioB4;    // Reset width4 to match scaled image
           }
   
           // Check if current height4 is larger than max
           if(height4 > maxBHeight4){
               ratioB4 = maxBHeight4 / height4; // get ratio for scaling image
               newBHeight4 = maxBHeight4   // Set new height4
               newBWidth4 = width4 * ratioB4    // Scale width4 based on ratio
               width4 = width4 * ratioB4;    // Reset width4 to match scaled image
               height4 = height4 * ratioB4;    // Reset height4 to match scaled image
           }
           xBPlacement4 = (56 - (width4 / 2)) + 163
           yBPlacement4 = ((485 + 607) / 2) - (height4 / 2)


      ctx4.drawImage(imageObj24, xBPlacement4, yBPlacement4, width4, height4);

      if (blueSide2 !== null) {
         imageObj54.src = blueSide2;

         imageObj54.onload = function() {
                  var width4 = imageObj54.naturalWidth   // Current image width4
                  var height4 = imageObj54.naturalHeight   // Current image height4
      
                    // Check if the current width4 is larger than the max
                    if(width4 > maxTWidth4){
                     ratioT4 = maxTWidth4 / width4;   // get ratio for scaling image
                     newTWidth4 = maxTWidth4; // Set new width4
                     newTHeight4 = height4 * ratioT4;  // Scale height4 based on ratio
                     height4 = height4 * ratioT4;    // Reset height4 to match scaled image
                     width4 = width4 * ratioT4;    // Reset width4 to match scaled image
                 }
         
                 // Check if current height4 is larger than max
                 if(height4 > maxTHeight4){
                     ratioT4 = maxTHeight4 / height4; // get ratio for scaling image
                     newTHeight4 = maxTHeight4   // Set new height4
                     newTWidth4 = width4 * ratioT4    // Scale width4 based on ratio
                     width4 = width4 * ratioT4;    // Reset width4 to match scaled image
                     height4 = height4 * ratioT4;    // Reset height4 to match scaled image
                 }
                 xTPlacement4 = (56 - (width4 / 2)) + 163
                 yTPlacement4 = ((610 + 732) / 2) - (height4 / 2)
      
      
            ctx4.drawImage(imageObj54, xTPlacement4, yTPlacement4, width4, height4);
      }
      }

         if (blueSide3 !== null) {
            imageObj64.src = blueSide3;
         
            imageObj64.onload = function() {
                     var width4 = imageObj64.naturalWidth   // Current image width4
                     var height4 = imageObj64.naturalHeight   // Current image height4
            
                       // Check if the current width4 is larger than the max
                       if(width4 > maxTWidth4){
                        ratioT4 = maxTWidth4 / width4;   // get ratio for scaling image
                        newTWidth4 = maxTWidth4; // Set new width4
                        newTHeight4 = height4 * ratioT4;  // Scale height4 based on ratio
                        height4 = height4 * ratioT4;    // Reset height4 to match scaled image
                        width4 = width4 * ratioT4;    // Reset width4 to match scaled image
                    }
                 
                    // Check if current height4 is larger than max
                    if(height4 > maxTHeight4){
                        ratioT4 = maxTHeight4 / height4; // get ratio for scaling image
                        newTHeight4 = maxTHeight4   // Set new height4
                        newTWidth4 = width4 * ratioT4    // Scale width4 based on ratio
                        width4 = width4 * ratioT4;    // Reset width4 to match scaled image
                        height4 = height4 * ratioT4;    // Reset height4 to match scaled image
                    }
                    xTPlacement4 = (56 - (width4 / 2)) + 163
                    yTPlacement4 = ((732 + 854) / 2) - (height4 / 2)
                 
                 
               ctx4.drawImage(imageObj64, xTPlacement4, yTPlacement4, width4, height4);
         }
      }

            if (blueSide4 !== null) {
               imageObj74.src = blueSide4;
            
               imageObj74.onload = function() {
                        var width4 = imageObj74.naturalWidth   // Current image width4
                        var height4 = imageObj74.naturalHeight   // Current image height4
               
                          // Check if the current width4 is larger than the max
                          if(width4 > maxTWidth4){
                           ratioT4 = maxTWidth4 / width4;   // get ratio for scaling image
                           newTWidth4 = maxTWidth4; // Set new width4
                           newTHeight4 = height4 * ratioT4;  // Scale height4 based on ratio
                           height4 = height4 * ratioT4;    // Reset height4 to match scaled image
                           width4 = width4 * ratioT4;    // Reset width4 to match scaled image
                       }
                    
                       // Check if current height4 is larger than max
                       if(height4 > maxTHeight4){
                           ratioT4 = maxTHeight4 / height4; // get ratio for scaling image
                           newTHeight4 = maxTHeight4   // Set new height4
                           newTWidth4 = width4 * ratioT4    // Scale width4 based on ratio
                           width4 = width4 * ratioT4;    // Reset width4 to match scaled image
                           height4 = height4 * ratioT4;    // Reset height4 to match scaled image
                       }
                       xTPlacement4 = (56 - (width4 / 2)) + 163
                       yTPlacement4 = ((854 + 976) / 2) - (height4 / 2)
                    
                    
                  ctx4.drawImage(imageObj74, xTPlacement4, yTPlacement4, width4, height4);
            }
            }

      imageObj34.src = redSide;

      imageObj34.onload = function() {
         var width4 = imageObj34.naturalWidth   // Current image width4
         var height4 = imageObj34.naturalHeight   // Current image height4

           // Check if the current width4 is larger than the max
           if(width4 > maxRWidth4){
            ratioR4 = maxRWidth4 / width4;   // get ratio for scaling image
            newRWidth4 = maxRWidth4; // Set new width4
            newRHeight4 = height4 * ratioR4;  // Scale height4 based on ratio
            height4 = height4 * ratioR4;    // Reset height4 to match scaled image
            width4 = width4 * ratioR4;    // Reset width4 to match scaled image
        }

        // Check if current height4 is larger than max
        if(height4 > maxRHeight4){
            ratioR4 = maxRHeight4 / height4; // get ratio for scaling image
            newRHeight4 = maxRHeight4   // Set new height4
            newRWidth4 = width4 * ratioR4    // Scale width4 based on ratio
            width4 = width4 * ratioR4;    // Reset width4 to match scaled image
            height4 = height4 * ratioR4;    // Reset height4 to match scaled image
        }
        xRPlacement4 = (56 - (width4 / 2)) + 331
        yRPlacement4 = ((485 + 607) / 2) - (height4 / 2)
         ctx4.drawImage(imageObj34, xRPlacement4, yRPlacement4, width4, height4);

         if (redSide2 !== null) {
            imageObj84.src = redSide2;
            
            imageObj84.onload = function() {
                     var width4 = imageObj84.naturalWidth   // Current image width4
                     var height4 = imageObj84.naturalHeight   // Current image height4
            
                       // Check if the current width4 is larger than the max
                       if(width4 > maxTWidth4){
                        ratioT4 = maxTWidth4 / width4;   // get ratio for scaling image
                        newTWidth4 = maxTWidth4; // Set new width4
                        newTHeight4 = height4 * ratioT4;  // Scale height4 based on ratio
                        height4 = height4 * ratioT4;    // Reset height4 to match scaled image
                        width4 = width4 * ratioT4;    // Reset width4 to match scaled image
                    }
                 
                    // Check if current height4 is larger than max
                    if(height4 > maxTHeight4){
                        ratioT4 = maxTHeight4 / height4; // get ratio for scaling image
                        newTHeight4 = maxTHeight4   // Set new height4
                        newTWidth4 = width4 * ratioT4    // Scale width4 based on ratio
                        width4 = width4 * ratioT4;    // Reset width4 to match scaled image
                        height4 = height4 * ratioT4;    // Reset height4 to match scaled image
                    }
                    xTPlacement4 = (56 - (width4 / 2)) + 331
                    yTPlacement4 = ((610 + 732) / 2) - (height4 / 2)
                 
                 
               ctx4.drawImage(imageObj84, xTPlacement4, yTPlacement4, width4, height4);
         }
         }

         if (redSide3 !== null) {
            imageObj94.src = redSide3;
            
            imageObj94.onload = function() {
                     var width4 = imageObj94.naturalWidth   // Current image width4
                     var height4 = imageObj94.naturalHeight   // Current image height4
            
                       // Check if the current width4 is larger than the max
                       if(width4 > maxTWidth4){
                        ratioT4 = maxTWidth4 / width4;   // get ratio for scaling image
                        newTWidth4 = maxTWidth4; // Set new width4
                        newTHeight4 = height4 * ratioT4;  // Scale height4 based on ratio
                        height4 = height4 * ratioT4;    // Reset height4 to match scaled image
                        width4 = width4 * ratioT4;    // Reset width4 to match scaled image
                    }
                 
                    // Check if current height4 is larger than max
                    if(height4 > maxTHeight4){
                        ratioT4 = maxTHeight4 / height4; // get ratio for scaling image
                        newTHeight4 = maxTHeight4   // Set new height4
                        newTWidth4 = width4 * ratioT4    // Scale width4 based on ratio
                        width4 = width4 * ratioT4;    // Reset width4 to match scaled image
                        height4 = height4 * ratioT4;    // Reset height4 to match scaled image
                    }
                    xTPlacement4 = (56 - (width4 / 2)) + 331
                    yTPlacement4 = ((732 + 854) / 2) - (height4 / 2)
                 
                 
               ctx4.drawImage(imageObj94, xTPlacement4, yTPlacement4, width4, height4);
         }
         }

         if (redSide4 !== null) {
            imageObj104.src = redSide4;
            
            imageObj104.onload = function() {
                     var width4 = imageObj104.naturalWidth   // Current image width4
                     var height4 = imageObj104.naturalHeight   // Current image height4
            
                       // Check if the current width4 is larger than the max
                       if(width4 > maxTWidth4){
                        ratioT4 = maxTWidth4 / width4;   // get ratio for scaling image
                        newTWidth4 = maxTWidth4; // Set new width4
                        newTHeight4 = height4 * ratioT4;  // Scale height4 based on ratio
                        height4 = height4 * ratioT4;    // Reset height4 to match scaled image
                        width4 = width4 * ratioT4;    // Reset width4 to match scaled image
                    }
                 
                    // Check if current height4 is larger than max
                    if(height4 > maxTHeight4){
                        ratioT4 = maxTHeight4 / height4; // get ratio for scaling image
                        newTHeight4 = maxTHeight4   // Set new height4
                        newTWidth4 = width4 * ratioT4    // Scale width4 based on ratio
                        width4 = width4 * ratioT4;    // Reset width4 to match scaled image
                        height4 = height4 * ratioT4;    // Reset height4 to match scaled image
                    }
                    xTPlacement4 = (56 - (width4 / 2)) + 331
                    yTPlacement4 = ((854 + 976) / 2) - (height4 / 2)
                 
                 
               ctx4.drawImage(imageObj104, xTPlacement4, yTPlacement4, width4, height4);
         }
         }

         imageObj44.src = eventLogo
         imageObj44.onload = function() {
            var width4 = imageObj44.naturalWidth 
            var height4 = imageObj44.naturalHeight

               if(width4 > maxLWidth4) {
                  ratioL4 = maxLWidth4 / width4;
                  newLWidth4 = maxLWidth4;
                  newLHeight4 = height4 * ratioL4
                  width4 = width4 * ratioL4
                  height4 = height4 * ratioL4
               }

               if(height4 > maxLHeight4){
                  ratioL4 = maxLHeight4 / width4;
                  newLHeight4 = maxLHeight4;
                  newLWidth4 = width4 * ratioL4
                  width4 = width4 * ratioL4
                  height4 = height4 * ratioL4
               }

               xLPlacement4 = (138 - (width4 / 2)) + 165
               yLPlacement4 = ((33 + 198) / 2) - (height4 / 2)
            ctx4.drawImage(imageObj44, xLPlacement4, yLPlacement4, width4, height4);
            var img4 = c4.toDataURL("image/png");
            document.appendChild('<img src="' + img4 + '" width="1920" height="1080"/>');
         }
      }
   }
};
};								