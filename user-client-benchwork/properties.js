export const properties = {
    insitutionalInfo: [{
        name: "Institut Superieur d'Informatique",
        institutionnumber: "019938447379",
        streetno: "255",
        streetname: "Cremazie Est #100",
        postalcode: "H2M 1M2",
        city: "Montreal",
        province: "Quebec",
        phone: "514 842-2426",
        fax: "514 842-2084",
        website: "www.isi-mtl.com",
        email: "info@isi-mtl.com",
        nameprimarycontact: "Dominique Larose",
        positionprimarycontact: "Human Resources",
        telprimarycontact: "514 123-4567",
        extprimarycontact: "1111",
        namesecondarycontact: "",
        telsecondarycontact: "",
        extsecondarycontact: "",
        positionsecondarycontact: "",
        pobox: "",
    }],
    //mois a ajouter a partir de la date d'aujourdhui
    //pour la date d expiration du LOA.
    // janvier = 0
    // +7 = 6 mois
    monthsToAdd: 7,
    //adress ip pour etablir connexion au serveur SQL
    axiosBaseURL: "http://192.168.0.41:8090",
};