var http = require("http");
var path = require("path");
var url = require("url");
var qs = require("querystring");

const port = 3000;
var postsArr = [];

var server = http.createServer((request, response) => {
    var urlObject = url.parse(request.url);
    if (request.url = "/notes") {
        if (request.method = "DELETE") {
            var postToBeDeleted = '';
            request.on("data", (chunks) => {
                postToBeDeleted += chunks;
            })
            request.on("end", () => {
                var postToBeDeletedObj = JSON.parse(postToBeDeleted);
                var pos = postsArr.findIndex(item => item.postsName == postToBeDeletedObj.postsName)
                if (pos >= 0) {
                    postsArr.splice(pos, 1);
                    response.end("Post deleted successfull");
                    return;
                } else {
                    response.end("Post not found!")
                    return;
                }
            })
            request.on("error", (err) => {
                console.log("Error in the post request to /post", err);
                response.end("Deletion failed");
                return;
            })
        }
        if (request.method = "GET" && urlObject.pathName == "/post") {
            var qsObject = qs.parse(urlObject.query);
            for (item of Object.keys(qsObject)) {
                console.log(`${item} : ${qsObject[item]}`);
            }
            var pos = postsArr.findIndex(item => item.postsName == qsObject.postsName);
            if (pos >= 0) {
                response.end(JSON.stringify(postsArr[pos]));
            } else {
                response.statusCode = 402;
                response.end("data not found");
            }
            return;
        }
        if (request.method = "PATCH") {
            var postToBeUpdated = "";
            request.on("data", (chunks) => {
                postToBeUpdated += chunks;
            })
            request.on("end", (request, response) => {
                var postToBeUpdatedObj = JSON.stringify(postToBeUpdated);
                postsArr.push(postToBeUpdatedObj);
            })
            request.on("error", (err) => { })
        }
        if (request.method = "GET") {
            //select query
            response.end(JSON.stringify(postsArr));
            return;
        }
        if (request.method = "POST") {
            // insert new record
            //data is coming in the body section
            var newPosts = "";
            request.on("data", (chunks) => {
                newPosts += chunks;
            })
            request.on("end", () => {
                var newPostsObj = JSON.stringify(newPosts);
                postsArr.push(newPostsObj);
                response.end("New post insterted");
            })
            request.on("error", (err) => {
                //insertion failed
                console.log("Error in the post request to /post", err);
                response.end("Insertion failed");
                return;
            })
        }
    }
    response.end("Response from the server for undeveloped url");
})

server.listen(port, () => {
    console.log(`Server started at port ${port}`);
})