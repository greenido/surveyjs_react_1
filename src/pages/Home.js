import logo from "../logo.svg";

export function HomePage() {
  return (
    <>
      <div className="container">
        <h1>Survey Management</h1>
        <div className="col-lg-12 jumbotron">
          <iframe src="https://skymass.dev/app/green/crud-testing" width="100%" height="900px" frameborder="0"> </iframe>
        </div>
      </div>
      <footer>
        <p>
          SurveyJS is a set of JavaScript components that allow you and your
          users to build surveys / forms, store them in your database, and
          visualize survey results for data analysis. This quick start template
          uses the following SurveyJS components:
        </p>
        <ul>
          <li>
            <a
              href="https://surveyjs.io/Documentation/Library?id=LibraryOverview"
              target="_blank"
            >
              SurveyJS Library / Runner
            </a>
          </li>
          <li>
            <a
              href="https://surveyjs.io/Documentation/Survey-Creator?id=Survey-Creator-Overview"
              target="_blank"
            >
              Survey Creator / Form Builder
            </a>
          </li>
          <li>
            <a
              href="https://surveyjs.io/Documentation/Pdf-Export?id=PdfExportOverview"
              target="_blank"
            >
              PDF Export
            </a>
          </li>
          <li>
            <a
              href="https://surveyjs.io/Documentation/Analytics?id=AnalyticsOverview"
              target="_blank"
            >
              Survey Analytics
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
}
