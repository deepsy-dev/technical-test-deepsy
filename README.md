## 🤝 Bienvenue chez DeePsy

Bonjour et bienvenue au test technique de DeePsy pour votre **Stage/Alternance**. Nous sommes ravis de voir ce que vous pouvez apporter à notre équipe et nous espérons que vous trouverez ce test à la fois stimulant et agréable.
On a mis beaucoup d'efforts dans la création de ce test technique qui change des habituels questionnaire/tests technique basés sur des algorithmes utlra complexes.

Veuillez noter que le code sur le back-end n'est pas sécurisé et est apte à des injections sql, il ne doit pas être une source d'inspiration.

---

---

## 🧠 BACK-END

#### Prérequis
Ce projet nécessite Node.js version 13 ou supérieure. Je recommande l'utilisation de la version 19.9.0 ou 20.0.0, qui ont été utilisés pour créer ce test technique.

Pour installer les dépendances, exécutez la commande suivante :

```bash
npm i
```

Pour démarrer le serveur, utilisez la commande :

```bash
npm run start
```

En cas de problème, vous pouvez modifier le port en créant un fichier .env et en y ajoutant :

```bash
PORT=VOTRE_NUMERO_ICI
```

Si vous devez reset la bd, il vous suffira de supprimer le fichier `deepsy_test.db` et de lancer ce fichier :

```bash
node ./database_populate.js
```

#### Endpoints
- `GET /` | Envoie "Hello World!"

- `GET /token` | Renvoie un token vérifié pour accéder aux endpoints protégés. |
Exemple: `{ token: "OpgIe84krMsrMouJrUdxYPghX5o7DKtTiL1alv6vbgg6zuUpUbt0xDUMiLBgY5bw" }`

- `GET - /languages` | Renvoie une liste de toutes les langues disponibles. |
Exemple : `{ ["en", "fr"] }`

##### Dorénavent tous les endpoint ci-dessous commenceront par `/api/{lang}` et devront avoir dans le "Headers" ceci: `Authorization TOKEN`

- `GET - /api/:lang/test/` | Renvoie une liste de tests avec pagination et tri. |
Paramètres possibles : `limit` (défaut 10, max 100), `page` (défaut 1), `sort` ('date' pour tri par date, sinon tri aléatoire)

- `GET - /api/:lang/test/:id` | Renvoie un test spécifique. |
Paramètres possibles : `id` ('id' ou 'ref' du test).

- `POST - /api/:lang/test/` | Crée un nouveau test. |
Exemple : `{ "title": { "en": "Example Title", "fr": "Titre Exemple" }, "sub_title": { "en": "Example Subtitle", "fr": "Sous-Titre Exemple" }, "color": "#f4a261", "is_active": true }`

- `POST - /api/:lang/test/:id` | Modifie un test existant. |
Exemple : `{ "title": { "en": "Modified Title", "fr": "Titre Modifié" }, "sub_title": { "en": "Modified Subtitle", "fr": "Sous-Titre Modifié" }, "color": "#f4a261", "is_active": true }`

- `DELETE - /api/:lang/test/:id` | Supprime un test spécifique. |
Paramètres possibles : `id`.

### Technologies Utilisées

- [body-parser](https://github.com/expressjs/body-parser)
- [chalk](https://github.com/chalk/chalk)
- [express](https://github.com/expressjs/express)
- [nodemon](https://github.com/remy/nodemon)
- [sqlite3](https://github.com/mapbox/node-sqlite3)
- [dotenv](https://github.com/motdotla/dotenv)

---

## 🎨 FRONT-END

### Mission
Votre mission est de créer le front-end pour notre API. Vous construirez une page avec une barre de recherche permettant de lister les tests que DeePsy propose. Ce front-end permettra également de sélectionner un test pour le supprimer ou le modifier. Pour la modification ou la supression vous pouvez faire cela dans une simple Modal, ou dans une page à part, à vous de voir.

En ce qui concerne les résultats: 
- Donnez le choix à l'utilisateur de voir les résultats en Francais ou en Anglais.
- Créer une pagination.
- Donnez aux utilisateurs la possibilité de choisir la limite des résultats.
- Ne mettez pas de résultats dans une table mais dans un element selectionnable. À vous d'être créatif sur la méthode d'affichage des titles, sub_titles et  color.
- ✨ Points bonus si vous donnez le choix à l'utilisateur d'afficher les résultats en mode grille en liste horizontale, cherchez "Grid view or List view" sur google, ou [cliquez ici](https://uxmovement.com/wp-content/uploads/2015/11/list-grid-selections.png) pour un exemple

Si vous souhaitez l'utiliser, voici notre logo au format svg: [Logo DeePsy](https://qa.deepsy.fr/images/svg/logo-deepsy-svg.svg)

Attention, il faudra faire gaffe et bien gérer les erreurs, à noter que la plus part des endpoint vous enverrons des erreurs generalement 1 fois/10 ou plus selon votre chance.

#### Exigences Techniques:
- Utilisez exclusivement **ReactJS**. Vous pouvez initialiser votre projet avec `create-react-app` ou `npm create vite@latest`.
- Pour le style, utilisez **SCSS** ou **SASS**, nous recommandons fortement d'utiliser **Bulma** comme framework CSS.

Le resultat final ne doit pas nécessairement être complexe mais ne doit pas être trop moche non plus.

## ⚠️ À noter qu'il vous sera interdit de modifier le back-end, sauf en cas de bug mineur ou oubli de notre part.

### Technologies Recommandées
- [Bulma CSS](https://bulma.io/)
- [Sass/SCSS](https://sass-lang.com/)
- [Create React App](https://create-react-app.dev/) / [Vite](https://vitejs.dev/)

### Instructions pour l'envoi de votre test
Il n'y a pas de limite de temps stricte pour ce test, mais plus rapide sera toujours mieux. Ne forkez pas et ne pushez pas sur le repo actuel. Créez votre projet indépendamment et envoyez-le soit via **GitLab** soit en tant que repo privé sur **GitHub**.
Vous pouvez ajouter l'utilisateur `deepsy-dev` ou `deepsy.paca@gmail.com` au repo en tant que collaborateur. Pour finir envoyez un message à **Amin@deepsy.fr** avec le lien du repo pour notifier de votre soumission.

---

😄 Bonne chance et amusez-vous bien ! Si vous avez des questions, n'hésitez surtout pas à demander: **Amin@deepsy.fr**