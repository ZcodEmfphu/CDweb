<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Form Data Validation using AJAX</title>
</head>
<body>
	<h1>Form Data Validation using AJAX</h1>
	<hr />
	<p>This example shows how you can use AJAX to do server-side form
		data validation without a page reload.</p>
	<p>In the form below enter a user id. By default the user ids
		&quot;greg&quot; and &quot;duke&quot; are taken. If you attempt to
		enter a user id that has been taken an error message will be displayed
		next to the form field and the &quot;Create Account&quot; button will
		be disabled. After entering a valid user id and selecting the
		&quot;Create Account&quot; button that user id will be added to the
		list of user ids that are taken.</p>

	<form name="updateAccount" action="validate" method="post">
		<input type="hidden" name="action" value="create" />
		<table border="0" cellpadding="5" cellspacing="0">
			<tr>
				<td><b>User Id:</b></td>
				<td><input type="text" size="20" id="userid" name="id"></td>
				<!-- The "userIdMessage" div element specifies the location where input validation
                    message gets displayed. -->
				<td><div id="userIdMessage"></div></td>
			</tr>
			<tr>
				<td align="right" colspan="2"><input id="submit_btn"
					type="Submit" value="Create Account"></td>
				<td></td>
			</tr>
		</table>
	</form>

	<script type="text/javascript" src="./scripts/jquery-3.6.3.min.js"></script>
	<script type="text/javascript" src="./scripts/jquery-ajax.js"></script>
</body>
</html>
