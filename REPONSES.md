# Réponses — chasse au trésor

## Note sur l'usage de l'IA

Corentin était présent. Nous avons rencontré de grosses
difficultés sur cette partie (workflows GitHub Actions, rulesets), ce
qui nous a poussés à nous faire aider. Pour la Partie 5 (CI/CD),
j'ai utilisé Claude Code comme outil d'aide, sous ma direction et avec
ma validation à chaque étape sensible (fusion des PR, modification des
règles du dépôt, création du tag) : mise en place des workflows GitHub
Actions (CI, release), correction du bug des alertes avec test de
non-régression, bump de version. Parties 1 à 4 réalisées entièrement
par Ethan et Corentin.

<!-- Format imposé, une réponse par ligne :
Q01: <réponse>
commande: <commande(s) utilisée(s)>
-->

Q01: 32
commande: git rev-list --count depart (Compte les commits accessibles)

Q02: C'est Sarah Benali
commande:  git blame -L 3,3 src/format.js

Q03: 4459c91715f9b1c97cf4776ad2e5afbdb3aa7051
commande: git bisect start (Démarre la recherche binaire) ; git bisect bad (Indique un commit défectueux) ; git bisect good v0.2.0 (Indique un commit correct et définition de la v0.2.0 comme correcte) ; node scripts/controle-alertes.js (Teste les alertes) ; git bisect bad ; git bisect good

Q04: sk_live_01de6ba0c9f4d846
commande: git log  -S"API" -p

Q05: 11544ab934db75adbe18115b8c463b52bdb4296a
commande: git show --stat 11544ab (Détaille un commit)

Q06: 17
commande: git rev-list --count v1.0.0 ^v0.2.0

Q07: essai-perf
commande: git for-each-ref refs/tags --format="%(refname:short) %(objecttype)" (Identifie les tags légers et on voit vite ce qui pose problème)

Q08: remotes/origin/experiment/cache-redis
commande: git branch -a --no-merged v1.0.0  --no-contains v1.0.0

Q09: src/utils.js
commande: git log --follow (nom du fichier souhaité = suivi des renommages)

Q10: Nathan Robin
commande: git shortlog -sne depart

Q11: 2026-03-24
commande: git show -s --format=%cs (Mettre SHA = affiche la date en format AAAA-MM-JJ du commit)

Q12: "feat(cli): bannière de démarrage"
commande: git log --grep="^Revert" 

Q13: de5637a
commande: git log --oneline --merges (Affiche les commits de fusion)

Q14: 16
commande: git diff --numstat v0.1.0 v1.0.0 -- src/stock.js

Q15: 6d6b920
commande: it log -S "TODO: gérer les quantités négatives" --oneline (Nous montre le commit qui a introduit le commentaire entre guillemets)
