import {useRouter} from 'next/router'
import Link from 'next/link'
import {tw} from 'twind';
import COMPANY_REPORTS_QUERY from "@/queries/reports/company_reports";
import Query from "@/components/query/reports/company_report";
import Button from "@/components/button";

const ListDetailSection = () => {
  const router = useRouter()
  const {id} = router.query

  return (
    <section className={tw(`overflow-hidden`)}>
      <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 bg-white`)}>

        <Query query={COMPANY_REPORTS_QUERY} company={`${id}`}>
          {({data: {company}}) => {
            console.log(">> company: ", company);
            return (
              <>
                <h1 className={tw(`text-3xl font-bold text-blue-900`)}>{company.name}</h1>
                <p>
                  <a href={`${company.url_fixed}`} className={tw(`font-bold text-blue-900 hover:text-blue-600`)}>
                    {`${company.url_fixed}`}
                  </a>
                </p>
                <table className={"w-full table-fixed"}>
                  <thead>
                  <tr className={tw(`h-40`)}>
                    <th className={tw(`tw-1/4`)}>&nbsp;</th>
                    <th className={tw(`tw-1/4`)}>&nbsp;</th>
                    <th className={tw(`tw-1/10 transform -rotate-45 text-gray-600`)}>Social concerns</th>
                    <th className={tw(`tw-1/10 transform -rotate-45 text-gray-600`)}>Corruption</th>
                    <th className={tw(`tw-1/10 transform -rotate-45 text-gray-600`)}>Employee concerns</th>
                    <th className={tw(`tw-1/10 transform -rotate-45 text-gray-600`)}>Environment</th>
                    <th className={tw(`tw-1/10 transform -rotate-45 text-gray-600`)}>Human rights</th>
                  </tr>
                  </thead>
                  <tbody>
                  {company.reports.map((item, i) => {
                    return (
                      <tr className={tw(`border-b-1 h-16`)} key={`company-item-${item}`}>
                        <td className={tw(`text-left`)}>
                          {item.year_published}
                        </td>
                        <td className={tw(`text-left`)}>
                          <Link key={`report-link-${item.id}`} href={`${item.pdf_url}`}>
                            <a className={tw(`font-bold text-blue-900 hover:text-blue-600`)}>PDF</a>
                          </Link>
                        </td>
                        {item.report_category_statuses.map((it, idx) => {
                          const bg = (it.status === 'not_reported') ? 'bg-red' : (it.status == 'reported') ? 'bg-green' : 'bg-gray'
                          return (
                            <td className={tw(`text-center`)} key={`td-${idx}`}>
                              <div className={tw(`m-auto rounded-full w-4 h-4 ${bg}-500`)}>&nbsp;</div>
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                  </tbody>
                </table>
              </>
            )
          }}
        </Query>
        <div  className={tw(`float-right m-8`)}>
          <Link href={"/"}>
            <Button primary >Back to reports</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ListDetailSection;
