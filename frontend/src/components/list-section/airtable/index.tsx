import React, {useEffect, useState} from 'react';
import {tw} from 'twind';
import Button from '@/components/button';
import Link from 'next/link';
import getConfig from 'next/config'

const {publicRuntimeConfig} = getConfig()
// Filtering and pagination params
const defaultYear = "2020";
const defaultFilter = `&filterByFormula=AND(Year="${defaultYear}")`;
const pageSize = 10;
const sort = "&sort[0][field]=CompanyName&sort[0][direction]=asc";

// Airtable configuration
const apiKey = publicRuntimeConfig ? publicRuntimeConfig.airtableApiKey : "";
const table = 'ReportingPeriods';
const view = 'Frontend';
const base = 'app4bIWfizNSxH4Ik'
const baseUrl = `https://api.airtable.com/v0/${base}/${table}?pageSize=${pageSize}&view=${view}${sort}`;

const ListSection = () => {

  const status = [`NLP_SocialConcerns`, `NLP_Corruption`, `NLP_Employee`, `NLP_Environment`, `NLP_HumanRights`];
  const [reportRecords, setReportRecords] = useState(null);
  const [yearFilter, setYearFilter] = useState(defaultYear);
  const [companyNameFilter, setCompanyNameFilter] = useState("");
  const [offset, setOffset] = useState(null);
  const getOffsetFilter = () => {
    return (offset !== null && offset !== undefined) ? `&offset=${offset}` : '';
  }
  const [url, setUrl] = useState(baseUrl + defaultFilter + getOffsetFilter());


  const handleKeyPress = (event) => {
    if (event.key == "Enter") {
      handleSearch(event);
    }
  }

  const getUriWithSearchParams = () => {
    let companyName = companyNameFilter.trim().toLowerCase();
    let year = (yearFilter == "") ? "" : `Year="${yearFilter}"`
    let company = (companyName == "") ? "" : `FIND("${companyName}", LOWER({Name})) >= 1`;

    let searchFilter = '';
    if (yearFilter !== "" && companyName !== "") {
      searchFilter = `&filterByFormula=AND(${year}, ${company})`;
    } else if (yearFilter != "") {
      searchFilter = `&filterByFormula=AND(${year})`;
    } else if (companyName != "") {
      searchFilter = `&filterByFormula=AND(${company})`;
    }
    return baseUrl + searchFilter;
  }

  const handleSearch = (event) => {
    event.preventDefault();
    loadReportList(getUriWithSearchParams());
  }

  const handleNextPage = (event) => {
    event.preventDefault();
    const uri = getUriWithSearchParams();
    const offset = getOffsetFilter();
    loadReportList(uri + offset);
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
        const offset = data.hasOwnProperty('offset') ? data['offset'] : null;
        setOffset(offset);
        setReportRecords(data.records);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    loadReportList(url);
  }, []);

  const loading = reportRecords === null || reportRecords == undefined;
  const noReports = (
    !reportRecords ||
    (Array.isArray(reportRecords) && reportRecords.length == 0)
  );

  return (
    <section className={tw(`overflow-hidden`)}>
      <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 bg-white`)}>
        <div className={tw(`mb-16 text-center`)}>
          <h2 className={tw(`text-3xl text-gray-700 font-semibold tracking-wide`)}>Business Responsibility Reports</h2>
        </div>
        <div className={tw(`mt-2 pb-4 text-center`)}>
          <div className={tw(`flex w-full`)}>
            <input
              aria-label="search reports"
              type="text"
              className={tw(`border border-gray-300 bg-gray-100 min-w-0 w-full rounded text-gray-800 py-2 px-3 mr-2`)}
              placeholder="Enter a company name"
              onChange={event => setCompanyNameFilter(event.target.value)}
              onKeyPress={handleKeyPress}
            />
            <select
              className={tw(`font-sans font-medium py-2 px-2 mx-4 border rounded bg-white text-gray-600 border-gray-300 hover:bg-gray-100`)}
              onChange={event => setYearFilter(event.target.value)}
              defaultValue={"2020"}
            >
              <option value="2020">2020</option>
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
                loading ?
                  <tr>
                    <td colSpan={6} className={tw(`text-base text-2xl text-indigo-900 text-left`)}>
                      Loading data...
                    </td>
                  </tr> :
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
                              const bg = (item.fields[it] === `1`) ? `w-4 h-4 bg-blue-500` : `w-2 h-2 bg-gray-300`;
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
            <div className={tw(`text-right`)}>
              <div>{offset !== null ? <Button primary={true} onClick={handleNextPage}>Show next page</Button> :
                <Button primary={true} onClick={handleNextPage}>Goto first page</Button>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListSection;

