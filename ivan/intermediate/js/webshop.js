var dataList = JSON.parse(data);

for(let i = 0 ; i < dataList.length ; i++) {
	var shop = $(`
					<div class=card id=${i}>
						<h3> ${dataList[i].name} </h3>
						<img ${dataList[i].img}> <br>
						for just <strong> € ${dataList[i].price} </strong> <br>
						<h5>${dataList[i].description} </h5>
						<p> In stock: ${dataList[i].available} </p>
						<button>Buy now!</button>
					</div>
				`)

	$("#container").append(shop);

	switch (dataList[i].type) {
		case 'notebook':
			document.getElementById(`${i}`).style.backgroundColor = 'pink';
			break;
		case 'phone':
			document.getElementById(`${i}`).style.backgroundColor = 'lightgreen';
			break;
		case 'tablet':
			document.getElementById(`${i}`).style.backgroundColor = 'lightblue';
			break;
		}
};
		
		$(document).ready(function() {
			$("button").on('click', function() {
				var index = $(this).parent().attr("id");
				dataList[index].available--
				$(this).parent().find("p").html("In stock: " + dataList[index].available);
				})
			});

