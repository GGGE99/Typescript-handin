## Period 3 GraphQL
 

### Explain shortly about GraphQL, its purpose and some of its use cases
at mand ungår over- og under fetching. dette gøres ved at men altid siger hvad men vil have tilbage så man for alt det man skal bruge og ikke mere. sådan ungår man at skulle kalde en server 1000 gang for at få alt den info man skal bruge på en side. derudover er der kun et endpoint så man skal ikkebakse med at sende req det rigtige sted hen :smile: 

### Explain some of the Server Architectures that can be implemented with a GraphQL backend
ikke sikker på hvad der menes. men man kan vælge at klade sine eksiterende rest endpoints eller man kan bennytte sine facede og tilpasse den til graphql men hvis du kalder dine endpoints er du sikker på det klader noget der fungere.

### What is meant by the terms over- and under-fetching in GraphQL, compared to REST
overfetching er at man for en masse data ned fra et endpiont som man slet ikke skal bruge det sted. Detved skal der sendes meget mere data til client end hvad clienten endlig skal bruge.
underfetching er det modsatte nemlig at man ikke for alt den data man skal bruge og derfor må kalde mange endpoints for at for den information man skal bruge til en side på clienten. dette kan gøre fronent koden næsten umulig at gennemskue

### Explain shortly about GraphQL’s type system and some of the benefits we get from this
vi kan definerer hvilke elementer / ting vi kan sende fram og tilbage og dette gør at vi for generet en doc hvor vi for en ret god forklaring af alt hvad vor graphql kan

### Explain shortly about GraphQL Schema Definition Language, and provide examples of schemas you have defined.
project\backend\src\graphql\schema.ts
mindrer rigtig meget om json med nogle special elementer 
### Provide examples demonstrating data fetching with GraphQL. You should provide examples both running in a Sandbox/playground and examples executed in an Apollo Client
project\backend\src\components\AllFriends.tsx
graphql

### Provide a number of examples demonstrating; creating, updating and deleting with Mutations. You should provide examples both running in a Sandbox/playground and examples executed in an Apollo Client.
project\backend\src\components\
graphql
### Explain the Concept of a Resolver function, and provide a number of simple examples of resolvers you have implemented in a GraphQL Server.
project\backend\src\graphql\resolver.ts
Det er her vi laver de forskellige functioner som vores graphql har.
en resolver fucktion står for at finde data til en type eller et field i vores skema
### Explain the benefits we get from using a library like Apollo-client, compared to using the plain fetch-API
der er en masse ting der bliver gjort automatisk som at sætte urlen og er lavet rigtig godt til at benytte gql. det gør det også nemt at arebejde med chaching

### In an Apollo-based React Component, demonstrate how to perform GraphQL Queries, including:

-   Explain the purpose of ApolloClient and the ApolloProvider component
    kan sættet vores gql url og hvor vores cache er
-   Explain the purpose of the gql-function (imported from graphql-tag)
    der er her vi siger hvad vi gerne vil have gql til at gøre og dette gør vi ved at give den en string template med.
-   Explain Custom Hooks used by your Client Code
    fungere på mange måder som et normalt hooke med det rerender compoentet når det information i det bliver sadt her har vi bar ikke en setter methode men en qurey som sætter sin data i data fieldet der ud over giver det også en masse smarte ting som at se om det loader eller give også fjelen når den fjeler
-   Explain and demonstrate the caching features built into Apollo Client
    addFriend.tsx

### In an Apollo-based React Component, demonstrate how to perform GraphQL Mutations?

### Demonstrate and highlight important parts of a “complete” GraphQL-app using Express and MongoDB on the server-side, and Apollo-Client on the client.