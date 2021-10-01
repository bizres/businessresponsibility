import gql from "graphql-tag";

const REPORTS_QUERY = gql`
  query Report {
    reports {
      title,
      company {
        id,
        name,
        name_clean
      }
      report_category_statuses {
        title,
        status,
        report_category {
          category_key
        }
      }
    }
  }
`;

export default REPORTS_QUERY;
