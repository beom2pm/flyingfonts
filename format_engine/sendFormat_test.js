//////////저장 포맷으로 보내기- 마무리 단게 테스트 코드///////
function js_to_css(){


  /*sendFormat(
    { id: "TXT_ID0", start_time:00:00:02, contents: "키네틱 타이포그래피"}
  );*/
  sendFormat();
}

/////////////////////////////////////////저장 포맷으로 보내기////////////////////////////////////////
var sendFormat = function(){

  /*var genArray = [];
  for (var k = 0; k < arguments.length; k++) {
     genArray[k] = {
        id : arguments[k].id,
        start_time : arguments[k].start_time,
        contents : arguments[k].contents
     };
  }*/
///////////가져오기/////////////
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
     if (xhttp.readyState === xhttp.DONE){
      if (xhttp.status == 200 || xhttp.status == 201) {
      //  console.log(xhttp.responseText);
          myFunction(this);
      }
      else{
          //console.error(xhttp.responseText);
      }
    }
  };
  xhttp.open("GET", "Test.xml", true);
  xhttp.send();

  /*var oFOStream = Components.classes["@mozilla.org/network/file-output-stream;1"].createInstance(Components.interfaces.nsIFileOutputStream);
  var oFile = Components.classes["@mozilla.org/file/directory_service;1"].getService(Components.interfaces.nsIProperties).get("ProfD", Components.interfaces.nsILocalFile); // get profile folder
  oFile.append("extensions"); // extensions sub-directory
  oFile.append("{5872365E-67D1-4AFD-9480-FD293BEBD20D}"); // GUID of your extension
  oFile.append("myXMLFile.xml"); // filename
  oFOStream.init(oFile, 0x02 | 0x08 | 0x20, 0664, 0); // write, create, truncate
  (new XMLSerializer()).serializeToStream(xmlHttpRequest.responseXML.documentElement, oFOStream, ""); // rememeber, doc is the DOM tree
  oFOStream.close();*/
}
var xmlText;
 function saveAsFile() {
  var filename="output1.xml";
var hiddenElement = document.createElement('a');
hiddenElement.href = 'data:attachment/text,' + encodeURI(xmlText);
console.log(encodeURI(xmlText));
hiddenElement.download = filename;
hiddenElement.click();
}

  function myFunction(xml) {
     var xmlDoc = xml.responseXML;
      var x = xmlDoc.getElementsByTagName("contents");
      //console.log(x[0].childNodes[0].nodeValue);
      x[0].childNodes[0].nodeValue="신예진";
      console.log(x[0].childNodes[0].nodeValue);
      var contents = x[0].childNodes[0];
      //console.log((new XMLSerializer()).serializeToString(xmlDoc));
      /////////html test///////////
      document.getElementById("txt1").innerHTML =
      x[0].childNodes[0].nodeValue;

      xmlText= (new XMLSerializer()).serializeToString(xmlDoc);
      //console.log(xmlText);
      //saveAsFile(xmlText, "output1.txt");

      //new xmlserializer는 js module내에서는 사용이 불가능하다고 함 -> 테스트해보기
      /*var oSerializer = Components.classes["@mozilla.org/xmlextras/xmlserializer;1"]
                            .createInstance(Components.interfaces.nsIDOMSerializer);
      var sXML = oSerializer.serializeToString(doc);*/



}
