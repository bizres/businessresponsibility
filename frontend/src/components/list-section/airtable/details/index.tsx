import {useRouter} from 'next/router'
import Link from 'next/link'
import {tw} from 'twind';
import COMPANY_REPORTS_QUERY from "@/queries/reports/company_reports";
import Query from "@/components/query/reports/company_report";
import Button from "@/components/button";

import React, {useEffect, useState} from 'react';
import getConfig from 'next/config'
import {isNumericLiteral} from "tsutils";

const {publicRuntimeConfig} = getConfig();
const apiKey = publicRuntimeConfig ? publicRuntimeConfig.airtableApiKey : "";
const table = 'CrawlResults';
const view = 'Frontend';
const base = 'app4bIWfizNSxH4Ik';
const maxRecords = 100;


const ListDetailSection = () => {
  const router = useRouter()
  const {id} = router.query

  const status = [`NLP_SocialConcerns`, `NLP_Corruption`, `NLP_Employee`, `NLP_Environment`, `NLP_HumanRights`];
  const [crawlResult, setCrawlResult] = useState([]);

  useEffect(() => {
    if (id !== undefined) {
      const url = `https://api.airtable.com/v0/${base}/${table}?maxRecords=${maxRecords}&view=${view}&filterByFormula=AND(CompanyId="${id}",Approved=1)`;
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
  const company = records[0]['fields']['CompanyName (from Companies)'][0];
  const companyUrl = records[0]['fields']['CompanyURL'][0];
  const reportingYear = records[0]['fields']['Year (from RP)'][0];
  const size = 'Unknown';
  const sector = 'Unknown';

  return (
    <section className={tw(`overflow-hidden`)}>
      <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 bg-white`)}>
        <>
          <h1 className={tw(`text-3xl font-bold text-blue-900`)}>{company}</h1>
          <p>
            <a href={`//${companyUrl}`}
               className={tw(`font-bold text-blue-900 hover:text-blue-600`)} target={"_blank"}>
              {`${companyUrl}`}
            </a>
          </p>
          <ul className={tw(`list-disc list-inside pt-4 `)}>
            <li>Reporting Year: {`${reportingYear}`}</li>
            <li>Size: {`${size}`}</li>
            <li>Sector: {`${sector}`}</li>
          </ul>
          <table className={"w-full table-fixed"}>
            <thead>
            <tr className={tw(`h-40`)}>
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
              let pdfThumbnail = '';
              if (item.hasOwnProperty('PDF') && item['PDF'].length > 0 && item['PDF'][0].hasOwnProperty('thumbnails')) {
                pdfThumbnail = item['PDF'][0]['thumbnails']['large']['url']
              }

              return (
                <>
                  <tr>
                    <td colSpan={4}>
                      <span className={tw(`text-3xl font-bold text-blue-900`)}>{item['Year']}</span>
                    </td>
                  </tr>
                  <tr className={tw(`border-b-1 h-24`)} key={`company-item-${item['uri']}`}>
                    <td className={tw(`text-left`)}>
                      <Link key={`report-link-${item['URL']}`} href={`${item['URL']}`}>
                        <a className={tw(`text-blue-900 hover:text-blue-600`)} title={item['Title']}
                           target={"_blank"}>
                          <div className={tw(`inline-block align-middle`)}>{item['Type']}</div>
                        </a>
                      </Link>
                    </td>
                    <td className={tw(`text-left`)}>
                      {pdfThumbnail == '' ? (<></>)
                        : (
                          <Link key={`report-link-${item['URL']}`} href={`${item['URL']}`}>
                            <a className={tw(`font-bold text-blue-900 hover:text-blue-600`)} title={item['Title']}
                               target={"_blank"}>
                              <div className={tw(`inline-block align-middle`)}>
                                <img className={tw(`h-20`)} src={pdfThumbnail} alt={item['Type']}/>
                              </div>
                            </a>
                          </Link>)
                      }
                    </td>
                    {status.map((it, idx) => {
                      const bg = (item[it] === `1`) ? `w-4 h-4 bg-blue-500` : `w-2 h-2 bg-gray-300`;
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
          <span className={tw(`inline-block rounded-full w-6 h-6 bg-blue-500`)}>&nbsp;</span>
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
