# sleep-sleep ⏱️

A tiny and simple JavaScript code execution delay library.  
**0.35 kB!** 🚀 and **No dependencies** 🎉

- [sleep-sleep ⏱️](#sleep-sleep-️)
  - [Install](#install)
  - [Usage](#usage)
    - [API](#api)
      - [minMs](#minms)
      - [maxMs](#maxms)

## Install

Step 1:

```bash
npm install sleep
```

Step 2:

```js
import sleep from 'sleep-sleep';
```

Or if you want to use CommonJS:

```js
const sleep = require('sleep-sleep');
```

## Usage

An example of using the sleep function:

```js
import sleep from 'sleep-sleep';

async function demoFunction() {
  console.log('3-second delay...');
  await sleep(3000); // 3000 ms delay (3 seconds)
  console.log('Delay completed.');
}

demoFunction();
```

You can also use a random delay between the minimum and maximum time value:

```js
import sleep from 'sleep-sleep';

async function randomDelayFunction() {
  console.log('Random delay...');
  await sleep(1000, 5000); // Random delay between 1 and 5 seconds
  console.log('Delay completed after e.g. 3.47 seconds.');
}

randomDelayFunction();
```

Random delay is very useful for example in [Puppeteer](https://pptr.dev/) and [Playwright](https://playwright.dev/) related projects, where a random pause between actions gives your automation a more human-like 👨‍🌾 appearance.

### API

```js
sleep(minMs: number, maxMs?: number): Promise<void>
```

#### minMs

Minimum number of milliseconds for delay.

#### maxMs

(optional)  
The maximum number of milliseconds for the delay. If not specified, the delay will be fixed and equal to `minMs`
