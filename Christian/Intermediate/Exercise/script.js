var dataArr = JSON.parse(data);

//Pushing JSON Data into HTML + Variable Background:
for (let i = 0; i < dataArr.length; i++) {
    $("#mainContent").append(`<div id="${i}" class="productDiv ${dataArr[i].type}"></div>`);
        $(`#${i}`).html(`
        <img id="img${i}" src="${dataArr[i].image}">
        <h3>Product: ${dataArr[i].name} </h3>
        <h2>Price: ${dataArr[i].price} </h2>
        <p>Description: ${dataArr[i].description} </p>
        </br>
        <p id="${i}"><button class="plus" type="plus"> + </button> <span class="quantityBox points"> ${dataArr[i].quantity}</span> <button class="minus" type="minus"> - </button> </p>
        `);

    //Setting Background to Type of Product:
    if (dataArr[i].type == "notebook") {
        $(".notebook").css('background-color', 'red');
    }
    else if (dataArr[i].type == "phone") {
        $(".phone").css('background-color', 'green');
    }
    else if (dataArr[i].type == "tablet") {
        $(".tablet").css('background-color', 'blue');
    }
};


//Function to Listen for Click and Increasing or Decreasing the Quantity of the Product:
$(document).ready(function() {
	//Subfunction for click on plus:
    $(".plus").on("click", function(){
        var index = $(this).parent().attr("id");
        dataArr[index].quantity += 1;
        // dataArr[index] = dataArr[index] + 5;
        $(this).parent().find(".points").html(dataArr[index].quantity);
        // console.table(dataArr);
    })

    //Subfunction for click on minus:
    $(".minus").on("click", function(){
        var index = $(this).parent().attr("id");
        dataArr[index].quantity -= 1;
        // dataArr[index] = dataArr[index] + 5;
        $(this).parent().find(".points").html(dataArr[index].quantity);
        // console.table(dataArr);

    })

});




