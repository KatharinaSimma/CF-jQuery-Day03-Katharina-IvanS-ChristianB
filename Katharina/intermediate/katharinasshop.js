var productData = JSON.parse(Data);
console.table(productData);

$(document).ready(function(){

    for (var i=0; i<productData.length; i++){
        $("#mainDiv").append(`
            <div class="flexitem">
                <figure>
                    <img id="img${i}" src='${productData[i].img}'>
                    <figcaption></figcation>
                </figure>
            </div> </br>
        `)

        /*$("#mainDiv").append(`<div class="flexItem"><img id="img${i}" src='${productData[i].img}'></div>`).append(`<br><span>Relation: ${productData[i].name}</span>`);
        //console.log($("#img${i}"));*/
    }

});
