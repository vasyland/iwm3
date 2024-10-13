# Iwm3


##Making a link 
```
cd C:\AV\WorkProjects\iwm3
mklink /d node_modules C:\AV\WorkProjects\iwm3\node_modules
rmdir node_modules
```

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.1.

## Development server
http://localhost:5003/

## Build
C:\AV\WorkProjects\iwm3> ng build --configuration production

# for debugging
ng build --configuration production --base-href /iwm3app/

cd C:\AV\WorkProjects\iwm3\dist\iwm3\browser
jar -cvf iwm3app.war -C C:\AV\WorkProjects\iwm3\dist\iwm3\browser .
Move iwm3app.war file to C:\Tools\wlp24\usr\servers\dev1\dropins
 C:\Tools\wlp24\bin> server.bat start dev1




