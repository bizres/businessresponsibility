import React, {useEffect, useState} from 'react';
import {tw} from 'twind';
import Button from '@/components/button';
import Link from 'next/link';
import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()
const apiKey = publicRuntimeConfig ?  publicRuntimeConfig.airtableApiKey : "";
const table = 'ReportingPeriods';
const view = 'Frontend';
const base = 'app4bIWfizNSxH4Ik'
const url = `https://api.airtable.com/v0/${base}/${table}?maxRecords=100&view=${view}&api_key=${apiKey}`;

const ListSection = () => {
  const status = [`NLP_SocialConcerns`, `NLP_Corruption`, `NLP_Employee`, `NLP_Environment`, `NLP_HumanRights`];
  const [reportRecords, setReportRecords] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.records);
        setReportRecords(data.records);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
            />
            <Button>Search</Button>
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
              {reportRecords.map((item) => (
                <tr className={tw(`border-b-1 h-16`)} key={`company-item-${item.id}`}>
                  <td className={tw(`text-left`)}>
                    <Link key={`company-link-${item.fields['Company']}`} href={`/company/${item.fields['Company']}`}>
                      <a className={tw(`text-blue-900 hover:text-blue-600`)}>
                        {item.fields[`CompanyName (from Company)`]}
                      </a>
                    </Link>
                  </td>
                  {status.map((it, idx) => {
                    const bg = item.fields[it] === `0` ? `bg-red` : item.fields[it] === `1` ? `bg-green` : `bg-gray`;
                    return (
                      <td className={tw(`text-center`)} key={`td-${idx}`}>
                        <div className={tw(`m-auto rounded-full w-4 h-4 ${bg}-500`)}>&nbsp;</div>
                      </td>
                    );
                  })}
                </tr>
              ))}
              </tbody>
            </table>
            <div className={tw(`mt-12 pb-8 text-center`)}>
              <span className={tw(`inline-block rounded-full w-6 h-6 bg-green-500`)}>&nbsp;</span>
              <span className={tw(`p-6`)}>Reported</span>
              <span className={tw(`inline-block rounded-full w-6 h-6 bg-gray-500`)}>&nbsp;</span>
              <span className={tw(`p-6`)}>Unknown</span>
              <span className={tw(`inline-block rounded-full w-6 h-6 bg-red-500`)}>&nbsp;</span>
              <span className={tw(`p-6`)}>Not reported</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListSection;

