import MainScreen from '../../pages/main-screen/main-screen';

const Setting = {
  CardsCount: 5,
} as const;

function App() {
  return (
    <MainScreen cardsCount = {Setting.CardsCount}/>
  );
}

export default App;
