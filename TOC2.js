//START OF FIRST PAGE
// console.log("new version mk8")
var eventLogo = "soon"
var blueSide2 = null
var redSide2 = null
var blueSide3 = null
var redSide3 = null
var blueSide4 = null
var redSide4 = null
var PHBcaster = document.getElementById("PHBcaster").value
var colorCaster = document.getElementById("colorCaster").value
var blueTeam = document.getElementById("blueTeam").value
var redTeam = document.getElementById("redTeam").value
var redScore = document.getElementById("redScore").value
var blueScore = document.getElementById("blueScore").value
var title = "XLNC"
var week = document.getElementById("week").value
var leagueName = document.getElementById("lName").value
var leagueScoreB = document.getElementById("blueLScore").value
var leagueScoreR = document.getElementById("redLScore").value
var overlay1 = "img-combine/InGameCompiled.png"
var overlay2 = "img-combine/PostGameNexusCombined.png"
var overlay3 = "img-combine/PickandBanOverlayCompiled.png"
var overlay4 = "img-combine/ProdraftOverlayCombined.png"
var scheduleImg4G = "img-combine/ScheduleSmall4Box-01.png"
var scheduleImg3G = "img-combine/ScheduleSmall3Box-01.png"
var scheduleImg2G = "img-combine/ScheduleSmall2Box-01.png"
var scheduleImg1G = "img-combine/ScheduleSmall1Box-01.png"
var blueSide = "soon"
var redSide = "soon"
var fontStyle = "Evogria"
var redTeamSlider = 0
var blueTeamSlider = 0
var redTeamSliderx = 0
var blueTeamSliderx = 0
var bColor = "blue"
var rColor = "red"
var switchS = document.getElementById("switchSBox")
var redSideTemp = "soon"
var blueSideTemp = "soon"

var PHBcasterTwitter = document.getElementById("PHBcasterT").value
var colorCasterTwitter = document.getElementById("colorCasterT").value
var bTag = document.getElementById("blueTag").value
var rTag = document.getElementById("redTag").value

if (PHBcasterTwitter.startsWith("@")) {
   PHBcasterTwitter = PHBcasterTwitter
} else {
   at = "@"
   PHBcasterTwitter = at.concat(PHBcasterTwitter)
}

if (colorCasterTwitter.startsWith("@")) {
   colorCasterTwitter = colorCasterTwitter
} else {
   at = "@"
   colorCasterTwitter = at.concat(colorCasterTwitter)
}

//WRITE TWITTERS HERE CHRIS WITH VAR
// console.log(redSide)
{
function bUp() {
   if (event.shiftKey) {
      blueTeamSlider = blueTeamSlider - 10
   } else {
      blueTeamSlider--
   }
   var s = document.getElementById("blueSlider");
   s.value = (blueTeamSlider*-1);
   onSubmit();
}
function bDown() {
   if (event.shiftKey) {
      blueTeamSlider = blueTeamSlider + 10
   } else {
      blueTeamSlider++
   }
   var s = document.getElementById("blueSlider");
   s.value = (blueTeamSlider*-1);
   onSubmit();
}
function bRight() {
   if (event.shiftKey) {
      blueTeamSliderx = blueTeamSliderx + 10
   } else {
      blueTeamSliderx++
   }
   var s = document.getElementById("blueSliderx");
   s.value = (blueTeamSliderx);
   onSubmit();
}
function bLeft() {
   if (event.shiftKey) {
      blueTeamSliderx = blueTeamSliderx - 10
   } else {
      blueTeamSliderx--
   }
   var s = document.getElementById("blueSliderx");
   s.value = (blueTeamSliderx);
   onSubmit();
}

function rUp() {
   if (event.shiftKey) {
      redTeamSlider = redTeamSlider - 10
   } else {
      redTeamSlider--
   }
   var s = document.getElementById("redSlider");
   s.value = (redTeamSlider*-1);
   onSubmit();
}
function rDown() {
   if (event.shiftKey) {
      redTeamSlider = redTeamSlider + 10
   } else {
      redTeamSlider++
   }
   var s = document.getElementById("redSlider");
   s.value = (redTeamSlider*-1);
   onSubmit();
}
function rRight() {
   if (event.shiftKey) {
      redTeamSliderx = redTeamSliderx + 10
   } else {
      redTeamSliderx++
   }
   var s = document.getElementById("redSliderx");
   s.value = (redTeamSliderx);
   onSubmit();
}
function rLeft() {
   if (event.shiftKey) {
      redTeamSliderx = redTeamSliderx - 10
   } else {
      redTeamSliderx--
   }
   var s = document.getElementById("redSliderx");
   s.value = (redTeamSliderx);
   onSubmit();
}

}
function onSelectChange() {
   var selectedValue = document.getElementById("blueTeamType").value;    
   var upload = selectedValue == "1";

   document.getElementById("urlToUploadBlue").disabled = upload;
   document.getElementById("fileToUploadBlue").disabled = !upload;
   console.log(selectedValue)
}
function onSelectChange1() {
   var selectedValue = document.getElementById("redTeamType").value;    
   var upload = selectedValue == "1";

   document.getElementById("urlToUploadRed").disabled = upload;
   document.getElementById("fileToUploadRed").disabled = !upload;
}
function onSelectChange2() {
   var selectedValue = document.getElementById("eventType").value;    
   var upload = selectedValue == "1";

   document.getElementById("urlToUploadEvent").disabled = upload;
   document.getElementById("fileToUploadEvent").disabled = !upload;
}

function scheduleBox() {
var checkBox = document.getElementById("schedule")
var sForm = document.getElementById("scheduleForm")

if(checkBox.checked == true){
   sForm.style.display = "block";
} else {
   sForm.style.display = "none";
}

var sForm = document.getElementById("scheduleForm2")

if(checkBox.checked == true){
   sForm.style.display = "block";
} else {
   sForm.style.display = "none";
}

var sForm = document.getElementById("scheduleForm3")

if(checkBox.checked == true){
   sForm.style.display = "block";
} else {
   sForm.style.display = "none";
}
}

function switchSides() {
   switchS = document.getElementById("switchSBox")
   onSubmit();
}


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

      var canvas1 = document.getElementById("overlay1");
      var canvas2 = document.getElementById("overlay2");
      var canvas3 = document.getElementById("overlay3");
      var canvas4 = document.getElementById("overlay4");
    
      const context1 = canvas1.getContext('2d');
      const context2 = canvas2.getContext('2d');
      const context3 = canvas3.getContext('2d');
      const context4 = canvas4.getContext('2d');
    
      context1.clearRect(0, 0, canvas1.width, canvas1.height);
      context2.clearRect(0, 0, canvas2.width, canvas1.height);
      context3.clearRect(0, 0, canvas3.width, canvas3.height);
      context4.clearRect(0, 0, canvas4.width, canvas4.height);

       if (document.getElementById('redTeamType').value == 1) {
   var uploadElement = document.getElementById('fileToUploadRed');
   var theFile = uploadElement.files[0];
   if (theFile.type.match("image.*")) {
     getAsImage(theFile);
   } else {
     // unexpected type
   }
   } else {
      redSide = document.getElementById('urlToUploadRed').value
      onSubmit2()
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
         if (document.getElementById('blueTeamType').value == 1) {
      var uploadElement = document.getElementById('fileToUploadBlue');
      var theFile = uploadElement.files[0];
      if (theFile.type.match("image.*")) {
        getAsImage2(theFile);
      } else {
        // unexpected type
      }
      } else {
      blueSide = document.getElementById('urlToUploadBlue').value
      onSubmit3()
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
            if (document.getElementById('eventType').value == 1) {
         var uploadElement = document.getElementById('fileToUploadEvent');
         var theFile = uploadElement.files[0];
         if (theFile.type.match("image.*")) {
           getAsImage3(theFile);
         } else {
           // unexpected type
         }
         } else {
         eventLogo = document.getElementById('urlToUploadEvent').value
         console.log (eventLogo + "////" + redSide + "////" + blueSide)
         execute()
         }
          }


function execute() {

var c1=document.getElementById("overlay1");
var ctx1=c1.getContext("2d");
var imageObj11 = new Image();
var imageObj21 = new Image();
var imageObj31 = new Image();
var imageObj41 = new Image();

switchS = document.getElementById("switchSBox")
console.log(switchS)

if(switchS.checked == false) {
PHBcaster = document.getElementById("PHBcaster").value
colorCaster = document.getElementById("colorCaster").value
blueTeam = document.getElementById("blueTeam").value
redTeam = document.getElementById("redTeam").value
redScore = document.getElementById("redScore").value
blueScore = document.getElementById("blueScore").value
title = "XLNC"
week = document.getElementById("week").value
leagueName = document.getElementById("lName").value
leagueScoreB = document.getElementById("blueLScore").value
leagueScoreR = document.getElementById("redLScore").value
bColor = document.getElementById("blueColor").value
rColor = document.getElementById("redColor").value
bTag = "MIZ"
rTag = "KIF"
} else {
PHBcaster = document.getElementById("PHBcaster").value
colorCaster = document.getElementById("colorCaster").value
redTeam = document.getElementById("blueTeam").value
blueTeam = document.getElementById("redTeam").value
blueScore = document.getElementById("redScore").value
redScore = document.getElementById("blueScore").value
title = "XLNC"
week = document.getElementById("week").value
leagueName = document.getElementById("lName").value
leagueScoreR = document.getElementById("blueLScore").value
leagueScoreB = document.getElementById("redLScore").value
rColor = document.getElementById("blueColor").value
bColor = document.getElementById("redColor").value
// rTag = "MIZ"
// bTag = "KIF"
}


PHBcasterTwitter = document.getElementById("PHBcasterT").value
colorCasterTwitter = document.getElementById("colorCasterT").value
bTag = document.getElementById("blueTag").value
rTag = document.getElementById("redTag").value

if (PHBcasterTwitter.startsWith("@")) {
   PHBcasterTwitter = PHBcasterTwitter
} else {
   at = "@"
   PHBcasterTwitter = at.concat(PHBcasterTwitter)
}

if (colorCasterTwitter.startsWith("@")) {
   colorCasterTwitter = colorCasterTwitter
} else {
   at = "@"
   colorCasterTwitter = at.concat(colorCasterTwitter)
}






// redSide = "https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png"
// fontStyle = document.getElementById("fontStyle").value
// console.log(fontStyle)


// var blueSide2 = blueSide
// var redSide2 = redSide

// console.log("-----------------")
// console.log("app1")

// eventLogo = "RisenEsports.png"

var maxRWidth1 = 210; // Max width1 for the image
var maxRHeight1 = 185;    // Max height1 for the image
var ratioR1 = 0;  // Used for aspect ratio

var maxBWidth1 = 210; // Max width1 for the image
var maxBHeight1 = 185;    // Max height1 for the image
var ratioB1 = 0;  // Used for aspect ratio

var maxLWidth1 = 91;
var maxLHeight1 = 110;
var ratioL1 = 0;

//coordinates
if(switchS.checked == false) {
blueTeamSliderxs = blueTeamSliderx
blueTeamSliders = blueTeamSlider
redTeamSliders = redTeamSlider
redTeamSliderxs = redTeamSliderx
} else {
   blueTeamSliderxs = redTeamSliderx * -1
   blueTeamSliders = redTeamSlider
   redTeamSliders = blueTeamSlider
   redTeamSliderxs = blueTeamSliderx * -1
}


cTitle1x = 110
cTitle1y = 1022
cWeek1x = 110
cWeek1y = 1072
cLeague1x = 110
cLeague1y = 1047
cPHBcaster1x = 145
cPHBcaster1y = 0
cColorCaster1x = 145
cColorCaster1y = 0
cRedScore1x = 1321
cRedScore1y = 53
cBlueScore1x = 611
cBlueScore1y = 53
cLeagueBS1x = 450
cLeagueBS1y = ((0 + 42)/2) + 10
cLeagueRS1x = 1490
cLeagueRS1y = ((0 + 42)/2) + 10
cRedTeam1x = ((1523 + 1735)/2)
cRedTeam1y = (((0 + 42)/2) + 10)
cBlueTeam1x = ((183 + 452)/2)
cBlueTeam1y = (((0 + 42)/2) + 10)
cXLPacement1 = (0 + 110)/2
cYLPacement1 = (960 + 1080)/2
cXBPlacement1 = ((0 + 183)/2) + blueTeamSliderxs
cYBPlacement1 = ((0 + 42)/2) + blueTeamSliders
cXRPlacement1 = ((1735 + 1920)/2) + redTeamSliderxs
cYRPlacement1 = ((0 + 42)/2) + redTeamSliders






// console.log(Math.atan2(43, 32)*180/Math.PI)
// imageObj21.style.margin = "0px 0px -50px 0px" //blue side





// imageObj21.style.margin = "0px 0px -50px 0px"

//yLPlacement1 = ((961 + 1080) / 2) - (height1 / 2)

//xRPlacement2 = (145 - (width1 / 2)) + 1345
//yRPlacement2 = ((822 + 1013) / 2) - (height1 / 2)

// xBPlacement1 = (137.5 - (width1 / 2)) + 314
// yBPlacement1 = ((822 + 1013) / 2) - (height1 / 2)



//coordinates

{
function drawTitle1() {
   if (title !== null) {
      ctx1.font = "60px " + fontStyle;
      ctx1.textAlign = "left";
      ctx1.fillStyle = "white";
      ctx1.fillText(title, cTitle1x, cTitle1y);
   }
};

function drawWeek1() {
   if (week !== null) {
      ctx1.font = "20px " + fontStyle;
      ctx1.textAlign = "left";
      ctx1.fillStyle = "white";
      ctx1.fillText(week, cWeek1x, cWeek1y);
   }
};

function drawLeague1() {
   if (leagueName !== null) {
      ctx1.font = "20px " + fontStyle;
      ctx1.textAlign = "left";
      ctx1.fillStyle = "white";
      ctx1.fillText(leagueName, cLeague1x, cLeague1y);
   }
};

function drawLeagueRScore1() {
   if (leagueScoreR !== null) {
      ctx1.font = "20px " + fontStyle;
      ctx1.textAlign = "left";
      ctx1.fillStyle = "white";
      ctx1.fillText(leagueScoreR, cLeagueRS1x, cLeagueRS1y);
   }
};

function drawLeagueBScore1() {
   if (leagueScoreB !== null) {
      ctx1.font = "20px " + fontStyle;
      ctx1.textAlign = "left";
      ctx1.fillStyle = "white";
      ctx1.fillText(leagueScoreB, cLeagueBS1x, cLeagueBS1y);
   }
};

function drawPHBcaster1() {
   if (PHBcaster !== null) {   
      ctx1.font = "25px " + fontStyle;
      ctx1.textAlign = "center";
      ctx1.fillStyle = "white";
      ctx1.fillText(PHBcaster, cPHBcaster1x, cPHBcaster1y);
   }
};

function drawColorCaster1() {
   if (colorCaster !== null) {
      ctx1.font = "25px " + fontStyle;
      ctx1.textAlign = "center";
      ctx1.fillStyle = "white";
      ctx1.fillText(colorCaster, cColorCaster1x, cColorCaster1y);
   }
};

function drawRScore1() {
   if (redScore !== null) {
      ctx1.font = "45px " + fontStyle;
      ctx1.textAlign = "center";
      ctx1.fillStyle = "white";
      ctx1.fillText(redScore, cRedScore1x, cRedScore1y);
   }
}

function drawBScore1() {
   if (blueScore !== null) {
      ctx1.font = "45px " + fontStyle;
      ctx1.textAlign = "center";
      ctx1.fillStyle = "white";
      ctx1.fillText(blueScore, cBlueScore1x, cBlueScore1y);
   }
}

function drawRteam1() {
   if (redTeam !== null) {
      ctx1.font = "20px " + fontStyle;
      ctx1.textAlign = "center";
      ctx1.fillStyle = "white";
      ctx1.fillText(redTeam, cRedTeam1x, cRedTeam1y);
   }
}

function drawBteam1() {
   if (blueTeam !== null) {
      ctx1.font = "20px " + fontStyle;
      ctx1.textAlign = "center";
      ctx1.fillStyle = "white";
      ctx1.fillText(blueTeam, cBlueTeam1x, cBlueTeam1y);
   }
}

function drawTest1() {
   ctx1.font = "20px " + fontStyle;
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

   // drawTest();
   if(switchS.checked == false) {
   imageObj21.src = blueSide;
   } else {
      imageObj21.src = redSide;
   }

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
           xBPlacement1 = cXBPlacement1 - (width1 / 2)
           yBPlacement1 = cYBPlacement1 - (height1 / 2)
           //clip gang
           //x, y, width, height
           ctx1.save()
           let region = new Path2D();
           region.rect(158, 0, 1920, 44);
           region.rect(0, 0, 27, 44);
           region.rect(27, 0, 131, 27);

           var grd = ctx1.createLinearGradient(0, 0, 600, 0);
           grd.addColorStop(0, bColor);
           grd.addColorStop(1, "transparent");
           
           // Fill with gradient
           ctx1.stroke()
           ctx1.clip(region, "evenodd");
           ctx1.fillStyle = grd;
           ctx1.fillRect(0, 0, 2000, 50); 
           ctx1.globalAlpha = 0.6;


         //   ctx1.rect(0, 0, 1920, 42,);
         //   ctx1.rect(0, 0, )
           //clip gang

      ctx1.drawImage(imageObj21, xBPlacement1, (yBPlacement1), width1, height1);

      if(switchS.checked == false) {
         imageObj31.src = redSide;
         } else {
            imageObj31.src = blueSide;
         }

      //clip gang

      ctx1.restore()

      //clip gang


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
        xRPlacement2 = cXRPlacement1 - (width1 / 2)
        yRPlacement2 = cYRPlacement1 - (height1 / 2)
            //clip gang
           //x, y, width, height
           ctx1.save();
           let region = new Path2D();
           region.rect(1350, 0, 410, 44); 
           region.rect(1893, 0, 100, 44);
           region.rect(1760, 0, 133, 27);

         var grd1 = ctx1.createLinearGradient(1350, 0, 1950, 0);
         grd1.addColorStop(0, "transparent");
         grd1.addColorStop(1, rColor);
         // Fill with gradient
           ctx1.stroke()
           ctx1.clip(region, "evenodd");
           ctx1.fillStyle = grd1;
           ctx1.fillRect(1350, 0, 1320, 50); 
           ctx1.globalAlpha = 0.6;


         //   ctx1.rect(0, 0, 1920, 42,);
         //   ctx1.rect(0, 0, )
         //clip gang
        
         ctx1.drawImage(imageObj31, xRPlacement2, yRPlacement2, width1, height1);

         ctx1.restore();


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

               // xLPlacement1 = (145 - (width1 / 2)) + 8
               // yLPlacement1 = ((782 + 952) / 2) - (height1 / 2)
               xLPlacement1 = cXLPacement1 - (width1 / 2)
               yLPlacement1 = cYLPacement1 - (height1 / 2)

               drawTitle1();
               drawWeek1();
               drawPHBcaster1();
               drawColorCaster1();
               drawRScore1();
               drawBScore1();
               drawRteam1();
               drawBteam1();
               drawWeek1();
               drawLeague1();
               drawLeagueRScore1();
               drawLeagueBScore1();
               
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
{
var c2=document.getElementById("overlay2");
var ctx2=c2.getContext("2d");
var imageObj12 = new Image();
var imageObj22 = new Image();
var imageObj32 = new Image();
var imageObj42 = new Image();
var imageObjSchedule2 = new Image();
var imageObj52 = new Image();
var imageObj62 = new Image();

// console.log("-----------------")
// console.log("app2")


var maxRWidth2 = 64; // Max width1 for the image
var maxRHeight2 = 64;    // Max height1 for the image
var ratioR2 = 0;  // Used for aspect ratio

var maxBWidth2 = 64; // Max width1 for the image
var maxBHeight2 = 64;    // Max height1 for the image
var ratioB2 = 0;  // Used for aspect ratio

var maxLWidth2 = 91;
var maxLHeight2 = 110;
var ratioL2 = 0;

var maxRWidth22 = 210; // Max width1 for the image
var maxRHeight22 = 185;    // Max height1 for the image
var ratioR22 = 0;  // Used for aspect ratio

var maxBWidth22 = 210; // Max width1 for the image
var maxBHeight22 = 185;    // Max height1 for the image
var ratioB22 = 0;  // Used for aspect ratio

var maxLWidth22 = 91;
var maxLHeight22 = 110;
var ratioL22 = 0;

//coordinates

if(switchS.checked == false) {
   blueTeamSliderxs = blueTeamSliderx
   blueTeamSliders = blueTeamSlider
   redTeamSliders = redTeamSlider
   redTeamSliderxs = redTeamSliderx
   } else {
      blueTeamSliderxs = redTeamSliderx * -1
      blueTeamSliders = redTeamSlider
      redTeamSliders = blueTeamSlider
      redTeamSliderxs = blueTeamSliderx * -1
   }


cTitle2x = 110
cTitle2y = 1022
cWeek2x = 110
cWeek2y = 1072
cLeague2x = 110
cLeague2y = 1047
cPHBcaster2x = 1521
cPHBcaster2y = 835
cColorCaster2x = 1521
cColorCaster2y = 860
cRedScore2x = ((518 + 529)/2)
cRedScore2y = ((793 + 861)/2) + 16
cBlueScore2x = ((518 + 529)/2)
cBlueScore2y = ((57 + 125) /2) + 16
cLeagueBS2x = 400
cLeagueBS2y = ((57 + 125) /2) + 15
cLeagueRS2x = 400
cLeagueRS2y = ((793 + 861)/2) + 15
cRedTeam2x = 271
cRedTeam2y = ((793 + 861)/2) + 8
cBlueTeam2x = 271
cBlueTeam2y = ((57 + 125)/2) + 8
cXLPacement2 = (0 + 110)/2
cYLPacement2 = (960 + 1080)/2
cXBPlacement2 = ((424 + 562)/2) 
cYBPlacement2 = ((964 + 1026)/2) 
cXRPlacement2 = ((360 + 544)/2) 
cYRPlacement2 = ((1028 + 1080)/2)
cBTag2x = (480 + 681)/2
cBTag2y = ((964 + 1026)/2) + 15
cRTag2x = (431 + 634)/2
cRTag2y = ((1028 + 1080)/2) + 15

cBlueScore22x = (637 + 753)/2
cBlueScore22y = ((964 + 1026)/2) + 15
cRedScore22x = (705 + 587)/2
cRedScore22y = ((1028 + 1080)/2) + 15

//cRedScore22x, cRedScore22y
//cLeagueBS2x = (637 + 753)/2
// cLeagueBS2y = ((950 + 1012)/2) + 10
// cLeagueRS2x = (705 + 587)/2
// cLeagueRS2y = ((1014 + 1080)/2) + 10

cXBPlacement22 = (217/2) - blueTeamSliderxs
cYBPlacement22 = ((57 + 125)/2) - blueTeamSliders
cXRPlacement22 = (217/2) - redTeamSliderxs
cYRPlacement22 = ((793 + 861)/2) - redTeamSliders

{
   function drawTitle2() {
      if (title !== null) {
         ctx2.font = "60px " + fontStyle;
         ctx2.textAlign = "left";
         ctx2.fillStyle = "white";
         ctx2.fillText(title, cTitle2x, cTitle2y);
      }
   };

   function drawBTag2() {
      if (week !== null) {
         ctx2.font = "30px " + fontStyle;
         ctx2.textAlign = "center";
         ctx2.fillStyle = "white";
         ctx2.fillText(bTag, cBTag2x, cBTag2y);
      }
   };

   function drawRTag2() {
      if (week !== null) {
         ctx2.font = "30px " + fontStyle;
         ctx2.textAlign = "center";
         ctx2.fillStyle = "white";
         ctx2.fillText(rTag, cRTag2x, cRTag2y);
      }
   };
   
   function drawWeek2() {
      if (week !== null) {
         ctx2.font = "20px " + fontStyle;
         ctx2.textAlign = "left";
         ctx2.fillStyle = "white";
         ctx2.fillText(week, cWeek2x, cWeek2y);
      }
   };
   
   function drawLeague2() {
      if (leagueName !== null) {
         ctx2.font = "20px " + fontStyle;
         ctx2.textAlign = "left";
         ctx2.fillStyle = "white";
         ctx2.fillText(leagueName, cLeague2x, cLeague2y);
      }
   };

function drawLeagueRScore2() {
   if (leagueScoreR !== null) {
      ctx2.font = "30px " + fontStyle;
      ctx2.textAlign = "center";
      ctx2.fillStyle = "white";
      ctx2.fillText(leagueScoreR, cLeagueRS2x, cLeagueRS2y);
   }
};

function drawLeagueBScore2() {
   if (leagueScoreB !== null) {
      ctx2.font = "30px " + fontStyle;
      ctx2.textAlign = "center";
      ctx2.fillStyle = "white";
      ctx2.fillText(leagueScoreB, cLeagueBS2x, cLeagueBS2y);
   }
};

function drawPHBcaster2() {
   if (PHBcaster !== null) {
      ctx2.font = "25px " + fontStyle;
      ctx2.textAlign = "center";
      ctx2.fillStyle = "white";
      ctx2.fillText(PHBcaster, cPHBcaster2x, cPHBcaster2y);
   }
};

function drawColorCaster2() {
   if (colorCaster !== null) {
      ctx2.font = "25px " + fontStyle;
      ctx2.textAlign = "center";
      ctx2.fillStyle = "white";
      ctx2.fillText(colorCaster, cColorCaster2x, cColorCaster2y);
   }
};

function drawRScore2() {
   if (redScore !== null) {
      ctx2.font = "40px " + fontStyle;
      ctx2.textAlign = "center";
      ctx2.fillStyle = "white";
      ctx2.fillText(redScore, cRedScore2x, cRedScore2y);
   }
}

function drawBScore2() {
   if (blueScore !== null) {
      ctx2.font = "40px " + fontStyle;
      ctx2.textAlign = "center";
      ctx2.fillStyle = "white";
      ctx2.fillText(blueScore, cBlueScore2x, cBlueScore2y);
   }
}

function drawRScore22() {
   if (redScore !== null) {
      ctx2.font = "30px " + fontStyle;
      ctx2.textAlign = "center";
      ctx2.fillStyle = "white";
      if(switchS.checked == false) { 
         redScore2 = redScore
         } else {
            redScore2 = blueScore
         }
      ctx2.fillText(redScore2, cRedScore22x, cRedScore22y);
   }
}

function drawBScore22() {
   if (blueScore !== null) {
      ctx2.font = "30px " + fontStyle;
      ctx2.textAlign = "center";
      ctx2.fillStyle = "white";
      if(switchS.checked == false) { 
         blueScore2 = blueScore
         } else {
            blueScore2 = redScore
         }
      ctx2.fillText(blueScore2, cBlueScore22x, cBlueScore22y);
   }
}

function drawRteam2() {
   if (redTeam !== null) {
      ctx2.font = "16px " + fontStyle;
      ctx2.textAlign = "center";
      ctx2.fillStyle = "white";
      ctx2.fillText(redTeam, cRedTeam2x, cRedTeam2y);
   }
}

function drawBteam2() {
   if (blueTeam !== null) {
      ctx2.font = "16px " + fontStyle;
      ctx2.textAlign = "center";
      ctx2.fillStyle = "white";
      ctx2.fillText(blueTeam, cBlueTeam2x, cBlueTeam2y);
   }
}

function drawTest2() {
   ctx2.font = "20px " + fontStyle;
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

   imageObjSchedule2.src = scheduleImg1G
   imageObjSchedule2.onload = function() {
   ctx2.drawImage(imageObjSchedule2, 0, 0, 1920, 1080)
   // drawTest();
      imageObj22.src = blueSide

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
           xBPlacement2 = cXBPlacement2 - (width2 / 2);
           yBPlacement2 = cYBPlacement2 - (height2 / 2);

           //x, y, width, height
         //   ctx2.save();
         //   let region = new Path2D();
         //   region.rect(0, 57, 1320, 68); 

         // var grd11 = ctx2.createLinearGradient(0, 57, 408, 0);
         // grd11.addColorStop(0, bColor);
         // grd11.addColorStop(1, "transparent");
         // // Fill with gradient
         //   ctx2.stroke()
         //   ctx2.clip(region, "evenodd");
         //   ctx2.fillStyle = grd11;
         //   ctx2.fillRect(0, 57, 1320, 68); 
         //   ctx2.globalAlpha = 0.6;

   
      ctx2.drawImage(imageObj22, xBPlacement2, yBPlacement2, width2, height2);
      //schedule
      // ctx2.restore();
      if(switchS.checked == false) {
         imageObj52.src = blueSide
         } else {
            imageObj52.src = redSide
         }

      imageObj52.onload = function() {   
               var width2 = imageObj52.naturalWidth   // Current image width2
               var height2 = imageObj52.naturalHeight   // Current image height2
   
                 // Check if the current width2 is larger than the max
                 if(width2 > maxBWidth22){
                  ratioB2 = maxBWidth22 / width2;   // get ratio for scaling image
                  newBWidth2 = maxBWidth22; // Set new width2
                  newBHeight2 = height2 * ratioB2;  // Scale height2 based on ratio
                  height2 = height2 * ratioB2;    // Reset height2 to match scaled image
                  width2 = width2 * ratioB2;    // Reset width2 to match scaled image
              }
      
              // Check if current height2 is larger than max
              if(height2 > maxBHeight22){
                  ratioB2 = maxBHeight22 / height2; // get ratio for scaling image
                  newBHeight2 = maxBHeight22   // Set new height2
                  newBWidth2 = width2 * ratioB2    // Scale width2 based on ratio
                  width2 = width2 * ratioB2;    // Reset width2 to match scaled image
                  height2 = height2 * ratioB2;    // Reset height2 to match scaled image
              }
              xBPlacement2 = cXBPlacement22 - (width2 / 2);
              yBPlacement2 = cYBPlacement22 - (height2 / 2);
   
              //x, y, width, height
              ctx2.save();
              let region = new Path2D();
              region.rect(0, 57, 1320, 68); 
   
            var grd11 = ctx2.createLinearGradient(0, 57, 408, 0);
            grd11.addColorStop(0, bColor);
            grd11.addColorStop(1, "transparent");
            // Fill with gradient
              ctx2.stroke()
              ctx2.clip(region, "evenodd");
              ctx2.fillStyle = grd11;
              ctx2.fillRect(0, 57, 1320, 68); 
              ctx2.globalAlpha = 0.6;
   
      
         ctx2.drawImage(imageObj52, xBPlacement2, yBPlacement2, width2, height2);
         //schedule
         ctx2.restore();

      //schedule

         imageObj32.src = redSide

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
        xRPlacement2 = cXRPlacement2 - (width2 / 2);
        yRPlacement2 = cYRPlacement2 - (height2 / 2);
                   //x, y, width, height

               //     ctx2.save();
               //     let region = new Path2D();
               //     region.rect(0, 793, 1320, 68); 
        
               //   var grd11 = ctx2.createLinearGradient(0, 793, 408, 850);
               //   grd11.addColorStop(0, rColor);
               //   grd11.addColorStop(1, "transparent");
               //   // Fill with gradient
               //     ctx2.stroke()
               //     ctx2.clip(region, "evenodd");
               //     ctx2.fillStyle = grd11;
               //     ctx2.fillRect(0, 793, 1320, 68); 
               //     ctx2.globalAlpha = 0.6;
        
         ctx2.drawImage(imageObj32, xRPlacement2, yRPlacement2, width2, height2);

         // ctx2.restore();
         if(switchS.checked == false) {
            imageObj62.src = redSide
            } else {
               imageObj62.src = blueSide
            }

         imageObj62.onload = function() {  
            var width2 = imageObj62.naturalWidth   // Current image width2
            var height2 = imageObj62.naturalHeight   // Current image height2
   
              // Check if the current width2 is larger than the max
              if(width2 > maxRWidth22){
               ratioR2 = maxRWidth22 / width2;   // get ratio for scaling image
               newRWidth2 = maxRWidth22; // Set new width2
               newRHeight2 = height2 * ratioR2;  // Scale height2 based on ratio
               height2 = height2 * ratioR2;    // Reset height2 to match scaled image
               width2 = width2 * ratioR2;    // Reset width2 to match scaled image
           }
   
           // Check if current height2 is larger than max
           if(height2 > maxRHeight22){
               ratioR2 = maxRHeight22 / height2; // get ratio for scaling image
               newRHeight2 = maxRHeight22   // Set new height2
               newRWidth2 = width2 * ratioR2    // Scale width2 based on ratio
               width2 = width2 * ratioR2;    // Reset width2 to match scaled image
               height2 = height2 * ratioR2;    // Reset height2 to match scaled image
           }
           xRPlacement2 = cXRPlacement22 - (width2 / 2);
           yRPlacement2 = cYRPlacement22 - (height2 / 2);
                      //x, y, width, height
   
                      ctx2.save();
                      let region = new Path2D();
                      region.rect(0, 793, 1320, 68); 
           
                    var grd11 = ctx2.createLinearGradient(0, 793, 408, 850);
                    grd11.addColorStop(0, rColor);
                    grd11.addColorStop(1, "transparent");
                    // Fill with gradient
                      ctx2.stroke()
                      ctx2.clip(region, "evenodd");
                      ctx2.fillStyle = grd11;
                      ctx2.fillRect(0, 793, 1320, 68); 
                      ctx2.globalAlpha = 0.6;
           
            ctx2.drawImage(imageObj62, xRPlacement2, yRPlacement2, width2, height2);
   
            ctx2.restore();

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

               xLPlacement2 = cXLPacement2 - (width2 / 2);
               yLPlacement2 = cYLPacement2 - (height2 / 2);

               drawTitle2();
               // drawPHBcaster2();
               // drawColorCaster2();
               drawRScore2();
               drawBScore2();
               drawRteam2();
               drawBteam2();
               drawWeek2();
               drawLeague2();
               drawLeagueRScore2();
               drawLeagueBScore2();
               drawBTag2();
               drawRTag2();
               drawRScore22();
               drawBScore22();

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
}
}
}
};								
}
//START OF THIRD PAGE

var c3=document.getElementById("overlay3");
var ctx3=c3.getContext("2d");
var imageObj13 = new Image();
var imageObj23 = new Image();
var imageObj33 = new Image();
var imageObj43 = new Image();
var imageObjSchedule3 = new Image();
var imageObj53 = new Image();
var imageObj63 = new Image();

// console.log("-----------------")
// console.log("app3")
// console.log(c3)

var maxRWidth3 = 64; // Max width1 for the image
var maxRHeight3 = 64;    // Max height1 for the image
var ratioR3 = 0;  // Used for aspect ratio

var maxBWidth3 = 64; // Max width1 for the image
var maxBHeight3 = 64;    // Max height1 for the image
var ratioB3 = 0;  // Used for aspect ratio

var maxLWidth3 = 91;
var maxLHeight3 = 110;
var ratioL3 = 0;

var maxRWidth32 = 210; // Max width1 for the image
var maxRHeight32 = 185;    // Max height1 for the image

var maxBWidth32 = 210; // Max width1 for the image
var maxBHeight32 = 185;    // Max height1 for the image

//coordinates

if(switchS.checked == false) {
   blueTeamSliderxs = blueTeamSliderx
   blueTeamSliders = blueTeamSlider
   redTeamSliders = redTeamSlider
   redTeamSliderxs = redTeamSliderx
   } else {
      blueTeamSliderxs = redTeamSliderx * -1
      blueTeamSliders = redTeamSlider
      redTeamSliders = blueTeamSlider
      redTeamSliderxs = blueTeamSliderx * -1
   }

cTitle3x = 110
cTitle3y = 1022
cWeek3x = 110
cWeek3y = 1072
cLeague3x = 110
cLeague3y = 1047
cPHBcaster3x = (571 + 857)/2
cPHBcaster3y = ((493 + 517)/2) + 10
cColorCaster3x = ((1021 + 1307)/2)
cColorCaster3y = ((493 + 517)/2) + 10
cPHBcasterT3x = (571 + 857)/2 // Use these to create caster twitters #Chris
cPHBcasterT3y = ((521 + 548)/2) + 10 // Use these to create caster twitters #Chris
cColorCasterT3x = ((1021 + 1307)/2) // Use these to create caster twitters #Chris
cColorCasterT3y = ((521 + 548)/2) + 10 // Use these to create caster twitters #Chris
cRedScore3x = (1020 + 1224)/2
cRedScore3y = (112/2) + 40
cBlueScore3x = (697 + 902)/2
cBlueScore3y = (112/2) + 40

cLeagueRS3x = (1180 + 1468)/2
cLeagueRS3y = ((0 + 64)/2) + 10
cLeagueBS3x =  (302 + 886)/2
cLeagueBS3y =  ((0 + 64)/2) + 10

cRedTeam3x = (1180 + 1760)/2
cRedTeam3y = ((0 + 64)/2) + 10
cBlueTeam3x = (302 + 594)/2
cBlueTeam3y = ((0 + 64)/2) + 10

cXLPacement3 = (0 + 110)/2
cYLPacement3 = (960 + 1080)/2
cXBPlacement3 = ((424 + 562)/2) 
cYBPlacement3 = ((964 + 1026)/2) 
cXRPlacement3 = ((360 + 544)/2) 
cYRPlacement3 = ((1028 + 1080)/2)
cBTag3x = (480 + 681)/2
cBTag3y = ((964 + 1026)/2) + 15
cRTag3x = (431 + 634)/2
cRTag3y = ((1028 + 1080)/2) + 15

cBlueScore32x = (637 + 753)/2
cBlueScore32y = ((964 + 1026)/2) + 15
cRedScore32x = (705 + 587)/2
cRedScore32y = ((1028 + 1080)/2) + 15

cXBPlacement32 = ((0 + 183)/2) + blueTeamSliderxs
cYBPlacement32 = ((0 + 42)/2) + blueTeamSliders
cXRPlacement32 = ((1735 + 1920)/2) + redTeamSliderxs
cYRPlacement32 = ((0 + 42)/2) + redTeamSliders


{
   function drawTitle3() {
      if (title !== null) {
         ctx3.font = "60px " + fontStyle;
         ctx3.textAlign = "left";
         ctx3.fillStyle = "white";
         ctx3.fillText(title, cTitle3x, cTitle3y);
      }
   };

   function drawRScore32() {
      if (redScore !== null) {
         ctx3.font = "30px " + fontStyle;
         ctx3.textAlign = "center";
         ctx3.fillStyle = "white";
         ctx3.fillText(redScore3, cRedScore32x, cRedScore32y);
      }
   }
   
   function drawBScore32() {
      if (blueScore !== null) {
         ctx3.font = "30px " + fontStyle;
         ctx3.textAlign = "center";
         ctx3.fillStyle = "white";
         ctx3.fillText(blueScore3, cBlueScore32x, cBlueScore32y);
      }
   }

   function drawBTag3() {
      if (week !== null) {
         ctx3.font = "30px " + fontStyle;
         ctx3.textAlign = "center";
         ctx3.fillStyle = "white";
         ctx3.fillText(bTag, cBTag3x, cBTag3y);
      }
   };

   function drawRTag3() {
      if (week !== null) {
         ctx3.font = "30px " + fontStyle;
         ctx3.textAlign = "center";
         ctx3.fillStyle = "white";
         ctx3.fillText(rTag, cRTag3x, cRTag3y);
      }
   };
   
   function drawWeek3() {
      if (week !== null) {
         ctx3.font = "20px " + fontStyle;
         ctx3.textAlign = "left";
         ctx3.fillStyle = "white";
         ctx3.fillText(week, cWeek3x, cWeek3y);
      }
   };
   
   function drawLeague3() {
      if (leagueName !== null) {
         ctx3.font = "20px " + fontStyle;
         ctx3.textAlign = "left";
         ctx3.fillStyle = "white";
         ctx3.fillText(leagueName, cLeague3x, cLeague3y);
      }
   };

   function drawLeagueRScore3() {
      if (leagueScoreR !== null) {
         ctx3.font = "20px " + fontStyle;
         ctx3.textAlign = "center";
         ctx3.fillStyle = "white";
         ctx3.fillText(leagueScoreR, cLeagueRS3x, cLeagueRS3y);
      }
   };
   
   function drawLeagueBScore3() {
      if (leagueScoreB !== null) {
         ctx3.font = "20px " + fontStyle;
         ctx3.textAlign = "center";
         ctx3.fillStyle = "white";
         ctx3.fillText(leagueScoreB, cLeagueBS3x, cLeagueBS3y);
      }
   };

function drawPHBcaster3() {
   if (PHBcaster !== null) {
      ctx3.font = "20px " + fontStyle;
      ctx3.textAlign = "center";
      ctx3.fillStyle = "white";
      ctx3.fillText(PHBcaster, cPHBcaster3x, cPHBcaster3y);
   }
};

function drawPHBcasterT3() {
   if (PHBcasterTwitter !== null) {
      ctx3.font = "20px " + fontStyle;
      ctx3.textAlign = "center";
      ctx3.fillStyle = "white";
      ctx3.fillText(PHBcasterTwitter, cPHBcasterT3x, cPHBcasterT3y);
   }
};

function drawColorCaster3() {
   if (colorCaster !== null) {
      ctx3.font = "20px " + fontStyle;
      ctx3.textAlign = "center";
      ctx3.fillStyle = "white";
      ctx3.fillText(colorCaster, cColorCaster3x, cColorCaster3y);
   }
};

function drawColorCasterT3() {
   if (colorCasterTwitter !== null) {
      ctx3.font = "20px " + fontStyle;
      ctx3.textAlign = "center";
      ctx3.fillStyle = "white";
      ctx3.fillText(colorCasterTwitter, cColorCasterT3x, cColorCasterT3y);
   }
};

function drawRScore3() {
   if (redScore !== null) {
      ctx3.font = "80px " + fontStyle;
      ctx3.textAlign = "center";
      ctx3.fillStyle = "white";
      if(switchS.checked == false) { 
         redScore3 = redScore
         } else {
            redScore3 = blueScore
         }
      ctx3.fillText(redScore3, cRedScore3x, cRedScore3y);
   }
}

function drawBScore3() {
   if (blueScore !== null) {
      ctx3.font = "80px " + fontStyle;
      ctx3.textAlign = "center";
      ctx3.fillStyle = "white";
      if(switchS.checked == false) { 
         blueScore3 = blueScore
         } else {
            blueScore3 = redScore
         }
      ctx3.fillText(blueScore3, cBlueScore3x, cBlueScore3y);
   }
}

function drawRteam3() {
   if (redTeam !== null) {
      ctx3.font = "20px " + fontStyle;
      ctx3.textAlign = "center";
      ctx3.fillStyle = "white";
      ctx3.fillText(redTeam, cRedTeam3x, cRedTeam3y);
   }
}

function drawBteam3() {
   if (blueTeam !== null) {
      ctx3.font = "20px " + fontStyle;
      ctx3.textAlign = "center";
      ctx3.fillStyle = "white";
      ctx3.fillText(blueTeam, cBlueTeam3x, cBlueTeam3y);
   }
}

function drawTest3() {
   ctx3.font = "20px " + fontStyle;
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
   // drawTest(); 

      imageObjSchedule3.src = scheduleImg1G
      imageObjSchedule3.onload = function() {
      ctx3.drawImage(imageObjSchedule3, 0, 0, 1920, 1080)
      //help
      if(switchS.checked == false) {
         imageObj53.src = blueSide
         } else {
            imageObj53.src = redSide
         }

      imageObj53.onload = function() {
               var width3 = imageObj53.naturalWidth   // Current image width1
               var height3 = imageObj53.naturalHeight   // Current image height1
   
                 // Check if the current width1 is larger than the max
                 if(width3 > maxBWidth32){
                  ratioB3 = maxBWidth32 / width3;   // get ratio for scaling image
                  newBWidth3 = maxBWidth32; // Set new width1
                  newBHeight3 = height3 * ratioB3;  // Scale height1 based on ratio
                  height3 = height3 * ratioB3;    // Reset height1 to match scaled image
                  width3 = width3 * ratioB3;    // Reset width1 to match scaled image
              }

              // Check if current height1 is larger than max
              if(height3 > maxBHeight32){
                  ratioB3 = maxBHeight32 / height3; // get ratio for scaling image
                  newBHeight3 = maxBHeight32   // Set new height1
                  newBWidth3 = width3 * ratioB3    // Scale width1 based on ratio
                  width3 = width3 * ratioB3;    // Reset width1 to match scaled image
                  height3 = height3 * ratioB3;    // Reset height1 to match scaled image
              }
              xBPlacement32 = cXBPlacement32 - (width3 / 2)
              yBPlacement32 = cYBPlacement32 - (height3 / 2)
              //clip gang
              //x, y, width, height
              
              ctx3.save()
              let region = new Path2D();
              region.rect(302, 0, 1920, 65);
              region.rect(0, 0, 14, 65);
              region.rect(14, 0, 288, 44);
              region.rect(60, 44, 15, 22);
              region.rect(121, 44, 15, 22);
              region.rect(182, 44, 14, 22);
              region.rect(242, 44, 15, 22);
   
              var grd = ctx3.createLinearGradient(0, 0, 600, 0);
              grd.addColorStop(0, bColor);
              grd.addColorStop(1, "transparent");
              
              // Fill with gradient
              ctx3.stroke()
              ctx3.clip(region, "evenodd");
              ctx3.fillStyle = grd;
              ctx3.fillRect(0, 0, 2000, 65); 
              ctx3.globalAlpha = 0.6;
   
   
            //   ctx1.rect(0, 0, 1920, 42,);
            //   ctx1.rect(0, 0, )
              //clip gang
   
         ctx3.drawImage(imageObj53, xBPlacement32, yBPlacement32, width3, height3);

         ctx3.restore();
         if(switchS.checked == false) {
            imageObj63.src = redSide
            } else {
               imageObj63.src = blueSide
            }
   
         
         // imageObj63.src = blueSide

         imageObj63.onload = function() { 
            var width3 = imageObj63.naturalWidth   // Current image width1
            var height3 = imageObj63.naturalHeight   // Current image height1
   
              // Check if the current width1 is larger than the max
              if(width3 > maxRWidth32){
               ratioR3 = maxRWidth32 / width3;   // get ratio for scaling image
               newRWidth3 = maxRWidth32; // Set new width1
               newRHeight3 = height3 * ratioR3;  // Scale height1 based on ratio
               height3 = height3 * ratioR3;    // Reset height1 to match scaled image
               width3 = width3 * ratioR3;    // Reset width1 to match scaled image
           }
   
           // Check if current height1 is larger than max
           if(height3 > maxRHeight32){
               ratioR3 = maxRHeight32 / height3; // get ratio for scaling image
               newRHeight3 = maxRHeight32   // Set new height1
               newRWidth3 = width3 * ratioR3    // Scale width1 based on ratio
               width3 = width3 * ratioR3;    // Reset width1 to match scaled image
               height3 = height3 * ratioR3;    // Reset height1 to match scaled image
           }
           xRPlacement32 = cXRPlacement32 - (width3 / 2)
           yRPlacement32 = cYRPlacement32 - (height3 / 2)
               //clip gang
              //x, y, width, height
              ctx3.save();
              let region = new Path2D();
              region.rect(1350, 0, 265, 65); 
              region.rect(1904, 0, 100, 65);
              region.rect(1615, 0, 289, 43);
              region.rect(1661, 43, 15, 22);
              region.rect(1722, 43, 15, 22);
              region.rect(1783, 43, 15, 22);
              region.rect(1843, 43, 15, 22);
   
            var grd1 = ctx3.createLinearGradient(1350, 0, 1950, 0);
            grd1.addColorStop(0, "transparent");
            grd1.addColorStop(1, rColor);
            // Fill with gradient
              ctx3.stroke()
              ctx3.clip(region, "evenodd");
              ctx3.fillStyle = grd1;
              ctx3.fillRect(1350, 0, 1320, 65); 
              ctx3.globalAlpha = 0.6;
   
   
            //   ctx1.rect(0, 0, 1920, 42,);
            //   ctx1.rect(0, 0, )
            //clip gang
           
            ctx3.drawImage(imageObj63, xRPlacement32, yRPlacement32, width3, height3);
   
            ctx3.restore();
            // if(switchS.checked == false) {
            //    imageObj23.src = blueSide
            //    } else {
            //       imageObj23.src = redSide
            //    }
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
           xBPlacement3 = cXBPlacement3 - (width3 / 2)
           yBPlacement3 = cYBPlacement3 - (height3 / 2)



  
      ctx3.drawImage(imageObj23, xBPlacement3, yBPlacement3, width3, height3);
      // if(switchS.checked == false) {
      //    imageObj33.src = redSide
      //    } else {
      //       imageObj33.src = blueSide
      //    }
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
        xRPlacement3 = cXRPlacement3 - (width3 / 2)
        yRPlacement3 = cYRPlacement3 - (height3 / 2)
        
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
               // cXBPlacement2 = ((424 + 562)/2) + blueTeamSliderx
               // cYBPlacement2 = ((950 + 1012)/2) + blueTeamSlider
               // cXRPlacement2 = ((360 + 544)/2) - redTeamSliderx
               // cYRPlacement2 = ((1014 + 1080)/2) + redTeamSlider
               // cXLPacement3 = (0 + 110)/2
               // cYLPacement3 = (960 + 1080)/2

               drawTitle3();
               drawPHBcaster3();
               drawColorCaster3();
               drawPHBcasterT3();
               drawColorCasterT3();
               drawRScore3();
               drawBScore3();
               drawRteam3();
               drawBteam3();
               drawWeek3();
               drawBTag3()
               drawRTag3();
               drawLeague3();
               drawLeagueRScore3();
               drawLeagueBScore3();
               drawBScore32();
               drawRScore32()
               // drawTest();

               xLPlacement3 = cXLPacement3 - (width3 / 2)
               yLPlacement3 = cYLPacement3 - (height3 / 2)
            ctx3.drawImage(imageObj43, xLPlacement3, yLPlacement3, width3, height3);
            var img3 = c3.toDataURL("image/png");
            document.appendChild('<img src="' + img3 + '" width="1920" height="1080"/>');
         }
      }
   }
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
var imageObjSchedule4 = new Image();
// console.log("-----------------")
// console.log("app4")
// console.log(c4)

var maxRWidth4 = 64; // Max width1 for the image
var maxRHeight4 = 64;    // Max height1 for the image
var ratioR4 = 0;  // Used for aspect ratio

var maxBWidth4 = 64; // Max width1 for the image
var maxBHeight4 = 64;    // Max height1 for the image
var ratioB4 = 0;  // Used for aspect ratio

var maxLWidth4 = 91;
var maxLHeight4 = 110;
var ratioL4 = 0;

var maxRWidth42 = 210; // Max width1 for the image
var maxRHeight42 = 185;    // Max height1 for the image

var maxBWidth42 = 210; // Max width1 for the image
var maxBHeight42 = 185;    // Max height1 for the image

//coordinates

if(switchS.checked == false) {
   blueTeamSliderxs = blueTeamSliderx
   blueTeamSliders = blueTeamSlider
   redTeamSliders = redTeamSlider
   redTeamSliderxs = redTeamSliderx
   } else {
      blueTeamSliderxs = redTeamSliderx * -1
      blueTeamSliders = redTeamSlider
      redTeamSliders = blueTeamSlider
      redTeamSliderxs = blueTeamSliderx * -1
   }


cTitle4x = 110
cTitle4y = 1022
cWeek4x = 110
cWeek4y = 1072
cLeague4x = 110
cLeague4y = 1047

cPHBcaster4x = (58 + 377)/2
cPHBcaster4y = ((452 + 478)/2) + 10
cColorCaster4x = ((1520 + 1829)/2)
cColorCaster4y = ((452 + 478)/2) + 10
cPHBcasterT4x = (58 + 377)/2
cPHBcasterT4y = ((481 + 508)/2) + 10
cColorCasterT4x = ((1520 + 1829)/2)
cColorCasterT4y = ((481 + 508)/2) + 10
cRedScore4x = ((1034 + 1182)/2)
cRedScore4y = (146/2) + 40
cBlueScore4x = ((869 + 721)/2)
cBlueScore4y = (146/2) + 40
cBlueScore42x = (637 + 753)/2
cBlueScore42y = ((964 + 1026)/2) + 10
cRedScore42x = (705 + 587)/2
cRedScore42y = ((1028 + 1080)/2) + 10
cLeagueBS4x = (460 + 690)/2
cLeagueBS4y = ((0 + 64)/2) + 15
cLeagueRS4x = (1226 + 1456)/2
cLeagueRS4y = ((0 + 64)/2) + 15
// cRedTeam4x = (1226 + 1456)/2
cRedTeam4x = (1456 + 1690)/2
cRedTeam4y = ((0 + 64)/2) + 17
cBlueTeam4x = (230 + 460)/2
cBlueTeam4y = ((0 + 64)/2) + 17
cXLPacement4 = (0 + 110)/2
cYLPacement4 = (960 + 1080)/2
cXBPlacement4 = ((424 + 562)/2)
cYBPlacement4 = ((964 + 1026)/2) 
cXRPlacement4 = ((360 + 544)/2)
cYRPlacement4 = ((1028 + 1080)/2) 

cXBPlacement42 = ((0 + 230)/2) + blueTeamSliderxs
cYBPlacement42 = ((0 + 64)/2) + blueTeamSliders
cXRPlacement42 = ((1686 + 1920)/2) + redTeamSliders
cYRPlacement42 = ((0 + 64)/2) + redTeamSliderxs


cBTag4x = (480 + 681)/2
cBTag4y = ((964 + 1026)/2) + 15
cRTag4x = (431 + 634)/2
cRTag4y = ((1028 + 1080)/2) + 15
{
   function drawTitle4() {
      if (title !== null) {
         ctx4.font = "60px " + fontStyle;
         ctx4.textAlign = "left";
         ctx4.fillStyle = "white";
         ctx4.fillText(title, cTitle4x, cTitle4y);
      }
   };

   function drawRScore42() {
      if (redScore !== null) {
         ctx4.font = "30px " + fontStyle;
         ctx4.textAlign = "center";
         ctx4.fillStyle = "white";
         if(switchS.checked == false) { 
            redScore4 = redScore
            } else {
               redScore4 = blueScore
            }
         ctx4.fillText(redScore4, cRedScore42x, cRedScore42y);
      }
   }
   
   function drawBScore42() {
      if (blueScore !== null) {
         ctx4.font = "30px " + fontStyle;
         ctx4.textAlign = "center";
         ctx4.fillStyle = "white";
         if(switchS.checked == false) { 
            blueScore4 = blueScore
            } else {
               blueScore4 = redScore
            }
         ctx4.fillText(blueScore4, cBlueScore42x, cBlueScore42y);
      }
   }

   function drawBTag4() {
      if (week !== null) {
         ctx4.font = "30px " + fontStyle;
         ctx4.textAlign = "center";
         ctx4.fillStyle = "white";
         ctx4.fillText(bTag, cBTag3x, cBTag3y);
      }
   };

   function drawRTag4() {
      if (week !== null) {
         ctx4.font = "30px " + fontStyle;
         ctx4.textAlign = "center";
         ctx4.fillStyle = "white";
         ctx4.fillText(rTag, cRTag3x, cRTag3y);
      }
   };
   
   function drawWeek4() {
      if (week !== null) {
         ctx4.font = "20px " + fontStyle;
         ctx4.textAlign = "left";
         ctx4.fillStyle = "white";
         ctx4.fillText(week, cWeek4x, cWeek4y);
      }
   };
   
   function drawLeague4() {
      if (leagueName !== null) {
         ctx4.font = "20px " + fontStyle;
         ctx4.textAlign = "left";
         ctx4.fillStyle = "white";
         ctx4.fillText(leagueName, cLeague4x, cLeague4y);
      }
   };

// function drawType4() {
//    if (type !== null) {
//    ctx4.font = "40px " + fontStyle;
//    ctx4.textAlign = "center";
//    ctx4.fillStyle = "white";
//    ctx4.fillText(type, 307, 296);
//    }
// };

function drawLeagueRScore4() {
   if (leagueScoreR !== null) {
      ctx4.font = "30px " + fontStyle;
      ctx4.textAlign = "center";
      ctx4.fillStyle = "white";
      ctx4.fillText(leagueScoreR, cLeagueRS4x, cLeagueRS4y);
   }
};

function drawLeagueBScore4() {
   if (leagueScoreB !== null) {
      ctx4.font = "30px " + fontStyle;
      ctx4.textAlign = "center";
      ctx4.fillStyle = "white";
      ctx4.fillText(leagueScoreB, cLeagueBS4x, cLeagueBS4y);
   }
};

function drawPHBcaster4() {
   if (PHBcaster !== null) {
   ctx4.font = "20px " + fontStyle;
   ctx4.textAlign = "center";
   ctx4.fillStyle = "white";
   ctx4.fillText(PHBcaster, cPHBcaster4x, cPHBcaster4y);
   }
};

function drawPHBcasterT4() {
   if (PHBcasterTwitter !== null) {
      ctx4.font = "20px " + fontStyle;
      ctx4.textAlign = "center";
      ctx4.fillStyle = "white";
      ctx4.fillText(PHBcasterTwitter, cPHBcasterT4x, cPHBcasterT4y);
   }
};

function drawColorCaster4() {
   if (colorCaster !== null) {
   ctx4.font = "20px " + fontStyle;
   ctx4.textAlign = "center";
   ctx4.fillStyle = "white";
   ctx4.fillText(colorCaster, cColorCaster4x, cColorCaster4y);
   }
};

function drawColorCasterT4() {
   if (colorCasterTwitter !== null) {
      ctx4.font = "20px " + fontStyle;
      ctx4.textAlign = "center";
      ctx4fillStyle = "white";
      ctx4.fillText(colorCasterTwitter, cColorCasterT4x, cColorCasterT4y);
   }
};




function drawRScore4() {
   if (redScore !== null) {
   ctx4.font = "90px " + fontStyle;
   ctx4.textAlign = "center";
   ctx4.fillStyle = "white";
   ctx4.fillText(redScore, cRedScore4x, cRedScore4y);
   }
}

function drawBScore4() {
   if (blueScore !== null) {
   ctx4.font = "90px " + fontStyle;
   ctx4.textAlign = "center";
   ctx4.fillStyle = "white";
   ctx4.fillText(blueScore, cBlueScore4x, cBlueScore4y);
   }
}

function drawRteam4() {
   if (redTeam !== null) {
   ctx4.font = "35px " + fontStyle;
   ctx4.textAlign = "center";
   ctx4.fillStyle = "white";
   ctx4.fillText(redTeam, cRedTeam4x, cRedTeam4y);
   }
}

function drawBteam4() {
   if (blueTeam !== null) {
   ctx4.font = "35px " + fontStyle;
   ctx4.textAlign = "center";
   ctx4.fillStyle = "white";
   ctx4.fillText(blueTeam, cBlueTeam4x, cBlueTeam4y);
   }
}

function drawComingUp4() {
    if (blueTeam !== null) {
   ctx4.font = "35px " + fontStyle;
   ctx4.textAlign = "center";
   ctx4.fillStyle = "white";
   ctx4.fillText("Coming Up", 307, 477);
    }
}

function drawVS4() {
   if (blueSide !==null && redSide !==null){
      ctx4.font = "35px " + fontStyle;
      ctx4.textAlign = "center";
      ctx4.fillStyle = "white";
      ctx4.fillText("VS", 307, 556);
   }
   if (blueSide2 !==null && redSide2 !==null){
      ctx4.font = "35px " + fontStyle;
      ctx4.textAlign = "center";
      ctx4.fillStyle = "white";
      ctx4.fillText("VS", 307, 682);
   }
   if (blueSide3 !==null && redSide3 !==null){
      ctx4.font = "35px " + fontStyle;
      ctx4.textAlign = "center";
      ctx4.fillStyle = "white";
      ctx4.fillText("VS", 307, 800);
   }
   if (blueSide4 !==null && redSide4 !==null){
      ctx4.font = "35px " + fontStyle;
      ctx4.textAlign = "center";
      ctx4.fillStyle = "white";
      ctx4.fillText("VS", 307, 922);
   }
}

function drawTest4() {
   ctx4.font = "20px " + fontStyle;
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

   imageObjSchedule4.src = scheduleImg1G
   imageObjSchedule4.onload = function() {
   ctx4.drawImage(imageObjSchedule3, 0, 0, 1920, 1080)

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
           xBPlacement4 = cXBPlacement4 - (width4 / 2)
           yBPlacement4 = cYBPlacement4 - (height4 / 2)


      ctx4.drawImage(imageObj24, xBPlacement4, yBPlacement4, width4, height4);

      if(switchS.checked == false) { //blue
         imageObj54.src = blueSide
         } else {
            imageObj54.src = redSide
         }

         imageObj54.onload = function() {
                  var width4 = imageObj54.naturalWidth   // Current image width4
                  var height4 = imageObj54.naturalHeight   // Current image height4
      
                    // Check if the current width4 is larger than the max
                    if(width4 > maxBWidth42){
                     ratioT4 = maxBWidth42 / width4;   // get ratio for scaling image
                     newBWidth4 = maxBWidth42; // Set new width4
                     newBHeight4 = height4 * ratioT4;  // Scale height4 based on ratio
                     height4 = height4 * ratioT4;    // Reset height4 to match scaled image
                     width4 = width4 * ratioT4;    // Reset width4 to match scaled image
                 }
         
                 // Check if current height4 is larger than max
                 if(height4 > maxBHeight42){
                     ratioT4 = maxBHeight42 / height4; // get ratio for scaling image
                     newTHeight4 = maxBHeight42   // Set new height4
                     newTWidth4 = width4 * ratioT4    // Scale width4 based on ratio
                     width4 = width4 * ratioT4;    // Reset width4 to match scaled image
                     height4 = height4 * ratioT4;    // Reset height4 to match scaled image
                 }
                 xBPlacement4 = cXBPlacement42 - (width4 / 2)
                 yBPlacement4 = cYBPlacement42 - (height4 / 2)

                 ctx4.save()
                 let region = new Path2D();

                 region.rect(0, 0, 1920, 71);
      
                 var grd = ctx4.createLinearGradient(0, 0, 600, 0);
                 grd.addColorStop(0, bColor);
                 grd.addColorStop(1, "transparent");
                 
                 // Fill with gradient
                 ctx4.stroke()
                 ctx4.clip(region, "evenodd");
                 ctx4.fillStyle = grd;
                 ctx4.fillRect(0, 0, 2000, 71); 
                 ctx4.globalAlpha = 0.6;
      
      
            ctx4.drawImage(imageObj54, xBPlacement4, yBPlacement4, width4, height4);

            ctx4.restore();
      }
      }

      if(switchS.checked == false) { //red
         imageObj64.src = redSide
         } else {
            imageObj64.src = blueSide
         }
         
            imageObj64.onload = function() {
                     var width4 = imageObj64.naturalWidth   // Current image width4
                     var height4 = imageObj64.naturalHeight   // Current image height4
            
                       // Check if the current width4 is larger than the max
                       if(width4 > maxRWidth42){
                        ratioT4 = maxRWidth42 / width4;   // get ratio for scaling image
                        newTWidth4 = maxRWidth42; // Set new width4
                        newTHeight4 = height4 * ratioT4;  // Scale height4 based on ratio
                        height4 = height4 * ratioT4;    // Reset height4 to match scaled image
                        width4 = width4 * ratioT4;    // Reset width4 to match scaled image
                    }
                 
                    // Check if current height4 is larger than max
                    if(height4 > maxRHeight42){
                        ratioT4 = maxRHeight42 / height4; // get ratio for scaling image
                        newTHeight4 = maxRHeight42   // Set new height4
                        newTWidth4 = width4 * ratioT4    // Scale width4 based on ratio
                        width4 = width4 * ratioT4;    // Reset width4 to match scaled image
                        height4 = height4 * ratioT4;    // Reset height4 to match scaled image
                    }
                    xRPlacement4 = cXRPlacement42 - (width4 / 2)
                    yRPlacement4 = cYRPlacement42 - (height4 / 2)

                    ctx4.save();
                    let region = new Path2D();
                    region.rect(1350, 0, 654, 64); 
         
                  var grd1 = ctx4.createLinearGradient(1350, 0, 1950, 0);
                  grd1.addColorStop(0, "transparent");
                  grd1.addColorStop(1, rColor);
                  // Fill with gradient
                    ctx4.stroke()
                    ctx4.clip(region, "evenodd");
                    ctx4.fillStyle = grd1;
                    ctx4.fillRect(1350, 0, 1320, 64); 
                    ctx4.globalAlpha = 0.6;
                 
               ctx4.drawImage(imageObj64, xRPlacement4, yRPlacement4, width4, height4);
         
                  ctx4.restore();

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
        xRPlacement4 = cXRPlacement4 - (width4 / 2)
        yRPlacement4 = cYRPlacement4 - (height4 / 2)
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

               xLPlacement4 = cXLPacement4 - (width4 / 2)
               yLPlacement4 = cYLPacement4 - (height4 / 2)
            ctx4.drawImage(imageObj44, xLPlacement4, yLPlacement4, width4, height4);
            drawTitle4();
            drawPHBcaster4();
            drawColorCaster4();
            drawPHBcasterT4();
            drawColorCasterT4();
            drawRScore4();
            drawBScore4();
            drawRteam4();
            drawBteam4();
            drawWeek4();
            drawLeague4();
            drawBTag4();
            drawRTag4();
            drawLeagueRScore4();
            drawLeagueBScore4();
            drawBScore42();
            drawRScore42();
            // drawComingUp4();
            // drawType4();
            // drawVS4();
            // drawTest();
            var img4 = c4.toDataURL("image/png");
            document.appendChild('<img src="' + img4 + '" width="1920" height="1080"/>');
         }
      }
   }
};
}						
}
onSubmit();