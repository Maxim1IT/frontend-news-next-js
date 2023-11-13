interface Title {
    short: string;
}


interface Description {
    intro: string;
}

export interface Article {
    id: string;
    title: Title;
    url: string;
    thumbnail: string;
    description: Description;
}

export interface GetArticlesData {
    contents: Article[];
}