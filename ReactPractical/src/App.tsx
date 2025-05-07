import SinglePostFetcher from "./Component/ApiProject/NewProject";
import FormHandling from "./Component/Pages/FormHandling/FormHandling";
import BasicApiCall from "./Component/Pages/UseEffect/BasicApiCall";
import SingleFatchData from "./Component/Pages/UseEffect/SingleFetchData";
import UseEffectR from "./Component/Pages/UseEffect/UseEffectR";
import UserFatchData from "./Component/Pages/UseEffect/UserFatchData";
import UseStateP from "./Component/Pages/UseStateHookP/UseStateP";


function App() {
  return (
    <div>
      {/* /------creating Project using Api */}
      {/* <SinglePostFetcher /> */}



      {/***---------------------  creating Project using useState Hook */}
      {/* <UseStateP /> */}

      {/* <FormHandling /> */}


      {/*********-------------- creating Project using useEffect */}

      {/* <UseEffectR /> */}
      {/* <BasicApiCall/> */}
      {/* <SingleFatchData/> */}

      <UserFatchData/>


    </div>

  )
}

export default App;