document.addEventListener('DOMContentLoaded', function() {
	document.getElementById('userid').addEventListener('keyup', validateUserId);
});

function validateUserId() {
	var username = document.getElementById('userid').value;
	fetch('validate?id=' + encodeURIComponent(username))
		.then(function(response) {
			if (!response.ok) {
				throw new Error('Network response was not ok');
			}
			return response.text();
		})
		.then(function(data) {
			var message = extractMessage(data);
			setMessage(message);
		})
		.catch(function(error) {
			console.error('Error during fetch operation:', error);
		});
}

function extractMessage(responseText) {
	var xmlDoc = new DOMParser().parseFromString(responseText, 'text/xml');
	return xmlDoc.getElementsByTagName('valid')[0].textContent;
}

function setMessage(message) {
	var userMessageElement = document.getElementById('userIdMessage');
	if (message === 'false') {
		userMessageElement.innerHTML = '<div style="color:red">Invalid User Id</div>';
		document.getElementById('submit_btn').disabled = true;
	} else {
		userMessageElement.innerHTML = '<div style="color:green">Valid User Id</div>';
		document.getElementById('submit_btn').disabled = false;
	}
}

function disableSubmitBtn() {
	document.getElementById('submit_btn').disabled = true;
}
