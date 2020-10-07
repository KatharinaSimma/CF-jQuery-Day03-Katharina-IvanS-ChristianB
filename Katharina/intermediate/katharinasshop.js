var productData = JSON.parse(Data);
console.table(productData);

$(document).ready(function () {

    for (var i = 0; i < productData.length; i++) {
        $("#mainDiv").append(`
            <div class="flexItem ${productData[i].type}">
                <figure>
                    <img src='${productData[i].img}'>
                    <figcaption id="${i}">
                        <ul>
                            <li>${productData[i].name}</li>
                            <li>${productData[i].type}</li>
                            <li>${productData[i].description}</li>
                            <li>${productData[i].price} $</li>
                        </ul>
                        <span id="${i}" class="replace">We have ${productData[i].quantity} ${productData[i].name}s in stock at the moment</span><br>
                        <button class="buy" id="${i}">BUY NOW!</button>
                    </figcation>
                </figure>
            </div> </br>
        `)

        $(".notebook").css("background-color", "red");
        $(".phone").css("background-color", "lime");
        $(".tablet").css("background-color", "blue");
    };

        // Serris solution ==> find location via parent
        /*$(".buy").on('click', function(){
            var index = $(this).parent().attr("id"); //id is basically just the index of the json file
            let newStock = productData[index].quantity -= 1;
            //console.log(productData[index].quantity);
            $(this).parent().find(".replace").html(`Now we only have ${newStock} in stock! `)
            console.log(newStock);
            console.table(productData)
        })*/

        //Stephans solution ==> find your location via sibling
        /*$(".buy").on("click", function() {
            var index = $(this).siblings("span:eq(0)").attr("id"); //eq used to address a sibling element that is the span with the index 0
            productData[index].quantity -= 1;
            $(this).siblings("span:eq(0)").html(`Now we just have ${productData[index].quantity} in stock`);
        })*/
   
        // Alejandros solution 
        /*$(".buy").on('click', function(){
            let index = $(this).attr("id"); //simplest way to address the index!
            let newStock = productData[index].quantity -=1;
            //$(this).attr("id").html(`Now we just have ${newStock} in stock`) // couldn't get this to work, went for the path of the sibling instead
            $(this).siblings("span:eq(0)").html(`Now we just have ${productData[index].quantity} in stock`);
        });*/

        // Katharinas step by step tutorial for dummies
        // 0. locate the event handler
        $(".buy").on('click', function(){
        // 1. make sure you have an index from the loop
            let index = $(this).attr("id"); 
        // 2. the actual calculation
            let newStock = productData[index].quantity -=1;
        // 3. place the calculation in the html
            $(this).siblings("span:eq(0)").html(`Now we just have ${productData[index].quantity} in stock`);
        });



});
