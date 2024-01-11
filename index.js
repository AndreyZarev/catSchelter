const http = require('http')
const homePage = require('./views/home.js');
const cssTemplate = require('./styles/site.css.js')
const addCatHtml = require("./views/addCat.js")
const addBreedHtml = require("./views/addBreed.js")
const cats = [

    {
        id: 1,
        name: "John",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLjisGy4eY5ZkfsZAmtRQ-4MstK4DapAPegcL52fG10g&s",
        breed: "persian",
        description: "Very fluffy cats indeed.",

    }
]


const server = http.createServer((req, res) => {
if (req.url === "/") {
    res.writeHead(200, {
        "content-type": 'text/html',
    })
    res.write(homePage)
    res.end()

    //----------------------------------------------------------------
} else if (req.url === "/styles/site.css") {
    res.writeHead(200, {"content-type": "text/css"
})
res.write(cssTemplate)
res.end()

    //----------------------------------------------------------------
 
} else if (req.url === "/cats/styles/site.css") {
    res.writeHead(200, {"content-type": "text/css"
})
res.write(cssTemplate)
res.end()

    //----------------------------------------------------------------
 
}


else if (req.url === "/cats/add-cat") { 
    res.writeHead(200, {"content-type": "text/html"
})
res.write(addCatHtml)
res.end()
    //----------------------------------------------------------------

} else if(req.url === "/cats/add-breed"){
    res.writeHead(200, {"content-type": "text/html"
})
res.write(addBreedHtml)
res.end()
}
})
server.listen(5000)

console.log("Server listening on port 5000 bish");