> show dbs
admin          0.000GB
config         0.000GB
human_resorse  0.000GB
local          0.000GB
firstdbs       0.000GB
> use human_resorse
switched to db human_resorse
> db.employee.insertMany([{
...   "firstName": "Sujit",
...   "lastName": "S",
...   "salary": "40000",
...   "department": "HR",
...   "overallExp": "2",
...   "contactInfo": "9012345678",
...   "yearGrad": "2019",
...   "gradStream": "Mechanical"
... },{
...   "firstName": "Kapil",
...   "lastName": "D",
...   "salary": "25000",
...   "department": "Sales",
...   "overallExp": "1",
...   "contactInfo": "9876543210",
...   "yearGrad": "2021",
...   "gradStream": "CSE"
... },{
...   "firstName": "Ashish",
...   "lastName": "C",
...   "salary": "35000",
...   "department": "System",
...   "overallExp": "2",
...   "contactInfo": "9753108642",
...   "yearGrad": "2021",
...   "gradStream": "CSE"
... },{
...   "firstName": "Mahesh",
...   "lastName": "S",
...   "salary": "30000",
...   "department": "Associate",
...   "overallExp": "2",
...   "contactInfo": "8076543219",
...   "yearGrad": "2021",
...   "gradStream": "ECE"
... },{
...   "firstName": "Raj",
...   "lastName": "M",
...   "salary": "30000",
...   "department": "Software",
...   "overallExp": "1",
...   "contactInfo": "8912345670",
...   "yearGrad": "2021",
...   "gradStream": "CSE"
... },{
...   "firstName": "Shravani",
...   "lastName": "H",
...   "salary": "30000",
...   "department": "Software",
...   "overallExp": "2",
...   "contactInfo": "7654321980",
...   "yearGrad": "2022",
...   "gradStream": "CSE"
... },{
...   "firstName": "Neha",
...   "lastName": "D",
...   "salary": "25000",
...   "department": "Application",
...   "overallExp": "1",
...   "contactInfo": "795310246",
...   "yearGrad": "2022",
...   "gradStream": "CSE"
... },{
...   "firstName": "Ankush",
...   "lastName": "S",
...   "salary": "25000",
...   "department": "Sales",
...   "overallExp": "1",
...   "contactInfo": "809531246",
...   "yearGrad": "2022",
...   "gradStream": "CSE"
... },{
...   "firstName": "Milind",
...   "lastName": "W",
...   "salary": "25000",
...   "department": "Accounts",
...   "overallExp": "1",
...   "contactInfo": "8976543210",
...   "yearGrad": "2020",
...   "gradStream": "MCE"
... },{
...   "firstName": "Bhushan",
...   "lastName": "M",
...   "salary": "30000",
...   "department": "Management",
...   "overallExp": "1",
...   "contactInfo": "7953124680",
...   "yearGrad": "2022",
...   "gradStream": "CSE"
... }])
{
        "acknowledged" : true,
        "insertedIds" : [
                ObjectId("62e24515f702a5e1b54a6479"),
                ObjectId("62e24515f702a5e1b54a647a"),
                ObjectId("62e24515f702a5e1b54a647b"),
                ObjectId("62e24515f702a5e1b54a647c"),
                ObjectId("62e24515f702a5e1b54a647d"),
                ObjectId("62e24515f702a5e1b54a647e"),
                ObjectId("62e24515f702a5e1b54a647f"),
                ObjectId("62e24515f702a5e1b54a6480"),
                ObjectId("62e24515f702a5e1b54a6481"),
                ObjectId("62e24515f702a5e1b54a6482")
        ]
}
> db.employee.find().pretty()
{ "_id" : ObjectId("62e13c8dff18b6af6a6d1407"), "firstName" : "Bhushan" }
{ "_id" : ObjectId("62e13cdaff18b6af6a6d1408"), "firstName" : "Sujit" }
{
        "_id" : ObjectId("62e13cfdff18b6af6a6d1409"),
        "firstName" : "Bhushan",
        "lastName" : "M",
        "salary" : "30000",
        "department" : "Management",
        "overallExp" : "1",
        "contactInfo" : "7953124680",
        "yearGrad" : "2022",
        "gradStream" : "CSE"
}
{
        "_id" : ObjectId("62e24515f702a5e1b54a6479"),
        "firstName" : "Sujit",
        "lastName" : "S",
        "salary" : "40000",
        "department" : "HR",
        "overallExp" : "2",
        "contactInfo" : "9012345678",
        "yearGrad" : "2019",
        "gradStream" : "Mechanical"
}
{
        "_id" : ObjectId("62e24515f702a5e1b54a647a"),
        "firstName" : "Rohan",
        "lastName" : "Jame",
        "salary" : "30000",
        "department" : "Technical",
        "overallExp" : "1",
        "contactInfo" : "1234567860",
        "yearGrad" : "2015",
        "gradStream" : "CSE"
}
{
        "_id" : ObjectId("62e24515f702a5e1b54a647b"),
        "firstName" : "Jame",
        "lastName" : "Doe",
        "salary" : "35000",
        "department" : "Accounts",
        "overallExp" : "1",
        "contactInfo" : "123567890",
        "yearGrad" : "2019",
        "gradStream" : "ECE"
}
{
        "_id" : ObjectId("62e24515f702a5e1b54a647c"),
        "firstName" : "Sao",
        "lastName" : "Avika",
        "salary" : "30000",
        "department" : "Sales",
        "overallExp" : "2",
        "contactInfo" : "1234567860",
        "yearGrad" : "2015",
        "gradStream" : "CSE"
}
{
        "_id" : ObjectId("62e24515f702a5e1b54a647d"),
        "firstName" : "Jame",
        "lastName" : "roh",
        "salary" : "35000",
        "department" : "Accounts",
        "overallExp" : "2",
        "contactInfo" : "123567890",
        "yearGrad" : "2019",
        "gradStream" : "EEE"
}
{
        "_id" : ObjectId("62e24515f702a5e1b54a647e"),
        "firstName" : "Rohan",
        "lastName" : "Jame",
        "salary" : "30000",
        "department" : "Technical,
        "overallExp" : "1",
        "contactInfo" : "1234567860",
        "yearGrad" : "2015",
        "gradStream" : "CSE"
}
{
        "_id" : ObjectId("62e24515f702a5e1b54a647f"),
        "firstName" : "Jame",
        "lastName" : "Doe",
        "salary" : "35000",
        "department" : "Accounts",
        "overallExp" : "1",
        "contactInfo" : "123567890",
        "yearGrad" : "2019",
        "gradStream" : "ECE"
}
{
        "_id" : ObjectId("62e24515f702a5e1b54a6480"),
        "firstName" : "Sao",
        "lastName" : "Avika",
        "salary" : "30000",
        "department" : "Sales",
        "overallExp" : "2",
        "contactInfo" : "1234567860",
        "yearGrad" : "2015",
        "gradStream" : "CSE"
}
{
        "_id" : ObjectId("62e24515f702a5e1b54a6481"),
        "firstName" : "Jame",
        "lastName" : "Doe",
        "salary" : "35000",
        "department" : "Accounts",
        "overallExp" : "2",
        "contactInfo" : "123567890",
        "yearGrad" : "2019",
        "gradStream" : "EEE"
}
{
        "_id" : ObjectId("62e24515f702a5e1b54a6482"),
        "firstName" : "Rohan",
        "lastName" : "Jame",
        "salary" : "30000",
        "department" : "Technical",
        "overallExp" : "1",
        "contactInfo" : "1234567860",
        "yearGrad" : "2015",
        "gradStream" : "CSE"
}
{
        "_id" : ObjectId("62e24515f702a5e1b54a6483"),
        "firstName" : "Jame",
        "lastName" : "Doe",
        "salary" : "35000",
        "department" : "Accounts",
        "overallExp" : "1",
        "contactInfo" : "123567890",
        "yearGrad" : "2019",
        "gradStream" : "ECE"
}
{
        "_id" : ObjectId("62e24515f702a5e1b54a6484"),
        "firstName" : "Sao",
        "lastName" : "Avika",
        "salary" : "30000",
        "department" : "Sales",
        "overallExp" : "2",
        "contactInfo" : "1234567860",
        "yearGrad" : "2015",
        "gradStream" : "CSE"
}
{
        "_id" : ObjectId("62e24515f702a5e1b54a6485"),
        "firstName" : "Jame",
        "lastName" : "Doe",
        "salary" : "35000",
        "department" : "Accounts",
        "overallExp" : "2",
        "contactInfo" : "123567890",
        "yearGrad" : "2019",
        "gradStream" : "EEE"
}
> db.employee.find({salary: {$gt:30000}}).pretty()
> db.employee.find({overallExp: {$gt:"2"}}).pretty()
> db.employee.find({$and: [{yearGrad: {$gt: "2015"}}, {overallExp: {$gt:"1"}}]}).pretty()
{
        "_id" : ObjectId("62e13cfdff18b6af6a6d1409"),
        "firstName" : "john",
        "lastName" : "Doe",
        "salary" : "25000",
        "department" : "HR",
        "overallExp" : "2",
        "contactInfo" : "1234567890",
        "yearGrad" : "2016",
        "gradStream" : "CSE"
}
{
        "_id" : ObjectId("62e24515f702a5e1b54a6479"),
        "firstName" : "John",
        "lastName" : "Doe",
        "salary" : "25000",
        "department" : "HR",
        "overallExp" : "2",
        "contactInfo" : "1234567890",
        "yearGrad" : "2016",
        "gradStream" : "CSE"
}
{
        "_id" : ObjectId("62e24515f702a5e1b54a647d"),
        "firstName" : "Jame",
        "lastName" : "roh",
        "salary" : "35000",
        "department" : "Accounts",
        "overallExp" : "2",
        "contactInfo" : "123567890",
        "yearGrad" : "2019",
        "gradStream" : "EEE"
}
{
        "_id" : ObjectId("62e24515f702a5e1b54a6481"),
        "firstName" : "Jame",
        "lastName" : "Doe",
        "salary" : "35000",
        "department" : "Accounts",
        "overallExp" : "2",
        "contactInfo" : "123567890",
        "yearGrad" : "2019",
        "gradStream" : "EEE"
}
{
        "_id" : ObjectId("62e24515f702a5e1b54a6485"),
        "firstName" : "Jame",
        "lastName" : "Doe",
        "salary" : "35000",
        "department" : "Accounts",
        "overallExp" : "2",
        "contactInfo" : "123567890",
        "yearGrad" : "2019",
        "gradStream" : "EEE"
}
> db.employee.updateMany({salary: {$gt: "30000"}}, {$set: {salary: "28000"}})
{ "acknowledged" : true, "matchedCount" : 4, "modifiedCount" : 4 }
> db.employee.updateMany({salary: {$gt: "30000"}}, {$set: {salary: "28000"}})
{ "acknowledged" : true, "matchedCount" : 0, "modifiedCount" : 0 }
> db.employee.find({salary: "28000"}).pretty()
{
        "_id" : ObjectId("62e24515f702a5e1b54a647b"),
        "firstName" : "Mahesh",
        "lastName" : "S",
        "salary" : "28000",
        "department" : "Associate",
        "overallExp" : "2",
        "contactInfo" : "80712345609",
        "yearGrad" : "2021",
        "gradStream" : "ECE"
}
{
        "_id" : ObjectId("62e24515f702a5e1b54a647d"),
        "firstName" : "Raj",
        "lastName" : "M",
        "salary" : "28000",
        "department" : "Software",
        "overallExp" : "1",
        "contactInfo" : "8912345670",
        "yearGrad" : "2021",
        "gradStream" : "CSE"
}
{
        "_id" : ObjectId("62e24515f702a5e1b54a647f"),
        "firstName" : "Shravani",
        "lastName" : "S",
        "salary" : "28000",
        "department" : "Software",
        "overallExp" : "2",
        "contactInfo" : "7654321980",
        "yearGrad" : "2021",
        "gradStream" : "CSE"
}
{
        "_id" : ObjectId("62e24515f702a5e1b54a6481"),
        "firstName" : "Bhushan",
        "lastName" : "M",
        "salary" : "28000",
        "department" : "Management",
        "overallExp" : "2",
        "contactInfo" : "7953124680",
        "yearGrad" : "2021",
        "gradStream" : "CSE"
}
