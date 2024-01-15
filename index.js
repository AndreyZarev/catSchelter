const http = require('http')
const fs = require('fs')

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

const views = {
    home : "./views/home.html",
    style : "./styles/site.css",
    addCat : "./views/addCat.html",
    singleCat : "./views/singleCat.html",
}


  //--------------------------------------------------------------

const server = http.createServer((req, res) => {
if (req.url === "/") {
    render(views.singleCat, cats, (err, catResult) => {

if (err) {
    res.statusCode = 404;
    return res.end();
}
render(views.home, [{cats: catResult}], (err,result) =>{
    res.writeHead(200, {
        "content-type": 'text/html',
    });



res.write(result)
res.end()
    })
});

 //--------------------------------------------------------------

} else if (req.url === "/styles/site.css") {
    fs.readFile(views.style , "utf-8", (err, result) => {
        if (err) {
            res.statusCode = 404;
            return res.end();
        }
       
    res.writeHead(200, {"content-type": "text/css"
})
res.write(result)
res.end()
    });
    //----------------------------------------------------------------
 
}


else if (req.url === "/cats/add-cat") { 
    render(views.singleCat, cats, (err, catResult) => {

        if (err) {
            res.statusCode = 404;
            return res.end();
        }
     
    res.writeHead(200, {"content-type": "text/html"
})
res.write(catResult)
res.end()
        })  
   
    //----------------------------------------------------------------

} else if(req.url === "/cats/add-breed"){
    res.writeHead(200, {"content-type": "text/html"
})
res.write(addBreedHtml)
res.end()

  //----------------------------------------------------------------

} 
})

function render(view, dataArr, callback) {
    fs.readFile(view, "utf8", (err, result) => {
        if(err) {
            return callback(err);
        }
       const htmlResult =  dataArr.map((data) =>{
       return Object.keys(data).reduce((acc, key) => {
            const pattern = new RegExp(`{{${key}}}`, 'g');
            return acc.replace(pattern, data[key]);
           
        },  result)

    }).join("\n");
    callback(null, htmlResult)

    })
    
}
server.listen(5000)

console.log("Server listening on port 5000 bish");