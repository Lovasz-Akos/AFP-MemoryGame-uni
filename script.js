var flippedCounter = 0;
var newTileID = "";
var firstTileID = "";

var pictures = [""]; //contains the list of assignable pictures 

function flip(tileID) { //onclick of tiles calls this function, with it's own id (for example: b4), that's stored in tileID

    flippedCounter++;
    newTileID = tileID; //got tileID gets stored in newTileID. This is needed to check it against the previous tile.

    if (flippedCounter == 1) {
        showImg(tileID);
        firstTileID = newTileID; //if this is the first tile clicked, store it as the one to compare to

        console.log("first click");
        console.log("first:" + firstTileID);
        console.log("current:" + newTileID); //? I think this was for debugging but I'll leave them in here
    }

    if (flippedCounter == 2) {
        showImg(tileID);
        //TODO add checker logic. This needs the pictures and the randomiser to be done. 
        console.log("second click");
        checkStatus(tileID, flippedCounter);
        setTimeout(hideAllImgs, 500);
        console.log("first:" + firstTileID);
        console.log("current:" + newTileID); //? I think this was for debugging but I'll leave them in here
    }
}

function showImg(tileID) {
    document.getElementById(tileID).setAttribute("style", "background-image:url('images/fish.png');");
}

function hideImg(tileID) {
    document.getElementById(tileID).style.backgroundColor = "#443737";
    document.getElementById(tileID).style.backgroundImage = "";
}

function hideAllImgs() {
    for (var i = 0; i < 16; i++) {
        try {
            document.getElementById('b' + i).style.backgroundColor = "#443737";
            document.getElementById('b' + i).style.backgroundImage = "";
        } catch (e) {
            continue;
        }
    }
    flippedCounter = 0;
}


function checkStatus(tileID, counter) {
    if (newTileID == firstTileID) {
        console.log("clicked the same tile twice. this...does nothing.");
        hideImg(tileID);
    }
}

function newGame() {
    //TODO randomly assign pictures to tiles
    hideAllImgs();
    hideTile('b0');
    hideTile('b1');
    hideTile('b2');
    hideTile('b3');
}

function hideTile(tileID) {
    var element = document.getElementById(tileID);
    var hiddenPlaceholder = wrapper.innerHTML += "<a href=#><div class=hiddenBox id=b" + i + ">" + i + "</div></a>"
    element.parentNode.replaceChild(hiddenPlaceholder);
}