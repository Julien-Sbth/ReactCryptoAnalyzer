# CryptoAnalyzer React

Une application React moderne pour l'analyse et la visualisation de données cryptomonnaies, inspirée du projet CryptoAnalyzer original.

## Fonctionnalités
- Sélection de plateforme (CoinGecko, Coinbase, Kraken)
- Récupération des données de marché (prix, historique, etc.)
- Tableaux et graphiques d'analyse
- Dashboard synthétique

## Stack technique
- React
- Material-UI
- Recharts
- Axios
- React Router

## Installation
```bash
npm install
npm start
```

## Structure du projet
```
/src
  /components
    Dashboard.jsx
    ExchangeSelector.jsx
    CryptoTable.jsx
    CryptoChart.jsx
  /services
    coingecko.js
    coinbase.js
    kraken.js
  /pages
    Home.jsx
    Analysis.jsx
  App.jsx
  index.js
```

## Personnalisation
Ajoutez vos propres clés API ou adaptez les services pour d'autres exchanges si besoin.

---
Projet open-source, inspiré de CryptoAnalyzer (Rust). 