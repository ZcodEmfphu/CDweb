// script.js

$(document).ready(function() {
    disableSubmitBtn();

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
});
