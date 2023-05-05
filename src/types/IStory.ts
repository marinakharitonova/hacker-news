export interface IStory {
    by: string
    descendants: number
    dead?: boolean
    id: number
    kids: number[]
    score: number
    time: number
    title: string
    type: 'story'
    url: string
}