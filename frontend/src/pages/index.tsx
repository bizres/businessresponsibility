import {NextSeo} from 'next-seo';
import Page from '@/components/page';
import Header from '@/components/header';
import CasesSection from '@/components/cases-section';
import Footer from '@/components/footer';
import Statistics from "@/components/statistics";
import ListSection from "@/components/list-section/airtable";

export default function Home() {
  return (
    <Page>
      <NextSeo
        title="businessresponsibility.ch"
        description="business responsibility is a project to strengthen transparency and democratic control over the human rights performance of Swiss companies."
      />
      <Header/>
      <main>
        <Statistics/>
        {/*<FeatureSection/>*/}
        <ListSection />
        <CasesSection/>
        {/*<SocialProof/>*/}
        {/*<PricingTable/>*/}
      </main>
      <Footer/>
    </Page>
  );
}
