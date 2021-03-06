/**
 * ReactComponentExample takes a component example's render function and
 * outputs a rendered example as well as a code snippet.
 */
import CodeSnippet from './CodeSnippet';
import Prism from 'prismjs';
import PropTypes from 'prop-types';
import React from 'react';
import reactElementToJSXString from 'react-element-to-jsx-string';
require('prismjs/components/prism-jsx');

class ReactComponentExample extends React.PureComponent {
  highlightedMarkup() {
    const markup = reactElementToJSXString(this.props.renderComponent(), {
      showDefaultProps: false,
      showFunctions: true
    });

    return Prism.highlight(markup, Prism.languages.jsx);
  }

  render() {
    return (
      <div className='markup markup--react'>
        <div className='ds-u-border--1 ds-u-padding--1'>
          {this.props.renderComponent()}
        </div>

        <CodeSnippet language='jsx'>
          {this.highlightedMarkup()}
        </CodeSnippet>
      </div>
    );
  }
}

ReactComponentExample.propTypes = {
  /**
   * The exported render function from the .example.jsx file
   */
  renderComponent: PropTypes.func.isRequired
};

export default ReactComponentExample;
