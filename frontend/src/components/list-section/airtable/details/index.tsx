import {useRouter} from 'next/router'
import Link from 'next/link'
import {tw} from 'twind';
import COMPANY_REPORTS_QUERY from "@/queries/reports/company_reports";
import Query from "@/components/query/reports/company_report";
import Button from "@/components/button";

import React, {useEffect, useState} from 'react';
import getConfig from 'next/config'

const {publicRuntimeConfig} = getConfig();
const apiKey = publicRuntimeConfig ? publicRuntimeConfig.airtableApiKey : "";
const table = 'CrawlResults';
const view = 'Frontend';
const base = 'app4bIWfizNSxH4Ik';
const maxRecords = 100;
const sort = "&sort[0][field]=Year&sort[0][direction]=desc";


const ListDetailSection = () => {
  const router = useRouter()
  const {id} = router.query

  const status = [`NLP_SocialConcerns`, `NLP_Corruption`, `NLP_Employee`, `NLP_Environment`, `NLP_HumanRights`];
  const [crawlResult, setCrawlResult] = useState([]);

  useEffect(() => {
    if (id !== undefined) {
      const url = `https://api.airtable.com/v0/${base}/${table}?maxRecords=${maxRecords}&view=${view}${sort}&filterByFormula=AND({CompanyId (from RP)}="${id}",Screened=1)`;
      const options = {
        headers: {
          Authorization: `Bearer ${apiKey}`
        }
      };
      fetch(url, options)
        .then((res) => res.json())
        .then((data) => {
          setCrawlResult(data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  const records = crawlResult["records"]
  if (records == undefined || !Array.isArray(records) || records.length == 0) {
    return (<div>&nbsp;</div>);
  }
  const company = records[0]['fields']['CompanyName (from RP)'][0];
  const companyUrl = records[0]['fields']['CompanyURL (from RP)'][0];
  const reportingYear = records[0]['fields']['Year (from RP)'][0];
  const size = 'Unknown';
  const sector = 'Unknown';
  let prevYear = null;

  return (
    <section className={tw(`overflow-hidden`)}>
      <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 bg-white`)}>
        <>
          <h1 className={tw(`text-3xl font-bold text-gray-600`)}>{company}</h1>
          <p>
            <a href={`//${companyUrl}`}
               className={tw(`font-bold text-gray-600 hover:text-yellow-dark-900`)} target={"_blank"}>
              {`${companyUrl}`}
            </a>
          </p>
          <ul className={tw(`list-none list-inside pt-4 text-gray-600`)}>
            <li>Reporting Year: {`${reportingYear}`}</li>
            <li>Size: {`${size}`}</li>
            <li>Sector: {`${sector}`}</li>
          </ul>
          <table className={"w-full table-fixed"}>
            <thead>
            <tr className={tw(`h-20`)}>
              <th className={tw(`tw-1/8`)}>&nbsp;</th>
              <th className={tw(`tw-1/4`)}>&nbsp;</th>
              <th className={tw(`tw-1/10 transform -rotate-45 text-gray-600`)}>Social concerns</th>
              <th className={tw(`tw-1/10 transform -rotate-45 text-gray-600`)}>Corruption</th>
              <th className={tw(`tw-1/10 transform -rotate-45 text-gray-600`)}>Employee concerns</th>
              <th className={tw(`tw-1/10 transform -rotate-45 text-gray-600`)}>Environment</th>
              <th className={tw(`tw-1/10 transform -rotate-45 text-gray-600`)}>Human rights</th>
            </tr>
            </thead>
            <tbody>
            {records.map((record, i) => {
              const item = record.fields;
              const year = item['Year'];
              const pdfUrl = item['GS link']

              const previousYear = prevYear;
              prevYear = year;
              const isYearChanged = (previousYear !== null && year == previousYear);
              console.log(">> year, previous, prev: ", year, previousYear, prevYear)

              let pdfThumbnail = '';
              if (item.hasOwnProperty('PDF') && item['PDF'].length > 0 && item['PDF'][0].hasOwnProperty('thumbnails')) {
                pdfThumbnail = item['PDF'][0]['thumbnails']['large']['url']
              }

              return (
                <>
                  {isYearChanged ? (<></>) :
                    (
                      <>
                        <tr className={tw(``)}><td className={tw(`py-2 px-2`)} colSpan={4}>&nbsp;</td></tr>
                        <tr className={tw(`bg-gray-100`)}>
                          <td colSpan={2} className={tw(`py-2 px-2`)}>
                            <span className={tw(`text-2xl font-normal text-gray-600`)}>Gesamtstatus {year}</span>
                          </td>
                          {status.map((it, idx) => {
                            const bg = (item[it] === `1`) ? `w-4 h-4 bg-yellow-dark` : `w-2 h-2 bg-gray-300`;
                            return (
                              <td className={tw(`text-center`)} key={`td-${idx}`}>
                                <div className={tw(`m-auto rounded-full  ${bg}`)}>&nbsp;</div>
                              </td>
                            );
                          })}
                        </tr>
                      </>

                    )
                  }
                  <tr className={tw(`border-b-2 border-dotted h-24`)} key={`company-item-${item['uri']}`}>
                    <td className={tw(`text-left`)}>
                      {pdfThumbnail == '' ? (<></>)
                        : (
                          <Link key={`report-link-${pdfUrl}`} href={`${pdfUrl}`}>
                            <a className={tw(`font-bold text-gray-700 hover:text-yellow-dark-900`)}
                               title={item['Title']}
                               target={"_blank"}>
                              <div className={tw(`inline-block align-middle border border-solid border-gray-200 p-2`)}>
                                <img className={tw(`h-16`)} src={pdfThumbnail} alt={item['Type']}/>
                              </div>
                            </a>
                          </Link>)
                      }
                    </td>
                    <td className={tw(`text-left`)}>
                      <Link key={`report-link-${pdfUrl}`} href={`${pdfUrl}`}>
                        <a className={tw(`text-gray-700 text-lg hover:text-yellow-dark-900`)} title={item['Title']}
                           target={"_blank"}>
                          <div className={tw(`inline-block align-middle`)}>{item['Type']}</div>
                        </a>
                      </Link>
                    </td>
                    {status.map((it, idx) => {
                      const bg = (item[it] === `1`) ? `w-4 h-4 bg-yellow-dark` : `w-2 h-2 bg-gray-300`;
                      return (
                        <td className={tw(`text-center`)} key={`td-${idx}`}>
                          <div className={tw(`m-auto rounded-full  ${bg}`)}>&nbsp;</div>
                        </td>
                      );
                    })}
                  </tr>
                </>
              )
            })}
            </tbody>
          </table>
        </>
        <div className={tw(`mt-12 pb-8 text-center`)}>
          <span className={tw(`inline-block rounded-full w-6 h-6 bg-yellow-dark`)}>&nbsp;</span>
          <span className={tw(`pl-6 pr-6 align-middle`)}>Reported</span>
          <span className={tw(`inline-block align-middle rounded-full w-2 h-2 bg-gray-300`)}>&nbsp;</span>
          <span className={tw(`pl-6 pr-align-middle`)}>Not fully reported</span>
        </div>
        <div className={tw(`float-right m-8`)}>
          <Link href={"/"}>
            <Button primary>Back to reports</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ListDetailSection;
