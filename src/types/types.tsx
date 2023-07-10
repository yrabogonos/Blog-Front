export default interface IPostToShow{
    title: string,
    viewsCount: number,
    imageUrl?: string,
}
export type Type_Post = {
    title: string,
    text: string,
    tags: string[],
    viewsCount: number,
    user: string,
    imageUrl: string,
}; // id?