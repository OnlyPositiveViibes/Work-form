const workValidation = values => {
    const errors = {};
    if (!values.date) {
        errors.date = "Data nurodyti privaloma";
    }
    if (!values.company) {
        errors.company = "Nurodykite įmonę";
    }
    if (!values.service) {
        errors.service = "Pasirinkite paslaugą";
    }
    if (!values.description) {
        errors.description = "Aprašykite paslaugą";
    }
    if (!values.from) {
        errors.from = "Nurodykite darbo laiką";
    }
    if (!values.to) {
        errors.to = "Nurodykite darbo laiką";
    }

    return errors;
};

export default workValidation;
