const express = require("express");
const app = express();
const port = 3001;
const { graphqlHTTP } = require("express-graphql");
const schema = require("./Schema/");

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(port, () => {
  console.log(`server running on localhost:${port}/graphql`);
});
