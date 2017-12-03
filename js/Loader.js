import PropTypes from 'prop-types';
import React from 'react';
import createReactClass from 'create-react-class';
import cx from 'classnames';
import ClassNameMixin from './mixins/ClassNameMixin';

import '../scss/components/_loader.scss';

const Loader = createReactClass({
  displayName: 'Loader',
  mixins: [ClassNameMixin],

  propTypes: {
    classPrefix: PropTypes.string,
    component: PropTypes.node,
    amStyle: PropTypes.string,
    rounded: PropTypes.bool,
  },

  getDefaultProps() {
    return {
      classPrefix: 'loader',
      component: 'div',
    };
  },

  render() {
    let classSet = this.getClassSet();
    const {
      className,
      component: Component,
      ...props,
    } = this.props;

    delete props.classPrefix;
    delete props.amStyle;
    delete props.rounded;

    return (
      <Component
        {...props}
        className={cx(classSet, className)}
      >
        <div className={this.prefixClass('bounce1')} />
        <div className={this.prefixClass('bounce2')} />
        <div className={this.prefixClass('bounce3')} />
      </Component>
    )
  },
});

export default Loader;
