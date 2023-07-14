export default interface IPostToShow{
    _id: string,
    title: string,
    viewsCount: number,
    imageUrl?: string,
}
export type Type_Post = {
    _id: string,
    title: string,
    text: string,
    tags: string[],
    viewsCount: number,
    user: any,
    imageUrl: string,
    createdAt: string,
}; // id?

export type User = {
    
}