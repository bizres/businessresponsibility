import Page from '@/components/page';
import Footer from '@/components/footer';
import ListDetailSection from "@/components/list-section/details";
import {tw} from "twind";

export default function Index() {
  return (
    <Page>
      <main>
        <section className={tw(`overflow-hidden`)}>
          <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 bg-white`)}>
            Team
          </div>
        </section>
      </main>
      <Footer/>
    </Page>
  );
}
