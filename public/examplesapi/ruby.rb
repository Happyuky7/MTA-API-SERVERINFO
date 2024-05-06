require 'net/http'

url = URI.parse('https://mtaapiresquestinfo.happy7.xyz/api/127.0.0.1/12345')
response = Net::HTTP.get_response(url)
puts response.body
