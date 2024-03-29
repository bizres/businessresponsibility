import {useRouter} from 'next/router'
import Link from 'next/link'
import {tw} from 'twind';
import Button from "@/components/button";
import {useIntl} from "react-intl";

import React, {useEffect, useState} from 'react';
import getConfig from 'next/config'
import {createTheme, ThemeProvider} from "@mui/material";
import ReportError from "@/components/list-section/ReportError";
import UploadReport from "@/components/list-section/UploadReport";
import {OpenInFullSharp, OpenInNew} from "@mui/icons-material";
import PdfOverlay from "@/components/list-section/PdfOverlay";
import {css} from "twind/css";

const {publicRuntimeConfig} = getConfig();
const apiKey = publicRuntimeConfig ? publicRuntimeConfig.airtableApiKey : "";
const table = 'CrawlResults';
const view = 'Frontend';
const base = 'app4bIWfizNSxH4Ik';
const maxRecords = 100;
const sort = "&sort[0][field]=Year&sort[0][direction]=desc";

const theme = createTheme({
  components: {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          placement: 'top',
          backgroundColor: '#f6d44c',
          color: "black",
          fontSize: "1em",
        },
        arrow: {
          color: '#f6d44c'
        }
      },
    },
  },
});

const absoluteHidden = tw(
  css({
    '&': {
      'position': "absolute !important",
      'display': "none !important"
    },
    'a:hover &': {
      'display': "block !important"
    }
  })
);


const ListDetailSection = () => {
  const router = useRouter()
  const {id} = router.query
  const {formatMessage: f} = useIntl();

  const status = [`SocialConcerns`, `Corruption`, `Employee`, `Environment`, `HumanRights`];
  const [crawlResult, setCrawlResult] = useState([]);
  const [pdfOverlayUrl, setPdfOverlayUrl] = useState("");
  const [openPdfOverlay, setOpenPdfOverlay] = useState(false);

  const handleThumbnailClick = (e, pdfUrl: string) => {
    e.preventDefault()
    setPdfOverlayUrl(pdfUrl);
    setOpenPdfOverlay(true);
    return false;
  };

  const handlePdfOverlayClose = (e) => {
    e.preventDefault();
    setOpenPdfOverlay(false);
    return false;
  };

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
  const size = '-';
  const sector = '-';
  let prevYear = null;

  return (
    <>
      <PdfOverlay pdfUrl={pdfOverlayUrl} openOverlay={openPdfOverlay} onClose={handlePdfOverlayClose}/>
      <section className={tw(`overflow-hidden`)}>
        <div className={tw(`max-w-7xl mx-auto mt-16 p-4 sm:p-6 lg:p-8 bg-white`)}>
          <>
            <div>
              <span className={tw(`text-3xl font-ms-semi-bold text-gray-600`)}>{company}</span>
              <span className={tw(`align-top ml-4`)}>
              <ThemeProvider theme={theme}>
                <ReportError/>
                <UploadReport/>
              </ThemeProvider>
            </span>
            </div>
            <p>
              <a href={`//${companyUrl}`}
                 className={tw(`font-ms-semi-bold text-gray-600 hover:text-yellow-dark-900`)} target={"_blank"}>
                {`${companyUrl}`}
              </a>
            </p>
            <ul className={tw(`list-none list-inside pt-4 text-gray-600`)}>
              <li>{f({id: "Size"})} {`${size}`}</li>
              <li>{f({id: "Sector"})}: {`${sector}`}</li>
            </ul>
            <table className={"w-full table-fixed"}>
              <thead>
              <tr className={tw(`h-20`)}>
                <th className={tw(`tw-1/8`)}>&nbsp;</th>
                <th className={tw(`tw-1/4`)}>&nbsp;</th>
                <th className={tw(`tw-1/10 transform -rotate-45 text-gray-600`)}>{f({id: "Social concerns"})}</th>
                <th className={tw(`tw-1/10 transform -rotate-45 text-gray-600`)}>{f({id: "Corruption"})}</th>
                <th className={tw(`tw-1/10 transform -rotate-45 text-gray-600`)}>{f({id: "Employee concerns"})}</th>
                <th className={tw(`tw-1/10 transform -rotate-45 text-gray-600`)}>{f({id: "Environment"})}</th>
                <th className={tw(`tw-1/10 transform -rotate-45 text-gray-600`)}>{f({id: "Human rights"})}</th>
              </tr>
              </thead>
              <tbody>
              {records.map((record, i) => {
                const item = record.fields;
                const year = item['Year'];
                //const extractedId = item['ExtractedID'];
                //const localPdfUrl = (extractedId !== "") ? `/data/report_data/pdf/${extractedId}.pdf` : item['GS link'];
                const localPdfUrl = item['PDFURL'];
                const pdfUrl = item['GS link'];

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
                          <tr className={tw(``)}>
                            <td className={tw(`py-2 px-2`)} colSpan={4}>&nbsp;</td>
                          </tr>
                          <tr className={tw(`bg-gray-100`)}>
                            <td colSpan={2} className={tw(`py-2 px-2`)}>
                            <span
                              className={tw(`text-2xl font-ms-regular text-gray-600`)}>{f({id: "Total status"})} {year}</span>
                            </td>
                            {status.map((it, idx) => {
                              const bg = (item[it] === true) ? `w-4 h-4 bg-yellow-dark` : `w-2 h-2 bg-gray-300`;
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
                            <a
                              className={tw(`group inline-block relative font-ms-semi-bold text-gray-700 hover:text-yellow-dark-900 hover:bg-black hover:opacity-60`)}
                              href={'javascript:void(0);'}
                              title={item['Title']}
                              target={"_self"}
                              onClick={(e) => handleThumbnailClick(e, `${localPdfUrl}`)}
                            >
                              <div
                                className={tw(`relative inline-block align-middle border border-solid border-gray-200 p-2 `)}>
                                <img className={tw(`h-16 group-hover:opacity-20`)} src={pdfThumbnail}
                                     alt={item['Type']}/>
                                <OpenInFullSharp
                                  className={tw(`${absoluteHidden} top-1/3 left-1/3 group-hover:block group-hover:text-white`)}
                                />
                              </div>

                            </a>)
                        }
                      </td>
                      <td className={tw(`text-left`)}>
                        <Link key={`report-link-${pdfUrl}`} href={`${pdfUrl}`}>
                          <a className={tw(`group text-gray-700 text-lg hover:text-yellow-dark-900`)}
                             title={item['Title']}
                             target={"_blank"}>
                            <span className={tw(`inline-block align-middle`)}>
                              {item['Type']}
                            </span>
                            <OpenInNew
                              className={tw(`ml-2 text-gray-700 text-lg group-hover:text-yellow-dark-900 self-center`)}/>
                          </a>
                        </Link>
                      </td>
                      {status.map((it, idx) => {
                        console.log(item, it, item[it]);
                        const bg = (item[it] === true) ? `w-4 h-4 bg-yellow-dark` : `w-2 h-2 bg-gray-300`;
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
            <span className={tw(`pl-6 pr-6 align-middle`)}>{f({id: "Reported"})}</span>
            <span className={tw(`inline-block align-middle rounded-full w-2 h-2 bg-gray-300`)}>&nbsp;</span>
            <span className={tw(`pl-6 pr-align-middle`)}>{f({id: "Not fully reported"})}</span>
          </div>
          <div className={tw(`float-right m-8`)}>
            <Link href={"/"}>
              <Button primary>{f({id: "Back to reports"})}</Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )

};

export default ListDetailSection;
