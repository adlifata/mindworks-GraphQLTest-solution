const graphql = require("graphql");
const { commentType, postType } = require("../TypeDefs/typeDefs");
const fetch = require("node-fetch");
const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLSchema,
  GraphQLInt,
  GraphQLString,
} = require("graphql");
const BASE_URL = "https://jsonplaceholder.typicode.com";

function paginate(array, page_size, page_number) {
  return array.slice((page_number - 1) * page_size, page_number * page_size);
}

function fetchData(path) {
  return fetch(`${BASE_URL}/${path}`).then((res) => res.json());
}

async function fetchPost(pageNumber) {
  const postList = await fetch(`${BASE_URL}/posts`).then((res) => res.json());
  const pagedPostList = paginate(postList, 10, pageNumber);
  return pagedPostList;
}

async function fetchSinglePost(path) {
  const comment = await fetch(`${BASE_URL}/${path}`).then((res) => res.json());
  const arr = [comment];
  return arr;
}

async function searchComment(input) {
  const comment = await fetch(
    "https://jsonplaceholder.typicode.com/comments"
  ).then((res) => res.json());

  let loweredInput = input.toLowerCase();
  let result = [];

  result = comment.filter((data) => {
    return (
      data.name.toLowerCase().search(loweredInput) != -1 ||
      data.email.toLowerCase().search(loweredInput) != -1 ||
      data.body.toLowerCase().search(loweredInput) != -1
    );
  });

  return result;
}

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: () => ({
    getAllComments: {
      type: new GraphQLList(commentType),
      resolve: (root, args) => fetchData(`comments`),
    },
    getAllPosts: {
      type: new GraphQLList(postType),
      resolve: (root, args) => fetchData(`posts`),
    },
    getPostByPage: {
      type: new GraphQLList(postType),
      args: { page: { type: GraphQLInt } },
      resolve: (root, args) => fetchPost(`${args.page}`),
    },
    getPost: {
      type: new GraphQLList(postType),
      args: { id: { type: GraphQLInt } },
      resolve: (root, args) => fetchSinglePost(`posts/${args.id}`),
    },
    searchComment: {
      type: new GraphQLList(commentType),
      args: { input: { type: GraphQLString } },
      resolve: (root, args) => searchComment(`${args.input}`),
    },
  }),
});

module.exports = new GraphQLSchema({ query: RootQuery });
