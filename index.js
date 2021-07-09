const express = require("express");
const app = express();
const port = 3001;
const { graphqlHTTP } = require("express-graphql");
const schema = require("./Schema/");

app.get('/',(req,res)=> res.send("https://ancient-savannah-96379.herokuapp.com/graphql"));

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(process.env.PORT || port, () => {
  console.log(`server running on localhost:${port}/graphql`);
});
