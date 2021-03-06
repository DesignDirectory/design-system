import PropTypes from 'prop-types';
import React from 'react';

const CodeSnippet = function(props) {
  return (
    <details open={props.open}>
      <summary className='ds-u-margin-y--1 ds-c-button ds-c-button--small ds-c-button--transparent ds-u-padding--1'>
        Code snippet
      </summary>
      <pre className={`language-${props.language} ds-u-margin-bottom--4`}>
        <code dangerouslySetInnerHTML={{ __html: props.children }} />
      </pre>
    </details>
  );
};

CodeSnippet.defaultProps = {
  language: 'markup',
  open: false
};

CodeSnippet.propTypes = {
  children: PropTypes.node.isRequired,
  language: PropTypes.oneOf(['markup', 'jsx']),
  open: PropTypes.bool
};

export default CodeSnippet;
