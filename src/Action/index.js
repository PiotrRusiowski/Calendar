// --------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------
/*
    Tak tworzymy akcje.
    Jest to funkcje, ktorej jako argument przekazujesz to, co chcesz
    przekazac do stanu w ramach akcji.
    Funkcja zwraca obiekt.
    W tym obiekcie nalezy okreslic typ akcji (type) jak rowniez ewentualnie
    co w ramach akcji chcesz przekazac.

    Ta akcja ponizej ma za zadanie przekazac do store-a dane, krtore wczesniej'
    zostaly pobrane np w ramach komunikacji REST API.
*/
export const fetchProducts = (products) => ({
    type: 'FETCH_PRODUCTS',
    products
})

// --------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------
// Ta akcje przechwyci to co wpiszesz w pole tekstowe, w ktorym okreslac bedziesz
// po czym chcesz filtrowac produkty
export const searchProducts = (text) => ({
    type: 'SEARCH_PRODUCTS',
    text
})

// --------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------
/*
    Akcja bedzie przechwytywac dane z formularza - produkt, ktory chcemy dodac.
    Zwroc uwage, ze tak akcja nie wyglada, jak akcje, ktore tworzylismy do tego pory.
    Tak akcja bedzie dzialac w oparciu o Redux Thunk.
    Poznasz to po tym, ze akcja zwraca nie obiekt, tylko funkcje.
*/

// dispatch pozwoli nam wywolac dowolna akcje, ktora zdefiniowalismy
// getState pozwoli nam odwolac sie do stanu
export const createProduct = (product) => (dispatch, getState) => {
    // Zanim cokolwiek zwrocisz, z racji tego ze jestes w funkcji, mozesz
    // wykonac w zasadzie dowolne operacje. To sa wlasnie SIDE EFFECTS
    // czyli pewne dodatkowe operacje, ktore moga np wysiwtlic loggs,
    // skomunikowac sie z REST API, wykonac inne dodatkowe operacje.

    fetch('http://localhost:8080/products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
    })
        .then(response => response.json())
        .then(json => {
            console.log('New product added to db');
            // Zaraz wywolasz tutaj akcje
            dispatch(fetchProductsFromAPI())
        })
        .catch(err => console.log(err))
}

export const fetchProductsFromAPI = () => (dispatch, getState) => {
    fetch('http://localhost:8080/products')
        .then(response => response.json())
        .then(json => dispatch(fetchProducts(json)))
        .catch(err => console.log(err));
}