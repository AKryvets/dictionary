import React, { memo, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Checkbox, TableCell, TableRow, TableSortLabel } from '@mui/material';

import { TableHead } from './styled';

export const TableHeader = memo(
  ({
    onSelectAllClick,
    order,
    orderBy,
    rowCount,
    onRequestSort,
    headCells,
    selected,
    withoutCheck,
    TableHeaderComponents,
  }) => {
    const numSelected = selected.length;

    const createSortHandler = useCallback(
      (property) => (event) => {
        onRequestSort(event, property);
      },
      [onRequestSort]
    );

    const HeaderWrapper = TableHeaderComponents || TableHead;

    return (
      <HeaderWrapper>
        <TableRow>
          {!withoutCheck && (
            <TableCell padding="checkbox">
              <Checkbox
                color="primary"
                indeterminate={numSelected > 0 && numSelected < rowCount}
                checked={rowCount > 0 && numSelected === rowCount}
                onChange={onSelectAllClick}
              />
            </TableCell>
          )}
          {headCells.map((headCell) => {
            const Component = headCell.component;

            if (!headCell.label && !Component) {
              return <TableCell key={headCell.id} />;
            }

            if (headCell.sort) {
              return (
                <TableCell
                  key={headCell.id}
                  align={headCell.align}
                  sortDirection={orderBy === headCell.id ? order : false}
                >
                  <TableSortLabel
                    sx={{ fontWeight: '600' }}
                    active={orderBy === headCell.id}
                    direction={orderBy === headCell.id ? order : 'asc'}
                    onClick={createSortHandler(headCell.sort)}
                  >
                    {headCell.label}
                  </TableSortLabel>
                </TableCell>
              );
            }

            if (!Component) {
              return (
                <TableCell
                  key={headCell.id}
                  align={headCell.align}
                  sx={{ fontWeight: '600' }}
                  sortDirection={orderBy === headCell.id ? order : false}
                >
                  {headCell.label}
                </TableCell>
              );
            }

            return (
              <TableCell
                key={headCell.id}
                align={headCell.align}
                sortDirection={orderBy === headCell.id ? order : false}
              >
                <Component selected={selected} {...headCell} />
              </TableCell>
            );
          })}
        </TableRow>
      </HeaderWrapper>
    );
  }
);

TableHeader.defaultProps = {
  TableHeaderComponents: null,
  withoutCheck: false,
};

TableHeader.propTypes = {
  selected: PropTypes.array.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
  headCells: PropTypes.array.isRequired,
  TableHeaderComponents: PropTypes.object,
  withoutCheck: PropTypes.bool,
};
