/**
 * Generates a random number within the specified range.
 *
 * @param {number} min - The minimum number in the range.
 * @param {number} max - The maximum number in the range.
 * @returns {number} A random number between min (inclusive) and max (inclusive).
 * @throws Will throw an error if min is greater than or equal to max.
 */
const getRandomNumberInRange = (min: number, max: number): number => {
  if (min >= max) {
    throw new Error('The minimum value must be less than the maximum value.');
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * Returns a promise that resolves after a specified number of milliseconds.
 * If maxMs is provided, the delay is a random number of milliseconds between minMs and maxMs.
 *
 * @param {number} minMs - The minimum number of milliseconds to wait.
 * @param {number} [maxMs] - The maximum number of milliseconds to wait (optional).
 * @returns {Promise<void>} A promise that resolves after the delay.
 * @throws Will throw an error if minMs is negative.
 */
export default function sleep(minMs: number, maxMs?: number): Promise<void> {
  if (minMs < 0) {
    throw new Error('The minimum milliseconds must not be negative.');
  }

  const delay = maxMs ? getRandomNumberInRange(minMs, maxMs) : minMs;

  return new Promise((resolve) => setTimeout(resolve, delay));
}
