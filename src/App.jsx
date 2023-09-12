import "./App.css";
import Layout from "./components/Layout";
import JobListing from "./components/JobListing";
import Filter from "./components/Filter";

function App() {
  return (
    <Layout>
      <Filter />
      <JobListing />
    </Layout>
  );
}

export default App;
