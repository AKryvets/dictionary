import { useLocation, useParams } from 'react-router';

import { PathNames } from '../../consts';

export const useCustomerPages = () => {
  const { pathname } = useLocation();
  const { id } = useParams();

  return (
    pathname === PathNames.customerResults.replace(':id', id) ||
    pathname === PathNames.customerAccounts.replace(':id', id) ||
    pathname === PathNames.customerScanHistory.replace(':id', id)
  );
};
