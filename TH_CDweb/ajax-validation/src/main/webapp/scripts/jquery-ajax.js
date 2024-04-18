$(document).ready(function() {
	$('#userid').on('keyup', function() {
		validateUserId();
	});
});

function validateUserId() {
	var username = $('#userid').val();
	$.ajax({
		url: 'validate',
		type: 'GET',
		data: {
			id: username
		},
		success: function(response) {
			var message = $(response).find('valid').text();
			setMessage(message);
		}
	});
}

function setMessage(message) {
	var userMessageElement = $('#userIdMessage');
	var messageText;
	if (message == "false") {
		userMessageElement.html('<div style="color:red">Invalid User Id</div>');
		$('#submit_btn').prop('disabled', true);
	} else {
		userMessageElement.html('<div style="color:green">Valid User Id</div>');
		$('#submit_btn').prop('disabled', false);
	}
}

function disableSubmitBtn() {
	$('#submit_btn').prop('disabled', true);
}
