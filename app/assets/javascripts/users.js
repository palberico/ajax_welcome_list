$(document).ready( function() {
    $.ajax({
        url: 'http://json-server.devpointlabs.com/api/v1/users',
        method: 'GET',
        datatype: 'JSON'
      }).done( function(users) {
        console.log(users)
        var list = $('#users');
        list.empty();
        users.forEach( function(user) {
          var li = '<li>' + user.first_name + ' ' + user.last_name + '</li>'
          list.append(li)
        });
      });
  
      $('#button').on('click', function() {
        var first_name = $('#first_name')
        var last_name = $('#last_name')
        var data ={'user[first_name]': first_name[0].value, 'user[last_name]': last_name[0].value}
        $.ajax({
          url: 'http://json-server.devpointlabs.com/api/v1/users',
          type: 'POST',
          dataType: 'JSON',
          data: data
        }).done( function(res) {
          console.log(res)
        })
      })
  });