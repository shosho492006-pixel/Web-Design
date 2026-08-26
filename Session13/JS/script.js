function looping(){
    var start = +prompt("Enter First Number:")
    var end = +prompt("Enter Last Number:")
    var contNum = +prompt("Enter Continue Number:")
    var breakNum = +prompt("Enter Break Number:")

    for( var i = start ; i <= end ; i++){
        if(i==contNum) continue
        else if(i==breakNum) break
        else console.log(i)

    }
}

looping()