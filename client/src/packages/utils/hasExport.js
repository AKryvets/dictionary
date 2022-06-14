import { useAccountPage } from './useAccountPage';
import { useStandardPage } from './useStandardPage';
import { usePolicyGroupPage } from './usePolicyGroupPage';

export const hasExport = () =>
  useAccountPage() || useStandardPage() || usePolicyGroupPage();
