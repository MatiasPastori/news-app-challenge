export interface Article {

    //  These are response's fields that might come handy later.
    // status: string

    // totalResults: int

    // articles: array[article]

    source: {
        name: string,
        id: string
    },

    author: string

    title: string

    description: string

    url: string

    urlToImage: string

    publishedAt: string

    content: string
}