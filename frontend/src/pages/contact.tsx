import Page from '@/components/page';
import Footer from '@/components/footer';
import ListDetailSection from "@/components/list-section/details";
import {tw} from "twind";
import Check from "@/constants/svg/check.svg";

export default function Index() {
  return (
    <Page>
      <main>
        <section className={tw(`overflow-hidden`)}>
          <div className={tw(`max-w-6xl mx-auto p-4 sm:p-6 lg:p-8 bg-white`)}>
            <h1 className={tw(`text-2xl text-blue-800 font-semibold tracking-wide uppercase pb-8`)}>Contact</h1>
            <div className={tw(`text-lg`)}>
              <p className={tw(``)}>
                <strong>GitHub Organization and Project Space:</strong>
                <ul>
                  <li>- https://github.com/bizres</li>
                  <li>- https://github.com/bizres/businessresponsibility</li>
                </ul>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </Page>
  );
}
