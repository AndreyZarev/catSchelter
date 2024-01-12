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

    },
    {
        id: 2,
        name: "Jessy",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLjisGy4eY5ZkfsZAmtRQ-4MstK4DapAPegcL52fG10g&s",
        breed: "SM",
        description: "Very smart cat,lol.",

    },
    {
        id: 3,
        name: "Wendy",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLjisGy4eY5ZkfsZAmtRQ-4MstK4DapAPegcL52fG10g&s",
        breed: "Russian",
        description: "Cold resistant",

    }
]

//----------------------------------------------------------------



const postData = JSON.stringify({
  key1: 'value1',
  key2: 'value2',
});

const options = {
  hostname: 'example.com',
  port: 80,
  path: '/api/endpoint',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': postData.length,
  },
};

const req = http.request(options, (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    console.log('Response:', data);
  });
});
//init - you can
req.on('error', (error) => {
  console.error('Error:', error.message);
});

req.write(postData);
req.end();
  //--------------------------------------------------------------

const server = http.createServer((req, res) => {
if (req.url === "/") {
    res.writeHead(200, {
        "content-type": 'text/html',
    })
    res.write(homePage(cats))
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

  //----------------------------------------------------------------

} else if(req.url === "http://localhost:5000/cats/submit?name=saddsad&description=cxz&upload=cxz&breed=Fluffy+Cat"){
    res.writeHead(200, {"content-type": "text/html"
})
res.write(addBreedHtml)
res.end()
}
})
server.listen(5000)

console.log("Server listening on port 5000 bish");