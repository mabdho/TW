import { Link } from 'wouter';

const cities: Array<{ name: string; path: string }> = [
  // Cities cleared - ready for fresh production content
];

export const SimpleCityList = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">City Guides</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {cities.map((city) => (
            <Link 
              key={city.path} 
              to={city.path}
              className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow"
            >
              <h3 className="font-semibold">{city.name}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};