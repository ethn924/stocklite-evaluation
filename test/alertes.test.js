import { test } from 'node:test';
import assert from 'node:assert/strict';
import { Stock } from '../src/stock.js';

test('un produit sous son seuil déclenche une alerte', () => {
  const s = new Stock();
  s.ajouter('A1', 'Vis', 1, 5);
  s.ajouter('B2', 'Colle', 50, 5);
  assert.deepEqual(s.alertes().map((p) => p.ref), ['A1']);
});

test('un produit à quantité égale au seuil déclenche aussi une alerte', () => {
  const s = new Stock();
  s.ajouter('A1', 'Vis', 5, 5);
  s.ajouter('B2', 'Colle', 50, 5);
  assert.deepEqual(s.alertes().map((p) => p.ref), ['A1']);
});
