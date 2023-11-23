"use strict";module.exports=function(e,t){if(e<0)throw new Error("The minimum milliseconds must not be negative.");const r=t?((e,t)=>{if(e>=t)throw new Error("The minimum value must be less than the maximum value.");return Math.floor(Math.random()*(t-e+1))+e})(e,t):e;return new Promise((e=>setTimeout(e,r)))};
//# sourceMappingURL=sleep.cjs.js.map
