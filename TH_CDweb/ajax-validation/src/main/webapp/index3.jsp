<!DOCTYPE html>
<html>
<head>
<title>Form Data Validation using AJAX</title>
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="./script/jquery-async-await.js"></script>
</head>

<body onload="disableSubmitBtn()">
	<h1>Form Data Validation using AJAX</h1>
	<hr />
	<p>This example shows how you can use AJAX to do server-side form
		data validation without a page reload.</p>
	<p>In the form below enter a user id. By default the user ids
		"greg" and "duke" are taken. If you attempt to enter a user id that
		has been taken an error message will be displayed next to the form
		field and the "Create Account"; button will be disabled. After
		entering a valid user id and selecting the "Create Account" button
		that user id will be added to the list of user ids that are taken.</p>

	<form name="updateAccount" action="validate" method="post">
		<input type="hidden" name="action" value="create" />
		<table border="0" cellpadding="5" cellspacing="0">
			<tr>
				<td><b>User Id:</b></td>
				<td><input type="text" size="20" id="userid" name="id"></td>
				<td>
					<div id="userIdMessage"></div>
				</td>
			</tr>
			<tr>
				<td align="right" colspan="2"><input id="submit_btn"
					type="submit" value="Create Account"></td>
				<td></td>
			</tr>
		</table>
	</form>

	<script>
        async function disableSubmitBtn() {
            $('#submit_btn').prop('disabled', true); // Initially disable submit button

            $('#userid').on('input', async function () {
                const userId = $(this).val();
                try {
                    const response = await $.ajax({
                        url: 'validate', // Specify your validation endpoint here
                        method: 'POST',
                        data: {
                            action: 'check',
                            id: userId
                        }
                    });

                    // Check response from server
                    if (response.valid) {
                        $('#userIdMessage').text('');
                        $('#submit_btn').prop('disabled', false);
                    } else {
                        $('#userIdMessage').text('User id already taken!');
                        $('#submit_btn').prop('disabled', true);
                    }
                } catch (error) {
                    console.error('Error:', error);
                }
            });
        }
    </script>
</body>
</html>
