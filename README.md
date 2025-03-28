# cwssjs
Implementation of CWSS in JavaScript

## Requirements
### For Usage
Node v. 10

### For Testing
Node v. 16

## Install
```
$ npm i cwssjs
```

## Usage
```
const CWSS = require('cwssjs');

const vectorStr = "(TI:H,0.9/AP:A,1.0/AL:A,1.0/IC:N,1.0/FC:T,1.0/RP:L,0.9/RL:A,1.0/AV:I,1.0/AS:N,1.0/IN:T,0.9/SC:A,1.0/BI:C,1.0/DI:H,1.0/EX:H,1.0/EC:N,1.0/P:NA,1.0)";

const cwss_obj = CWSS.compute_vector(vectorStr);

console.log("Final Score is :" + cwss_obj.final);
```

## Exports

### compute\_vector(vector, options={version: '1.0.1'})

#### Description
Computes a CWSS score based on the provided Vector. 
**Note:** It's important to realize that weights are **NOT** respected
**EXCEPT** when using the Quantified (Q) value.

#### Returns
This function returns a "CWSS Object" as described below on success (and in
some cases on failure, see "Notes"). This function may throw `Error` when
content is not properly formed.

##### CWSS Object
CWSS Object contains several pieces of data for your consumption.

Keys | Description | Notes
-----|-------------|--------------
vector | Well formed CWSS Vector String | Main contain "Error" in the case of an error
vector\_obj | Parsed Vector String Object | See below for format
base\_finding | Base Finding metric score in raw |
attack\_surface | Attack Surface metric score in raw |
environment | Environment metric score in raw |
final | Final Score at single precision (i.e. 20.1) as a string |

##### Vector Object
Vector Object contains the entire breakdown of the CWSS Vector string that was
passed in to `compute\_vector()` and takes the format of:
```javascript
{
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
}
```
Additional contents may be visible in the object. Do not rely on their
existence.

#### Parameters
`vector` is expected to be a String in the format of
`(TI:H,0.9/AP:A,1.0/AL:A,1.0/IC:N,1.0/FC:T,1.0/RP:L,0.9/RL:A,1.0/AV:I,1.0/AS:N,1.0/IN:T,0.9/SC:A,1.0/BI:C,1.0/DI:H,1.0/EX:H,1.0/EC:N,1.0/P:NA,1.0)`
or an Object in the Vector Object format, mentioned above. The vector is
validated against various parts of the specification, and if they are found to
be non-conformant, they will be updated to be correct. If factors are missing
from the vector string, they will be added with a default of Not Applicable
(NA). This is **NOT** behavior that is defined by the standard. The corrected
vector string will be provided in the return CWSS Object.

`options` is an optional argument that may be provided. It supports the
following:

Keys | Permitted Values
-----|-----------------
version | - `1.0.1` : This is the latest version of CWSS at the time of writing

### to\_vector\_str(vector, options={version: '1.0.1'})

#### Description
Produces a vector string formatted as per the standard.

#### Returns
Returns a vector string formated as per the specified version.

#### Parameters
`vector` is a vector object, as defined in `compute\_vector()` above.

`options` is an optional argument that may be provided. It supports the
following:

Keys | Permitted Values
-----|-----------------
version | - `1.0.1` : This is the latest version of CWSS at the time of writing

## References
  1. [Common Weakness Scoring System (CWSS) by The MITRE Corporation](https://cwe.mitre.org/cwss/cwss_v1.0.1.html)
