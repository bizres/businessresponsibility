import gql from "graphql-tag";

const REPORTS_QUERY = gql`
  query Report {
    reports {
      title,
      report_category_statuses {
        status
      }
    }
  }
`;

export default REPORTS_QUERY;
