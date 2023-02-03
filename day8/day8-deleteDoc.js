const { MongoClient } = require("mongodb");
const uri = "mongodb://127.0.0.1:27017/";
const mongoClient = new MongoClient(uri, { useUnifiedTopology: true });
async function run() {

    try {
        var client = await mongoClient.connect()

        var dbName = client.db("dxcDb");
        var collName = dbName.collection("emp");

        var delOneFilterObj = { empId: 103 };
        var delManyFilterObj = { empId: 201 };

        var result = await collName.deleteOne(delOneFilterObj);
        if (result.deletedCount === 1) {
            console.log("Document deleted successfully");
        } else {
            console.log("No documents matched the query. Deleted 0 documents.");
        }

        var result = await collName.deleteMany(delManyFilterObj);
        if (result.deletedCount > 0) {
            console.log("Deleted " + result.deletedCount + " documents");
        } else {
            console.log("No documents matched the query. Deleted 0 documents.");
        }

        mongoClient.close();
    } catch (err) {
        console.log("Error", err);
    }
}
run();


