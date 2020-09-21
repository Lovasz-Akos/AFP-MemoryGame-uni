var flippedCounter = 0;
var newTileID = "";
var firstTileID = "";

var pictures = [""]; //contains the list of assignable pictures 

function flip(tileID) { //onclick of tiles calls this function, with it's own id (for example: b4), that's stored in tileID
    flippedCounter++;
    newTileID = tileID; //got tileID gets stored in newTileID. This is needed to check it against the previous tile.

    if (flippedCounter == 1) {
        firstTileID = newTileID; //if this is the first tile clicked, store it as the one to compare to
    }

    if (flippedCounter == 2) {
        //#TODO add checker logic. This needs the pictures and the randomiser to be done. 

        flippedCounter = 0;
    }
}