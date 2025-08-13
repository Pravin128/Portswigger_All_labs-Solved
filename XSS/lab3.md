Lab: DOM XSS in document.write sink using source location.search
search query tracking functionality.
Text in search bar is passing through `img src` attribute

Break out of the img attribute by searching for:
"><svg onload=alert(0)>
