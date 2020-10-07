// Setup --------------------------------------------------------------------------------------------------
// Input Array:
var tasks = ["Planing", "Going for a Run", "Mountain Biking", "Beer with Friends", "Learning"];

// Function for Animation --> Gets added to Output Array and Input Form:
function removal() {
    $('.removeItem').on('click', function() {
        $(this).animate({
                opacity: 0.0,
                paddingLeft: '+=100'
            }, 2000, function() {
                $(this).remove();
            });
    });
};


// Implementation-----------------------------------------------------------------------------------------
// Output Array to HTML:
for (let i = 0; i < tasks.length; i++) {
        $("#toDo").append(`<li class="removeItem"> ${tasks[i]} </li>`);
        $('removeItem').on('click', removal());
};


// Input of Task which should have same capabilities as other listItems:
$('#button').on('click', function() {
    var content = $('#userInput').val();
    $("ul").append(`<li class="removeItem"> ${content} </li>`);

    $('removeItem').on('click', removal());
});
