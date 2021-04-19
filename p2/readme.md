#### startkode ligger her https://github.com/GGGE99/typescript-startcode

##### Explain Pros & Cons in using Node.js + Express to implement your Backend compared to a strategy using, for example, Java/JAX-RS/Tomcat
###### Pros
- Fullstack javascript
- Nemt at arebejde med json
- Nemt at lave middelware
###### Cons
- Performance bottlenecks with heavy computation tasks
##### Explain the difference between Debug outputs and ApplicationLogging. What’s wrong with console.log(..) statements in our backend code?
console.log blocker og bør derfor kun bruges i dev 
debug er nem at slå dele til at fra det blocker ikke og det giver en nem måde at se hvor der bliver printet fra

##### Demonstrate a system using application logging and environment controlled debug statements.
bin/www.ts

##### Explain, using relevant examples, concepts related to testing a REST-API using Node/JavaScript/Typescript + relevant packages

##### Explain a setup for Express/Node/Test/Mongo-DB/GraphQL development with Typescript, and how it handles "secret values", debug, debug-outputs, application logging and testing.

##### Explain a setup for Express/Node/Test/Mongo-DB/GraphQL development with Typescript. Focus on how it uses Mongo-DB (how secret values are handled, how connections (production or test) are passed on to relevant places in code, and if use, how authentication and authorization is handled

----------
????? har vi haft det her
##### Explain, preferably using an example, how you have deployed your node/Express applications, and which of the Express Production best practices you have followed.
ved at rykke app.listen fra app.ts til bin/www.ts kan vi sætte app til at lytte på flere porte. derved kan vi teste uden at skulle lave ændringere 
##### Explain possible steps to deploy many node/Express servers on the same droplet, how to deploy the code and how to ensure servers will continue to operate, even after a droplet restart.

##### Explain, your chosen strategy to deploy a Node/Express application including how to solve the following deployment problems:

-   Ensure that you Node-process restarts after a (potential) exception that closed the application
    
-   Ensure that you Node-process restarts after a server (Ubuntu) restart
    
-   Ensure that you can run “many” node-applications on a single droplet on the same port (80)
    

----------

##### Explain, using relevant examples, the Express concept; middleware.
gik i app.ts alt med app.use er middelware det er noget der køre mellem serveren modtaget et request og at den sender et result tilbage. dette kan være ting som at logge all request eller tjek om der skal gives adgang til et request
##### Explain, conceptually and preferably also with some code, how middleware can be used to handle problems like logging, authentication, cors and more.
app.ts
det kan sættes op så alle request skal gå i gennem middelwareret og det kan også blocker request hvis de ikke har adgang til et end point
##### Explain, using relevant examples, your strategy for implementing a REST-API with Node/Express + TypeScript and demonstrate how you have tested the API.
har ikke test
##### Explain, using relevant examples, how to test JavaScript/Typescript Backend Code, relevant packages (Mocha, Chai etc.) and how to test asynchronous code.
ikke lavet endnu
### NoSQL and MongoDB

##### Explain, generally, what is meant by a NoSQL database.
Det vil sige der ikke er et scema og at data kan have en hvilken som helst form
##### Explain Pros & Cons in using a NoSQL database like MongoDB as your data store, compared to a traditional Relational SQL Database like MySQL.
##### Pros
- Scalerbare
- Kan være hurtigere til complkse søningere 
- flexibelt da data ikke skal have en fast form
##### Cons
- database bliver nemt meget storer da alt bare kan ligge i en
- ofte benytters der ikke kun en NoSQL
##### Explain about indexes in MongoDB, how to create them, and demonstrate how you have used them.
 har jeg ikke 
##### Explain, using your own code examples, how you have used some of MongoDB's "special" indexes like TTL and 2dsphere and perhaps also the Unique Index.
har jeg ikke
##### Demonstrate, using your own code samples, how to perform all CRUD operations on a MongoDB
DummyDB-Facade.ts  

##### Demonstrate how you have set up sample data for your application testing
makeTestFriends.ts
##### Explain the purpose of mocha, chai, supertest and nock, which you should have used for your testing

##### Explain, using a sufficient example, how to mock and test endpoints that relies on data fetched from external endpoints

##### Explain, using a sufficient example a strategy for how to test a REST API. If your system includes authentication and roles explain how you test this part.

##### Explain, using a relevant example, a full JavaScript backend including relevant test cases to test the REST-API (not on the production database)

