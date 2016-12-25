$.ajax({
        method: 'GET',
        url:'http://jsonplaceholder.typicode.com/posts',
        dataType: 'json'
    }).done(function(data){
        $.map(data,function(post, i){
          $('.pagination__list').append("<div class='panel panel-primary pagination__item'><div class='panel-heading'>"
       + post.title + "<div class='ed-icons'>"+
       "<span class='glyphicon glyphicon-edit' title='Edit Post'></span> |"+
       " <span class='glyphicon glyphicon-trash' title='Delete Post'></span></div>"+
       "</div><div class='panel-body'>" + post.body + "</div></div>")
        })
    })
