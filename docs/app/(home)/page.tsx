import { InstallCommand } from '@/components/install-command';
import { Header } from '../../components/header';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col text-center justify-start items-center gap-10">
      <Header />
      <InstallCommand />
    </main>
  );
}
