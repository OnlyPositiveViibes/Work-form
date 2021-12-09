import firebase from "./firebase";

const sortOptions = {
    company_asc: {column: "company", direction:"asc"},
    company_desc:{column: "company", direction:"desc"},
    service_asc: {column: "service", direction:"asc"},
    service_desc:{column: "service", direction:"desc"},
    // date_asc:{column: "date", direction:"asc"},
    // date_desc:{column: "date", direction:"desc"},
}

export const getAllWorks = (getWorks, sortBy, sortService, ) => {
    //gauti darbus
    firebase
        .firestore()
        .collection("times")
        .orderBy(sortOptions[sortBy].column,sortOptions[sortBy].direction)
        .orderBy(sortOptions[sortService].column,sortOptions[sortService].direction)
        // .orderBy(sortOptions[sortDate].column,sortOptions[sortDate].direction)
        .onSnapshot((snapShot)=>{
            const newWork = snapShot.docs.map((doc)=>({
                id:doc.id,
                ...doc.data()
            }))
            getWorks(newWork)
        })

};

export const addWork = data => {
    //prideti darbus
    firebase.firestore().collection("times").add(data);
};

export const showById = (item, id) => {
    //Ieskoti pagal id 
        firebase    
            .firestore()
            .collection("times")
            .doc(id)
            .get()
            .then((docRef)=>{
                item(docRef.data())
            })
};

export const deleteWork = (id) => {
    //istrinti darba
    firebase
        .firestore()
        .collection("times")
        .doc(id)
        .delete()
};

export const updateWork = (id, data) => {
    //Atnaujinti duomenis
    firebase
        .firestore()
        .collection("times")
        .doc(id)
        .set(data)

};


