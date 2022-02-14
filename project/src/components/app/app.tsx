import MainScreen from '../main-screen/main-screen';

type AppScreenProps = {
  hotelsCount: number;
};

function App({hotelsCount} : AppScreenProps): JSX.Element {
  return (
    <MainScreen hotelsCount={hotelsCount}/>
  );
}

export default App;
