function myPromise(){
    return new Promise((resolve, reject) =>{
        resolve(1);
    })
}


myPromise()
    .then((data)=>{
        console.log(data);
        return 2;
    })
    .then(data => {
        console.log(data);
        return 3;
    })
    .then(data => {
        console.log(data);
        return 4;
    }).then(data => {
        console.log(data);
    })