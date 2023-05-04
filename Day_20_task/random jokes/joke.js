var url=`https://api.chucknorris.io/jokes/random`
fetch(url)
.then(function(responce){
    responce.json().then(data=>{
        console.log(data);
        var value=data.value;
        document.getElementById('result').innerHTML=value;
    });
});