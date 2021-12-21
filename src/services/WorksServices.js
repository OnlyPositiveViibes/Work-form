import firebase from "../firebaseConfig";

const sortOptions = {
    company_asc: { column: "company", direction: "asc" },
    company_desc: { column: "company", direction: "desc" },
    service_asc: { column: "service", direction: "asc" },
    service_desc: { column: "service", direction: "desc" }
};

export const getAllWorks = (getWorks, sortBy) => {
    //gauti darbus
    firebase
        .firestore()
        .collection("times")
        .orderBy(sortOptions[sortBy].column, sortOptions[sortBy].direction)
        .onSnapshot(snapShot => {
            const newWork = snapShot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            getWorks(newWork);
        });
};

export const addWork = data => {
    firebase.firestore().collection("times").add(data);
};

export const deleteWork = id => {
    firebase.firestore().collection("times").doc(id).delete();
};

export const showById = (item, id) => {
    firebase
        .firestore()
        .collection("times")
        .doc(id)
        .get()
        .then(docRef => {
            item(docRef.data());
        });
};

export const updateWork = (id, data) => {
    firebase.firestore().collection("times").doc(id).set(data);
};
