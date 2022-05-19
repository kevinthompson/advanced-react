import { any } from 'prop-types';

function Page({ children }) {
  return (
    <div>
      <h2>page component</h2>
      {children}
    </div>
  );
}

Page.propTypes = {
  children: any,
};

export default Page;
