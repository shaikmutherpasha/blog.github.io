$.ajax({
    method: 'GET',
    url: 'http://jsonplaceholder.typicode.com/posts',
    datType: 'json'
}).done(function(data) {
    $.map(data, function(post, i) {
        $('#panels').append("<div class='panel panel-primary'><div class='panel-heading'>" + post.title + "<div class='ed-icons'>" +
            "<span class='glyphicon glyphicon-edit' title='Edit Post'></span> |" +
            " <span class='glyphicon glyphicon-trash' title='Delete Post'></span></div>" +
            "</div><div class='panel-body'>" + post.body + "</div></div>")
    })
})
$('form').submit(function(e){
    e.preventDefault();
    var title = $('#title').val();
    var body = $('#desc').val();
    var url = 'http://jsonplaceholder.typicode.com/posts';

    $.post(url, {title:title,body:body}).done(function(post){
       $('#panels').prepend("<div class='panel panel-primary'><div class='panel-heading'>" + post.title + "<div class='ed-icons'>" +
            "<span class='glyphicon glyphicon-edit' title='Edit Post'></span> |" +
            " <span class='glyphicon glyphicon-trash' title='Delete Post'></span></div>" +
            "</div><div class='panel-body'>" + post.body + "</div></div>")
    })

})

 $('#submit').click(function(){
     $('.modal').fadeOut();
     $('.modal-backdrop').fadeOut();
   });
