# Réponses — chasse au trésor

<!-- Format imposé, une réponse par ligne :
Q01: <réponse>
commande: <commande(s) utilisée(s)>
-->

Q01: 32
commande: git rev-list --count depart (Compte les commits accessibles)

Q02: 
commande: 

Q03: 4459c91715f9b1c97cf4776ad2e5afbdb3aa7051
commande: git bisect start (Démarre la recherche binaire) ; git bisect bad (Indique un commit défectueux) ; git bisect good v0.2.0 (Indique un commit correct et définition de la v0.2.0 comme correcte) ; node scripts/controle-alertes.js (Teste les alertes) ; git bisect bad ; git bisect good

Q04: 
commande: 

Q05: 11544ab934db75adbe18115b8c463b52bdb4296a
commande: git show --stat 11544ab (Détaille un commit)

Q06: 
commande: 

Q07: essai-perf
commande: git for-each-ref refs/tags --format="%(refname:short) %(objecttype)" (Identifie les tags légers et on voit vite ce qui pose problème)

Q08: 
commande: 

Q09: src/utils.js
commande: git log --follow (nom du fichier souhaité = suivi des renommages)

Q10: 
commande: 

Q11: 2026-03-24
commande: git show -s --format=%cs (Mettre SHA = affiche la date en format AAAA-MM-JJ du commit)

Q12: 
commande: 

Q13: de5637a
commande: git log --oneline --merges (Affiche les commits de fusion)

Q14: 
commande: 

Q15: 6d6b920
commande: it log -S "TODO: gérer les quantités négatives" --oneline (Nous montre le commit qui a introduit le commentaire entre guillemets)
