import HelloSign from 'hellosign-embedded';
var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/V2embedded.html');
});
app.listen(process.env.PORT ||3000, function () {
  console.log('Example app listening on port 3000!');
});




$(document).ready(function () {
    $("#btnRender").click(function btn() {
      var client_id = $("#client_id").val()
      var sign_url = $("#sign_url").val()
      console.log(client_id);
      console.log(sign_url);

      // V2 -------------------------------------
      const client = new HelloSign({
        clientId: client_id,
        skipDomainVerification: true,
        debug: true,


      });
      client.open(sign_url, {
        // allowCancel: true,
        // testMode: true,
        // uxVersion: 2,
        // skipDomainVerification: true,
        // hideHeader:true,
        container: document.getElementById('signatureContainer'),

      })
      // ------------------------------------- 
      // HelloSign.init(client_id);
      // HelloSign.open({
      //   url: sign_url,
      //   uxVersion: 2,
      //   allowCancel: false,
      //   debug: true,
      //   skipDomainVerification: true,
      //   container: document.getElementById('signatureContainer'),
      //   messageListener: function (eventData) {
      //     if (eventData.event == 'signature_request_signed') {
      //       console.log('Document signed at HelloSign');

      //     }
      //   }
      // });
    });
  });