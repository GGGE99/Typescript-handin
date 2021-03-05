## Explain and Reflect:
- Explain the differences between Java and JavaScript + node. Topics you could include:
	- java er meget type bestemmt hvor javascript er helt ligeglad med typer.
	- java skal compiles før det kan køre og det er inbygget i java. hvor java script er et runtime sprog. dette gøre også at java scrpit ikke køre på samme møde som alle steder det gør java dog.
-   that Java is a compiled language and JavaScript a scripted language
	- java skal compiles før det kan køres
-   Java is both a language and a platform
    -	compile er inbygget i java
-   General differences in language features.
    
-   Blocking vs. non-blocking
	- Blocking vil sige at vi blocker vores stack så der ikke kan komme nye ting i den + vi ikke kan re-rendar vores side så java scripten i den vil opleves som frosset 
	- non-blocking er så det modstatte vi benytter web-api's/node-api's til at eksevkere tungere kode så det ikke blocker java sripts stack. dette er nødvenditg da javascript er et single threaded sprog og derfor ikke kan lave andet en opgave afgangen så hvis der er noget der optager dens ene thread så vil den ikke komme vider.  :smile:   

-   Explain generally about node.js, when it “makes sense” and npm, and how it “fits” into the node echo system.
	- node.js giver mulighed for at køre javascript uden for en browser. Da det benytter V8 til at lave et runtime miljø på vores maskine derfor opføre javascript sige også lidt afnderledes når det er i node vs når det er i browser. 
	- npm gør det her til muligt at styre vore dependencies og gøre at vi ikke skal sende koden til dem med rundt når vi deler vores koden med ander (Dette kan let være 2-4 GB)
    
-   Explain about the Event Loop in JavaScript, including terms like; blocking, non-blocking, event loop, callback queue and "other" API's. Make sure to include why this is relevant for us as developers.
	- Event loopet lytter til om stacken er tom og hvis den er det tager den den forest callback i callback queuen. Callbacks kommer i queuen når man køre afsynkron kode da man ligger en opgave ud til et api som så ligger en callback i queuen når det er færdig. Dette gør at man kan arebjde med ting der tager længere tid uden at blocke stacken da det tunge arebejde bliver lavet et andet sted. Hvis stacken bliver blocket så kan javascript ikke rerendars og vil der for se udsom om det er froset. Derfor er det rigtig vigtigt at lave kode som er non-bolcking nå man arebejde i javascript. 
    
-   What does it mean if a method in nodes API's ends with xxxxxxSync?
	- Det betydder at det er den sykrone version af methoden. den er ofte mere simple at bruge end den af syncrone da man ikke behøver calbacks. det fungere dog også blokerne, som er et abselut no go i javascript.
    
-   Explain the terms JavaScript Engine (name at least one) and JavaScript Runtime Environment (name at least two)
	- Javascript i sig selv har ikke et runtime milijø der for skal man bruge en "engine" til at køre koden der findes flere forskelige chrome og node bruger V8, IE og edge brugere Chakra, firefox bruger SpiderMonkey og safari bruger Nitro. Da browserne brugere forskelige engines understøtter de heller ikke alle samme det samme (derfor ECMA, og Bable rigtig fedt) 
    

Explain (some) of the purposes with the tools Babel and WebPack and how they differ from each other. Use examples from the exercises.
lave java script til en tidligere version og samle det i et bundel så det fylder mindre og ligger i 1 fil eller i hvertfald mindre filer end før :smile:





Explain using sufficient code examples the following features in JavaScript (and node)

-   Variable/function-Hoisting
    
-   this in JavaScript and how it differs from what we know from Java/.net.
    
-   Function Closures and the JavaScript Module Pattern
    
-   User-defined Callback Functions (writing functions that take a callback)
    
-   Explain the methods map, filter  and reduce
    
-   Provide examples of user-defined reusable modules implemented in Node.js (learnynode - 6)
    
-   Provide examples and explain the es2015 features: let, arrow functions, this, rest parameters, destructuring objects and arrays,  maps/sets etc.
    
-   Provide an example of ES6 inheritance and reflect over the differences between Inheritance in Java and in ES6.
    
-   Explain and demonstrate, how to implement event-based code, how to emit events and how to listen for such events
    

ES6,7,8,ES-next and TypeScript

-   Provide examples with es-next, running in a browser, using Babel and Webpack
    
-   Explain the two strategies for improving JavaScript: Babel and ES6 + ES-Next, versus Typescript. What does it require to use these technologies: In our backend with Node and in (many different) Browsers
    
-   Provide examples to demonstrate the benefits of using TypeScript, including, types, interfaces, classes and generics
    
-   Explain how we can get typescript code completion for external imports.
    
-   Explain the ECMAScript Proposal Process for how new features are added to the language (the TC39 Process)
    

Callbacks, Promises and async/await

Explain about (ES-6) promises in JavaScript including, the problems they solve, a quick explanation of the Promise API and:

-   Example(s) that demonstrate how to avoid the callback hell (“Pyramid of Doom")
    
-   Example(s) that demonstrate how to implement our own promise-solutions.
    
-   Example(s) that demonstrate error handling with promises
    
-   Example(s) that demonstrate how to execute asynchronous (promise-based) code in serial or parallel
    

  

Explain about JavaScripts async/await, how it relates to promises and reasons to use it compared to the plain promise API.

  

Provide examples to demonstrate

-   Why this often is the preferred way of handling promises
    
-   Error handling with async/await
    
-   Serial or parallel execution with async/await.
