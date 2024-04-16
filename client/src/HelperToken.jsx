export const tokenCheck = () => {
    let token = window.localStorage.getItem('agriSmart');

    if (token) {
        token = JSON.parse(token);

        const id = token.id;
        const email = token.email;
        const cityName = token.cityName;

        if (!id || !email) {
            return false;
        }
        return { id, email, cityName };
    }
    else {
        return false;
    }
}