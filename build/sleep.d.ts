/**
 * Returns a promise that resolves after a specified number of milliseconds.
 * If maxMs is provided, the delay is a random number of milliseconds between minMs and maxMs.
 *
 * @param {number} minMs - The minimum number of milliseconds to wait.
 * @param {number} [maxMs] - The maximum number of milliseconds to wait (optional).
 * @returns {Promise<void>} A promise that resolves after the delay.
 * @throws Will throw an error if minMs is negative.
 */
export default function sleep(minMs: number, maxMs?: number): Promise<void>;
