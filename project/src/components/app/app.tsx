import PageMain from '../../pages/main-page/main-page';

type AppPageProps = {
  offers: number;
}

function App({offers}: AppPageProps): JSX.Element {
  return (
    <PageMain offers={offers}/>
  );
}

export default App;
