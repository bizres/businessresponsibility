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
            <h1 className={tw(`text-2xl text-blue-800 font-semibold tracking-wide uppercase pb-4`)}>Team</h1>
            <div className={tw(`text-lg`)}>
              <p className={tw(`py-4`)}>
                We are an interdisciplinary team of political scientists, economists, environmental activists
                and software developers that support the <a className={tw(`text-blue-800`)} href="https://bizres.ch">businessresponsibility.ch</a> project.
                This is a non-profit startup project that aims to strengthen transparency and democratic oversight of
                the human rights performance of Swiss companies.
              </p>
              <p className={tw(`py-4`)}>
                We are building a digital platform to monitor company performance vis a vis non-financial reporting
                obligations. We are currently funded
                by the Prototype Fund, which supports innovative open source projects that strengthen
                democratic participation in Switzerland through digital solutions.
              </p>
            </div>
            <div className={tw(`flex flex-wrap my-12`)}>
              <div className={tw(`w-full md:w-1/2 lg:w-1/4 p-8`)}>
                <div className={tw(`flex items-center mb-2`)}>
                  <div className={tw(`text-xl`)}>David Weiss</div>
                </div>
                <img className={tw(``)} src="/images/team/unknown_person.jpg " alt="logo" width={120} height={120}/>
                <p className={tw(`leading-loose text-gray-500 `)}>Project Lead</p>
              </div>
              <div className={tw(`w-full md:w-1/2 lg:w-1/4 p-8`)}>
                <div className={tw(`flex items-center mb-2`)}>
                  <div className={tw(`text-xl`)}>Cahit Atilgan</div>
                </div>
                <img className={tw(``)} src="/images/team/unknown_person.jpg " alt="logo" width={120} height={120}/>
                <p className={tw(`leading-loose text-gray-500 `)}>Tech Lead</p>
              </div>
              <div className={tw(`w-full md:w-1/2 lg:w-1/4 p-8`)}>
                <div className={tw(`flex items-center mb-2`)}>
                  <div className={tw(`text-xl`)}>Miguel Vazquez</div>
                </div>
                <img className={tw(``)} src="/images/team/unknown_person.jpg " alt="logo" width={120} height={120}/>
                <p className={tw(`leading-loose text-gray-500 `)}>Tech Developer</p>
              </div>
              <div className={tw(`w-full md:w-1/2 lg:w-1/4 p-8`)}>
                <div className={tw(`flex items-center mb-2`)}>
                  <div className={tw(`text-xl`)}>Nickolay Golomysov</div>
                </div>
                <img className={tw(``)} src="/images/team/unknown_person.jpg " alt="logo" width={120} height={120}/>
                <p className={tw(`leading-loose text-gray-500 `)}>Tech Developer</p>
              </div>

              <div className={tw(`w-full md:w-1/2 lg:w-1/4 p-8`)}>
                <div className={tw(`flex items-center mb-2`)}>
                  <div className={tw(`text-xl`)}>Dina Pomeranz</div>
                </div>
                <img className={tw(``)} src="/images/team/unknown_person.jpg " alt="logo" width={120} height={120}/>
                <p className={tw(`leading-loose text-gray-500 `)}>Strategic Advisor</p>
              </div>
              <div className={tw(`w-full md:w-1/2 lg:w-1/4 p-8`)}>
                <div className={tw(`flex items-center mb-2`)}>
                  <div className={tw(`text-xl`)}>Koby Awuah</div>
                </div>
                <img className={tw(``)} src="/images/team/unknown_person.jpg " alt="logo" width={120} height={120}/>
                <p className={tw(`leading-loose text-gray-500 `)}>Stakeholder Manager</p>
              </div>
              <div className={tw(`w-full md:w-1/2 lg:w-1/4 p-8`)}>
                <div className={tw(`flex items-center mb-2`)}>
                  <div className={tw(`text-xl`)}>Debi Kistler</div>
                </div>
                <img className={tw(``)} src="/images/team/unknown_person.jpg " alt="logo" width={120} height={120}/>
                <p className={tw(`leading-loose text-gray-500 `)}>Project Manager</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </Page>
  );
}
