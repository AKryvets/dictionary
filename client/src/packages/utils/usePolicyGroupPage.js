import { useLocation, useParams } from 'react-router';

import { PathNames } from '../../consts';

export const usePolicyGroupPage = () => {
  const { pathname } = useLocation();
  const { id, accountId, policyGroupId, standardId, scanId } = useParams();

  return (
    pathname ===
    PathNames.policyGroupOverview
      .replace(':id', id)
      .replace(':scanId', scanId)
      .replace(':accountId', accountId)
      .replace(':standardId', standardId)
      .replace(':policyGroupId', policyGroupId)
  );
};
