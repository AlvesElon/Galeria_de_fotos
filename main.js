$(document).ready(function() { 
    $("header button").click(function() {
        $("form").slideDown();
    })

    $("#cancel-button").click(function() {
        $("form").slideUp();
    })

    $("form").on("submit", function (e){
        e.preventDefault();
        const newImage = $('#new-image').val;
        const newItem = $('<li style="display: none"></li>');
        $(`<img src='${newImage}' />`).appendTo(newItem);
        $(`<div class='overlay-images-link'>
            <a href='${newImage}' target='_blank' title='Ver imagem em tamanho real'
                Ver imagem em tamanho real
            </a>
        </div>
        `).appendTo(newItem);
        $(newItem).appendTo('ul');;
        $(newItem).fadeIn(2000);
        $('#newImage').val("");
        
    })


})