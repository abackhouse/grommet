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
      `${CLASS_ROOT}-access-ad`,
      className,
      {
        [`${CLASS_ROOT}--${size}`]: size,
        [`${CLASS_ROOT}--responsive`]: responsive,
        [`${COLOR_INDEX}-${colorIndex}`]: colorIndex
      }
    );

    a11yTitle = a11yTitle || Intl.getMessage(intl, 'access-ad');

    const restProps = Props.omit(this.props, Object.keys(Icon.propTypes));
    return <svg {...restProps} version="1.1" viewBox="0 0 24 24" width="24px" height="24px" role="img" className={classes} aria-label={a11yTitle}><path fill="#000000" fillRule="evenodd" d="M12.3018676,10.102852 C13.6209278,10.102852 14.6837926,11.172641 14.6837926,12.484777 C14.6837926,13.8003751 13.6209278,14.8701641 12.3018676,14.8701641 L11.6786896,14.8701641 L11.6786896,10.102852 L12.3018676,10.102852 L12.3018676,10.102852 Z M12.5442146,16.9543484 C15.0126921,16.9543484 17.0207102,14.9497924 17.0207102,12.484777 C17.0207102,10.0093753 15.0334647,8.0082814 12.5649872,8.0082814 L12.5372904,8.0082814 L9.79876912,8.0082814 L9.79876912,16.9578105 L12.5442146,16.9578105 L12.5442146,16.9543484 Z M8.87336291,16.9595283 L6.91381417,16.9595283 L6.91381417,15.7754901 L3.63174315,15.7754901 L2.8770053,16.9595283 L0,16.9595283 L6.42565804,8.00653714 L8.87336291,8.00653714 L8.87336291,16.9595283 L8.87336291,16.9595283 Z M6.92591824,13.9098051 L4.8625065,13.9098051 L6.92591824,10.7039002 L6.92591824,13.9098051 L6.92591824,13.9098051 Z M22.2620257,8 L21.9781335,8 L21.44497,8 L21.1610778,8 C22.4039718,9.23596978 23.1206265,10.9289368 23.1206265,12.6876837 C23.1206265,14.2490909 22.5597663,15.7412561 21.5661435,16.9252944 L21.8500358,16.9252944 L22.3347298,16.9252944 L22.6220841,16.9252944 C23.5049197,15.7100972 24,14.2213941 24,12.6876837 C24,10.9600957 23.3698978,9.29828759 22.2620257,8 M20.0102192,8 L19.726327,8 L19.1931635,8 L18.9092713,8 C20.1521653,9.23596978 20.86882,10.9289368 20.86882,12.6876837 C20.86882,14.2490909 20.3079598,15.7412561 19.314337,16.9252944 L19.5982293,16.9252944 L20.0829233,16.9252944 L20.3633534,16.9252944 C21.2531132,15.7100972 21.7481935,14.2213941 21.7481935,12.6876837 C21.7481935,10.9600957 21.1180913,9.29828759 20.0102192,8 M17.7584421,8 L17.4745499,8 L16.9344623,8 L16.6574942,8 C17.9003882,9.23596978 18.6101188,10.9289368 18.6101188,12.6876837 C18.6101188,14.2490909 18.0492585,15.7412561 17.06256,16.9252944 L17.3464522,16.9252944 L17.8276841,16.9252944 L18.1115763,16.9252944 C19.0013361,15.7100972 19.4894922,14.2213941 19.4894922,12.6876837 C19.4894922,10.9600957 18.8663142,9.29828759 17.7584421,8" stroke="none"/></svg>;
  }
};

Icon.contextTypes = {
  intl: PropTypes.object
};

Icon.defaultProps = {
  responsive: true
};

Icon.displayName = 'AccessAd';

Icon.icon = true;

Icon.propTypes = {
  a11yTitle: PropTypes.string,
  colorIndex: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge', 'huge']),
  responsive: PropTypes.bool
};

