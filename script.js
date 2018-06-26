function showList(str, typeSearch) {
console.log(typeSearch);
if (str ==""){
    if (window.XMLHttpRequest){

    } else {

    }
    xmlhttp.onreadystatechange = function () {

    }
    xmlhttp.open("GET", "getdata.php?q=" + str + "&type=" + typeSearch, true);
    xmlhttp.send();
}
}



function printArray(arr) {

    let out = "";

    let i;

    for (i = 0; i < arr.length; i++) {

        //console.log(arr[i]);

        out += '<span id="' + arr[i] + '" onClick="showList(this.id,\'answer\')">' + arr[i] + '</span><br>';

    }

    document.getElementById("txtHint").innerHTML = out;

}

function parseJson(result) {
    result2 = JSON.parse(result);
        result3 = result2[0];
        let displayString = "<h1>" + result3['Naam'] + "</h1><table>";
        for (let [key, value] of Object.entries(result3)) {
            displayString += "<tr><td>" + key + '</td><td>' + value + '</td></tr>';
    }

    displayString += "</table>"
    document.getElementById("textHint").innerHTML = displayString;
}
