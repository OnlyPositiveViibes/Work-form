import firebase from "./firebase";

export const getAllWorks = (getWorks) => {
    //gauti darbus
    firebase
        .firestore()
        .collection("times")
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


