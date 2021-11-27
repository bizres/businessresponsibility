import React, {useEffect, useState} from 'react';
import {tw} from 'twind';
import Button from '@/components/button';
import Link from 'next/link';
import getConfig from 'next/config'

const {publicRuntimeConfig} = getConfig()
const apiKey = publicRuntimeConfig ? publicRuntimeConfig.airtableApiKey : "";
const table = 'ReportingPeriods';
const view = 'Frontend';
const base = 'app4bIWfizNSxH4Ik'
const baseUrl = `https://api.airtable.com/v0/${base}/${table}?maxRecords=100&view=${view}`;

const ListSection = () => {
  const status = [`NLP_SocialConcerns`, `NLP_Corruption`, `NLP_Employee`, `NLP_Environment`, `NLP_HumanRights`];
  const [reportRecords, setReportRecords] = useState([]);
  const [yearFilter, setYearFilter] = useState("");
  const [companyNameFilter, setCompanyNameFilter] = useState("");
  const [url, setUrl] = useState(baseUrl);

  const handleKeyPress = (event) => {
    if (event.key == "Enter") {
      handleSearch(event);
    }
  }

  const handleSearch = (event) => {
    event.preventDefault();
    let companyName = companyNameFilter.trim().toLowerCase();
    let year = (yearFilter == "") ? "" : `Year="${yearFilter}"`
    let company = (companyName == "") ? "" : `FIND("${companyName}", LOWER({Company})) >= 1`;

    let searchFilter = '';
    if (yearFilter !== "" && companyName !== "") {
      searchFilter = `&filterByFormula=AND(${year}, ${company})`;
    } else if (yearFilter != "") {
      searchFilter = `&filterByFormula=AND(${year})`;
    } else if (companyName != "") {
      searchFilter = `&filterByFormula=AND(${company})`;
    }

    loadReportList(baseUrl + searchFilter);
  }

  const loadReportList = (url) => {
    const options = {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    };
    fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        setReportRecords(data.records);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    loadReportList(url);
  }, []);

  const noReports = (
    reportRecords == undefined ||
    !reportRecords ||
    (Array.isArray(reportRecords) && reportRecords.length == 0)
  );

  return (
    <section className={tw(`overflow-hidden`)}>
      <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 bg-white`)}>
        <div className={tw(`mb-16 text-center`)}>
          <h2 className={tw(`text-base text-indigo-600 font-semibold tracking-wide uppercase`)}>Find the reports</h2>
          <p className={tw(`mt-2 pb-4 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900`)}>
            Business Responsibility Reports
          </p>
        </div>
        <div className={tw(`mt-2 pb-4 text-center`)}>
          <div className={tw(`flex w-full`)}>
            <input
              aria-label="search reports"
              type="text"
              className={tw(`border border-gray-300 bg-gray-100 min-w-0 w-full rounded text-gray-800 py-2 px-3 mr-2`)}
              placeholder="Search company reports"
              onChange={event => setCompanyNameFilter(event.target.value)}
              onKeyPress={handleKeyPress}
            />
            <select
              className={tw(`font-sans font-medium py-2 px-2 mx-4 border rounded bg-white text-gray-600 border-gray-300 hover:bg-gray-100`)}
              onChange={event => setYearFilter(event.target.value)}
              defaultValue={""}
            >
              <option value="">Year</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
              <option value="2019">2019</option>
              <option value="2019">2017</option>
              <option value="2016">2016</option>
            </select>
            <Button primary={true} onClick={handleSearch}>Search</Button>
          </div>
          <div className={tw(`mt-2 pb-4 text-center`)}>
            <table className="w-full table-fixed">
              <thead>
              <tr className={tw(`h-40`)}>
                <th className={tw(`tw-1/2`)}>&nbsp;</th>
                <th className={tw(`tw-1/10 transform -rotate-45 text-gray-600`)}>Social concerns</th>
                <th className={tw(`tw-1/10 transform -rotate-45 text-gray-600`)}>Corruption</th>
                <th className={tw(`tw-1/10 transform -rotate-45 text-gray-600`)}>Employee concerns</th>
                <th className={tw(`tw-1/10 transform -rotate-45 text-gray-600`)}>Environment</th>
                <th className={tw(`tw-1/10 transform -rotate-45 text-gray-600`)}>Human rights</th>
              </tr>
              </thead>
              <tbody>
              {
                noReports
                  ?
                  <tr>
                    <td colSpan={6} className={tw(`text-base text-2xl text-indigo-900 text-left`)}>
                      Sorry, we couldn't find any reports... 😥
                    </td>
                  </tr>
                  :
                  <>
                    {
                      reportRecords.map((item) => (
                        <tr className={tw(`border-b-1 h-16`)} key={`company-item-${item.id}`}>
                          <td className={tw(`text-left`)}>
                            <Link key={`company-link-${item.fields['Company']}`}
                                  href={`/company/${item.fields['Company']}`}>
                              <a className={tw(`text-blue-900 hover:text-blue-600`)}>
                                {item.fields[`CompanyName`]}
                              </a>
                            </Link>
                          </td>
                          {status.map((it, idx) => {
                            //const bg = item.fields[it] === `0` ? `bg-red` : item.fields[it] === `1` ? `bg-green` : `bg-gray`;
                            const bg = (item.fields[it]=== `1`) ? `w-4 h-4 bg-blue-500` : `w-2 h-2 bg-gray-300`;
                            return (
                              <td className={tw(`text-center`)} key={`td-${idx}`}>
                                <div className={tw(`m-auto rounded-full ${bg}`)}>&nbsp;</div>
                              </td>
                            );
                          })}
                        </tr>
                      ))
                    }
                  </>
              }
              </tbody>
            </table>
            <div className={tw(`mt-12 pb-8 text-center`)}>
              <span className={tw(`inline-block rounded-full w-6 h-6 bg-blue-500`)}>&nbsp;</span>
              <span className={tw(`pl-6 pr-6 align-middle`)}>Reported</span>
              <span className={tw(`inline-block align-middle rounded-full w-2 h-2 bg-gray-300`)}>&nbsp;</span>
              <span className={tw(`pl-6 pr-align-middle`)}>Not fully reported</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListSection;

