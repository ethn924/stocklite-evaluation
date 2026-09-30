import { test } from 'node:test';
import assert from 'node:assert/strict';
import { formaterLigne } from '../src/format.js';

test('formaterLigne', () => {
  assert.equal(formaterLigne({ ref: 'A1', nom: 'Vis', quantite: 3, seuil: 1 }), 'A1 — Vis : 3');
  assert.equal(formaterLigne({ ref: 'A1', nom: 'Vis', quantite: 3, seuil: 3 }), 'A1 — Vis : 3 ⚠');
  assert.equal(formaterLigne({ ref: 'A1', nom: 'Vis', quantite: 3, seuil: 5 }), 'A1 — Vis : 3 ⚠');
});
