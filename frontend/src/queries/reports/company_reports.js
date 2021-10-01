import gql from "graphql-tag";

const COMPANY_REPORTS_QUERY = gql`
  query Company($id: ID!) {
    company (id: $id) {
        id,
        name,
        url_fixed,
        reports {
          id,
          title,
          pdf_url,
          year_published,
          report_category_statuses {
            title,
            report_category {
              category_description,
              category_name
            },
            status,
            updated_at
          }
        }
    }
  }
`;

export default COMPANY_REPORTS_QUERY;
