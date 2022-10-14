if(navigator.serviceWorker){
    console.log("soporta service worker")
    navigator.serviceWorker.register('./sw.js')
}