L’application est organisée en frontend React et backend Spring Boot. Le frontend gère l’interface utilisateur,
la navigation et les formulaires, tandis que le backend expose une API REST pour le CRUD , en utilisant MySQL
pour les données relationnelles et MongoDB pour les besoins non relationnels.

Le front et le Back sont chacun containerisé avec Docker pour l’orchestration et le déploiement.
J'ai du rajouter le Dockerfile coté back qui était manquant.

J'ai lancé les tests frontend  avec la commande "npm test", ce qui permet de vérifier le bon fonctionnement
des composants et de la logique de l’interface utilisateur.

Pour les choix techniques , on a coté Front-end la bibliothèque React pour l'interface utilisateur qui est très rapide
et fluide.
Pour le Back-end Spring boot qui est robuste et maintenable .
Pour la base de données, Mysql pour le relationnel et MongoDb pour le non relationnel
Docker pour isoler les services , simplifier le déploiement et assurer la portabilité