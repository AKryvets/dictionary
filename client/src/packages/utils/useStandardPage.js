import { useLocation, useParams } from 'react-router';

import { PathNames } from '../../consts';

export const useStandardPage = () => {
  const { pathname } = useLocation();
  const { id, accountId, standardId, scanId } = useParams();

  return (
    pathname ===
    PathNames.standardOverview
      .replace(':id', id)
      .replace(':scanId', scanId)
      .replace(':accountId', accountId)
      .replace(':standardId', standardId)
  );
};
