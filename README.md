## Mindworks Graphql Test Solution

This Graphql App is deployed on https://ancient-savannah-96379.herokuapp.com/graphql

Available query
    getAllComments{
        postId
        id
        name
        email
        body
    }

    getAllPosts{
        userId
        id
        title
        body
    }

    getPostByPage(page:${pageNumber}){
        userId
        id
        title
        body
    }

    getPost(id:${postId}){
        userId
        id
        title
        body
    }

    searchComment(input:"${searchInput}"){
        postId
        id
        name
        email
        body
    }