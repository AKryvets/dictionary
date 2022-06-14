import * as React from 'react';
import {
  CircularProgress,
  Table as MuiTable,
  TableBody,
  TableCell,
  TablePagination,
} from '@mui/material';
import { useCallback, useEffect, useState } from 'react';

import { nanoid } from '@reduxjs/toolkit';

import { setPagination, setQuery, usePagination } from '../utils';

import { TableHeader } from './TableHeader';
import { TableRow } from './TableRow';
import {TableContainer, TableLoaderWrapper} from './styled';

const PAGINATION_COUNT = 25;

export const Table = ({
  name,
  rows,
  headCells,
  components,
  withoutCheck,
  onPageChange,
  onSelect,
  onSort,
  isLoading,
}) => {
  const { count } = usePagination(name);
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('name');
  const [orderValue, setOrderValue] = useState('name');
  const [selected, setSelected] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const enableRows = rows.filter((row) => row.data.enable);

  const requestSortHandler = (event, sortName) => {
    const isAsc = orderBy === sortName && order === 'asc';

    setOrder(isAsc ? 'desc' : 'asc');

    setOrderBy(sortName);

    const ordering = isAsc ? `-${sortName}` : sortName;

    setOrderValue(ordering);
    if (onSelect) onSelect([]);

    if (onSort) {
      setCurrentPage(0);
      setPagination(name, { count, page: 0 });
      setQuery(name, { ordering });
      onSort({ page: 0, ordering });
    }
  };

  const selectAllClickHandler = useCallback(
    (event) => {
      if (event.target.checked) {
        const newSelected = enableRows
          .filter((row) => row.data.enable)
          .map((n) => n.id);

        setSelected(newSelected);
        onSelect(newSelected);

        return;
      }

      setSelected([]);
      if (onSelect) onSelect([]);
    },
    [setSelected, rows, enableRows, onSelect]
  );

  const onRowSelectHandler = useCallback(
    (event, currentId) => {
      const isAlreadySelected = selected.includes(currentId);

      if (isAlreadySelected) {
        const newSelected = selected.filter((id) => id !== currentId);

        setSelected(newSelected);
        onSelect(newSelected);

        return;
      }

      setSelected([...selected, currentId]);
      if (onSelect) onSelect([...selected, currentId]);
    },
    [setSelected, selected, onSelect]
  );

  const changePageHandler = useCallback(
    (event, newPage) => {
      setCurrentPage(newPage);

      if (onPageChange) {
        onPageChange({ ordering: orderValue, page: newPage });
      }
    },
    [onPageChange]
  );

  useEffect(
    () => () => {
      if (onSelect) onSelect([]);
    },
    []
  );

  const isSelected = (row) =>
    selected.indexOf(row.id) !== -1 && row.data.enable;

  const { TableHeaderComponents } = components ?? {};

  return (
    <>
      <TableContainer>
        <MuiTable>
          <TableHeader
            order={order}
            orderBy={orderBy}
            onSelectAllClick={selectAllClickHandler}
            onRequestSort={requestSortHandler}
            rowCount={enableRows.length}
            headCells={headCells}
            selected={selected}
            withoutCheck={withoutCheck}
            TableHeaderComponents={TableHeaderComponents}
          />
          {isLoading ? (
            <TableBody>
              <TableCell colSpan={7}>
                <TableLoaderWrapper>
                  <CircularProgress />
                </TableLoaderWrapper>
              </TableCell>
            </TableBody>
          ) : (
            <TableBody>
              {rows.length &&
                rows.map((row) => (
                  <TableRow
                    key={nanoid(10)}
                    row={row}
                    id={row.id}
                    data={row.data}
                    withoutCheck={withoutCheck}
                    isSelected={isSelected(row)}
                    onRowSelect={onRowSelectHandler}
                  />
                ))}
            </TableBody>
          )}
        </MuiTable>
      </TableContainer>
      <TablePagination
        component="div"
        rowsPerPageOptions={[-1]}
        count={count}
        rowsPerPage={PAGINATION_COUNT}
        page={currentPage}
        onPageChange={changePageHandler}
      />
    </>
  );
};
