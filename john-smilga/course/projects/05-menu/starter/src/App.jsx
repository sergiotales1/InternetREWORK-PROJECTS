import data from './data.js';
import Title from './Title';
import Menu from './Menu.jsx';
import Categories from './Categories.jsx';

const allCategories = new Set(data.map((item) => item.category));
const App = () => {
  return (
    <main>
      <section className="menu">
        <Title text="Our menu" />
        <Categories data={['all', ...allCategories]} />
        <Menu data={data} />
      </section>
    </main>
  );
};
export default App;
