import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const BadgeDiv = styled.div`
  display: inline-block;
  border-radius: 40px;
  padding: 3px 10px;
  ${props =>
    props.active
      ? css`
          background: rgb(78, 203, 224);
          color: rgb(255, 255, 255);
        `
      : css`
          background: rgb(255, 255, 255);
          color: rgb(110, 94, 94);
          border: solid 1px;
          box-shadow: 2px rgb(110, 94, 94);
        `}
  margin: 5px;
  max-width: fit-content;
  font-family: Arial, Helvetica, sans-serif;
`;

export default function Badge({ active = true, children }) {
  return <BadgeDiv active={active}>{children}</BadgeDiv>;
}

Badge.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node.isRequired
};
