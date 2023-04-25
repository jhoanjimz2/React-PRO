import axios from "axios";


const directionsApi = axios.create({
    baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
    params: {
        alternatives: false,
        geometries: 'geojson',
        language: 'es',
        overview: 'simplified',
        steps: false,
        access_token: 'pk.eyJ1IjoiamhvYW5qaW16MiIsImEiOiJjbDlzcmJ5emYxZXViM3BvMHhsMG8weHNkIn0.jKURkdLurQAFnLUX2vRJlQ'
    }
})

export default directionsApi;