async function e(e,t){if(e<0)throw new Error("The minimum milliseconds must not be negative.");const m=t?((e,t)=>{if(e>=t)throw new Error("The minimum value must be less than the maximum value.");return Math.floor(Math.random()*(t-e+1))+e})(e,t):e;await new Promise((e=>setTimeout(e,m)))}export{e as default};
//# sourceMappingURL=sleep.esm.mjs.map
