/* eslint-disable indent */
/**
 *
 * NoteField
 *
 */

import React from 'react';
import styled from 'styled-components';
import { Card } from 'rebass';

  outline: none;
  border-radius: 4px;
  font-family: inherit;
  padding: 15px;
  height: 90px;
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
    border: 1.5px solid #3a71ff;
    color: black;
    ::placeholder {
      color: transparent;
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

export default NoteField;
