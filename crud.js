const mongoDBClient = require('mongodb').MongoClient;
let url = 'mongodb://localhost:27017/mongodb_demo/personal_budget';
const dbName = 'pBudget';

mongoDBClient.connect(url, (operationError, dbHandler) => {

})