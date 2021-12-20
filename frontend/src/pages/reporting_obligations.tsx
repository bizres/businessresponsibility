import Page from '@/components/page';
import Footer from '@/components/footer';
import ListDetailSection from "@/components/list-section/details";
import {tw} from "twind";

export default function Index() {
  return (
    <Page>
      <main>
        <section className={tw(`overflow-hidden`)}>
          <div className={tw(`max-w-4xl mx-auto pt-16 pb-16 bg-white`)}>
            <h1 className={tw(`text-2xl text-gray-600 font-semibold tracking-wide uppercase pb-8`)}>Berichterstattungspflicht</h1>
            <div className={tw(`text-lg`)}>
              <p className={tw(`py-4`)}>
                businessresponsibility.ch strengthens transparency and democratic control over the human rights
                performance of Swiss companies, based on the new non-financial reporting obligation.
              </p>
              <p className={tw(`py-4`)}>
                With businessresponsibility.ch, we are building a digital platform that enables citizens, activists and
                non-governmental organizations to check whether and how Swiss companies report on sustainability and
                human
                rights issues, as required by the new non-financial reporting obligation.
              </p>
              <p className={tw(`py-4`)}>
                By introducing a non-financial reporting obligation, Switzerland is following suit with the law that
                has already existed in the EU since 2014. However, there is a great lack of transparency with regard
                to compliance with the reporting obligation: It is unclear which companies are specifically subject
                to the legal obligation and it is very time-consuming to obtain an overview of which of these
                companies actually comply with their obligation. This lack of transparency makes it very difficult
                for civil society to monitor compliance with the law and to hold companies accountable.
                businessresponsibility.ch closes this information gap and empowers civil society to demand the
                information required by the law.
              </p>
              <p className={tw(`py-4`)}>
                On businessresponsibility.ch, interested parties can quickly and easily see which companies comply
                with the non-financial reporting obligation. The digital platform identifies, collects, analyzes and
                publishes non-financial reporting data from hundreds of Swiss companies and makes this
                information available free of charge.
              </p>
              <p>
                Based on this data, businessresponsibility.ch enables the analysis of corporate reporting in
                Switzerland and thus allows civil society, authorities, legislators and last but not least the business
                community itself to gain a fact-based and always up-to-date insight into the development and
                progress of non-financial reporting in Switzerland.
              </p>
              <p className={tw(`py-4`)}>
                businessresponsibility.ch is financially supported by Stiftung Mercator Schweiz through the <a
                className={tw(`text-blue-800`)}
                href="https://prototypefund.opendata.ch/en/project/businessresponsibility-ch/"
                target="_blank"> Prototype Fund</a>, a program run by Opendata.ch
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </Page>
  );
}
