import React, { memo, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Checkbox, TableCell } from '@mui/material';
import { nanoid } from '@reduxjs/toolkit';

import { StyledTableRow } from './styled';

export const TableRow = memo(
  ({ isSelected, onRowSelect, row, id, data, withoutCheck }) => {
    const cells = Object.entries(row);

    const { enable, is_custom } = data;

    const onRowSelectHandler = useCallback(
      (event) => {
        onRowSelect(event, id);
      },
      [onRowSelect]
    );

    return (
      <StyledTableRow
        key={row.name.value}
        selected={isSelected}
        isCustom={is_custom}
      >
        {!withoutCheck && (
          <TableCell padding="checkbox">
            <Checkbox
              color="primary"
              checked={isSelected}
              onClick={onRowSelectHandler}
              disabled={!enable}
            />
          </TableCell>
        )}
        {cells?.map(([cellName, cell]) => {
          const Component = cell.component;

          if (cellName === 'data' || cellName === 'id') {
            return null;
          }

          if (cell.value && !Component) {
            return (
              <TableCell
                key={nanoid(10)}
                align={cell.align}
                padding={cell.padding}
              >
                {cell.value}
              </TableCell>
            );
          }

          return (
            <TableCell
              key={nanoid(10)}
              align={cell.align}
              padding={row.padding}
            >
              <Component id={id} {...cell} {...data} disabled={!enable} />
            </TableCell>
          );
        })}
      </StyledTableRow>
    );
  }
);

TableRow.defaultProps = {
  withoutCheck: false,
};

TableRow.propTypes = {
  isSelected: PropTypes.bool.isRequired,
  onRowSelect: PropTypes.func.isRequired,
  row: PropTypes.object.isRequired,
  withoutCheck: PropTypes.bool,
};
