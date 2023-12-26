import { useEffect, useState } from 'react';
import Loading from './Loading';
import Buttons from './Buttons';
import Jobs from './Jobs';

const url = 'https://course-api.com/react-tabs-project';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const [activeTab, setActiveTab] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setIsLoading(false);
      setData(data);
      setActiveTab(data[0].id);
    };
    getData();
  }, []);

  if (isLoading) return <Loading />;
  return (
    <div className="main-container">
      <Buttons data={data} activeTab={activeTab} setActiveTab={setActiveTab} />
      <Jobs data={data} activeTab={activeTab} />
    </div>
  );
};
export default App;
