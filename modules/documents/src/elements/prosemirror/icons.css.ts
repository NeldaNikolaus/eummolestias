import { css } from "lit-element";

export const iconsStyle = css`
  clr-icon {
    display: inline-block;
    margin: 0;
    height: 16px;
    width: 16px;
    vertical-align: middle;
    fill: currentColor;
  }
  clr-icon .transparent-fill-stroke {
    stroke: currentColor;
  }
  clr-icon.is-green,
  clr-icon.is-success {
    fill: #318700;
  }
  clr-icon.is-green .transparent-fill-stroke,
  clr-icon.is-success .transparent-fill-stroke {
    stroke: #318700;
  }
  clr-icon.is-danger,
  clr-icon.is-error,
  clr-icon.is-red {
    fill: #e62700;
  }
  clr-icon.is-danger .transparent-fill-stroke,
  clr-icon.is-error .transparent-fill-stroke,
  clr-icon.is-red .transparent-fill-stroke {
    stroke: #e62700;
  }
  clr-icon.is-warning {
    fill: #fac400;
  }
  clr-icon.is-warning .transparent-fill-stroke {
    stroke: #fac400;
  }
  clr-icon.is-blue,
  clr-icon.is-info {
    fill: #007cbb;
  }
  clr-icon.is-blue .transparent-fill-stroke,
  clr-icon.is-info .transparent-fill-stroke {
    stroke: #007cbb;
  }
  clr-icon.is-inverse,
  clr-icon.is-white {
    fill: #fff;
  }
  clr-icon.is-inverse .transparent-fill-stroke,
  clr-icon.is-white .transparent-fill-stroke {
    stroke: #fff;
  }
  clr-icon.is-highlight {
    fill: #007cbb;
  }
  clr-icon.is-highlight .transparent-fill-stroke {
    stroke: #007cbb;
  }
  clr-icon[dir="up"] svg,
  clr-icon[shape$=" up"] svg {
    transform: rotate(0deg);
  }
  clr-icon[dir="down"] svg,
  clr-icon[shape$=" down"] svg {
    transform: rotate(180deg);
  }
  clr-icon[dir="right"] svg,
  clr-icon[shape$=" right"] svg {
    transform: rotate(90deg);
  }
  clr-icon[dir="left"] svg,
  clr-icon[shape$=" left"] svg {
    transform: rotate(270deg);
  }
  clr-icon[flip="horizontal"] svg {
    transform: scale(-1) rotateX(180deg);
  }
  clr-icon[flip="vertical"] svg {
    transform: scale(-1) rotateY(180deg);
  }
  clr-icon .clr-i-badge {
    fill: #e62700;
  }
  clr-icon .clr-i-badge .transparent-fill-stroke {
    stroke: #e62700;
  }
  clr-icon > * {
    height: 100%;
    width: 100%;
    display: block;
    pointer-events: none;
  }
  clr-icon > svg {
    transition: inherit;
  }
  clr-icon .clr-i-outline--alerted:not(.clr-i-outline),
  clr-icon .clr-i-outline--badged:not(.clr-i-outline),
  clr-icon .clr-i-solid,
  clr-icon .clr-i-solid--alerted,
  clr-icon .clr-i-solid--badged,
  clr-icon > svg title {
    display: none;
  }
  clr-icon[class*="has-alert"] .can-alert .clr-i-outline--alerted {
    display: block;
  }
  clr-icon[class*="has-alert"]
    .can-alert
    .clr-i-outline:not(.clr-i-outline--alerted) {
    display: none;
  }
  clr-icon[class*="has-badge"] .can-badge .clr-i-outline--badged {
    display: block;
  }
  clr-icon[class*="has-badge"]
    .can-badge
    .clr-i-outline:not(.clr-i-outline--badged) {
    display: none;
  }
  clr-icon.is-solid .has-solid .clr-i-solid {
    display: block;
  }
  clr-icon.is-solid .has-solid .clr-i-outline,
  clr-icon.is-solid .has-solid .clr-i-outline--badged,
  clr-icon.is-solid .has-solid .clr-i-solid--alerted:not(.clr-i-solid),
  clr-icon.is-solid .has-solid .clr-i-solid--badged:not(.clr-i-solid) {
    display: none;
  }
  clr-icon.is-solid[class*="has-badge"]
    .can-badge.has-solid
    .clr-i-solid--badged {
    display: block;
  }
  clr-icon.is-solid[class*="has-badge"] .can-badge.has-solid .clr-i-outline,
  clr-icon.is-solid[class*="has-badge"]
    .can-badge.has-solid
    .clr-i-outline--badged,
  clr-icon.is-solid[class*="has-badge"]
    .can-badge.has-solid
    .clr-i-solid:not(.clr-i-solid--badged) {
    display: none;
  }
  clr-icon.is-solid[class*="has-alert"]
    .can-alert.has-solid
    .clr-i-solid--alerted {
    display: block;
  }
  clr-icon.is-solid[class*="has-alert"] .can-alert.has-solid .clr-i-outline,
  clr-icon.is-solid[class*="has-alert"]
    .can-alert.has-solid
    .clr-i-outline--alerted,
  clr-icon.is-solid[class*="has-alert"]
    .can-alert.has-solid
    .clr-i-solid:not(.clr-i-solid--alerted) {
    display: none;
  }
  clr-icon.has-badge--success .clr-i-badge {
    fill: #318700;
  }
  clr-icon.has-badge--success .clr-i-badge .transparent-fill-stroke {
    stroke: #318700;
  }
  clr-icon.has-badge--error .clr-i-badge {
    fill: #e62700;
  }
  clr-icon.has-badge--error .clr-i-badge .transparent-fill-stroke {
    stroke: #e62700;
  }
  clr-icon.has-badge--info .clr-i-badge {
    fill: #007cbb;
  }
  clr-icon.has-badge--info .clr-i-badge .transparent-fill-stroke {
    stroke: #007cbb;
  }
  clr-icon.has-alert .clr-i-alert {
    fill: #fac400;
  }
  clr-icon.has-alert .clr-i-alert .transparent-fill-stroke {
    stroke: #fac400;
  }
  clr-icon .is-off-screen {
    position: fixed !important;
    border: none !important;
    height: 1px !important;
    width: 1px !important;
    left: 0 !important;
    top: -1px !important;
    overflow: hidden !important;
    padding: 0 !important;
    margin: 0 0 -1px 0 !important;
  }
`;
