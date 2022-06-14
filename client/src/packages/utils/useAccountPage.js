import { useLocation, useParams } from 'react-router';

import { PathNames } from '../../consts';

export const useAccountPage = () => {
  const { pathname } = useLocation();
  const { id, accountId, scanId } = useParams();

  return (
    pathname ===
    PathNames.accountOverview
      .replace(':id', id)
      .replace(':scanId', scanId)
      .replace(':accountId', accountId)
  );
};
