const createAccount = (email) => {
    const user = sessionStorage.getItem("user");
    if ( !user ) {
        sessionStorage.setItem("user", { email: email });
    }
};