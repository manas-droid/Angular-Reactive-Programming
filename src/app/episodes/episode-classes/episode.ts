export interface EpisodeResponse{
    info:EpisodeMetaData,
    results:Episode[]
}

interface EpisodeMetaData {
    count:number,
    pages:3,
    next:string
}

export interface Episode{
    id:number,
    name:string,
    episode:string,
    characters:string[],
    air_date:string,
    url:string,
    created:string
}