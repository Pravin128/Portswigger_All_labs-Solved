Lab: DOM XSS in innerHTML sink using source location.search
cross-site scripting vulnerability in the search blog functionality
Uses InnerHTML-> changes HTML content of div element->using data from location.search.
<img src=0 inerror=alert(1) >