/***
 * Copyright (c) 2021 - Charles `sparticvs` Timko
 ***/
const CWSS = {
    "1.0.1": {
        "TI": {
            "value": "Technical Impact",
            "C": {"value": "Critical", "weight": 1.0},
            "H": {"value": "High", "weight": 0.9},
            "M": {"value": "Medium", "weight": 0.6},
            "L": {"value": "Low", "weight": 0.3 },
            "N": {"value": "None", "weight": 0.0},
            "D": {"value": "Default", "weight": 0.6},
            "UK": {"value": "Unknown", "weight": 0.5},
            "NA": {"value": "Not Applicable", "weight": 1.0},
            "Q": {"value": "Quantified", "weight": null}
        },
        "AP": {
            "value": "Acquired Privilege",
            "A": {"value": "Administrator", "weight": 1.0},
            "P": {"value": "Partially-Privileged User", "weight": 0.9},
            "RU": {"value": "Regular User", "weight": 0.7},
            "L": {"value": "Limited / Guest", "weight": 0.6},
            "N": {"value": "None", "weight": 0.1},
            "D": {"value": "Default", "weight": 0.7},
            "UK": {"value": "Unknown", "weight": 0.5},
            "NA": {"value": "Not Applicable", "weight": 1.0},
            "Q": {"value": "Quantified", "weight": null}
        },
        "AL": {
            "value": "Acquired Privilege Layer",
            "A": {"value": "Application", "weight": 1.0},
            "S": {"value": "System", "weight": 0.9},
            "N": {"value": "Network", "weight": 0.7},
            "E": {"value": "Enterprise Infrastructure", "weight": 1.0},
            "D": {"value": "Default", "weight": 0.9},
            "UK": {"value": "Unknown", "weight": 0.5},
            "NA": {"value": "Not Applicable", "weight": 1.0},
            "Q": {"value": "Quantified", "weight": null}
        },
        "IC": {
            "value": "Internal Control Effectiveness",
            "N": {"value": "None", "weight": 1.0},
            "L": {"value": "Limited", "weight": 0.9},
            "M": {"value": "Moderate", "weight": 0.7},
            "I": {"value": "Indirect (Defense-in-Depth)", "weight": 0.5},
            "B": {"value": "Best-Available", "weight": 0.3},
            "C": {"value": "Complete", "weight": 0.0},
            "D": {"value": "Default", "weight": 0.6},
            "UK": {"value": "Unknown", "weight": 0.5},
            "NA": {"value": "Not Applicable", "weight": 1.0},
            "Q": {"value": "Quantified", "weight": null}
        },
        "FC": {
            "value": "Finding Confidence",
            "T": {"value": "Proven True", "weight": 1.0},
            "LT": {"value": "Proven Locally True", "weight": 0.8},
            "F": {"value": "Proven False", "weight": 0.0},
            "D": {"value": "Default", "weight": 0.8},
            "UK": {"value": "Unknown", "weight": 0.5},
            "NA": {"value": "Not Applicable", "weight": 1.0},
            "Q": {"value": "Quantified", "weight": null}
        },
        "RP": {
            "value": "Required Privilege",
            "N": {"value": "None", "weight": 1.0},
            "L": {"value": "Limited / Guest", "weight": 0.9},
            "RU": {"value": "Regular User", "weight": 0.7},
            "P": {"value": "Partially-Privileged User", "weight": 0.6},
            "A": {"value": "Administrator", "weight": 0.1},
            "D": {"value": "Default", "weight": 0.7},
            "UK": {"value": "Unknown", "weight": 0.5},
            "NA": {"value": "Not Applicable", "weight": 1.0},
            "Q": {"value": "Quantified", "weight": null}
        },
        "RL": {
            "value": "Required Privilege Layer",
            "A": {"value": "Application", "weight": 1.0},
            "S": {"value": "System", "weight": 0.9},
            "N": {"value": "Network", "weight": 0.7},
            "E": {"value": "Enterprise Infrastructure", "weight": 1.0},
            "D": {"value": "Default", "weight": 0.79},
            "UK": {"value": "Unknown", "weight": 0.5},
            "NA": {"value": "Not Applicable", "weight": 1.0},
            "Q": {"value": "Quantified", "weight": null}
        },
        "AV": {
            "value": "Access Vector",
            "I": {"value": "Internet", "weight": 1.0},
            "R": {"value": "Intranet", "weight": 0.8},
            "V": {"value": "Private Network", "weight": 0.8},
            "A": {"value": "Adjacent Network", "weight": 0.7},
            "L": {"value": "Local", "weight": 0.5},
            "P": {"value": "Physical", "weight": 0.2},
            "D": {"value": "Default", "weight": 0.75},
            "UK": {"value": "Unknown", "weight": 0.5},
            "NA": {"value": "Not Applicable", "weight": 1.0},
            "Q": {"value": "Quantified", "weight": null}
        },
        "AS": {
            "value": "Authentication Strength",
            "S": {"value": "Strong", "weight": 0.7},
            "M": {"value": "Moderate", "weight": 0.8},
            "W": {"value": "Weak", "weight": 0.9},
            "N": {"value": "None", "weight": 1.0},
            "D": {"value": "Default", "weight": 0.85},
            "UK": {"value": "Unknown", "weight": 0.5},
            "NA": {"value": "Not Applicable", "weight": 1.0},
            "Q": {"value": "Quantified", "weight": null}
        },
        "IN": {
            "value": "Level of Interaction",
            "A": {"value": "Automated", "weight": 1.0},
            "T": {"value": "Typical/Limited", "weight": 0.9},
            "M": {"value": "Moderate", "weight": 0.8},
            "O": {"value": "Opportunistic", "weight": 0.3},
            "H": {"value": "High", "weight": 0.1},
            "NI": {"value": "No Interaction", "weight": 0.0},
            "D": {"value": "Default", "weight": 0.55},
            "UK": {"value": "Unknown", "weight": 0.5},
            "NA": {"value": "Not Applicable", "weight": 1.0},
            "Q": {"value": "Quantified", "weight": null}
        },
        "SC": {
            "value": "Deployment Scope",
            "A": {"value": "All", "weight": 1.0},
            "M": {"value": "Moderate", "weight": 0.9},
            "R": {"value": "Rare", "weight": 0.5},
            "P": {"value": "Potentially Reachable", "weight": 0.1},
            "D": {"value": "Default", "weight": 0.7},
            "UK": {"value": "Unknown", "weight": 0.5},
            "NA": {"value": "Not Applicable", "weight": 1.0},
            "Q": {"value": "Quantified", "weight": null}
        },
        "BI": {
            "value": "Business Impact",
            "C": {"value": "Critical", "weight": 1.0},
            "H": {"value": "High", "weight": 0.9},
            "M": {"value": "Medium", "weight": 0.6},
            "L": {"value": "Low", "weight": 0.3},
            "N": {"value": "None", "weight": 0.0},
            "D": {"value": "Default", "weight": 0.6},
            "UK": {"value": "Unknown", "weight": 0.5},
            "NA": {"value": "Not Applicable", "weight": 1.0},
            "Q": {"value": "Quantified", "weight": null}
        },
        "DI": {
            "value": "Likelihood of Discovery",
            "H": {"value": "High", "weight": 1.0},
            "M": {"value": "Medium", "weight": 0.6},
            "L": {"value": "Low", "weight": 0.2},
            "D": {"value": "Default", "weight": 0.6},
            "UK": {"value": "Unknown", "weight": 0.5},
            "NA": {"value": "Not Applicable", "weight": 1.0},
            "Q": {"value": "Quantified", "weight": null}
        },
        "EX": {
            "value": "Likelihood of Exploit",
            "H": {"value": "High", "weight": 1.0},
            "M": {"value": "Medium", "weight": 0.6},
            "L": {"value": "Low", "weight": 0.2},
            "N": {"value": "None", "weight": 0.0},
            "D": {"value": "Default", "weight": 0.6},
            "UK": {"value": "Unknown", "weight": 0.5},
            "NA": {"value": "Not Applicable", "weight": 1.0},
            "Q": {"value": "Quantified", "weight": null}
        },
        "EC": {
            "value": "External Control Effectiveness",
            "N": {"value": "None", "weight": 1.0},
            "L": {"value": "Limited", "weight": 0.9},
            "M": {"value": "Moderate", "weight": 0.7},
            "I": {"value": "Indirect (Defense-in-Depth)", "weight": 0.5},
            "B": {"value": "Best-Available", "weight": 0.3},
            "C": {"value": "Complete", "weight": 0.1},
            "D": {"value": "Default", "weight": 0.6},
            "UK": {"value": "Unknown", "weight": 0.5},
            "NA": {"value": "Not Applicable", "weight": 1.0},
            "Q": {"value": "Quantified", "weight": null}
        },
        "P": {
            "value": "Prevalence",
            "W": {"value": "Widespread", "weight": 1.0},
            "H": {"value": "High", "weight": 0.9},
            "C": {"value": "Common", "weight": 0.8},
            "L": {"value": "Limited", "weight": 0.7},
            "D": {"value": "Default", "weight": 0.85},
            "UK": {"value": "Unknown", "weight": 0.5},
            "NA": {"value": "Not Applicable", "weight": 1.0},
            "Q": {"value": "Quantified", "weight": null}
        }
    }
};

const DEFAULT_CWSS = {
    "TI": {"code": "NA", "weight": 1.0},
    "AP": {"code": "NA", "weight": 1.0},
    "AL": {"code": "NA", "weight": 1.0},
    "IC": {"code": "NA", "weight": 1.0},
    "FC": {"code": "NA", "weight": 1.0},
    "RP": {"code": "NA", "weight": 1.0},
    "RL": {"code": "NA", "weight": 1.0},
    "AV": {"code": "NA", "weight": 1.0},
    "AS": {"code": "NA", "weight": 1.0},
    "IN": {"code": "NA", "weight": 1.0},
    "SC": {"code": "NA", "weight": 1.0},
    "BI": {"code": "NA", "weight": 1.0},
    "DI": {"code": "NA", "weight": 1.0},
    "EX": {"code": "NA", "weight": 1.0},
    "EC": {"code": "NA", "weight": 1.0},
    "P": {"code": "NA", "weight": 1.0}
};

/**
 * CWSS Vector String RegEx - MUST match the entire string
 **/
const CWSS_VEC_REX = {
    "1.0.1": /^\([A-Z]{2}:[A-Z]{1,2},(0\.\d|1\.0)(\/[A-Z]{1,2}:[A-Z]{1,2},(0\.\d|1\.0)){15}\)$/gm
};

function is_vector_valid(vector, version) {
    if (typeof(vector) === "string" && typeof(version) === "string") {
        if (version in CWSS_VEC_REX) {
            return vector.match(CWSS_VEC_REX[version]) !== null;
        }
    }
    return false;
}

const CWSS_Functions = {
    "1.0.1": {
        "subscores": {
            "base_finding": function(vec_obj){
                f_TI = vec_obj.TI.weight === 0.0 ? 0 : 1;
                return ((10.0 * vec_obj.TI.weight + 5.0 * (vec_obj.AP.weight + vec_obj.AL.weight) + 5.0) * vec_obj.FC.weight * f_TI * vec_obj.IC.weight) * 4.0;
            },
            "attack_surface": function(vec_obj){
                return (20.0 * (vec_obj.RP.weight + vec_obj.RL.weight + vec_obj.AV.weight) + 20.0 * vec_obj.SC.weight + 15.0 * vec_obj.IN.weight + 5.0 * vec_obj.AS.weight)/100.0;
            },
            "environment": function(vec_obj){
                f_BI = vec_obj.BI.weight === 0.0 ? 0 : 1;
                return ((10.0 * vec_obj.BI.weight + 3.0 * vec_obj.DI.weight + 4.0 * vec_obj.EX.weight + 3.0 * vec_obj.P.weight) * f_BI * vec_obj.EC.weight) / 20.0;
            }
        },
        "final": function(score_obj){
            return (score_obj.base_finding * score_obj.attack_surface * score_obj.environment).toFixed(1);
        },
        "to_string": function(vec_obj){
            // Assumes that vec_obj is well formed.
            Object.entries(vec_obj).map(([metric, value]) => {
                vec_obj[metric]["__str"] = value.code + "," + value.weight.toFixed(1);
            });
            const metric_order = ["TI", "AP", "AL", "IC", "FC", "RP", "RL", "AV", "AS", "IN", "SC", "BI", "DI", "EX", "EC", "P"];
            const vec_str = metric_order.map((metric) => {
                return metric + ":" + vec_obj[metric]["__str"];
            });
            return "(" + vec_str.join("/") + ")";
        }
    }
};

function fix_vector_obj(vec_obj, version) {
    // We want to check the vector's weights against the expected defaults,
    // EXCEPT when the weight is null.
    Object.keys(CWSS[version]).map((metric) => {
        if (metric in vec_obj && "code" in vec_obj[metric] && "weight" in vec_obj[metric]) {
            CWSS_weight = CWSS[version][metric][vec_obj[metric].code].weight;
            if (vec_obj[metric].weight !== CWSS_weight && CWSS_weight !== null) {
                vec_obj[metric].weight = CWSS_weight;
            }
        } else {
            vec_obj[metric] = DEFAULT_CWSS[metric];
        }
    });
    return vec_obj;
}

function to_vector_str(vector, options={version:"1.0.1"}) {
    if (typeof(vector) !== "object" || typeof(options) !== "object" || !("version" in options)) {
        throw new Error('vector_obj_to_string() was called with incorrect types');
    }

    return CWSS_Functions[options.version].to_string(vector);
}

function compute_vector(vector, options={version:"1.0.1"}) {
    if ((typeof(vector) !== "string" && typeof(vector) !== "object") || typeof(options) !== "object" || !("version" in options)) {
        throw new Error('compute_vector() was called with incorrect types');
    }

    let cwss_object = {
        "vector": "Error",
        "vector_obj": null,
        "base_finding": 0.0,
        "attack_surface": 0.0,
        "environment": 0.0,
        "final": 0.0
    };
    let vec_objs = {};

    if (typeof(vector) === "string") {
        if (is_vector_valid(vector, options.version)) {
            // Parse Vector into object map
            let vec = vector.replace(/(^\(|\)$)/g, "");
            let metrics = vec.split('/');
            metrics.map((metric) => {
              vals = metric.split(":");
              subvals = vals[1].split(",");
              vec_objs[vals[0]] = {"code": subvals[0], "weight": parseFloat(subvals[1])};
            });
        } else {
            throw new Error('Vector string provided does not comply with regex');
        }
    } else if (typeof(vector) === "object") {
        vec_objs = vector;
    }
    // Ensure all metrics are available
    vec_objs = fix_vector_obj(vec_objs, options.version);

    cwss_object["vector_obj"] = vec_objs;

    // Compute scores!
    Object.keys(CWSS_Functions[options.version].subscores).map((fn) => {
        cwss_object[fn] = CWSS_Functions[options.version].subscores[fn](vec_objs);
    });

    cwss_object["final"] = CWSS_Functions[options.version].final(cwss_object);

    cwss_object["vector"] = to_vector_str(cwss_object["vector_obj"]);

    return cwss_object;
}

exports.compute_vector = compute_vector;
exports.to_vector_str = to_vector_str;
