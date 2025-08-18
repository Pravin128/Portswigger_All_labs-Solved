print("[",end='')
with open("pwd.txt", "r") as file:
    lines = file.readlines()
for pwd in lines:
    print('"' + pwd.strip() + '",', end='')
print("'ramdom'",end='') 