import { useRouteError } from 'react-router-dom';

type ReplaceUseRouterError<T> = { status: number; statusText: string; data: T };

export default function useManageRouterError<T>() {
  const error = useRouteError() as ReplaceUseRouterError<T>;
  return error;
}
