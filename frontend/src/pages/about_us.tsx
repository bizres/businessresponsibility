import Page from '@/components/page';
import Footer from '@/components/footer';
import ListDetailSection from "@/components/list-section/details";
import {tw} from "twind";
import Check from "@/constants/svg/check.svg";
import {Avatar, Link} from "@mui/material";

const team = [
  {
    name: 'David Weiss',
    title: 'Project Lead',
    img: 'david.jpg'
  },
  {
    name: 'Dina Pomeranz',
    title: 'Strategic Advisor',
    img: 'dina.jpg'
  },
  {
    name: 'Debi Kistler',
    title: 'Project Manager',
    img: 'debi.jpg'
  },
  {
    name: 'Koby Awuah',
    title: 'Business Manager',
    img: 'kobi.jpg'
  },
  {
    name: 'Cahit Atilgan',
    title: 'Tech Lead',
    img: 'cahit.jpg'
  },
  {
    name: 'Nickolay Golomysov',
    title: 'Tech Developer',
    img: 'nick.jpg'
  },
  {
    name: 'Miguel Vazquez',
    title: 'Tech Developer',
    img: 'miguel.jpg'
  }
]

export default function Index() {
  return (
    <Page>
      <main>
        <section className={tw(`overflow-hidden`)}>
          <div className={tw(`max-w-4xl mx-auto pt-24 pb-16 bg-white`)}>
            <h1 className={tw(`text-2xl text-gray-600 font-ms-semi-bold tracking-wide uppercase pb-4`)}>Team</h1>
            <div className={tw(`text-lg`)}>
              <p className={tw(`py-4`)}>
                We are an interdisciplinary team of political scientists, economists, environmental activists
                and software developers that support the <a className={tw(`text-yellow-dark-900 font-ms-medium`)} href="https://bizres.ch">businessresponsibility.ch</a> project.
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
            <div className={tw(`flex flex-wrap my-14`)}>
              {team.map((member) => (
                <div className={tw(`w-full md:w-1/2 lg:w-1/4 p-8 leading-loose text-gray-700 text-l font-ms-regular w-full text-center `)}>
                  <Avatar alt={`${member.name}`} src={`/images/team/${member.img}`}  sx={{ width: 160, height: 160 }} />
                  <div className={tw(`text-yellow-dark-900 font-ms-semi-bold pt-2`)}>{member.title}</div>
                  <div>{member.name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </Page>
  );
}
