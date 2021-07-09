const graphql = require("graphql");
const { GraphQLObjectType, GraphQLInt, GraphQLString } = require("graphql");

const commentType = new GraphQLObjectType({
  name: "CommentList",
  fields: () => ({
    postId: { type: GraphQLInt },
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    body: { type: GraphQLString },
  }),
});

const postType = new GraphQLObjectType({
  name: "PostList",
  fields: () => ({
    userId: { type: GraphQLInt },
    id: { type: GraphQLInt },
    title: { type: GraphQLString },
    body: { type: GraphQLString },
  }),
});

module.exports = { commentType, postType };
