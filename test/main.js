const CWSS = require('../lib/main.js');
const assert = require('assert').strict;

const TEST_CASES = [
    // Example from Section 4.1 (fixed, BI had wrong value)
    // Base = 96.0
    // AtkSurface = 0.965
    // Env = 1.0
    // Final = 92.6
    "(TI:H,0.9/AP:A,1.0/AL:A,1.0/IC:N,1.0/FC:T,1.0/RP:L,0.9/RL:A,1.0/AV:I,1.0/AS:N,1.0/IN:T,0.9/SC:A,1.0/BI:C,1.0/DI:H,1.0/EX:H,1.0/EC:N,1.0/P:NA,1.0)", 
    // Complete Example
    // Quantified Example
    // Incorrect Complete // Ironically this is from the document and it's
    // WRONG
];

// Add Test Cases Here with Expectations
const TEST_CASES_COMPUTE = [
    {
        comment: "The corrected example from Section 4.1",
        args: {
            vector: "(TI:H,0.9/AP:A,1.0/AL:A,1.0/IC:N,1.0/FC:T,1.0/RP:L,0.9/RL:A,1.0/AV:I,1.0/AS:N,1.0/IN:T,0.9/SC:A,1.0/BI:C,1.0/DI:H,1.0/EX:H,1.0/EC:N,1.0/P:NA,1.0)", 
            options: {
                version: "1.0.1"
            }
        },
        expected_ret: {
            vector: "(TI:H,0.9/AP:A,1.0/AL:A,1.0/IC:N,1.0/FC:T,1.0/RP:L,0.9/RL:A,1.0/AV:I,1.0/AS:N,1.0/IN:T,0.9/SC:A,1.0/BI:C,1.0/DI:H,1.0/EX:H,1.0/EC:N,1.0/P:NA,1.0)", 
            vector_obj: {
                TI: { code: 'H', weight: 0.9 },
                AP: { code: 'A', weight: 1 },
                AL: { code: 'A', weight: 1 },
                IC: { code: 'N', weight: 1 },
                FC: { code: 'T', weight: 1 },
                RP: { code: 'L', weight: 0.9 },
                RL: { code: 'A', weight: 1 },
                AV: { code: 'I', weight: 1 },
                AS: { code: 'N', weight: 1 },
                IN: { code: 'T', weight: 0.9 },
                SC: { code: 'A', weight: 1 },
                BI: { code: 'C', weight: 1 },
                DI: { code: 'H', weight: 1 },
                EX: { code: 'H', weight: 1 },
                EC: { code: 'N', weight: 1 },
                P: { code: 'NA', weight: 1 }
            },
            base_finding: 96.0,
            attack_surface: 0.965,
            environment: 1.0,
            final: '92.6'
        },
        throws: false
    },
    {
        comment: "The corrected example from Section 4.1, as object",
        args: {
            vector: {
                TI: { code: 'H', weight: 0.9 },
                AP: { code: 'A', weight: 1 },
                AL: { code: 'A', weight: 1 },
                IC: { code: 'N', weight: 1 },
                FC: { code: 'T', weight: 1 },
                RP: { code: 'L', weight: 0.9 },
                RL: { code: 'A', weight: 1 },
                AV: { code: 'I', weight: 1 },
                AS: { code: 'N', weight: 1 },
                IN: { code: 'T', weight: 0.9 },
                SC: { code: 'A', weight: 1 },
                BI: { code: 'C', weight: 1 },
                DI: { code: 'H', weight: 1 },
                EX: { code: 'H', weight: 1 },
                EC: { code: 'N', weight: 1 },
                P: { code: 'NA', weight: 1 }
            },
            options: {
                version: "1.0.1"
            }
        },
        expected_ret: {
            vector: "(TI:H,0.9/AP:A,1.0/AL:A,1.0/IC:N,1.0/FC:T,1.0/RP:L,0.9/RL:A,1.0/AV:I,1.0/AS:N,1.0/IN:T,0.9/SC:A,1.0/BI:C,1.0/DI:H,1.0/EX:H,1.0/EC:N,1.0/P:NA,1.0)", 
            vector_obj: {
                TI: { code: 'H', weight: 0.9 },
                AP: { code: 'A', weight: 1 },
                AL: { code: 'A', weight: 1 },
                IC: { code: 'N', weight: 1 },
                FC: { code: 'T', weight: 1 },
                RP: { code: 'L', weight: 0.9 },
                RL: { code: 'A', weight: 1 },
                AV: { code: 'I', weight: 1 },
                AS: { code: 'N', weight: 1 },
                IN: { code: 'T', weight: 0.9 },
                SC: { code: 'A', weight: 1 },
                BI: { code: 'C', weight: 1 },
                DI: { code: 'H', weight: 1 },
                EX: { code: 'H', weight: 1 },
                EC: { code: 'N', weight: 1 },
                P: { code: 'NA', weight: 1 }
            },
            base_finding: 96.0,
            attack_surface: 0.965,
            environment: 1.0,
            final: '92.6'
        },
        throws: false
    },
    {
        comment: "The example from Section 4.1 with an incorrect weight",
        args: {
            vector: "(TI:H,0.9/AP:A,1.0/AL:A,1.0/IC:N,1.0/FC:T,1.0/RP:L,0.9/RL:A,1.0/AV:I,1.0/AS:N,1.0/IN:T,0.9/SC:A,1.0/BI:C,0.9/DI:H,1.0/EX:H,1.0/EC:N,1.0/P:NA,1.0)", 
            options: {
                version: "1.0.1"
            }
        },
        expected_ret: {
            vector: "(TI:H,0.9/AP:A,1.0/AL:A,1.0/IC:N,1.0/FC:T,1.0/RP:L,0.9/RL:A,1.0/AV:I,1.0/AS:N,1.0/IN:T,0.9/SC:A,1.0/BI:C,1.0/DI:H,1.0/EX:H,1.0/EC:N,1.0/P:NA,1.0)", 
            vector_obj: {
                TI: { code: 'H', weight: 0.9 },
                AP: { code: 'A', weight: 1 },
                AL: { code: 'A', weight: 1 },
                IC: { code: 'N', weight: 1 },
                FC: { code: 'T', weight: 1 },
                RP: { code: 'L', weight: 0.9 },
                RL: { code: 'A', weight: 1 },
                AV: { code: 'I', weight: 1 },
                AS: { code: 'N', weight: 1 },
                IN: { code: 'T', weight: 0.9 },
                SC: { code: 'A', weight: 1 },
                BI: { code: 'C', weight: 1 },
                DI: { code: 'H', weight: 1 },
                EX: { code: 'H', weight: 1 },
                EC: { code: 'N', weight: 1 },
                P: { code: 'NA', weight: 1 }
            },
            base_finding: 96.0,
            attack_surface: 0.965,
            environment: 1.0,
            final: '92.6'
        },
        throws: false
    },
    {
        comment: "The example from Section 4.1, but missing a group",
        args: {
            vector: "(TI:H,0.9/AP:A,1.0/AL:A,1.0/IC:N,1.0/RP:L,0.9/RL:A,1.0/AV:I,1.0/AS:N,1.0/IN:T,0.9/SC:A,1.0/BI:C,0.9/DI:H,1.0/EX:H,1.0/EC:N,1.0/P:NA,1.0)", 
            options: {
                version: "1.0.1"
            }
        },
        expected_ret: null,
        throws: true
    },
    {
        comment: "An example with quantified code usage",
        args: {
            vector: "(TI:H,0.9/AP:Q,1.0/AL:A,1.0/IC:N,1.0/FC:T,1.0/RP:L,0.9/RL:A,1.0/AV:I,1.0/AS:N,1.0/IN:T,0.9/SC:A,1.0/BI:C,0.9/DI:H,1.0/EX:H,1.0/EC:N,1.0/P:NA,1.0)", 
            options: {
                version: "1.0.1"
            }
        },
        expected_ret: {
            vector: "(TI:H,0.9/AP:Q,1.0/AL:A,1.0/IC:N,1.0/FC:T,1.0/RP:L,0.9/RL:A,1.0/AV:I,1.0/AS:N,1.0/IN:T,0.9/SC:A,1.0/BI:C,1.0/DI:H,1.0/EX:H,1.0/EC:N,1.0/P:NA,1.0)", 
            vector_obj: {
                TI: { code: 'H', weight: 0.9 },
                AP: { code: 'Q', weight: 1 },
                AL: { code: 'A', weight: 1 },
                IC: { code: 'N', weight: 1 },
                FC: { code: 'T', weight: 1 },
                RP: { code: 'L', weight: 0.9 },
                RL: { code: 'A', weight: 1 },
                AV: { code: 'I', weight: 1 },
                AS: { code: 'N', weight: 1 },
                IN: { code: 'T', weight: 0.9 },
                SC: { code: 'A', weight: 1 },
                BI: { code: 'C', weight: 1 },
                DI: { code: 'H', weight: 1 },
                EX: { code: 'H', weight: 1 },
                EC: { code: 'N', weight: 1 },
                P: { code: 'NA', weight: 1 }
            },
            base_finding: 96.0,
            attack_surface: 0.965,
            environment: 1.0,
            final: '92.6'
        },
        throws: false
    },
    {
        comment: "Malformed Vector String",
        args: {
            vector: "(TI:ZZ,0.9/AP:A,1.0/AB:A,1.0/IC:N,1.0/FC:T,1.0/RP:L,0.9/RL:A,1.0/AV:I,1.0/AS:N,1.0/IN:T,0.9/SC:A,1.0/BI:C,0.9/DI:H,1.0/EX:H,1.0/EC:N,1.0/P:NA,1.0)", 
            options: {
                version: "1.0.1"
            }
        },
        expected_ret: null,
        throws: true
    },
    {
        comment: "Bad parameters",
        args: {
            vector: 1,
            options: 2
        },
        expected_ret: null,
        throws: true
    },
    {
        comment: "Bad options",
        args: {
            vector: "(TI:H,0.9/AP:A,1.0/AL:A,1.0/IC:N,1.0/FC:T,1.0/RP:L,0.9/RL:A,1.0/AV:I,1.0/AS:N,1.0/IN:T,0.9/SC:A,1.0/BI:C,1.0/DI:H,1.0/EX:H,1.0/EC:N,1.0/P:NA,1.0)", 
            options: {
                version: 1
            }
        },
        expected_ret: null,
        throws: true
    }
];

const TEST_CASES_TO_STR = [
];

/**
 * The actualy output can have extra contents
 *
 * Test Case MUST be first
 */
function cwss_obj_equal(dies, das) {
    Object.keys(dies).map((key) => {
        if(typeof(dies[key]) === "object") {
            cwss_obj_equal(dies[key], das[key]);
        } else {
            assert.strictEqual(dies[key], das[key]);
        }
    });
}

describe('CWSS', function() {
    describe('#compute_vector()', function() {
        TEST_CASES_COMPUTE.map((test_case) => {
            if(test_case.throws) {
                it(test_case.comment, function() {
                    assert.throws(() => { CWSS.compute_vector(test_case.args.vector, test_case.args.options) }, Error);
                });
            } else if (test_case.expected_ret === null) {
                // Expect failure
            } else {
                it(test_case.comment, function() {
                    cwss_obj = CWSS.compute_vector(test_case.args.vector, test_case.args.options);
                    cwss_obj_equal(test_case.expected_ret, cwss_obj);
                });
            }
        });
    });
});
