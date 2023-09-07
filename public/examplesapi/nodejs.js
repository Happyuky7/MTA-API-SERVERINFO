const axios = require('axios');

axios.get('https://mtaapiresquestinfo.kaoryhosting.xyz/api/127.0.0.1/12345')
  .then(response => console.log(response.data))
  .catch(error => console.error('Error:', error));
