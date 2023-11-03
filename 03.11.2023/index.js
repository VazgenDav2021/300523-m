const getMyPosition = () => {
    navigator.geolocation.getCurrentPosition((positon) => {
        const { latitude, longitude } = positon.coords
        console.log('====================================');
        console.log({ latitude, longitude });
        console.log('====================================');
    }, (error) => console.log(error));
}

getMyPosition()