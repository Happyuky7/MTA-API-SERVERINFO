local http = require("http")

http.get("https://mtaapiresquestinfo.happy7.xyz/api/127.0.0.1/12345", function(res)
    local body = ""
    res:on("data", function(chunk)
        body = body .. chunk
    end)
    res:on("end", function()
        print(body)
    end)
end)
