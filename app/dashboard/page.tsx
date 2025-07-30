import { getServerSession } from 'next-auth/next';
import { authOptions } from '../api/auth/[...nextauth]/route';

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);
  return (
    <div className="p-8 space-y-4">
      <h1 className="text-2xl font-bold">📊 Dashboard</h1>
      <p>
        Merhaba {session?.user?.name }, bu senin dashboard sayfan.
      </p>
      <p>Bu sayfa yalnızca oturum açan kullanıcılar içindir.</p>
    </div>
  );
}
