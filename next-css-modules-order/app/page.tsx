import GlobalContainer from "./_stuff/GlobalContainer";
import MyButton from "./_stuff/MyButton";

const CssTest = () => {
  return (
    <>
      <GlobalContainer />
      <MyButton />
      <ul>
        <li>BAD: button is gray</li>
        <li>GOOD: button is blue</li>
      </ul>
    </>
  );
};

export default CssTest;
