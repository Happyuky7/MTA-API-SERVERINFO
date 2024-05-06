fetch('https://mtaapiresquestinfo.happy7.xyz/api/127.0.0.1/12345')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));