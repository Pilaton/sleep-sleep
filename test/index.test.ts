/* eslint-disable @typescript-eslint/no-floating-promises */
import assert from 'node:assert/strict';
import { test } from 'node:test';
import sleep from '../src/sleep.js';

test('sleep waits for the specified time (1 second)', async () => {
  const start = Date.now();
  await sleep(1000);
  const end = Date.now();
  const difference = end - start;
  assert(
    difference >= 1000 && difference < 1100,
    `Expected delay ~1000ms, but was ${difference}ms`
  );
});

test('sleep handles random delay between min and max', async () => {
  const start = Date.now();
  await sleep(1000, 1500);
  const end = Date.now();
  const difference = end - start;
  assert(
    difference >= 1000 && difference <= 1500,
    `Expected delay between 1000ms and 1500ms, but was ${difference}ms`
  );
});

test('sleep throws an error if minMs is negative', async () => {
  await assert.rejects(async () => {
    await sleep(-1000);
  }, new Error('The minimum milliseconds must not be negative.'));
});

test('sleep throws an error if minMs is greater than maxMs', async () => {
  await assert.rejects(async () => {
    await sleep(2000, 1000);
  }, new Error('The minimum value must be less than the maximum value.'));
});
