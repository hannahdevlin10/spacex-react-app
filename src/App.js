import React, { useContext, useEffect } from "react";
import { request, gql } from "graphql-request";
import { useQuery } from "react-query";
import { MissionsContext } from "./context/MissionsContext";
import { Nav } from "./components/Nav/Nav";
import { MissionList } from "./components/MissionList/MissionList";
import { ViewMission } from "./components/ViewMission/ViewMission";
import LoadingScreen from "./components/Common/LoadingScreen/LoadingScreen";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

const endpoint = "https://api.spacex.land/graphql/";
const getMissionsQuery = gql`
{
  launchesPast(limit: 10) {
    mission_name
    launch_date_local
    launch_site {
      site_name_long
    }
    links {
      article_link
      video_link
      flickr_images
    }
    rocket {
      rocket_name
      first_stage {
        cores {
          flight
          core {
            status
          }
          land_success
        }
      }
      second_stage {
        payloads {
          payload_type
          payload_mass_kg
        }
      }
    }
    ships {
      name
      home_port
      image
    }
    details
    id
  }
}
`;

function App () {
  const { setMissions, selectedMission } = useContext(MissionsContext);
  
  const { data, isLoading, error } = useQuery("launches", () => {
    return request(endpoint, getMissionsQuery);
  });

  useEffect(() => {
    if (data?.launchesPast && !isLoading && !error) {
      setMissions(data?.launchesPast)
    }
  }, [data?.launchesPast])

  if (isLoading) return <LoadingScreen />
  if (error) return <pre>{error.message}</pre>;

  return (
    <Router>
      <div className="app">
        <Nav />
          <Switch>
            <Route exact path='/' component={MissionList} />
            {!selectedMission ? (
              <Redirect to='/' />
            ): (
              <Route exact path='/mission/:id' component={ViewMission} />
            )}
          </Switch>
      </div>
    </Router>
  );
}

export default App;