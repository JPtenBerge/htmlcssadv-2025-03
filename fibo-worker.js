addEventListener('message', e => {
    let n = e.data;
    let result = berekenFibo(n);
    postMessage(result);
});

const berekenFibo = n => {
    if (n === 0 || n === 1) return 1;
    return berekenFibo(n - 1) + berekenFibo(n - 2);
};



// geen toegang tot:
// - window/globalThis
// - DOM
// - navigator

// notifications
// fetch()
// moeilijke berekeningen?
// - change detection
// camera API - QR-code herkenning gezichtsherkenning
// localStorage - indexed database 250MB





// service worker - PWA