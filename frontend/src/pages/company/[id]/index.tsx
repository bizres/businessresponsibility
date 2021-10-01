import Page from '@/components/page';
import Footer from '@/components/footer';
import ListDetailSection from "@/components/list-section/details";

export default function Index() {
  return (
    <Page>
      <main>
        <ListDetailSection />
      </main>
      <Footer/>
    </Page>
  );
}
