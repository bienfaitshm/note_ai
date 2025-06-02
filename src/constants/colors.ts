
type TColor = {
    id: number|string;
    bgColor: string,
    textColor: string
}

export const colors : TColor[] = [
    {
        id: 1,
        bgColor:"#a1e8af",
        textColor:"#000",
    },
    {
        id: 2,
        bgColor:"#f8d7da",
        textColor:"#000",
    },
    {
        id: 3,
        bgColor:"#FFD452",
        textColor:"#000",
    },
    {
        id: 4,
        bgColor:"#715AFF",
        textColor:"#000",
    },
    {
        id: 5,
        bgColor:"#FF7F50",
        textColor:"#000",
    },
    {
        id: 6,
        bgColor:"#5887FF",
        textColor:"#000",
    },
    {
        id: 7,
        bgColor:"#FF75C8",
        textColor:"#000",
    }
]

export function getColor(id: number| string): TColor| undefined {
    return colors.find(i=>i.id === id)
}
