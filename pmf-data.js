/**
 * PMF Project Standards — shared control data
 * ---------------------------------------------
 * This is SAMPLE / PLACEHOLDER data demonstrating the structure and
 * navigation pattern only. Replace every field below with Renaissance's
 * real PMF control content when it's ready.
 *
 * Both pmf-standards.html (the index/table) and pmf-control.html (the
 * dynamic detail page) load this one file, so there is a single source
 * of truth — add a new control here and it automatically appears in the
 * table AND becomes reachable at pmf-control.html?id=<the id>.
 */

const PMF_CONTROLS = {
  "1.A.1": {
    title: "Business Case Assumptions Validated",
    phase: "Assess",
    accountability: "Project Sponsor",
    context: "Placeholder context — describe the risk this control manages and why it matters during the Assess phase.",
    activity: "Placeholder activity — describe the action the project team must complete to satisfy this control.",
    purpose: "Placeholder purpose — explain what completing the activity is meant to achieve.",
    requirements: "Placeholder — name any related Renaissance standard this control draws on.",
    evidence: "Placeholder deliverable name",
    footnotes: []
  },
  "1.A.2": {
    title: "Risk Register Established",
    phase: "Assess",
    accountability: "Risk Lead",
    context: "Placeholder context — describe the risk this control manages and why it matters during the Assess phase.",
    activity: "Placeholder activity — describe the action the project team must complete to satisfy this control.",
    purpose: "Placeholder purpose — explain what completing the activity is meant to achieve.",
    requirements: "Placeholder — name any related Renaissance standard this control draws on.",
    evidence: "Placeholder deliverable name",
    footnotes: []
  },
  "1.S.1": {
    title: "Full Lifecycle Value Assurance",
    phase: "Select",
    accountability: "Project Manager",
    context: "Placeholder context — describe the risk this control manages and why it matters during the Select phase.",
    activity: "Placeholder activity — describe the action the project team must complete to satisfy this control.",
    purpose: "Placeholder purpose — explain what completing the activity is meant to achieve.",
    requirements: "Placeholder — name any related Renaissance standard this control draws on.",
    evidence: "Placeholder deliverable name",
    footnotes: []
  },
  "1.S.2": {
    title: "Options Assessment Reviewed",
    phase: "Select",
    accountability: "Project Manager",
    context: "Placeholder context — describe the risk this control manages and why it matters during the Select phase.",
    activity: "Placeholder activity — describe the action the project team must complete to satisfy this control.",
    purpose: "Placeholder purpose — explain what completing the activity is meant to achieve.",
    requirements: "Placeholder — name any related Renaissance standard this control draws on.",
    evidence: "Placeholder deliverable name",
    footnotes: []
  },
  "1.D.1": {
    title: "Sample Standard Control",
    phase: "Define",
    accountability: "Front End Development Manager",
    context: "Placeholder context — describe the risk this control manages and why it matters at this project phase.",
    activity: "Placeholder activity — describe the action the project team must complete.",
    purpose: "Placeholder purpose — explain what completing the activity achieves.",
    requirements: "Placeholder — name any related Renaissance standard this control draws on.",
    evidence: "Placeholder deliverable name",
    footnotes: []
  },
  "1.D.2": {
    title: "Execution Readiness Confirmed",
    phase: "Define",
    accountability: "Project Manager",
    context: "Placeholder context — describe the risk this control manages and why it matters during the Define phase.",
    activity: "Placeholder activity — describe the action the project team must complete to satisfy this control.",
    purpose: "Placeholder purpose — explain what completing the activity is meant to achieve.",
    requirements: "Placeholder — name any related Renaissance standard this control draws on.",
    evidence: "Placeholder deliverable name",
    footnotes: []
  },
  "1.E.1": {
    title: "Change Control Log Maintained",
    phase: "Execute",
    accountability: "Project Manager",
    context: "Placeholder context — describe the risk this control manages and why it matters during the Execute phase.",
    activity: "Placeholder activity — describe the action the project team must complete to satisfy this control.",
    purpose: "Placeholder purpose — explain what completing the activity is meant to achieve.",
    requirements: "Placeholder — name any related Renaissance standard this control draws on.",
    evidence: "Placeholder deliverable name",
    footnotes: []
  },
  "1.E.2": {
    title: "Contractor Performance Reviewed",
    phase: "Execute",
    accountability: "Project Manager",
    context: "Placeholder context — describe the risk this control manages and why it matters during the Execute phase.",
    activity: "Placeholder activity — describe the action the project team must complete to satisfy this control.",
    purpose: "Placeholder purpose — explain what completing the activity is meant to achieve.",
    requirements: "Placeholder — name any related Renaissance standard this control draws on.",
    evidence: "Placeholder deliverable name",
    footnotes: []
  },
  "1.O.1": {
    title: "Handover Documentation Completed",
    phase: "Operate",
    accountability: "Operations Manager",
    context: "Placeholder context — describe the risk this control manages and why it matters during the Operate phase.",
    activity: "Placeholder activity — describe the action the project team must complete to satisfy this control.",
    purpose: "Placeholder purpose — explain what completing the activity is meant to achieve.",
    requirements: "Placeholder — name any related Renaissance standard this control draws on.",
    evidence: "Placeholder deliverable name",
    footnotes: []
  },
  "1.O.2": {
    title: "Post-Project Review Conducted",
    phase: "Operate",
    accountability: "Project Manager",
    context: "Placeholder context — describe the risk this control manages and why it matters during the Operate phase.",
    activity: "Placeholder activity — describe the action the project team must complete to satisfy this control.",
    purpose: "Placeholder purpose — explain what completing the activity is meant to achieve.",
    requirements: "Placeholder — name any related Renaissance standard this control draws on.",
    evidence: "Placeholder deliverable name",
    footnotes: []
  }
};

// Ordered list of phases, used to group the table on pmf-standards.html
const PMF_PHASES = ["Assess", "Select", "Define", "Execute", "Operate"];
