import { useAuthContext } from '../hooks';

const ProtectedRoute = () => {
  const { user } = useAuthContext();
  console.log(user);

  if (!user) return <>Permission denied</>;

  return <div>ProtectedRoute</div>;
};
export default ProtectedRoute;
