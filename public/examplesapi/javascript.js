fetch('https://mtaapiresquestinfo.kaoryhosting.xyz/api/127.0.0.1/12345')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));