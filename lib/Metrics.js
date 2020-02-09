/***
 * Copyright (c) 2020 - Charles `sparticvs` Timko
 ***/

let MetricGroups = [{
    GroupName: "Base Finding",
    Factors: [{
        FactorName: "Technical Impact",
        FactorNameShort: "TI",
        Values: [{
            Name: "Critical",
            Code: "C",
            Weight: 1.0,
            Description: "Complete control over the software being analyzed, to the point where operations cannot take place."
        }, {
            Name: "High",
            Code: "H",
            Weight: 0.9,
            Description: "Significant control over the software being analyzed, or access to critical information can be obtained."
        }, {
            Name: "Medium",
            Code: "M",
            Weight: 0.6,
            Description: "Moderate control over the software being analyzed, or access to moderately important information can be obtained."
        }, {
            Name: "Low",
            Code: "L",
            Weight: 0.3,
            Description: "Minimal control over the software being analyzed, or only access to relatively unimportant information can be obtained."
        }, {
            Name: "None",
            Code: "N",
            Weight: 0.0,
            Description: "There is no technical impact to the software being analyzed at all. In other words, this does not lead to a vulnerability."
        }, {
            Name: "Default",
            Code: "D",
            Weight: 0.6,
            Description: "The Default weight is the median of the weights for Critical, High, Medium, Low, and None."
        }, {
            Name: "Unknown",
            Code: "UK",
            Weight: 0.5,
            Description: "There is not enough information to provide a value for this factor. Further analysis may be necessary. In the future, a different value might be chosen, which could affect the score."
        }, {
            Name: "Not Applicable",
            Code: "NA",
            Weight: 1.0,
            Description: "This factor is being intentionally ignored in the score calculation because it is not relevant to how the scorer prioritizes weaknesses. This factor might not be applicable in an environment with high assurance requirements; the user might want to investigate every weakness finding of interest, regardless of confidence."
        }, {
            Name: "Quantified",
            Code: "Q",
            Weight: null,
            Description: "This factor could be quantified with custom weights."
        }]
    }, {
        FactorName: "Acquired Privilege",
        FactorNameShort: "AP",
        Values: [{
            Name: "Administrator",
            Code: "A",
            Weight: 1.0,
            Description: "The attacker gains access to an entity with administrator, root, SYSTEM, or equivalent privileges that imply full control over the software under analysis; or, the attacker can raise their own (lower) privileges to an administrator."
        }, {
            Name: "Partially-Privileged User",
            Code: "P",
            Weight: 0.9,
            Description: "The attacker gains access to an entity with some special privileges, but not enough privileges that are equivalent to an administrator; or, the attacker can raise their own (lower) privileges to a partially-privileged user. For example, a user might have privileges to make backups, but not to modify the software's configuration or install updates."
        }, {
            Name: "Regular User",
            Code: "RU",
            Weight: 0.7,
            Description: "The attacker gains access to an entity that is a regular user who has no special privileges; or, the attacker can raise their own (lower) privileges to that of a regular user."
        }, {
            Name: "Limited / Guest",
            Code: "L",
            Weight: 0.6,
            Description: "The attacker gains access to an entity with limited or \"guest\" privileges that can significantly restrict allowable activities; or, the attacker can raise their own (lower) privileges to a guest. Note: this value does not refer to the \"guest operating system\" concept in virtualized hosts."
        }, {
            Name: "None",
            Code: "N",
            Weight: 0.1,
            Description: "The attacker cannot gain access to any extra privileges beyond those that are already available to the attacker. (Note that this value can be useful in limited circumstances in which the attacker can escape a sandbox or other restrictive environment but still cannot gain extra privileges, or obtain access as other users.)"
        }, {
            Name: "Default",
            Code: "D",
            Weight: 0.7,
            Description: "Median of the weights for None, Guest, Regular User, Partially-Privileged User, and Administrator."
        }, {
            Name: "Unknown",
            Code: "UK",
            Weight: 0.5,
            Description: "There is not enough information to provide a value for this factor. Further analysis may be necessary. In the future, a different value might be chosen, which could affect the score."
        }, {
            Name: "Not Applicable",
            Code: "NA",
            Weight: 1.0,
            Description: "This factor is being intentionally ignored in the score calculation because it is not relevant to how the scorer prioritizes weaknesses. This factor might not be applicable in an environment with high assurance requirements that wants strict enforcement of privilege separation, even between already-privileged users."
        }, {
            Name: "Quantified",
            Code: "Q",
            Weight: null,
            Description: "This factor could be quantified with custom weights. Note that Quantified values are supported for completeness; however, since privileges and users are discrete entities, there might be limited circumstances in which a quantified model would be useful."
        }]
    }, {
        FactorName: "Acquired Privilege Layer",
        FactorNameShort: "AL",
        Values: [{
            Name: "Application",
            Code: "A",
            Weight: 1.0,
            Description: "The attacker acquires privileges that are supported within the software under analysis itself. (If the software under analysis is an essential part of the underlying system, such as an operating system kernel, then the System value may be more appropriate.)"
        }, {
            Name: "System",
            Code: "S",
            Weight: 0.9,
            Description: "The attacker acquires privileges to the underlying system or physical host that is being used to run the software under analysis."
        }, {
            Name: "Network",
            Code: "N",
            Weight: 0.7,
            Description: "The attacker acquires privileges to access the network."
        }, {
            Name: "Enterprise Infrastructure",
            Code: "E",
            Weight: 1.0,
            Description: "The attacker acquires privileges to a critical piece of enterprise infrastructure, such as a router, switch, DNS, domain controller, firewall, identity server, etc."
        }, {
            Name: "Default",
            Code: "D",
            Weight: 0.9,
            Description: "Median of the weights for Application, System, Network, and Enterprise Infrastructure."
        }, {
            Name: "Unknown",
            Code: "UK",
            Weight: 0.5,
            Description: "There is not enough information to provide a value for this factor. Further analysis may be necessary. In the future, a different value might be chosen, which could affect the score."
        }, { 
            Name: "Not Applicable",
            Code: "NA",
            Weight: 1.0,
            Description: "This factor is being intentionally ignored in the score calculation because it is not relevant to how the scorer prioritizes weaknesses. This factor might not be applicable in an environment with high assurance requirements that wants strict enforcement of privilege separation, even between already-privileged users."
        }, {
            Name: "Quantified",
            Code: "Q",
            Weight: null,
            Description: "This factor could be quantified with custom weights. Note that Quantified values are supported for completeness; however, since privilege layers are discrete entities, there might be limited circumstances in which a quantified model would be useful."
        }]
    }, {
        FactorName: "Internal Control Effectiveness",
        FactorNameShort: "IC",
        Values: [{
            Name: "None",
            Code: "N",
            Weight: 1.0,
            Description: "No controls exist."
        }, {
            Name: "Limited",
            Code: "L",
            Weight: 0.9,
            Description: "There are simplistic methods or accidental restrictions that might prevent a casual attacker from exploiting the issue."
        }, {
            Name: "Moderate",
            Code: "M",
            Weight: 0.7,
            Description: "The protection mechanism is commonly used but has known limitations that might be bypassed with some effort by a knowledgeable attacker. For example, the use of HTML entity encoding to prevent XSS attacks may be bypassed when the output is placed into another context such as a Cascading Style Sheet or HTML tag attribute."
        }, {
            Name: "Indirect (Defense-in-Depth)",
            Code: "I",
            Weight: 0.5,
            Description: "The control does not specifically protect against exploitation of the weakness, but it indirectly reduces the impact when a successful attack is launched, or otherwise makes it more difficult to construct a functional exploit. For example, a validation routine might indirectly limit the size of an input, which might make it difficult for an attacker to construct a payload for an XSS or SQL injection attack."
        }, {
            Name: "Best-Available",
            Code: "B",
            Weight: 0.3,
            Description: "The control follows best current practices, although it may have some limitations that can be overcome by a skilled, determined attacker, possibly requiring the presence of other weaknesses. For example, the double-submit method for CSRF protection is considered one of the strongest available, but it can be defeated in conjunction with behaviors of certain functionality that can read raw HTTP headers."
        }, {
            Name: "Complete",
            Code: "C",
            Weight: 0.0,
            Description: "The control is completely effective against the weakness, i.e., there is no bug or vulnerability, and no adverse consequence of exploiting the issue. For example, a buffer copy operation that ensures that the destination buffer is always larger than the source (plus any indirect expansion of the original source size) will not cause an overflow."
        }, {
            Name: "Default",
            Code: "D",
            Weight: 0.6,
            Description: "Median of the weights for Complete, Best-Available, Indirect, Moderate, Limited, and None."
        }, {
            Name: "Unknown",
            Code: "UK",
            Weight: 0.5,
            Description: "There is not enough information to provide a value for this factor. Further analysis may be necessary. In the future, a different value might be chosen, which could affect the score."
        }, { 
            Name: "Not Applicable",
            Code: "NA",
            Weight: 1.0,
            Description: "This factor is being intentionally ignored in the score calculation because it is not relevant to how the scorer prioritizes weaknesses."
        }, {
            Name: "Quantified",
            Code: "Q",
            Weight: null,
            Description: "This factor could be quantified with custom weights."
        }]
    }, {
        FactorName: "Finding Confidence",
        FactorNameShort: "FC",
        Hint: "Confidence that the issue (a) is a weakness and (b) can be triggered or utilized by an attacker",
        Values: [{
            Name: "Proven True",
            Code: "T",
            Weight: 1.0,
            Description: "The weakness is reachable by the attacker."
        }, {
            Name: "Proven Locally True",
            Code: "LT",
            Weight: 0.8,
            Description: "The weakness occurs within an individual function or component whose design relies on safe invocation of that function, but attacker reachability to that function is unknown or not present. For example, a utility function might construct a database query without encoding its inputs, but if it is only called with constant strings, the finding is locally true."
        }, {
            Name: "Proven False",
            Code: "F",
            Weight: 0.0,
            Description: "The finding is erroneous (i.e. the finding is a false positive and there is no weakness), and/or there is no possible attacker role."
        }, {
            Name: "Default",
            Code: "D",
            Weight: 0.6,
            Description: "Median of the weights for Proven True, Proven Locally True, and Proven False."
        }, {
            Name: "Unknown",
            Code: "UK",
            Weight: 0.5,
            Description: "There is not enough information to provide a value for this factor. Further analysis may be necessary. In the future, a different value might be chosen, which could affect the score."
        }, { 
            Name: "Not Applicable",
            Code: "NA",
            Weight: 1.0,
            Description: "This factor is being intentionally ignored in the score calculation because it is not relevant to how the scorer prioritizes weaknesses. This factor might not be applicable in an environment with high assurance requirements; the user might want to investigate every weakness finding of interest, regardless of confidence."
        }, {
            Name: "Quantified",
            Code: "Q",
            Weight: null,
            Description: "This factor could be quantified with custom weights. Some code analysis tools have precise measurements of the accuracy of specific detection patterns."
        }]
    }],
}, {
    GroupName: "Attack Surface",
    Factors: [{
        FactorName: "Required Privilege",
        FactorNameShort: "RP",
        Values: [{
            Name: "None",
            Code: "N",
            Weight: 1.0,
            Description: "No privileges are required. For example, a web-based search engine may not require any privileges for an entity to enter a search term and view results."
        }, {
            Name: "Limited / Guest",
            Code: "L",
            Weight: 0.9,
            Description: "The entity has limited or \"guest\" privileges that can significantly restrict allowed activities; the entity might be able to register or create a new account without any special requirements or proof of identity. For example, a web blog might allow participants to create a user name and submit a valid email address before entering comments. Note: this value does not refer to the \"guest operating system\" concept in virtualized hosts."
        }, {
            Name: "Regular User",
            Code: "RU",
            Weight: 0.7,
            Description: "The entity is a regular user who has no special privileges."
        }, {
            Name: "Partially-Privileged User",
            Code: "P",
            Weight: 0.6,
            Description: "The entity is a valid user with some special privileges, but not enough privileges that are equivalent to an administrator. For example, a user might have privileges to make backups, but not to modify the software's configuration or install updates."
        }, {
            Name: "Administrator",
            Code: "A",
            Weight: 0.1,
            Description: "The entity has administrator, root, SYSTEM, or equivalent privileges that imply full control over the software or the underlying OS."
        }, {
            Name: "Default",
            Code: "D",
            Weight: 0.7,
            Description: "Median of the weights for None, Limited, Regular User, Partially-Privileged User, and Administrator."
        }, {
            Name: "Unknown",
            Code: "UK",
            Weight: 0.5,
            Description: "There is not enough information to provide a value for this factor. Further analysis may be necessary. In the future, a different value might be chosen, which could affect the score."
        }, { 
            Name: "Not Applicable",
            Code: "NA",
            Weight: 1.0,
            Description: "	This factor is being intentionally ignored in the score calculation because it is not relevant to how the scorer prioritizes weaknesses. This factor might not be applicable in an environment with high assurance requirements that wants strict enforcement of privilege separation, even between already-privileged users."
        }, {
            Name: "Quantified",
            Code: "Q",
            Weight: null,
            Description: "This factor could be quantified with custom weights. Note that Quantified values are supported for completeness; however, since privileges and users are discrete entities, there might be limited circumstances in which a quantified model would be useful."
        }]
    }, {
        FactorName: "Required Privilege Layer",
        FactorNameShort: "RL",
        Values: [{
            Name: "Application",
            Code: "A",
            Weight: 1.0,
            Description: "The attacker must have privileges that are supported within the software under analysis itself. (If the software under analysis is an essential part of the underlying system, such as an operating system kernel, then the System value may be more appropriate.)"
        }, {
            Name: "System",
            Code: "S",
            Weight: 0.9,
            Description: "The attacker must have privileges to the underlying system or physical host that is being used to run the software under analysis."
        }, {
            Name: "Network",
            Code: "N",
            Weight: 0.7,
            Description: "The attacker must have privileges to access the network."
        }, {
            Name: "Enterprise Infrastructure",
            Code: "E",
            Weight: 1.0,
            Description: "The attacker must have privileges on a critical piece of enterprise infrastructure, such as a router, switch, DNS, domain controller, firewall, identity server, etc."
        }, {
            Name: "Default",
            Code: "D",
            Weight: 0.9,
            Description: "Median of the weights for Application, System, Network, and Enterprise Infrastructure."
        }, {
            Name: "Unknown",
            Code: "UK",
            Weight: 0.5,
            Description: "There is not enough information to provide a value for this factor. Further analysis may be necessary. In the future, a different value might be chosen, which could affect the score."
        }, { 
            Name: "Not Applicable",
            Code: "NA",
            Weight: 1.0,
            Description: "This factor is being intentionally ignored in the score calculation because it is not relevant to how the scorer prioritizes weaknesses. This factor might not be applicable in an environment with high assurance requirements that wants strict enforcement of privilege separation, even between already-privileged users."
        }, {
            Name: "Quantified",
            Code: "Q",
            Weight: null,
            Description: "This factor could be quantified with custom weights. Note that Quantified values are supported for completeness; however, since privilege layers are discrete entities, there might be limited circumstances in which a quantified model would be useful."
        }]
    }, {
        FactorName: "Access Vector",
        FactorNameShort: "AV",
        Values: [{
            Name: "Internet",
            Code: "I",
            Weight: 1.0,
            Description: "An attacker must have access to the Internet to reach the weakness."
        }, {
            Name: "Intranet",
            Code: "R",
            Weight: 0.8,
            Description: "An attacker must have access to an enterprise intranet that is shielded from direct access from the Internet, e.g. by using a firewall, but otherwise the intranet is accessible to most members of the enterprise."
        }, {
            Name: "Private Network",
            Code: "V",
            Weight: 0.8,
            Description: "An attacker must have access to a private network that is only accessible to a narrowly-defined set of trusted parties."
        }, {
            Name: "Adjacent Network",
            Code: "A",
            Weight: 0.7,
            Description: "An attacker must have access to a physical interface to the network, such as the broadcast or collision domain of the vulnerable software. Examples of local networks include local IP subnet, Bluetooth, IEEE 802.11, and local Ethernet segment."
        }, {
            Name: "Local",
            Code: "L",
            Weight: 0.5,
            Description: "The attacker must have an interactive, local (shell) account that interfaces directly with the underlying operating system."
        }, {
            Name: "Physical",
            Code: "P",
            Weight: 0.2,
            Description: "The attacker must have physical access to the system that the software runs on, or otherwise able to interact with the system via interfaces such as USB, CD, keyboard, mouse, etc.",
        }, {           
            Name: "Default",
            Code: "D",
            Weight: 0.75,
            Description: "Median of weights for relevant values."
        }, {
            Name: "Unknown",
            Code: "UK",
            Weight: 0.5,
            Description: "There is not enough information to provide a value for this factor. Further analysis may be necessary. In the future, a different value might be chosen, which could affect the score."
        }, { 
            Name: "Not Applicable",
            Code: "NA",
            Weight: 1.0,
            Description: "This factor is being intentionally ignored in the score calculation because it is not relevant to how the scorer prioritizes weaknesses."
        }, {
            Name: "Quantified",
            Code: "Q",
            Weight: null,
            Description: "This factor could be quantified with custom weights. Note that Quantified values are supported for completeness; however, since access vectors are discrete entities, there might be limited circumstances in which a quantified model would be useful."
        }]
    }, {
        FactorName: "Authentication Strength",
        FactorNameShort: "AS",
        Values: [{
            Name: "Strong",
            Code: "S",
            Weight: 0.7,
            Description: "The weakness requires strongest-available methods to tie the entity to a real-world identity, such as hardware-based tokens, and/or multi-factor authentication."
        }, {
            Name: "Moderate",
            Code: "M",
            Weight: 0.8,
            Description: "The weakness requires authentication using moderately strong methods, such as the use of certificates from untrusted authorities, knowledge-based authentication, or one-time passwords."
        }, {
            Name: "Weak",
            Code: "W",
            Weight: 0.9,
            Description: "The weakness requires a simple, weak authentication method that is easily compromised using spoofing, dictionary, or replay attacks, such as a static password."
        }, {
            Name: "None",
            Code: "N",
            Weight: 1.0,
            Description: "The weakness does not require any authentication at all."
        }, {
            Name: "Default",
            Code: "D",
            Weight: 0.85,
            Description: "Median of values for Strong, Moderate, Weak, and None."
        }, {
            Name: "Unknown",
            Code: "UK",
            Weight: 0.5,
            Description: "There is not enough information to provide a value for this factor. Further analysis may be necessary. In the future, a different value might be chosen, which could affect the score."
        }, { 
            Name: "Not Applicable",
            Code: "NA",
            Weight: 1.0,
            Description: "This factor is being intentionally ignored in the score calculation because it is not relevant to how the scorer prioritizes weaknesses. This might not be applicable in an environment with high assurance requirements that seek to eliminate all weaknesses."
        }, {
            Name: "Quantified",
            Code: "Q",
            Weight: null,
            Description: "This factor could be quantified with custom weights."
        }]
    }, {
        FactorName: "Level of Interaction",
        FactorNameShort: "IN",
        Values: [{
            Name: "Automated",
            Code: "A",
            Weight: 1.0,
            Description: "No human interaction is required."
        }, {
            Name: "Typical/Limited",
            Code: "T",
            Weight: 0.9,
            Description: "The attacker must convince the user to perform an action that is common or regarded as \"normal\" within typical product operation. For example, clicking on a link in a web page, or previewing the body of an email, is common behavior."
        }, {
            Name: "Moderate",
            Code: "M",
            Weight: 0.8,
            Description: "The attacker must convince the user to perform an action that might appear suspicious to a cautious, knowledgeable user. For example: the user has to accept a warning that suggests the attacker's payload might contain dangerous content."
        }, {
            Name: "Opportunistic",
            Code: "O",
            Weight: 0.3,
            Description: "The attacker cannot directly control or influence the victim, and can only passively capitalize on mistakes or actions of others."
        }, {
            Name: "High",
            Code: "H",
            Weight: 0.1,
            Description: "A large amount of social engineering is required, possibly including ignorance or negligence on the part of the victim."
        }, {
            Name: "No Interaction",
            Code: "NI",
            Weight: 0.0,
            Description: "There is no interaction possible, not even opportunistically; this typically would render the weakness as a "bug" instead of leading to a vulnerability. Since CWSS is for security, the weight is 0."
        }, {
            Name: "Default",
            Code: "D",
            Weight: 0.55,
            Description: "Median of values for Automated, Limited, Moderate, Opportunistic, High, and No interaction."
        }, {
            Name: "Unknown",
            Code: "UK",
            Weight: 0.5,
            Description: "There is not enough information to provide a value for this factor. Further analysis may be necessary. In the future, a different value might be chosen, which could affect the score."
        }, { 
            Name: "Not Applicable",
            Code: "NA",
            Weight: 1.0,
            Description: "This factor is being intentionally ignored in the score calculation because it is not relevant to how the scorer prioritizes weaknesses. This might not be applicable in an environment with high assurance requirements, or an environment that has high concerns about insider attacks between people with an established trust relationship."
        }, {
            Name: "Quantified",
            Code: "Q",
            Weight: null,
            Description: "This factor could be quantified with custom weights."
        }]
    }, {
        FactorName: "Deployment Scope",
        FactorNameShort: "SC",
        Values: [{
            Name: "All",
            Code: "A",
            Weight: 1.0,
            Description: "Present in all platforms or configurations"
        }, {
            Name: "Moderate",
            Code: "M",
            Weight: 0.9,
            Description: "Present in common platforms or configurations"
        }, {
            Name: "Rare",
            Code: "R",
            Weight: 0.5,
            Description: "Only present in rare platforms or configurations"
        }, {
            Name: "Potentially Reachable",
            Code: "P",
            Weight: 0.1,
            Description: "Potentially reachable, but all code paths are currently safe, and/or the weakness is in dead code"
        }, {
            Name: "Default",
            Code: "D",
            Weight: 0.7,
            Description: "The median of weights for RAMP values"
        }, {
            Name: "Unknown",
            Code: "UK",
            Weight: 0.5,
            Description: "There is not enough information to provide a value for this factor. Further analysis may be necessary. In the future, a different value might be chosen, which could affect the score."
        }, { 
            Name: "Not Applicable",
            Code: "NA",
            Weight: 1.0,
            Description: "This factor is being intentionally ignored in the score calculation because it is not relevant to how the scorer prioritizes weaknesses."
        }, {
            Name: "Quantified",
            Code: "Q",
            Weight: null,
            Description: "This factor could be quantified with custom weights. The user may know what percentage of shipped (or supported) software contains this bug."
        }]
    }],
}, {
    GroupName: "Environmental",
    Factors: [{
        FactorName: "Business Impact",
        FactorNameShort: "BI",
        Values: [{
            Name: "Critical",
            Code: "C",
            Weight: 1.0,
            Description: "The business/mission could fail."
        }, {
            Name: "High",
            Code: "H",
            Weight: 0.9,
            Description: "The operations of the business/mission would be significantly affected."
        }, {
            Name: "Medium",
            Code: "M",
            Weight: 0.6,
            Description: "The business/mission would be affected, but without extensive damage to regular operations."
        }, {
            Name: "Low",
            Code: "L",
            Weight: 0.3,
            Description: "Minimal impact on the business/mission."
        }, {
            Name: "None",
            Code: "N",
            Weight: 0.0,
            Description: "No impact."
        }, {
            Name: "Default",
            Code: "D",
            Weight: 0.6,
            Description: "The median of weights for Critical, High, Medium, Low, and None."
        }, {
            Name: "Unknown",
            Code: "UK",
            Weight: 0.5,
            Description: "There is not enough information to provide a value for this factor. Further analysis may be necessary. In the future, a different value might be chosen, which could affect the score."
        }, { 
            Name: "Not Applicable",
            Code: "NA",
            Weight: 1.0,
            Description: "This factor is being intentionally ignored in the score calculation because it is not relevant to how the scorer prioritizes weaknesses. This factor might not be applicable in contexts in which the business impact is irrelevant, or if the impact is being assessed and considered in analytical processes that are outside of the CWSS score itself."
        }, {
            Name: "Quantified",
            Code: "Q",
            Weight: null,
            Description: "This factor could be quantified with custom weights. Some organizations might have specific measurements for the business value of the asset, for example, which could be integrated into this measurement."
        }]
    }, {
        FactorName: "Likelihood of Discovery",
        FactorNameShort: "DI",
        Values: [{
            Name: "High",
            Code: "H",
            Weight: 1.0,
            Description: "It is very likely that an attacker can discover the weakness quickly and with little effort using simple techniques, without access to source code or other artifacts that simplify weakness detection."
        }, {
            Name: "Medium",
            Code: "M",
            Weight: 0.6,
            Description: "An attacker might be able to discover the weakness, but would require certain skills to do so, possibly requiring source code access or reverse engineering knowledge. It may require some time investment to find the issue."
        }, {
            Name: "Low",
            Code: "L",
            Weight: 0.2,
            Description: "An attacker is unlikely to discover the weakness without highly specialized skills, access to source code (or its equivalent), and a large time investment."
        }, {
            Name: "Default",
            Code: "D",
            Weight: 0.6,
            Description: "The median of the High, Medium, and Low values."
        }, {
            Name: "Unknown",
            Code: "UK",
            Weight: 0.5,
            Description: "There is not enough information to provide a value for this factor. Further analysis may be necessary. In the future, a different value might be chosen, which could affect the score."
        }, { 
            Name: "Not Applicable",
            Code: "NA",
            Weight: 1.0,
            Description: "This factor is being intentionally ignored in the score calculation because it is not relevant to how the scorer prioritizes weaknesses. This might not be applicable when the scorer assumes that all weaknesses will be discovered by an attacker."
        }, {
            Name: "Quantified",
            Code: "Q",
            Weight: null,
            Description: "This factor could be quantified with custom weights."
        }]
    }, {
        FactorName: "Likelihood of Exploit",
        FactorNameShort: "EX",
        Values: [{
            Name: "High",
            Code: "H",
            Weight: 1.0,
            Description: "It is highly likely that an attacker would target this weakness successfully, with a reliable exploit that is easy to develop."
        }, {
            Name: "Medium",
            Code: "M",
            Weight: 0.6,
            Description: "An attacker would probably target this weakness successfully, but the chances of success might vary, or require multiple attempts to succeed."
        }, {
            Name: "Low",
            Code: "L",
            Weight: 0.2,
            Description: "An attacker probably would not target this weakness, or could have very limited chances of success."
        }, {
            Name: "None",
            Code: "N",
            Weight: 0.0,
            Description: "An attacker has no chance of success; i.e., the issue is a \"bug\" because there is no attacker role, and no benefit to the attacker."
        }, {
            Name: "Default",
            Code: "D",
            Weight: 0.6,
            Description: "Median of the High, Medium, and Low values. The \"None\" value is ignored with the expectation that few weakness findings would be scored using the value, and including it in the median calculation would reduce the weight to a non-intuitive level."
        }, {
            Name: "Unknown",
            Code: "UK",
            Weight: 0.5,
            Description: "There is not enough information to provide a value for this factor. Further analysis may be necessary. In the future, a different value might be chosen, which could affect the score."
        }, { 
            Name: "Not Applicable",
            Code: "NA",
            Weight: 1.0,
            Description: "This factor is being intentionally ignored in the score calculation because it is not relevant to how the scorer prioritizes weaknesses. For example, the scorer might want to assume that attackers could exploit any weakness they can find, or be willing to invest significant resources to work around any possible barriers to exploit success."
        }, {
            Name: "Quantified",
            Code: "Q",
            Weight: null,
            Description: "This factor could be quantified with custom weights."
        }]
    }, {
        FactorName: "External Control Effectiveness",
        FactorNameShort: "EC",
        Values: [{
            Name: "None",
            Code: "N",
            Weight: 1.0,
            Description: "No controls exist."
        }, {
            Name: "Limited",
            Code: "L",
            Weight: 0.9,
            Description: "There are simplistic methods or accidental restrictions that might prevent a casual attacker from exploiting the issue."
        }, {
            Name: "Moderate",
            Code: "M",
            Weight: 0.7,
            Description: "The protection mechanism is commonly used but has known limitations that might be bypassed with some effort by a knowledgeable attacker."
        }, {
            Name: "Indirect (Defense-in-Depth)",
            Code: "I",
            Weight: 0.5,
            Description: "The control does not specifically protect against exploitation of the weakness, but it indirectly reduces the impact when a successful attack is launched, or otherwise makes it more difficult to construct a functional exploit. For example, Address Space Layout Randomization (ASLR) and similar technologies reduce, but do not eliminate, the chances of success in a buffer overflow attack. Since the response is typically to exit the process, the result is still a denial of service."
        }, {
            Name: "Best-Available",
            Code: "B",
            Weight: 0.3,
            Description: "The control follows best current practices, although it may have some limitations that can be overcome by a skilled, determined attacker, possibly requiring the presence of other weaknesses. For example, Transport Layer Security (TLS) / SSL 3 are in operation throughout much of the Web, and stronger methods generally are not available due to compatibility issues."
        }, {
            Name: "Complete",
            Code: "C",
            Weight: 0.1,
            Description: "The control is completely effective against the weakness, i.e., there is no bug or vulnerability, and no adverse consequence of exploiting the issue. For example, a sandbox environment might restrict file access operations to a single working directory, which would protect against exploitation of path traversal. A non-zero weight is used to reflect the possibility that the external control could be accidentally removed in the future, e.g. if the software's environment changes."
        }, {
            Name: "Default",
            Code: "D",
            Weight: 0.6,
            Description: "The median of Complete, Best-Available, Indirect, Moderate, Limited, and None."
        }, {
            Name: "Unknown",
            Code: "UK",
            Weight: 0.5,
            Description: "There is not enough information to provide a value for this factor. Further analysis may be necessary. In the future, a different value might be chosen, which could affect the score."
        }, { 
            Name: "Not Applicable",
            Code: "NA",
            Weight: 1.0,
            Description: "This factor is being intentionally ignored in the score calculation because it is not relevant to how the scorer prioritizes weaknesses."
        }, {
            Name: "Quantified",
            Code: "Q",
            Weight: null,
            Description: "This factor could be quantified with custom weights."
        }]
    }, {
        FactorName: "Prevalence",
        FactorNameShort: "P",
        Values: [{
            Name: "Widespread",
            Code: "W",
            Weight: 1.0,
            Description: "The weakness is found in most or all software in the associated environment, and may occur multiple times within the same software package."
        }, {
            Name: "High",
            Code: "H",
            Weight: 0.9,
            Description: "The weakness is encountered very often, but it is not widespread."
        }, {
            Name: "Common",
            Code: "C",
            Weight: 0.8,
            Description: "The weakness is encountered periodically."
        }, {
            Name: "Limited",
            Code: "L",
            Weight: 0.7,
            Description: "The weakness is encountered rarely, or never."
        }, {
            Name: "Default",
            Code: "D",
            Weight: 0.85,
            Description: "The median of Limited, Common, High, and Widespread."
        }, {
            Name: "Unknown",
            Code: "UK",
            Weight: 0.5,
            Description: "There is not enough information to provide a value for this factor. Further analysis may be necessary. In the future, a different value might be chosen, which could affect the score."
        }, { 
            Name: "Not Applicable",
            Code: "NA",
            Weight: 1.0,
            Description: "This factor is being intentionally ignored in the score calculation because it is not relevant to how the scorer prioritizes weaknesses. When performing targeted scoring against specific weakness findings in an application, Prevalence is normally expected to be irrelevant, since the individual application and the analytical techniques determine how frequently the weakness occurs, and many aggregated scoring methods will generate larger scores if there are more weaknesses."
        }, {
            Name: "Quantified",
            Code: "Q",
            Weight: null,
            Description: "This factor could be quantified with custom weights. Precise prevalence data may be available within limited use cases, provided the user is tracking weakness data at a low level of granularity. For example, a developer may be tracking weaknesses across a suite of products, or a code-auditing vendor could measure prevalence from the software analyzed across the entire customer base. In a previous version of CWSS, prevalence was calculated based on from raw voting data that was collected for the 2010 Top 25, which used discrete values (range 1 to 4) which were then adjusted to a 1-to-10 range."
        }]
    }],
}];

export default MetricGroups;
