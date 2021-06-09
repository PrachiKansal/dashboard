$('#expandSidebar').click(function(){
    $('#sidebar').toggleClass('visible');
});

$('.card-link').click(function(){
    $(this).find('i').toggleClass('fa-caret-down fa-caret-up');
    console.log("u r in");
});

function addSchedule(){
    var lastId = $('#accordion').children().last().children().last().attr('id');
    var nStr = lastId.substring(lastId.length-1, lastId.length);
    var n = parseInt(nStr);
    console.log(n);
    n = n+1;

    console.log($("#name").val(),$("#sDate").val(),$("#eDate").val(),$("#weeks").val());
    /*$("#name").val();
    $("#sDate").val();
    $("#eDate").val();
    $("#weeks").val();*/

    $('#accordion').append("<div class='card bg-white text-secondary my-4 shadow'> <div class='card-header bg-white'> <span class='float-right'> <button class='btn btn-outline-secondary border border-0'><i class='fas fa-pen fa-lg'></i></button> <button class='btn btn-outline-danger border border-0'><i class='fas fa-trash fa-lg'></i></button> <a href='#collapseContent"+n+"' class='card-link btn btn-outline-success border border-0' data-toggle='collapse'><i class='fas fa-caret-down fa-2x'></i></a> </span> <span> <h5 class='text-body '>"+$("#name").val()+"</h5> "+$("#weeks").val()+" weeks &ensp; | &ensp; 12 Sessions </span> </div> <div id='collapseContent"+n+"' class='collapse show' data-parent='#accordion'> <div class='card-body'> <div class='row mb-4'> <div class='col-md-2'> <span class='small'>START DATE</span> <br> <span class='text-body'>"+$("#sDate").val()+"</span> </div><div class='col-md-2'> <span class='small'>END DATE</span> <br> <span class='text-body'>"+$("#eDate").val()+"</span> </div> <div class='col-md-2 offset-6 text-right'> <button type='button' class='btn btn-success'>Update</button> </div> </div><div class='d-flex justify-content-around mt-5 mb-3 brdr'> <button type='button' class='btn btn-outline-secondary p-3'><i class='far fa-circle'></i> SUNDAY</button> <button type='button' class='btn btn-outline-secondary'><i class='far fa-circle'></i> MONDAY</button> <button type='button' class='btn btn-outline-success' id='activeDay'><i class='fas fa-circle'></i> TUESDAY</button> <button type='button' class='btn btn-outline-secondary'><i class='far fa-circle'></i> WEDNESDAY</button> <button type='button' class='btn btn-outline-secondary'><i class='far fa-circle'></i> THURSDAY</button> <button type='button' class='btn btn-outline-secondary'><i class='far fa-circle'></i> FRIDAY</button> <button type='button' class='btn btn-outline-secondary'><i class='far fa-circle'></i> SATURDAY</button></div> </div> </div> </div>");
}