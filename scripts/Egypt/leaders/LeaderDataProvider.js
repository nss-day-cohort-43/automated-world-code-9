
export const egyptianLeaders = () => [
    {
        pharoh: "Queen Hatshepsut",
        parents: "King Thutmose I and Ahmose",
        dynasty: 18,
        yearsRuled: 15
    },
    {
        pharoh: "Ramesses II",
        parents: "King Ramesses I and Seti I",
        dynasty: 19,
        yearsRuled: 16
        
    },
    {   
        pharoh: "Khufu",
        parents: "King Snefru and Hetepheres",
        dynasty: 4,
        yearsRuled: 26
    }

]

export const egyptLeaders = () => {
    return egyptianLeaders.slice()
}