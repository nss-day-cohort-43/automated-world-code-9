const icelandLeaders = [
    {
        name: "Guðni Thorlacius Jóhannesson",
        position: "President of Iceland",
        photo: "Leader1.jpeg"
    },
    {
        name: "Katrín Jakobsdóttir",
        position: "Prime Minister" ,
        // photo: "Leader2.jpeg"
    },
    {
        name: "Bjarni Benediktsson",
        position: "Minister of Finance"
    },
    {
        name: "Kristján Þór Júlíusson",
        position: "Minister of Fisheries"
    }


]

export const icelandicLeaders = () => {
    return icelandLeaders.slice();
}

console.log(icelandicLeaders)