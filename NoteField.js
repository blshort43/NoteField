/* eslint-disable indent */
/**
 *
 * NoteField
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Card } from 'rebass';

// NOTE Notefield has a hard coded height to keep it from changing size when the border appears around it when focused.
const RebassTextfield = styled(Card)`
  outline: none;
  border-radius: ${props => (props.borderRadius ? props.borderRadius : '6px')};
  border: ${props => (props.border ? props.border : '1px solid #909090')};
  box-sizing: border-box;
  transition: all 0.25s linear;
  margin: 0;
  font-family: inherit;
  padding: 15px;
  height: ${props => (props.height ? props.height : '90px')};
  min-height: 90px;
  overflow: hidden;

  :invalid {
    color: gray;
  }
  :hover {
    border: solid 1px black;
    color: black;
  }
  :focus {
    outline-offset: 0;
    border: 1px solid #2e66ff;
    ::placeholder {
      opacity: 0;
    }
  }
`;

class NoteField extends React.PureComponent {
  render() {
    const { ...props } = this.props;
    return (
      <RebassTextfield
        {...props}
        as="textarea"
        border={
          !this.props.border
            ? {
                border: '1px solid #909090',
              }
            : {
                border: props.border,
              }
        }
      >
        {props.children}
      </RebassTextfield>
    );
  }
}

NoteField.propTypes = {};

export default NoteField;
