import { useLocation, useParams } from 'react-router';

import { PathNames } from '../../consts';

export const useCustomerAccountsPage = () => {
  const { pathname } = useLocation();
  const { id } = useParams();

  return pathname === PathNames.customerAccounts.replace(':id', id);
};
