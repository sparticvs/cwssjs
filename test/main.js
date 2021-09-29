const CWSS = require('../lib/main.js');
//const assert = require('assert');

const TEST_CASES = [
    // Example from Section 4.1 (fixed, BI had wrong value)
    // Base = 96.0
    // AtkSurface = 0.965
    // Env = 1.0
    // Final = 92.6
    "(TI:H,0.9/AP:A,1.0/AL:A,1.0/IC:N,1.0/FC:T,1.0/RP:L,0.9/RL:A,1.0/AV:I,1.0/AS:N,1.0/IN:T,0.9/SC:A,1.0/BI:C,1.0/DI:H,1.0/EX:H,1.0/EC:N,1.0/P:NA,1.0)", 
    // Minimal Example
    // Expanded Example
    // Complete Example
    // Quantified Example
    // Incorrect Complete // Ironically this is from the document and it's
    // WRONG
    "(TI:H,0.9/AP:A,1.0/AL:A,1.0/IC:N,1.0/FC:T,1.0/RP:L,0.9/RL:A,1.0/AV:I,1.0/AS:N,1.0/IN:T,0.9/SC:A,1.0/BI:C,0.9/DI:H,1.0/EX:H,1.0/EC:N,1.0/P:NA,1.0)", 
];

TEST_CASES.map((vec) => {
    console.log(CWSS.compute_vector(vec));
});
