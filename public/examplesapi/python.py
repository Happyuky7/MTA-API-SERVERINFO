import requests

response = requests.get('https://mtaapiresquestinfo.happy7.xyz/api/127.0.0.1/12345')
data = response.json()
print(data)
