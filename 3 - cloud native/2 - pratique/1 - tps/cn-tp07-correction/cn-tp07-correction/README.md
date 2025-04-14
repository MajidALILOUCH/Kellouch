
# Commandes PowerShell pour tester les fonctionnalités de l'application

## Ajouter un nouvel utilisateur (/add)
```powershell
Invoke-RestMethod -Uri "http://localhost:5000/api/user/add" -Method Post -Body '{"email":"user@exemple.com","login":"my_login","firstname":"myfirstname","lastname":"mylastname","password":"MyPassword123"}' -ContentType "application/json"
```

## Vérifier les identifiants de connexion (/checklogin)
```powershell
Invoke-RestMethod -Uri "http://localhost:5000/api/user/checklogin" -Method POST -Body '{"login":"mylogin","password":"MyPassword123"}' -ContentType "application/json"
```

## Vérifier si un email existe déjà (/checkemail)
```powershell
Invoke-RestMethod -Uri "http://localhost:5000/api/user/checkemail" -Method Post -Body '{"email":"user@exaample.com", "password":"MyPassword123"}' -ContentType "application/json"
```

## Récupérer les informations d'un utilisateur (/)
```powershell
Invoke-RestMethod -Uri "http://localhost:5000/api/user/getuser" -Method Post -Body '{"email":"user@example.com", "password":"MyPassword123"}' -ContentType "application/json"
```

## Récupérer les informations de tous les utilisateurs (/all)
```powershell
Invoke-RestMethod -Uri "http://localhost:5000/api/user/all" -Method GET -ContentType "application/json"
```

