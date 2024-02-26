



export default function DashboardLayout({ children,users,revenue }) {
  return (
      <div>
        {children}
        {users}
        {revenue}
      </div>
  );
}
