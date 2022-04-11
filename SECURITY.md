# Vulnerability Disclosure Policy

## Scope
This document outlines vulnerability disclosure policy for Sparticvs's Open
Source projects found at https://github.com/sparticvs.

### Exclusions from Scope
The following testing methods are not authorized:
  - Network-based denial of service (DoS or DDoS) testing against
    infrastructure owned by this account
  - Physical testing, social engineering, or any attacks that are not directly
    attributable to a code weakness (see MITRE's CWE database)
  - Destructive testing

## Reporting Guidelines

Please open issues on the appropriate project's GitHub issue tracker. If you
feel that the issue is particularly sensitive, details should be sent to
sparticvs@popebp.com (GPG Key available from MIT key servers) **and** an issue
opened in the appropriate GitHub issue tracker mentioning such. That issue will
be updated to include the details of the report. Failure to do this may result
in a response delay as GitHub issues are the preferred method.

### Details Required
At a minimum, the following information is needed to understand the potential
security flaw:
  - Affected product(s),
  - Detail of the issue,
  - Observed behavior,
  - Expected behavior, and
  - What is the risk to the consumer?

**DO NOT** send binary files. They will not be reviewed.

## Disclosure Policy & Safe Harbor
This developer hereby agrees to work with you on any reports of potential
security flaws in their design, exploitable or not.

This developer commits to:
  - treat security risks in a manner that is commensurate with the risk they pose;
    - If a consumer finds that this is not acceptable, they may open a bug report to
state their case (or reach out through the same manner for reporting concerns)
and the risk will be re-evaluated with the new data.
  - respond to legitimate vulnerability reoprts in a timely manner;
  - disclosure of the report regardless of the treatment measure; and
  - improve the process to limit the recurrence of future similar issues.

The individual disclosing ("reporter") commits to:
  - adhering to the scope defined above;
  - answering questions from this developer to clarify the concern further;
  - being responsive to further communication; and
  - providing the minimum details.

Assuming the reporter adheres to the commitments outlined above, they are
granted "safe harbor" by this developer. In short, this developer will not seek
action against the reporter.

### Risk Treatment Measures
  - "accept": No fix is created
  - "remove": Removal of the feature that is leading to risk
  - "transfer": Risk is being transfered onto another party, usually the
  consumer of the code. If this is the case, this is to be clearly documented
  - "mitigate": Fix the flaw either completely or to a level that makes the
  risk acceptable

### Exceptions
  - Spamming of flaw reports will not be treated favorably if the reports don't
    meet the reporting criteria or they are not valid/do not take into
    consideration the threat modeling documentation (if published).
