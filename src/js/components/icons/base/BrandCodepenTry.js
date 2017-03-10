// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import CSSClassnames from '../../../utils/CSSClassnames';
import Intl from '../../../utils/Intl';
import Props from '../../../utils/Props';

const CLASS_ROOT = CSSClassnames.CONTROL_ICON;
const COLOR_INDEX = CSSClassnames.COLOR_INDEX;

export default class Icon extends Component {
  componentDidMount() {
    console.warn(
      'Base icons are not deprecated, use raw svg with Icon component'
    );
  }
  render () {
    const { className, colorIndex } = this.props;
    let { a11yTitle, size, responsive } = this.props;
    let { intl } = this.context;

    const classes = classnames(
      CLASS_ROOT,
      `${CLASS_ROOT}-brand-codepen-try`,
      className,
      {
        [`${CLASS_ROOT}--${size}`]: size,
        [`${CLASS_ROOT}--responsive`]: responsive,
        [`${COLOR_INDEX}-${colorIndex}`]: colorIndex
      }
    );

    a11yTitle = a11yTitle || Intl.getMessage(intl, 'brand-codepen-try');

    const restProps = Props.omit(this.props, Object.keys(Icon.propTypes));
    return <svg {...restProps} version="1.1" viewBox="0 0 312 137" width="24px" height="24px" role="img" className={classes} aria-label={a11yTitle}><path fill="#000000" fillRule="evenodd" d="M312,125 C312,131.627 306.627,137 300,137 L12,137 C5.373,137 0,131.627 0,125 L0,12 C0,5.373 5.373,0 12,0 L300,0 C306.627,0 312,5.373 312,12 L312,125 L312,125 Z M51.011,76.064 C53.707,76.064 56.179,77.039 58.097,78.65 L60.707,75.539 C58.083,73.333 54.7,72.001 51.011,72.001 C42.689,72.001 35.918,78.772 35.918,87.094 C35.918,95.416 42.689,102.188 51.011,102.188 C54.7,102.188 58.083,100.856 60.707,98.649 L58.097,95.539 C56.179,97.151 53.707,98.124 51.011,98.124 C44.93,98.124 39.982,93.176 39.982,87.095 C39.982,81.014 44.93,76.064 51.011,76.064 L51.011,76.064 Z M134.562,72.873 L126.435,72.873 C125.313,72.873 124.403,73.783 124.403,74.904 L124.403,99.285 C124.403,100.408 125.313,101.316 126.435,101.316 L134.562,101.316 C142.404,101.316 148.784,94.937 148.784,87.093 C148.784,79.251 142.404,72.873 134.562,72.873 L134.562,72.873 Z M134.562,97.254 L128.466,97.254 L128.466,76.938 L134.562,76.938 C140.164,76.938 144.721,81.495 144.721,87.096 C144.722,92.697 140.164,97.254 134.562,97.254 L134.562,97.254 Z M159.786,74.904 L159.786,99.285 C159.786,100.408 160.695,101.316 161.818,101.316 L178.75,101.316 L178.75,97.253 L163.852,97.253 L163.852,89.126 L173.332,89.126 L173.332,85.063 L163.852,85.063 L163.852,76.936 L178.75,76.936 L178.75,72.874 L161.818,72.874 C160.695,72.873 159.786,73.783 159.786,74.904 L159.786,74.904 Z M221.289,74.904 L221.289,99.285 C221.289,100.408 222.198,101.316 223.32,101.316 L240.252,101.316 L240.252,97.253 L225.354,97.253 L225.354,89.126 L234.834,89.126 L234.834,85.063 L225.354,85.063 L225.354,76.936 L240.252,76.936 L240.252,72.874 L223.32,72.874 C222.198,72.873 221.289,73.783 221.289,74.904 L221.289,74.904 Z M201.952,72.873 L193.148,72.873 C192.025,72.873 191.116,73.783 191.116,74.904 L191.116,101.318 L195.179,101.318 L195.179,89.127 L201.95,89.127 C206.43,89.127 210.077,85.481 210.077,81 C210.077,76.519 206.434,72.873 201.952,72.873 L201.952,72.873 Z M201.952,85.062 L195.18,85.062 L195.18,76.935 L201.952,76.935 C204.193,76.935 206.015,78.757 206.015,80.998 C206.016,83.241 204.193,85.062 201.952,85.062 L201.952,85.062 Z M272.018,72.873 L272.018,93.674 L255.293,73.604 C254.745,72.946 253.846,72.703 253.04,72.995 C252.234,73.287 251.699,74.05 251.699,74.905 L251.699,101.319 L255.763,101.319 L255.763,80.518 L272.488,100.587 C272.883,101.061 273.458,101.318 274.05,101.318 C274.281,101.318 274.516,101.277 274.741,101.195 C275.546,100.904 276.082,100.14 276.082,99.285 L276.082,72.873 L272.018,72.873 L272.018,72.873 Z M112.861,80.168 C112.851,80.115 112.841,80.063 112.828,80.012 C112.82,79.981 112.808,79.952 112.799,79.921 C112.784,79.875 112.77,79.83 112.752,79.785 C112.738,79.754 112.725,79.724 112.71,79.695 C112.689,79.652 112.669,79.611 112.647,79.57 C112.629,79.542 112.612,79.513 112.593,79.484 C112.569,79.445 112.542,79.409 112.515,79.372 C112.494,79.346 112.473,79.318 112.451,79.292 C112.422,79.257 112.39,79.225 112.359,79.191 C112.334,79.166 112.31,79.142 112.284,79.118 C112.251,79.087 112.215,79.058 112.179,79.029 C112.152,79.008 112.124,78.986 112.095,78.966 C112.085,78.958 112.075,78.949 112.064,78.944 L92.254,65.736 C91.628,65.319 90.814,65.319 90.189,65.736 L70.377,78.941 C70.366,78.949 70.357,78.958 70.347,78.964 C70.318,78.984 70.29,79.006 70.262,79.028 C70.226,79.055 70.191,79.085 70.157,79.116 C70.132,79.139 70.107,79.163 70.083,79.188 C70.051,79.221 70.021,79.254 69.99,79.29 C69.968,79.315 69.947,79.343 69.927,79.37 C69.899,79.407 69.873,79.444 69.848,79.483 C69.83,79.512 69.812,79.54 69.795,79.569 C69.772,79.61 69.751,79.651 69.732,79.692 C69.717,79.723 69.704,79.753 69.69,79.783 C69.672,79.827 69.657,79.873 69.642,79.919 C69.632,79.95 69.621,79.98 69.614,80.01 C69.6,80.062 69.591,80.114 69.581,80.166 C69.576,80.192 69.57,80.22 69.566,80.246 C69.555,80.327 69.549,80.407 69.549,80.49 L69.549,93.697 C69.549,93.778 69.555,93.86 69.566,93.94 C69.57,93.966 69.576,93.994 69.581,94.02 C69.591,94.073 69.601,94.124 69.614,94.175 C69.622,94.206 69.633,94.235 69.642,94.266 C69.657,94.313 69.672,94.358 69.69,94.403 C69.704,94.434 69.717,94.464 69.732,94.494 C69.752,94.536 69.772,94.577 69.795,94.618 C69.812,94.647 69.83,94.676 69.848,94.704 C69.873,94.743 69.899,94.78 69.927,94.817 C69.948,94.844 69.968,94.871 69.99,94.897 C70.02,94.932 70.051,94.964 70.083,94.999 C70.107,95.024 70.132,95.048 70.157,95.071 C70.191,95.102 70.226,95.131 70.262,95.159 C70.29,95.18 70.318,95.203 70.347,95.223 C70.358,95.231 70.367,95.24 70.377,95.245 L90.188,108.452 C90.5,108.661 90.86,108.765 91.22,108.765 C91.58,108.765 91.941,108.661 92.253,108.452 L112.063,95.245 C112.075,95.238 112.084,95.228 112.094,95.223 C112.123,95.202 112.151,95.18 112.178,95.159 C112.214,95.131 112.25,95.102 112.283,95.071 C112.309,95.048 112.333,95.024 112.358,94.999 C112.389,94.966 112.42,94.933 112.45,94.897 C112.472,94.871 112.494,94.844 112.514,94.817 C112.541,94.78 112.568,94.743 112.592,94.704 C112.611,94.676 112.628,94.647 112.646,94.618 C112.668,94.577 112.689,94.536 112.709,94.494 C112.724,94.464 112.737,94.434 112.751,94.403 C112.769,94.358 112.783,94.313 112.798,94.266 C112.808,94.235 112.819,94.206 112.827,94.175 C112.841,94.124 112.85,94.072 112.86,94.02 C112.864,93.994 112.871,93.966 112.875,93.94 C112.885,93.86 112.892,93.778 112.892,93.697 L112.892,80.492 C112.892,80.409 112.885,80.329 112.875,80.248 C112.872,80.223 112.865,80.195 112.861,80.168 L112.861,80.168 Z M91.22,91.501 L84.633,87.096 L91.22,82.69 L97.808,87.096 L91.22,91.501 L91.22,91.501 Z M89.357,79.454 L81.282,84.855 L74.764,80.495 L89.357,70.766 L89.357,79.454 L89.357,79.454 L89.357,79.454 Z M77.933,87.096 L73.273,90.212 L73.273,83.979 L77.933,87.096 L77.933,87.096 Z M81.282,89.336 L89.357,94.736 L89.357,103.424 L74.764,93.695 L81.282,89.336 L81.282,89.336 Z M93.082,94.736 L101.157,89.336 L107.676,93.695 L93.082,103.424 L93.082,94.736 L93.082,94.736 Z M104.508,87.096 L109.168,83.979 L109.168,90.211 L104.508,87.096 L104.508,87.096 Z M101.157,84.854 L93.082,79.454 L93.082,70.766 L107.676,80.495 L101.157,84.854 L101.157,84.854 Z M81.272,51.355 L79.064,51.355 L79.064,34.048 L72.577,34.048 L72.577,32.033 L87.759,32.033 L87.759,34.048 L81.272,34.048 L81.272,51.355 L81.272,51.355 Z M107.915,51.355 L102.311,43.847 L96.79,43.847 L96.79,51.355 L94.61,51.355 L94.61,32.033 L102.918,32.033 C107.169,32.033 109.902,34.324 109.902,37.802 C109.902,41.031 107.694,42.908 104.657,43.461 L110.592,51.356 L107.915,51.355 L107.915,51.355 L107.915,51.355 Z M102.752,34.048 L96.79,34.048 L96.79,41.887 L102.725,41.887 C105.623,41.887 107.693,40.396 107.693,37.885 C107.693,35.483 105.872,34.048 102.752,34.048 L102.752,34.048 Z M124.897,51.355 L122.689,51.355 L122.689,43.709 L114.656,32.033 L117.306,32.033 L123.821,41.694 L130.39,32.033 L132.93,32.033 L124.897,43.681 L124.897,51.355 L124.897,51.355 Z M152.59,32.033 L152.59,51.355 L150.409,51.355 L150.409,32.033 L152.59,32.033 L152.59,32.033 Z M168.326,51.355 L166.118,51.355 L166.118,34.048 L159.631,34.048 L159.631,32.033 L174.813,32.033 L174.813,34.048 L168.327,34.048 L168.327,51.355 L168.326,51.355 L168.326,51.355 Z M201.677,51.686 C195.798,51.686 191.85,47.077 191.85,41.722 C191.85,36.367 195.852,31.702 201.733,31.702 C207.612,31.702 211.559,36.311 211.559,41.667 C211.559,47.021 207.557,51.686 201.677,51.686 L201.677,51.686 Z M201.677,33.717 C197.26,33.717 194.114,37.25 194.114,41.667 C194.114,46.084 197.317,49.672 201.733,49.672 C206.149,49.672 209.295,46.139 209.295,41.722 C209.295,37.305 206.094,33.717 201.677,33.717 L201.677,33.717 Z M233.15,32.033 L235.275,32.033 L235.275,51.355 L233.537,51.355 L221.06,35.511 L221.06,51.355 L218.935,51.355 L218.935,32.033 L220.976,32.033 L233.15,47.518 L233.15,32.033 L233.15,32.033 L233.15,32.033 Z" stroke="none"/></svg>;
  }
};

Icon.contextTypes = {
  intl: PropTypes.object
};

Icon.defaultProps = {
  responsive: true
};

Icon.displayName = 'BrandCodepenTry';

Icon.icon = true;

Icon.propTypes = {
  a11yTitle: PropTypes.string,
  colorIndex: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge', 'huge']),
  responsive: PropTypes.bool
};

