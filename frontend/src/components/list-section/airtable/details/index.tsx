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
      const url = `https://api.airtable.com/v0/${base}/${table}?maxRecords=${maxRecords}&view=${view}&api_key=${apiKey}&filterByFormula=AND(CompanyId="${id}",Approved=1)`;
      fetch(url)
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
  const company = records[0]['fields']['Company'][0];
  const companyUrl = records[0]['fields']['CompanyURL'][0];

  return (
    <section className={tw(`overflow-hidden`)}>
      <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 bg-white`)}>
        <>
          <h1 className={tw(`text-3xl font-bold text-blue-900`)}>{company}</h1>
          <p>
            <a href={`//${companyUrl}`}
               className={tw(`font-bold text-blue-900 hover:text-blue-600`)} target={"_blank"}>
              {`${company}`}
            </a>
          </p>
          <table className={"w-full table-fixed"}>
            <thead>
            <tr className={tw(`h-40`)}>
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
              console.log(">>> item: ", item);
              return (
                <>
                  <tr>
                    <td colSpan={4}>
                      <span className={tw(`text-3xl font-bold text-blue-900`)}>{item['Year']}</span>
                    </td>
                  </tr>
                  <tr className={tw(`border-b-1 h-16`)} key={`company-item-${item['uri']}`}>
                    <td className={tw(`text-left`)}>
                      <Link key={`report-link-${item['URL']}`} href={`${item['URL']}`}>
                        <a className={tw(`font-bold text-blue-900 hover:text-blue-600`)} title={item['Title']}
                           target={"_blank"}>
                          {item['Type']}
                        </a>
                      </Link>
                    </td>
                    {status.map((it, idx) => {
                      const bg = item[it] === `0` ? `bg-red` : item[it] === `1` ? `bg-green` : `bg-gray`;
                      return (
                        <td className={tw(`text-center`)} key={`td-${idx}`}>
                          <div className={tw(`m-auto rounded-full w-4 h-4 ${bg}-500`)}>&nbsp;</div>
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