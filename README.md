# StockLite

Gestionnaire de stock minimaliste en Node.js, en ligne de commande, sans aucune dépendance d'exécution.

![Node.js](https://img.shields.io/badge/Node.js-339933?logo=nodedotjs&logoColor=white) ![Node](https://img.shields.io/badge/node-%3E%3D22-339933) ![ESLint](https://img.shields.io/badge/ESLint-4B32C3?logo=eslint&logoColor=white) ![GitHub Actions](https://img.shields.io/badge/CI-GitHub_Actions-2088FF?logo=githubactions&logoColor=white) ![MIT](https://img.shields.io/badge/licence-MIT-green)

## Fonctionnalités

- Ajout et retrait de produits
- Affichage du stock en tableau dans la console
- Alertes de stock bas, triées par urgence

## Utilisation

```bash
npm install
node src/cli.js lister     # affiche le stock
node src/cli.js alertes    # affiche les alertes
```

## Qualité

```bash
npm test                 # tests (node --test)
npm run test:coverage    # couverture
npm run lint             # ESLint
```

L'intégration continue (`.github/workflows/ci.yml`) lance le lint et les tests à chaque push ; `release.yml` gère les versions (voir `CHANGELOG.md`).

## Structure

```text
src/      cli.js, stock.js, format.js, notifier.js, outils.js
test/     tests unitaires
scripts/  contrôle des alertes
docs/     notes
```

## Contexte

Projet d'évaluation réalisé en binôme (voir `BINOME.md`), réponses dans `REPONSES.md`.
---

Réalisé par **Ethan Lalienne** · [GitHub](https://github.com/ethn924) · [Portfolio](https://ethn924.github.io/Portfolio/)
