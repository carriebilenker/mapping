let request = new XMLHttpRequest()
request.open("GET", mapUri, true)
request.onload = onloadFunc
request.onerror = onerrorFunc
request.send ();

// onload callback
function onloadFunc(){
  console.log(JSON.parse(request.response));
  if (reponse.results.length > 0) {
    document.getElementsById("mapping").innerHTML = response.results[0].formatted_address
  }
  // print first results formatted addres to page
  // response status?
}

function  onerrorFunc (){
// onerror callback
console.log("ya screwed up,kid.")
}
