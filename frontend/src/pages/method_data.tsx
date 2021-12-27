import Page from '@/components/page';
import Footer from '@/components/footer';
import ListDetailSection from "@/components/list-section/details";
import {tw} from "twind";

export default function Index() {
  return (
    <Page>
      <main>
        <section className={tw(`overflow-hidden`)}>
          <div className={tw(`max-w-4xl mx-auto pt-24 pb-16 bg-white`)}>
            <h1 className={tw(`text-2xl text-gray-600 font-ms-semi-bold tracking-wide uppercase pb-8`)}>Data</h1>
            <div className={tw(`text-lg`)}>
              <h2 className={tw(`text-gray-600 font-ms-semi-bold tracking-wide pb-2`)}>Which companies have to
                report on non-financial (sustainability) aspects and what specifically do they have to report?</h2>
              <p className={tw(``)}>
                The reporting obligations of companies are regulated in the Swiss Code of obligations (OR). Based on the
                rejection of the Responsible Business Initiative the indirect counterproposal has been adopted, which
                has introduced new mandatory corporate reporting obligations in the Code of Obligations and in criminal
                law.
              </p>
              <div className={tw(`py-4`)}>
                OR Art. 964 stipulates the conditions for companies. Companies have to report if they:
                <ul>
                  <li>
                    1. Exceed 500 employees <span className={tw(`font-ms-semi-bold`)}>AND</span>
                  </li>
                  <li>a. Exceed total assets of 20 mio CHF
                  </li>
                  <li>b. Turnover in excess of 40 mio CHF
                  </li>
                </ul>
              </div>
              <div className={tw(`py-4`)}>
                <b>Exceptions</b> <br/>
                No need to report if:
                <ol>
                  <li>1. Company is controlled by another company that itself needs to report</li>
                  <li>2. Company is controlled by another company that needs to report in a similar fashion abroad</li>
                </ol>
              </div>

              <h2 className={tw(`text-gray-600 font-ms-semi-bold tracking-wide pb-2`)}>Methodology</h2>
              <div className={tw(`py-2`)}>
                There is a lack of transparency on corporate behaviour regarding environmental, sustainability and human
                rights
                issues.
                <p className={tw(`py-4`)}>
                Acknowledging this, the Federal Council introduces a new law requiring certain companies to report to
                the public on an annual basis
                </p>
                <p className={tw(`py-4`)}>
                  There is:
                  <ol>
                    <li>- No list of companies that are required to report</li>
                    <li>- No public authority that checks whether these companies are reporting</li>
                    <li>- No mechanism that verifies what is being reported on</li>
                  </ol>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </Page>
  );
}
