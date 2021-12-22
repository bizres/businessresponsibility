import Head from 'next/head';
import Navigation from '@/components/navigation';
import {tw} from 'twind';
import LogoHeader from "@/components/header/LogoHeader";

interface IProps {
  children: React.ReactNode;
}

const Page = ({children}: IProps) => (
  <div>
    <div className={tw(`min-h-screen flex flex-col `)}>
      <Navigation/>
      <LogoHeader/>
      {children}
    </div>
  </div>
);

export default Page;
