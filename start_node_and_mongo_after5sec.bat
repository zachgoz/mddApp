TIMEOUT /T 5 /NOBREAK
start /d "C:\Program Files\MongoDB\Server\3.0\bin" call mongod
TIMEOUT /T 2 /NOBREAK
start /d "C:\mddApp" call node app.js