import Header from './Header';

function Page({ children }) {
  return (
    <div>
      <Header />
      <h2>page component</h2>
      {children}
    </div>
  );
}

export default Page;
