import styled, { StyledComponentClass } from "styled-components";

const config = {
  darkPrimary: "#04bbc2",
  primary: "#3ac3c8",
  ligthPrimary: "#e3f0f0",
  lighterPrimary: "#e3f0f0",
  panelHeight: "50px",
  ClickOuter: "18px",
  ClickInner: "52px",
};

export const DateCalenderWrapper = styled("div")`
  --styled: "DateCalenderWrapper";

  && {
    width: 290px;
    height: 276px;
    overflow: hidden;
    color: #343434;
    font-family: PingFangSC-Regular;
    font-size: 14px;
    /* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */
    /* stylelint-disable no-duplicate-selectors */
    /* stylelint-disable declaration-bang-space-before,no-duplicate-selectors */
    /* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */
    .ant-calendar-picker-container {
      font-size: 14px;
      font-variant: tabular-nums;
      line-height: 1.5;
      color: rgba(0, 0, 0, 0.65);
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      list-style: none;
      position: absolute;
      z-index: 1050;
    }
    .ant-calendar-picker-container.slide-up-enter.slide-up-enter-active.ant-calendar-picker-container-placement-topLeft,
    .ant-calendar-picker-container.slide-up-enter.slide-up-enter-active.ant-calendar-picker-container-placement-topRight,
    .ant-calendar-picker-container.slide-up-appear.slide-up-appear-active.ant-calendar-picker-container-placement-topLeft,
    .ant-calendar-picker-container.slide-up-appear.slide-up-appear-active.ant-calendar-picker-container-placement-topRight {
      -webkit-animation-name: antSlideDownIn;
      animation-name: antSlideDownIn;
    }
    .ant-calendar-picker-container.slide-up-enter.slide-up-enter-active.ant-calendar-picker-container-placement-bottomLeft,
    .ant-calendar-picker-container.slide-up-enter.slide-up-enter-active.ant-calendar-picker-container-placement-bottomRight,
    .ant-calendar-picker-container.slide-up-appear.slide-up-appear-active.ant-calendar-picker-container-placement-bottomLeft,
    .ant-calendar-picker-container.slide-up-appear.slide-up-appear-active.ant-calendar-picker-container-placement-bottomRight {
      -webkit-animation-name: antSlideUpIn;
      animation-name: antSlideUpIn;
    }
    .ant-calendar-picker-container.slide-up-leave.slide-up-leave-active.ant-calendar-picker-container-placement-topLeft,
    .ant-calendar-picker-container.slide-up-leave.slide-up-leave-active.ant-calendar-picker-container-placement-topRight {
      -webkit-animation-name: antSlideDownOut;
      animation-name: antSlideDownOut;
    }
    .ant-calendar-picker-container.slide-up-leave.slide-up-leave-active.ant-calendar-picker-container-placement-bottomLeft,
    .ant-calendar-picker-container.slide-up-leave.slide-up-leave-active.ant-calendar-picker-container-placement-bottomRight {
      -webkit-animation-name: antSlideUpOut;
      animation-name: antSlideUpOut;
    }
    .ant-calendar-picker {
      font-size: 14px;
      font-variant: tabular-nums;
      line-height: 1.5;
      color: rgba(0, 0, 0, 0.65);
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      list-style: none;
      position: relative;
      display: inline-block;
      outline: none;
      -webkit-transition: opacity 0.3s;
      transition: opacity 0.3s;
    }
    .ant-calendar-picker-input {
      outline: none;
    }
    .ant-calendar-picker:hover
      .ant-calendar-picker-input:not(.ant-input-disabled) {
      border-color: ${config.darkPrimary};
    }
    .ant-calendar-picker:focus
      .ant-calendar-picker-input:not(.ant-input-disabled) {
      border-color: ${config.primary};
      outline: 0;
      -webkit-box-shadow: 0 0 0 2px ${config.ligthPrimary};
      box-shadow: 0 0 0 2px ${config.ligthPrimary};
      border-right-width: 1px !important;
    }
    .ant-calendar-picker-clear,
    .ant-calendar-picker-icon {
      position: absolute;
      width: 14px;
      height: 14px;
      right: 12px;
      top: 50%;
      margin-top: -7px;
      line-height: 14px;
      font-size: 12px;
      -webkit-transition: all 0.3s;
      transition: all 0.3s;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }
    .ant-calendar-picker-clear {
      opacity: 0;
      z-index: 1;
      color: rgba(0, 0, 0, 0.25);
      background: #fff;
      pointer-events: none;
      cursor: pointer;
    }
    .ant-calendar-picker-clear:hover {
      color: rgba(0, 0, 0, 0.45);
    }
    .ant-calendar-picker:hover .ant-calendar-picker-clear {
      opacity: 1;
      pointer-events: auto;
    }
    .ant-calendar-picker-icon {
      color: rgba(0, 0, 0, 0.25);
    }
    .ant-calendar-picker-icon:after {
      content: "\e6bb";
      font-size: 14px;
      color: rgba(0, 0, 0, 0.25);
      display: inline-block;
      line-height: 1;
    }
    .ant-calendar-picker-small .ant-calendar-picker-clear,
    .ant-calendar-picker-small .ant-calendar-picker-icon {
      right: 8px;
    }
    .ant-calendar {
      position: relative;
      outline: none;
      list-style: none;
      font-size: 14px;
      text-align: left;
      background-clip: padding-box;
      line-height: 1.5;
      border: none;
      width: 290px;
    }
    .ant-calendar-input-wrap {
      height: 34px;
      padding: 6px 10px;
      border-bottom: 1px solid #e8e8e8;
    }
    .ant-calendar-input {
      border: 0;
      width: 100%;
      cursor: auto;
      outline: 0;
      height: 22px;
      color: rgba(0, 0, 0, 0.65);
      background: #fff;
    }
    .ant-calendar-input::-moz-placeholder {
      color: #bfbfbf;
      opacity: 1;
    }
    .ant-calendar-input:-ms-input-placeholder {
      color: #bfbfbf;
    }
    .ant-calendar-input::-webkit-input-placeholder {
      color: #bfbfbf;
    }
    .ant-calendar-week-number {
      width: 286px;
    }
    .ant-calendar-week-number-cell {
      text-align: center;
    }
    .ant-calendar-header {
      height: 52px;
      line-height: 52px;
      text-align: center;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }
    .ant-calendar-header a:hover {
      color: ${config.primary};
    }
    .ant-calendar-header .ant-calendar-century-select,
    .ant-calendar-header .ant-calendar-decade-select,
    .ant-calendar-header .ant-calendar-year-select,
    .ant-calendar-header .ant-calendar-month-select {
      padding: 0 2px;
      font-weight: 500;
      display: inline-block;
      color: rgba(0, 0, 0, 0.85);
      line-height: ${config.panelHeight};
    }
    .ant-calendar-header .ant-calendar-century-select-arrow,
    .ant-calendar-header .ant-calendar-decade-select-arrow,
    .ant-calendar-header .ant-calendar-year-select-arrow,
    .ant-calendar-header .ant-calendar-month-select-arrow {
      display: none;
    }
    .ant-calendar-header .ant-calendar-prev-century-btn,
    .ant-calendar-header .ant-calendar-next-century-btn,
    .ant-calendar-header .ant-calendar-prev-decade-btn,
    .ant-calendar-header .ant-calendar-next-decade-btn,
    .ant-calendar-header .ant-calendar-prev-month-btn,
    .ant-calendar-header .ant-calendar-next-month-btn,
    .ant-calendar-header .ant-calendar-prev-year-btn,
    .ant-calendar-header .ant-calendar-next-year-btn {
      position: absolute;
      top: 0;
      color: #b6b6b6;
      padding: 0 5px;
      display: inline-block;
      line-height: ${config.panelHeight};
      font-size: 20px;
      font-weight: 200;
    }
    .ant-calendar-header .ant-calendar-prev-century-btn,
    .ant-calendar-header .ant-calendar-prev-decade-btn,
    .ant-calendar-header .ant-calendar-prev-year-btn {
      left: ${config.ClickOuter};
    }
    .ant-calendar-header .ant-calendar-prev-century-btn:after,
    .ant-calendar-header .ant-calendar-prev-decade-btn:after,
    .ant-calendar-header .ant-calendar-prev-year-btn:after {
      content: "«";
    }
    .ant-calendar-header .ant-calendar-next-century-btn,
    .ant-calendar-header .ant-calendar-next-decade-btn,
    .ant-calendar-header .ant-calendar-next-year-btn {
      right: ${config.ClickOuter};
    }
    .ant-calendar-header .ant-calendar-next-century-btn:after,
    .ant-calendar-header .ant-calendar-next-decade-btn:after,
    .ant-calendar-header .ant-calendar-next-year-btn:after {
      content: "»";
    }
    .ant-calendar-header .ant-calendar-prev-month-btn {
      left: ${config.ClickInner};
    }
    .ant-calendar-header .ant-calendar-prev-month-btn:after {
      content: "‹";
    }
    .ant-calendar-header .ant-calendar-next-month-btn {
      right: ${config.ClickInner};
    }
    .ant-calendar-header .ant-calendar-next-month-btn:after {
      content: "›";
    }
    .ant-calendar-body {
      padding: 0px 12px;
    }
    .ant-calendar table {
      border-collapse: collapse;
      max-width: 100%;
      background-color: transparent;
      width: 100%;
    }
    .ant-calendar table,
    .ant-calendar th,
    .ant-calendar td {
      border: 0;
      text-align: center;
    }
    .ant-calendar-calendar-table {
      border-spacing: 0;
      margin-bottom: 0;
    }
    .ant-calendar-column-header {
      line-height: 18px;
      width: 33px;
      padding: 6px 0;
      text-align: center;
    }
    .ant-calendar-column-header .ant-calendar-column-header-inner {
      display: block;
      font-weight: normal;
    }
    .ant-calendar-week-number-header .ant-calendar-column-header-inner {
      display: none;
    }

    .ant-calendar-last-month-cell .ant-calendar-date,
    .date-picker-from-antd
      .ant-calendar-next-month-btn-day
      .ant-calendar-date
      .ant-calendar-cell {
      height: 30px;
      padding: 0px;
    }
    .ant-calendar-date {
      display: block;
      margin: 0 auto;
      color: rgba(0, 0, 0, 0.65);
      border: 1px solid transparent;
      padding: 0;
      background: transparent;
      text-align: center;
      -webkit-transition: background 0.3s ease;
      transition: background 0.3s ease;
      border-radius: 50%;

      width: 30px;
      height: 30px;
      font-size: 14px;
      line-height: 30px;
      text-align: center;
      font-weight: 200;
    }
    .ant-calendar-date-panel {
      position: relative;
    }
    .ant-calendar-date:hover {
      background: #e6f7ff;
      cursor: pointer;
    }
    .ant-calendar-date:active {
      color: #fff;
      background: ${config.primary};
    }
    .ant-calendar-today .ant-calendar-date {
      border-color: ${config.darkPrimary};
      color: ${config.darkPrimary};
    }
    .ant-calendar-last-month-cell .ant-calendar-date,
    .ant-calendar-next-month-btn-day .ant-calendar-date {
      color: rgba(0, 0, 0, 0.25);
      display: none;
    }
    .ant-calendar-selected-day .ant-calendar-date {
      background: ${config.darkPrimary};
      color: #fff;
      border: 1px solid transparent;
    }
    .ant-calendar-selected-date .ant-calendar-date,
    .ant-calendar-selected-start-date .ant-calendar-date,
    .ant-calendar-selected-end-date .ant-calendar-date {
      background: ${config.darkPrimary};
      color: #fff;
      border: 1px solid transparent;
    }
    .ant-calendar-selected-date .ant-calendar-date:hover,
    .ant-calendar-selected-start-date .ant-calendar-date:hover,
    .ant-calendar-selected-end-date .ant-calendar-date:hover {
      background: ${config.darkPrimary};
    }

    .ant-calendar-disabled-cell .ant-calendar-date {
      cursor: not-allowed;
      color: #b2b2b2;
      background: #fff;
      border: 1px solid transparent;
    }
    .ant-calendar-disabled-cell .ant-calendar-date:hover {
      background: #f5f5f5;
    }
    .ant-calendar-footer {
      border-top: 1px solid #e8e8e8;
      line-height: 38px;
      padding: 0 12px;

      display: none;
    }
    .ant-calendar-footer:empty {
      border-top: 0;
    }
    .ant-calendar-footer-btn {
      text-align: center;
      display: block;
    }
    .ant-calendar-footer-extra + .ant-calendar-footer-btn {
      border-top: 1px solid #e8e8e8;
      margin: 0 -12px;
      padding: 0 12px;
    }
    .ant-calendar .ant-calendar-today-btn,
    .ant-calendar .ant-calendar-clear-btn {
      display: inline-block;
      text-align: center;
      margin: 0 0 0 8px;
    }
    .ant-calendar .ant-calendar-today-btn-disabled,
    .ant-calendar .ant-calendar-clear-btn-disabled {
      color: rgba(0, 0, 0, 0.25);
      cursor: not-allowed;
    }
    .ant-calendar .ant-calendar-today-btn:only-child,
    .ant-calendar .ant-calendar-clear-btn:only-child {
      margin: 0;
    }
    .ant-calendar .ant-calendar-clear-btn {
      display: none;
      position: absolute;
      right: 5px;
      text-indent: -76px;
      overflow: hidden;
      width: 20px;
      height: 20px;
      text-align: center;
      line-height: 20px;
      top: 7px;
      margin: 0;
    }
    .ant-calendar .ant-calendar-clear-btn:after {
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      content: "\e62e";
      font-size: 14px;
      color: rgba(0, 0, 0, 0.25);
      display: inline-block;
      line-height: 1;
      width: 20px;
      text-indent: 43px;
      -webkit-transition: color 0.3s ease;
      transition: color 0.3s ease;
    }
    .ant-calendar .ant-calendar-clear-btn:hover:after {
      color: rgba(0, 0, 0, 0.45);
    }
    .ant-calendar .ant-calendar-ok-btn {
      display: inline-block;
      font-weight: 400;
      text-align: center;
      -ms-touch-action: manipulation;
      touch-action: manipulation;
      cursor: pointer;
      background-image: none;
      border: 1px solid transparent;
      white-space: nowrap;
      padding: 0 15px;
      height: 32px;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      -webkit-transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      position: relative;
      color: #fff;
      background-color: ${config.darkPrimary};
      border-color: ${config.darkPrimary};
      padding: 0 7px;
      font-size: 14px;
      border-radius: 4px;
      height: 24px;
      line-height: 22px;
    }
    .ant-calendar .ant-calendar-ok-btn > .anticon {
      line-height: 1;
    }
    .ant-calendar .ant-calendar-ok-btn,
    .ant-calendar .ant-calendar-ok-btn:active,
    .ant-calendar .ant-calendar-ok-btn:focus {
      outline: 0;
    }
    .ant-calendar .ant-calendar-ok-btn:not([disabled]):hover {
      text-decoration: none;
    }
    .ant-calendar .ant-calendar-ok-btn:not([disabled]):active {
      outline: 0;
      -webkit-transition: none;
      transition: none;
    }
    .ant-calendar .ant-calendar-ok-btn.disabled,
    .ant-calendar .ant-calendar-ok-btn[disabled] {
      cursor: not-allowed;
    }
    .ant-calendar .ant-calendar-ok-btn.disabled > *,
    .ant-calendar .ant-calendar-ok-btn[disabled] > * {
      pointer-events: none;
    }
    .ant-calendar .ant-calendar-ok-btn-lg {
      padding: 0 15px;
      font-size: 16px;
      border-radius: 4px;
      height: ${config.panelHeight};
    }
    .ant-calendar .ant-calendar-ok-btn-sm {
      padding: 0 7px;
      font-size: 14px;
      border-radius: 4px;
      height: 24px;
    }
    .ant-calendar .ant-calendar-ok-btn > a:only-child {
      color: currentColor;
    }
    .ant-calendar .ant-calendar-ok-btn > a:only-child:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background: transparent;
    }
    .ant-calendar .ant-calendar-ok-btn:hover,
    .ant-calendar .ant-calendar-ok-btn:focus {
      color: #fff;
      background-color: ${config.primary};
      border-color: ${config.primary};
    }
    .ant-calendar .ant-calendar-ok-btn:hover > a:only-child,
    .ant-calendar .ant-calendar-ok-btn:focus > a:only-child {
      color: currentColor;
    }
    .ant-calendar .ant-calendar-ok-btn:hover > a:only-child:after,
    .ant-calendar .ant-calendar-ok-btn:focus > a:only-child:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background: transparent;
    }
    .ant-calendar .ant-calendar-ok-btn:active,
    .ant-calendar .ant-calendar-ok-btn.active {
      color: #fff;
      background-color: #096dd9;
      border-color: #096dd9;
    }
    .ant-calendar .ant-calendar-ok-btn:active > a:only-child,
    .ant-calendar .ant-calendar-ok-btn.active > a:only-child {
      color: currentColor;
    }
    .ant-calendar .ant-calendar-ok-btn:active > a:only-child:after,
    .ant-calendar .ant-calendar-ok-btn.active > a:only-child:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background: transparent;
    }
    .ant-calendar .ant-calendar-ok-btn.disabled,
    .ant-calendar .ant-calendar-ok-btn[disabled],
    .ant-calendar .ant-calendar-ok-btn.disabled:hover,
    .ant-calendar .ant-calendar-ok-btn[disabled]:hover,
    .ant-calendar .ant-calendar-ok-btn.disabled:focus,
    .ant-calendar .ant-calendar-ok-btn[disabled]:focus,
    .ant-calendar .ant-calendar-ok-btn.disabled:active,
    .ant-calendar .ant-calendar-ok-btn[disabled]:active,
    .ant-calendar .ant-calendar-ok-btn.disabled.active,
    .ant-calendar .ant-calendar-ok-btn[disabled].active {
      color: rgba(0, 0, 0, 0.25);
      background-color: #f5f5f5;
      border-color: #d9d9d9;
    }
    .ant-calendar .ant-calendar-ok-btn.disabled > a:only-child,
    .ant-calendar .ant-calendar-ok-btn[disabled] > a:only-child,
    .ant-calendar .ant-calendar-ok-btn.disabled:hover > a:only-child,
    .ant-calendar .ant-calendar-ok-btn[disabled]:hover > a:only-child,
    .ant-calendar .ant-calendar-ok-btn.disabled:focus > a:only-child,
    .ant-calendar .ant-calendar-ok-btn[disabled]:focus > a:only-child,
    .ant-calendar .ant-calendar-ok-btn.disabled:active > a:only-child,
    .ant-calendar .ant-calendar-ok-btn[disabled]:active > a:only-child,
    .ant-calendar .ant-calendar-ok-btn.disabled.active > a:only-child,
    .ant-calendar .ant-calendar-ok-btn[disabled].active > a:only-child {
      color: currentColor;
    }
    .ant-calendar .ant-calendar-ok-btn.disabled > a:only-child:after,
    .ant-calendar .ant-calendar-ok-btn[disabled] > a:only-child:after,
    .ant-calendar .ant-calendar-ok-btn.disabled:hover > a:only-child:after,
    .ant-calendar .ant-calendar-ok-btn[disabled]:hover > a:only-child:after,
    .ant-calendar .ant-calendar-ok-btn.disabled:focus > a:only-child:after,
    .ant-calendar .ant-calendar-ok-btn[disabled]:focus > a:only-child:after,
    .ant-calendar .ant-calendar-ok-btn.disabled:active > a:only-child:after,
    .ant-calendar .ant-calendar-ok-btn[disabled]:active > a:only-child:after,
    .ant-calendar .ant-calendar-ok-btn.disabled.active > a:only-child:after,
    .ant-calendar .ant-calendar-ok-btn[disabled].active > a:only-child:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background: transparent;
    }
    .ant-calendar .ant-calendar-ok-btn-disabled {
      color: rgba(0, 0, 0, 0.25);
      background-color: #f5f5f5;
      border-color: #d9d9d9;
      cursor: not-allowed;
    }
    .ant-calendar .ant-calendar-ok-btn-disabled > a:only-child {
      color: currentColor;
    }
    .ant-calendar .ant-calendar-ok-btn-disabled > a:only-child:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background: transparent;
    }
    .ant-calendar .ant-calendar-ok-btn-disabled:hover {
      color: rgba(0, 0, 0, 0.25);
      background-color: #f5f5f5;
      border-color: #d9d9d9;
    }
    .ant-calendar .ant-calendar-ok-btn-disabled:hover > a:only-child {
      color: currentColor;
    }
    .ant-calendar .ant-calendar-ok-btn-disabled:hover > a:only-child:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background: transparent;
    }
    .ant-calendar-range-picker-input {
      background-color: transparent;
      border: 0;
      height: 99%;
      outline: 0;
      width: 44%;
      text-align: center;
    }
    .ant-calendar-range-picker-input::-moz-placeholder {
      color: #bfbfbf;
      opacity: 1;
    }
    .ant-calendar-range-picker-input:-ms-input-placeholder {
      color: #bfbfbf;
    }
    .ant-calendar-range-picker-input::-webkit-input-placeholder {
      color: #bfbfbf;
    }
    .ant-calendar-range-picker-input[disabled] {
      cursor: not-allowed;
    }
    .ant-calendar-range-picker-separator {
      color: rgba(0, 0, 0, 0.45);
      width: 10px;
      display: inline-block;
      height: 100%;
      vertical-align: top;
    }
    .ant-calendar-range {
      width: 552px;
      overflow: hidden;
    }
    .ant-calendar-range .ant-calendar-date-panel::after {
      content: ".";
      display: block;
      height: 0;
      clear: both;
      visibility: hidden;
    }
    .ant-calendar-range-part {
      width: 50%;
      position: relative;
    }
    .ant-calendar-range-left {
      float: left;
    }
    .ant-calendar-range-left .ant-calendar-time-picker-inner {
      border-right: 1px solid #e8e8e8;
    }
    .ant-calendar-range-right {
      float: right;
    }
    .ant-calendar-range-right .ant-calendar-time-picker-inner {
      border-left: 1px solid #e8e8e8;
    }
    .ant-calendar-range-middle {
      position: absolute;
      left: 50%;
      width: 20px;
      margin-left: -132px;
      text-align: center;
      height: 34px;
      line-height: 34px;
      color: rgba(0, 0, 0, 0.45);
    }
    .ant-calendar-range-right .ant-calendar-date-input-wrap {
      margin-left: -118px;
    }
    .ant-calendar-range.ant-calendar-time .ant-calendar-range-middle {
      margin-left: -12px;
    }
    .ant-calendar-range.ant-calendar-time
      .ant-calendar-range-right
      .ant-calendar-date-input-wrap {
      margin-left: 0;
    }
    .ant-calendar-range .ant-calendar-input-wrap {
      position: relative;
      height: 34px;
    }
    .ant-calendar-range .ant-calendar-input,
    .ant-calendar-range .ant-calendar-time-picker-input {
      position: relative;
      display: inline-block;
      padding: 4px 11px;
      width: 100%;
      height: 32px;
      font-size: 14px;
      line-height: 1.5;
      color: rgba(0, 0, 0, 0.65);
      background-color: #fff;
      background-image: none;
      border: 1px solid #d9d9d9;
      border-radius: 4px;
      -webkit-transition: all 0.3s;
      transition: all 0.3s;
      height: 24px;
      border: 0;
      -webkit-box-shadow: none;
      box-shadow: none;
      padding-left: 0;
      padding-right: 0;
    }
    .ant-calendar-range .ant-calendar-input::-moz-placeholder,
    .ant-calendar-range .ant-calendar-time-picker-input::-moz-placeholder {
      color: #bfbfbf;
      opacity: 1;
    }
    .ant-calendar-range .ant-calendar-input:-ms-input-placeholder,
    .ant-calendar-range .ant-calendar-time-picker-input:-ms-input-placeholder {
      color: #bfbfbf;
    }
    .ant-calendar-range .ant-calendar-input::-webkit-input-placeholder,
    .ant-calendar-range
      .ant-calendar-time-picker-input::-webkit-input-placeholder {
      color: #bfbfbf;
    }
    .ant-calendar-range .ant-calendar-input:hover,
    .ant-calendar-range .ant-calendar-time-picker-input:hover {
      border-color: ${config.primary};
      border-right-width: 1px !important;
    }
    .ant-calendar-range .ant-calendar-input:focus,
    .ant-calendar-range .ant-calendar-time-picker-input:focus {
      border-color: ${config.primary};
      outline: 0;
      -webkit-box-shadow: 0 0 0 2px ${config.ligthPrimary};
      box-shadow: 0 0 0 2px ${config.ligthPrimary};
      border-right-width: 1px !important;
    }
    .ant-calendar-range .ant-calendar-input-disabled,
    .ant-calendar-range .ant-calendar-time-picker-input-disabled {
      background-color: #f5f5f5;
      opacity: 1;
      cursor: not-allowed;
      color: rgba(0, 0, 0, 0.25);
    }
    .ant-calendar-range .ant-calendar-input-disabled:hover,
    .ant-calendar-range .ant-calendar-time-picker-input-disabled:hover {
      border-color: #e6d8d8;
      border-right-width: 1px !important;
    }
    textarea.ant-calendar-range .ant-calendar-input,
    textarea.ant-calendar-range .ant-calendar-time-picker-input {
      max-width: 100%;
      height: auto;
      vertical-align: bottom;
      -webkit-transition: all 0.3s, height 0s;
      transition: all 0.3s, height 0s;
      min-height: 32px;
    }
    .ant-calendar-range .ant-calendar-input-lg,
    .ant-calendar-range .ant-calendar-time-picker-input-lg {
      padding: 6px 11px;
      height: ${config.panelHeight};
      font-size: 16px;
    }
    .ant-calendar-range .ant-calendar-input-sm,
    .ant-calendar-range .ant-calendar-time-picker-input-sm {
      padding: 1px 7px;
      height: 24px;
    }
    .ant-calendar-range .ant-calendar-input:focus,
    .ant-calendar-range .ant-calendar-time-picker-input:focus {
      -webkit-box-shadow: none;
      box-shadow: none;
    }
    .ant-calendar-range .ant-calendar-time-picker-icon {
      display: none;
    }
    .ant-calendar-range.ant-calendar-week-number {
      width: 574px;
    }
    .ant-calendar-range.ant-calendar-week-number .ant-calendar-range-part {
      width: 286px;
    }
    .ant-calendar-range .ant-calendar-year-panel,
    .ant-calendar-range .ant-calendar-month-panel,
    .ant-calendar-range .ant-calendar-decade-panel {
      top: 34px;
    }
    .ant-calendar-range .ant-calendar-month-panel .ant-calendar-year-panel {
      top: 0;
    }
    .ant-calendar-range .ant-calendar-decade-panel-table,
    .ant-calendar-range .ant-calendar-year-panel-table,
    .ant-calendar-range .ant-calendar-month-panel-table {
      height: 208px;
    }
    .ant-calendar-range .ant-calendar-in-range-cell {
      border-radius: 0;
      position: relative;
    }
    .ant-calendar-range .ant-calendar-in-range-cell > div {
      position: relative;
      z-index: 1;
    }
    .ant-calendar-range .ant-calendar-in-range-cell:before {
      content: "";
      display: block;
      background: #e6f7ff;
      border-radius: 0;
      border: 0;
      position: absolute;
      top: 4px;
      bottom: 4px;
      left: 0;
      right: 0;
    }
    div.ant-calendar-range-quick-selector {
      text-align: left;
    }
    div.ant-calendar-range-quick-selector > a {
      margin-right: 8px;
    }
    .ant-calendar-range .ant-calendar-header,
    .ant-calendar-range .ant-calendar-month-panel-header,
    .ant-calendar-range .ant-calendar-year-panel-header {
      border-bottom: 0;
    }
    .ant-calendar-range .ant-calendar-body,
    .ant-calendar-range .ant-calendar-month-panel-body,
    .ant-calendar-range .ant-calendar-year-panel-body {
      border-top: 1px solid #e8e8e8;
    }
    .ant-calendar-range.ant-calendar-time .ant-calendar-time-picker {
      height: 207px;
      width: 100%;
      top: 68px;
      z-index: 2;
    }
    .ant-calendar-range.ant-calendar-time .ant-calendar-time-picker-panel {
      height: 267px;
      margin-top: -34px;
    }
    .ant-calendar-range.ant-calendar-time .ant-calendar-time-picker-inner {
      padding-top: ${config.panelHeight};
      height: 100%;
      background: none;
    }
    .ant-calendar-range.ant-calendar-time .ant-calendar-time-picker-combobox {
      display: inline-block;
      height: 100%;
      background-color: #fff;
      border-top: 1px solid #e8e8e8;
    }
    .ant-calendar-range.ant-calendar-time .ant-calendar-time-picker-select {
      height: 100%;
    }
    .ant-calendar-range.ant-calendar-time .ant-calendar-time-picker-select ul {
      max-height: 100%;
    }
    .ant-calendar-range.ant-calendar-time
      .ant-calendar-footer
      .ant-calendar-time-picker-btn {
      margin-right: 8px;
    }
    .ant-calendar-range.ant-calendar-time .ant-calendar-today-btn {
      margin: 8px 12px;
      height: 22px;
      line-height: 22px;
    }
    .ant-calendar-range-with-ranges.ant-calendar-time
      .ant-calendar-time-picker {
      height: 233px;
    }
    .ant-calendar-range.ant-calendar-show-time-picker .ant-calendar-body {
      border-top-color: transparent;
    }
    .ant-calendar-time-picker {
      position: absolute;
      width: 100%;
      top: ${config.panelHeight};
      background-color: #fff;
    }
    .ant-calendar-time-picker-panel {
      z-index: 1050;
      position: absolute;
      width: 100%;
    }
    .ant-calendar-time-picker-inner {
      display: inline-block;
      position: relative;
      outline: none;
      list-style: none;
      font-size: 14px;
      text-align: left;
      background-color: #fff;
      background-clip: padding-box;
      line-height: 1.5;
      overflow: hidden;
      width: 100%;
    }
    .ant-calendar-time-picker-combobox {
      width: 100%;
    }
    .ant-calendar-time-picker-column-1,
    .ant-calendar-time-picker-column-1 .ant-calendar-time-picker-select {
      width: 100%;
    }
    .ant-calendar-time-picker-column-2 .ant-calendar-time-picker-select {
      width: 50%;
    }
    .ant-calendar-time-picker-column-3 .ant-calendar-time-picker-select {
      width: 33.33%;
    }
    .ant-calendar-time-picker-column-4 .ant-calendar-time-picker-select {
      width: 25%;
    }
    .ant-calendar-time-picker-input-wrap {
      display: none;
    }
    .ant-calendar-time-picker-select {
      float: left;
      font-size: 14px;
      border-right: 1px solid #e8e8e8;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      overflow: hidden;
      position: relative;
      height: 226px;
    }
    .ant-calendar-time-picker-select:hover {
      overflow-y: auto;
    }
    .ant-calendar-time-picker-select:first-child {
      border-left: 0;
      margin-left: 0;
    }
    .ant-calendar-time-picker-select:last-child {
      border-right: 0;
    }
    .ant-calendar-time-picker-select ul {
      list-style: none;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      width: 100%;
      max-height: 206px;
    }
    .ant-calendar-time-picker-select li {
      padding-left: 32px;
      list-style: none;
      -webkit-box-sizing: content-box;
      box-sizing: content-box;
      margin: 0;
      width: 100%;
      height: 24px;
      line-height: 24px;
      cursor: pointer;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      -webkit-transition: background 0.3s ease;
      transition: background 0.3s ease;
    }
    .ant-calendar-time-picker-select li:last-child:after {
      content: "";
      height: 202px;
      display: block;
    }
    .ant-calendar-time-picker-select li:hover {
      background: #e6f7ff;
    }
    li.ant-calendar-time-picker-select-option-selected {
      background: #f5f5f5;
      font-weight: bold;
    }
    li.ant-calendar-time-picker-select-option-disabled {
      color: rgba(0, 0, 0, 0.25);
    }
    li.ant-calendar-time-picker-select-option-disabled:hover {
      background: transparent;
      cursor: not-allowed;
    }
    .ant-calendar-time .ant-calendar-day-select {
      padding: 0 2px;
      font-weight: 500;
      display: inline-block;
      color: rgba(0, 0, 0, 0.85);
      line-height: 34px;
    }
    .ant-calendar-time .ant-calendar-footer {
      position: relative;
      height: auto;
    }
    .ant-calendar-time .ant-calendar-footer-btn {
      text-align: right;
    }
    .ant-calendar-time .ant-calendar-footer .ant-calendar-today-btn {
      float: left;
      margin: 0;
    }
    .ant-calendar-time .ant-calendar-footer .ant-calendar-time-picker-btn {
      display: inline-block;
      margin-right: 8px;
    }
    .ant-calendar-time
      .ant-calendar-footer
      .ant-calendar-time-picker-btn-disabled {
      color: rgba(0, 0, 0, 0.25);
    }
    .ant-calendar-month-panel {
      position: absolute;
      top: 1px;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 10;
      border-radius: 4px;
      background: #fff;
      outline: none;
    }
    .ant-calendar-month-panel > div {
      height: 100%;
    }
    .ant-calendar-month-panel-hidden {
      display: none;
    }
    .ant-calendar-month-panel-header {
      height: ${config.panelHeight};
      line-height: ${config.panelHeight};
      text-align: center;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      border-bottom: 1px solid #e8e8e8;
    }
    .ant-calendar-month-panel-header a:hover {
      color: ${config.primary};
    }
    .ant-calendar-month-panel-header .ant-calendar-month-panel-century-select,
    .ant-calendar-month-panel-header .ant-calendar-month-panel-decade-select,
    .ant-calendar-month-panel-header .ant-calendar-month-panel-year-select,
    .ant-calendar-month-panel-header .ant-calendar-month-panel-month-select {
      padding: 0 2px;
      font-weight: 500;
      display: inline-block;
      color: rgba(0, 0, 0, 0.85);
      line-height: ${config.panelHeight};
    }
    .ant-calendar-month-panel-header
      .ant-calendar-month-panel-century-select-arrow,
    .ant-calendar-month-panel-header
      .ant-calendar-month-panel-decade-select-arrow,
    .ant-calendar-month-panel-header
      .ant-calendar-month-panel-year-select-arrow,
    .ant-calendar-month-panel-header
      .ant-calendar-month-panel-month-select-arrow {
      display: none;
    }
    .ant-calendar-month-panel-header .ant-calendar-month-panel-prev-century-btn,
    .ant-calendar-month-panel-header .ant-calendar-month-panel-next-century-btn,
    .ant-calendar-month-panel-header .ant-calendar-month-panel-prev-decade-btn,
    .ant-calendar-month-panel-header .ant-calendar-month-panel-next-decade-btn,
    .ant-calendar-month-panel-header .ant-calendar-month-panel-prev-month-btn,
    .ant-calendar-month-panel-header .ant-calendar-month-panel-next-month-btn,
    .ant-calendar-month-panel-header .ant-calendar-month-panel-prev-year-btn,
    .ant-calendar-month-panel-header .ant-calendar-month-panel-next-year-btn {
      position: absolute;
      top: 0;
      color: rgba(0, 0, 0, 0.45);
      padding: 0 5px;
      font-size: 16px;
      display: inline-block;
      line-height: 52px;
    }
    .ant-calendar-month-panel-header .ant-calendar-month-panel-prev-century-btn,
    .ant-calendar-month-panel-header .ant-calendar-month-panel-prev-decade-btn,
    .ant-calendar-month-panel-header .ant-calendar-month-panel-prev-year-btn {
      left: ${config.ClickOuter};
    }
    .ant-calendar-month-panel-header
      .ant-calendar-month-panel-prev-century-btn:after,
    .ant-calendar-month-panel-header
      .ant-calendar-month-panel-prev-decade-btn:after,
    .ant-calendar-month-panel-header
      .ant-calendar-month-panel-prev-year-btn:after {
      content: "«";
    }
    .ant-calendar-month-panel-header .ant-calendar-month-panel-next-century-btn,
    .ant-calendar-month-panel-header .ant-calendar-month-panel-next-decade-btn,
    .ant-calendar-month-panel-header .ant-calendar-month-panel-next-year-btn {
      right: ${config.ClickOuter};
    }
    .ant-calendar-month-panel-header
      .ant-calendar-month-panel-next-century-btn:after,
    .ant-calendar-month-panel-header
      .ant-calendar-month-panel-next-decade-btn:after,
    .ant-calendar-month-panel-header
      .ant-calendar-month-panel-next-year-btn:after {
      content: "»";
    }
    .ant-calendar-month-panel-header .ant-calendar-month-panel-prev-month-btn {
      left: ${config.ClickInner};
    }
    .ant-calendar-month-panel-header
      .ant-calendar-month-panel-prev-month-btn:after {
      content: "‹";
    }
    .ant-calendar-month-panel-header .ant-calendar-month-panel-next-month-btn {
      right: ${config.ClickInner};
    }
    .ant-calendar-month-panel-header
      .ant-calendar-month-panel-next-month-btn:after {
      content: "›";
    }
    .ant-calendar-month-panel-body {
      height: calc(100% - #{${config.panelHeight}});
    }
    .ant-calendar-month-panel-table {
      table-layout: fixed;
      width: 100%;
      height: 100%;
      border-collapse: separate;
    }
    .ant-calendar-month-panel-selected-cell .ant-calendar-month-panel-month {
      background: ${config.darkPrimary};
      color: #fff;
    }
    .ant-calendar-month-panel-selected-cell
      .ant-calendar-month-panel-month:hover {
      background: ${config.darkPrimary};
      color: #fff;
    }
    .ant-calendar-month-panel-cell {
      text-align: center;
    }
    .ant-calendar-month-panel-cell-disabled .ant-calendar-month-panel-month,
    .ant-calendar-month-panel-cell-disabled
      .ant-calendar-month-panel-month:hover {
      cursor: not-allowed;
      color: #bcbcbc;
      background: #f5f5f5;
    }
    .ant-calendar-month-panel-month {
      display: inline-block;
      margin: 0 auto;
      color: rgba(0, 0, 0, 0.65);
      background: transparent;
      text-align: center;
      height: 24px;
      line-height: 24px;
      padding: 0 8px;
      border-radius: 2px;
      -webkit-transition: background 0.3s ease;
      transition: background 0.3s ease;
    }
    .ant-calendar-month-panel-month:hover {
      background: #e6f7ff;
      cursor: pointer;
    }
    .ant-calendar-year-panel {
      position: absolute;
      top: 1px;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 10;
      border-radius: 4px;
      background: #fff;
      outline: none;
    }
    .ant-calendar-year-panel > div {
      height: 100%;
    }
    .ant-calendar-year-panel-hidden {
      display: none;
    }
    .ant-calendar-year-panel-header {
      height: ${config.panelHeight};
      line-height: ${config.panelHeight};
      text-align: center;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      border-bottom: 1px solid #e8e8e8;
    }
    .ant-calendar-year-panel-header a:hover {
      color: ${config.primary};
    }
    .ant-calendar-year-panel-header .ant-calendar-year-panel-century-select,
    .ant-calendar-year-panel-header .ant-calendar-year-panel-decade-select,
    .ant-calendar-year-panel-header .ant-calendar-year-panel-year-select,
    .ant-calendar-year-panel-header .ant-calendar-year-panel-month-select {
      padding: 0 2px;
      font-weight: 500;
      display: inline-block;
      color: rgba(0, 0, 0, 0.85);
      line-height: ${config.panelHeight};
    }
    .ant-calendar-year-panel-header
      .ant-calendar-year-panel-century-select-arrow,
    .ant-calendar-year-panel-header
      .ant-calendar-year-panel-decade-select-arrow,
    .ant-calendar-year-panel-header .ant-calendar-year-panel-year-select-arrow,
    .ant-calendar-year-panel-header
      .ant-calendar-year-panel-month-select-arrow {
      display: none;
    }
    .ant-calendar-year-panel-header .ant-calendar-year-panel-prev-century-btn,
    .ant-calendar-year-panel-header .ant-calendar-year-panel-next-century-btn,
    .ant-calendar-year-panel-header .ant-calendar-year-panel-prev-decade-btn,
    .ant-calendar-year-panel-header .ant-calendar-year-panel-next-decade-btn,
    .ant-calendar-year-panel-header .ant-calendar-year-panel-prev-month-btn,
    .ant-calendar-year-panel-header .ant-calendar-year-panel-next-month-btn,
    .ant-calendar-year-panel-header .ant-calendar-year-panel-prev-year-btn,
    .ant-calendar-year-panel-header .ant-calendar-year-panel-next-year-btn {
      position: absolute;
      top: 0;
      color: rgba(0, 0, 0, 0.45);
      padding: 0 5px;
      font-size: 16px;
      display: inline-block;
      line-height: ${config.panelHeight};
    }
    .ant-calendar-year-panel-header .ant-calendar-year-panel-prev-century-btn,
    .ant-calendar-year-panel-header .ant-calendar-year-panel-prev-decade-btn,
    .ant-calendar-year-panel-header .ant-calendar-year-panel-prev-year-btn {
      left: ${config.ClickOuter};
    }
    .ant-calendar-year-panel-header
      .ant-calendar-year-panel-prev-century-btn:after,
    .ant-calendar-year-panel-header
      .ant-calendar-year-panel-prev-decade-btn:after,
    .ant-calendar-year-panel-header
      .ant-calendar-year-panel-prev-year-btn:after {
      content: "«";
    }
    .ant-calendar-year-panel-header .ant-calendar-year-panel-next-century-btn,
    .ant-calendar-year-panel-header .ant-calendar-year-panel-next-decade-btn,
    .ant-calendar-year-panel-header .ant-calendar-year-panel-next-year-btn {
      right: ${config.ClickOuter};
    }
    .ant-calendar-year-panel-header
      .ant-calendar-year-panel-next-century-btn:after,
    .ant-calendar-year-panel-header
      .ant-calendar-year-panel-next-decade-btn:after,
    .ant-calendar-year-panel-header
      .ant-calendar-year-panel-next-year-btn:after {
      content: "»";
    }
    .ant-calendar-year-panel-header .ant-calendar-year-panel-prev-month-btn {
      left: ${config.ClickInner};
    }
    .ant-calendar-year-panel-header
      .ant-calendar-year-panel-prev-month-btn:after {
      content: "‹";
    }
    .ant-calendar-year-panel-header .ant-calendar-year-panel-next-month-btn {
      right: ${config.ClickInner};
    }
    .ant-calendar-year-panel-header
      .ant-calendar-year-panel-next-month-btn:after {
      content: "›";
    }
    .ant-calendar-year-panel-body {
      height: calc(100% - #{${config.panelHeight}});
    }
    .ant-calendar-year-panel-table {
      table-layout: fixed;
      width: 100%;
      height: 100%;
      border-collapse: separate;
    }
    .ant-calendar-year-panel-cell {
      text-align: center;
    }
    .ant-calendar-year-panel-year {
      display: inline-block;
      margin: 0 auto;
      color: rgba(0, 0, 0, 0.65);
      background: transparent;
      text-align: center;
      height: 24px;
      line-height: 24px;
      padding: 0 8px;
      border-radius: 2px;
      -webkit-transition: background 0.3s ease;
      transition: background 0.3s ease;
    }
    .ant-calendar-year-panel-year:hover {
      background: #e6f7ff;
      cursor: pointer;
    }
    .ant-calendar-year-panel-selected-cell .ant-calendar-year-panel-year {
      background: ${config.darkPrimary};
      color: #fff;
    }
    .ant-calendar-year-panel-selected-cell .ant-calendar-year-panel-year:hover {
      background: ${config.darkPrimary};
      color: #fff;
    }
    .ant-calendar-year-panel-last-decade-cell .ant-calendar-year-panel-year,
    .ant-calendar-year-panel-next-decade-cell .ant-calendar-year-panel-year {
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      color: rgba(0, 0, 0, 0.25);
    }
    .ant-calendar-decade-panel {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 10;
      background: #fff;
      border-radius: 4px;
      outline: none;
    }
    .ant-calendar-decade-panel-hidden {
      display: none;
    }
    .ant-calendar-decade-panel-header {
      height: ${config.panelHeight};
      line-height: ${config.panelHeight};
      text-align: center;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      border-bottom: 1px solid #e8e8e8;
    }
    .ant-calendar-decade-panel-header a:hover {
      color: ${config.primary};
    }
    .ant-calendar-decade-panel-header .ant-calendar-decade-panel-century-select,
    .ant-calendar-decade-panel-header .ant-calendar-decade-panel-decade-select,
    .ant-calendar-decade-panel-header .ant-calendar-decade-panel-year-select,
    .ant-calendar-decade-panel-header .ant-calendar-decade-panel-month-select {
      padding: 0 2px;
      font-weight: 500;
      display: inline-block;
      color: rgba(0, 0, 0, 0.85);
      line-height: ${config.panelHeight};
    }
    .ant-calendar-decade-panel-header
      .ant-calendar-decade-panel-century-select-arrow,
    .ant-calendar-decade-panel-header
      .ant-calendar-decade-panel-decade-select-arrow,
    .ant-calendar-decade-panel-header
      .ant-calendar-decade-panel-year-select-arrow,
    .ant-calendar-decade-panel-header
      .ant-calendar-decade-panel-month-select-arrow {
      display: none;
    }
    .ant-calendar-decade-panel-header
      .ant-calendar-decade-panel-prev-century-btn,
    .ant-calendar-decade-panel-header
      .ant-calendar-decade-panel-next-century-btn,
    .ant-calendar-decade-panel-header
      .ant-calendar-decade-panel-prev-decade-btn,
    .ant-calendar-decade-panel-header
      .ant-calendar-decade-panel-next-decade-btn,
    .ant-calendar-decade-panel-header .ant-calendar-decade-panel-prev-month-btn,
    .ant-calendar-decade-panel-header .ant-calendar-decade-panel-next-month-btn,
    .ant-calendar-decade-panel-header .ant-calendar-decade-panel-prev-year-btn,
    .ant-calendar-decade-panel-header .ant-calendar-decade-panel-next-year-btn {
      position: absolute;
      top: 0;
      color: rgba(0, 0, 0, 0.45);
      padding: 0 5px;
      font-size: 16px;
      display: inline-block;
      line-height: ${config.panelHeight};
    }
    .ant-calendar-decade-panel-header
      .ant-calendar-decade-panel-prev-century-btn,
    .ant-calendar-decade-panel-header
      .ant-calendar-decade-panel-prev-decade-btn,
    .ant-calendar-decade-panel-header .ant-calendar-decade-panel-prev-year-btn {
      left: ${config.ClickOuter};
    }
    .ant-calendar-decade-panel-header
      .ant-calendar-decade-panel-prev-century-btn:after,
    .ant-calendar-decade-panel-header
      .ant-calendar-decade-panel-prev-decade-btn:after,
    .ant-calendar-decade-panel-header
      .ant-calendar-decade-panel-prev-year-btn:after {
      content: "«";
    }
    .ant-calendar-decade-panel-header
      .ant-calendar-decade-panel-next-century-btn,
    .ant-calendar-decade-panel-header
      .ant-calendar-decade-panel-next-decade-btn,
    .ant-calendar-decade-panel-header .ant-calendar-decade-panel-next-year-btn {
      right: ${config.ClickOuter};
    }
    .ant-calendar-decade-panel-header
      .ant-calendar-decade-panel-next-century-btn:after,
    .ant-calendar-decade-panel-header
      .ant-calendar-decade-panel-next-decade-btn:after,
    .ant-calendar-decade-panel-header
      .ant-calendar-decade-panel-next-year-btn:after {
      content: "»";
    }
    .ant-calendar-decade-panel-header
      .ant-calendar-decade-panel-prev-month-btn {
      left: ${config.ClickInner};
    }
    .ant-calendar-decade-panel-header
      .ant-calendar-decade-panel-prev-month-btn:after {
      content: "‹";
    }
    .ant-calendar-decade-panel-header
      .ant-calendar-decade-panel-next-month-btn {
      right: ${config.ClickInner};
    }
    .ant-calendar-decade-panel-header
      .ant-calendar-decade-panel-next-month-btn:after {
      content: "›";
    }
    .ant-calendar-decade-panel-body {
      height: calc(100% - #{${config.panelHeight}});
    }
    .ant-calendar-decade-panel-table {
      table-layout: fixed;
      width: 100%;
      height: 100%;
      border-collapse: separate;
    }
    .ant-calendar-decade-panel-cell {
      text-align: center;
      white-space: nowrap;
    }
    .ant-calendar-decade-panel-decade {
      display: inline-block;
      margin: 0 auto;
      color: rgba(0, 0, 0, 0.65);
      background: transparent;
      text-align: center;
      height: 24px;
      line-height: 24px;
      padding: 0 6px;
      border-radius: 2px;
      -webkit-transition: background 0.3s ease;
      transition: background 0.3s ease;
    }
    .ant-calendar-decade-panel-decade:hover {
      background: #e6f7ff;
      cursor: pointer;
    }
    .ant-calendar-decade-panel-selected-cell .ant-calendar-decade-panel-decade {
      background: ${config.darkPrimary};
      color: #fff;
    }
    .ant-calendar-decade-panel-selected-cell
      .ant-calendar-decade-panel-decade:hover {
      background: ${config.darkPrimary};
      color: #fff;
    }
    .ant-calendar-decade-panel-last-century-cell
      .ant-calendar-decade-panel-decade,
    .ant-calendar-decade-panel-next-century-cell
      .ant-calendar-decade-panel-decade {
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      color: rgba(0, 0, 0, 0.25);
    }
    .ant-calendar-month .ant-calendar-month-header-wrap {
      position: relative;
      height: 288px;
    }
    .ant-calendar-month .ant-calendar-month-panel,
    .ant-calendar-month .ant-calendar-year-panel {
      top: 0;
      height: 100%;
    }
    .ant-calendar-week-number-cell {
      opacity: 0.5;
    }
    .ant-calendar-week-number .ant-calendar-body tr {
      -webkit-transition: all 0.3s;
      transition: all 0.3s;
      cursor: pointer;
    }
    .ant-calendar-week-number .ant-calendar-body tr:hover {
      background: #e6f7ff;
    }
    .ant-calendar-week-number .ant-calendar-body tr.ant-calendar-active-week {
      background: #bae7ff;
      font-weight: bold;
    }
    .ant-calendar-week-number
      .ant-calendar-body
      tr
      .ant-calendar-selected-day
      .ant-calendar-date,
    .ant-calendar-week-number
      .ant-calendar-body
      tr
      .ant-calendar-selected-day:hover
      .ant-calendar-date {
      background: transparent;
      color: rgba(0, 0, 0, 0.65);
    }
  }
`;
