


//this is the temporary data format of the properties in the card

// need to work upon image url



interface CardProps {
    title: string;
    desc: string;
    imageUrl?: string;
    mentor: string;
    buttonhref: string;
}



let carddata : CardProps[] =[
    {
        title : "Machine Learning",
        mentor: " D.K.M KAKA",
        desc : " kaka ei sob parena , shudhu dsa pare",
        buttonhref : "Go to Project",

    },
    {
        title : "Google",
        mentor: " Pichai Da",
        desc : " Pichai da is great",
        buttonhref : "Go to Project",
    },
    {
        title : "Pirate",
        mentor: "Jack sparrow (#captain)",
        desc : "POC is woth watching",
        buttonhref : "Go to Project",
    },
    {
        title : "Pirate",
        mentor: "Monkey .D. Luffy",
        desc : "how can one forget this character ......",
        imageUrl:"https://unsplash.com/photos/boy-in-red-shirt-and-blue-pants-cartoon-character-fgxxyYmSkRc",
        buttonhref : "Go to Project",
    },
    {
        title : "wods",
        mentor: "nobody",
        desc : "Lamphao  , Phrogg....",
        buttonhref : "Go to Project",
    },
    {
        title : "Pirate",
        mentor: "Jack sparrow (#captain)",
        desc : "POC is woth watching",
        buttonhref : "Go to Project",
    },
    {
        title : "Pirate",
        mentor: "Monkey .D. Luffy",
        desc : "how can one forget this character ......",
        imageUrl:"https://unsplash.com/photos/boy-in-red-shirt-and-blue-pants-cartoon-character-fgxxyYmSkRc",
        buttonhref : "Go to Project",
    },
    {
        title : "wods",
        mentor: "nobody",
        desc : "Lamphao  , Phrogg....",
        buttonhref : "Go to Project",
    }


]


export default carddata;