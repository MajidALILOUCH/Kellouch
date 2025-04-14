
# Configuration

npm init -y
npm install express
npm install bcrypt
npm install --save-dev nodemon


# package.json
{
  "type": "module",
  "scripts": {
    "start": "nodemon index.js"
  }
}

# start server
npm start

# Les endpoints de l'API sont les suivants :

- POST /register - Enregistre un nouvel utilisateur avec un mot de passe haché
- POST /login - Connecte un utilisateur avec vérification de mot de passe
- POST /hash - Démontre le hachage direct d'un mot de passe

# Utilistaion 

## Enregister un nouveau utilisataeur (POST /register)

Invoke-RestMethod -Uri "http://localhost:5000/register" -Method Post -Body '{"username":"test","password":"mypassword123"}' -ContentType "application/json"

# Connection avec vérification du mot de passe (POST /login)

Invoke-RestMethod -Uri "http://localhost:5000/login" -Method Post -Body '{"username":"test","password":"mypassword123"}' -ContentType "application/json"

# Démontre le hachage direct d'un mot de passe (POST /hash)

Invoke-RestMethod -Uri "http://localhost:5000/hash" -Method Post -Body '{"password":"P@ssw0rd"}' -ContentType "application/json"
