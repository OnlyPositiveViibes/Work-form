import firebase from "../firebaseConfig";

export const getAllCompanies = getCompanies => {
    //gauti imones
    firebase
        .firestore()
        .collection("companies")
        .onSnapshot(snapShot => {
            const newCompany = snapShot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            getCompanies(newCompany);
        });
};

export const addCompany = data => {
    firebase.firestore().collection("companies").add(data);
};

export const deleteCompany = id => {
    firebase.firestore().collection("companies").doc(id).delete();
};
