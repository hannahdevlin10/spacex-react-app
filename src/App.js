import React, { useContext, useEffect } from "react";
import { request, gql } from "graphql-request";
import { useQuery } from "react-query";
import CardList from './components/CardList/CardList'
import { MissionsContext } from "./context/MissionsContext";

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
    }
    rocket {
      rocket_name
      first_stage {
        cores {
          flight
          core {
            reuse_count
            status
          }
        }
      }
      second_stage {
        payloads {
          payload_type
          payload_mass_kg
          payload_mass_lbs
        }
      }
    }
    ships {
      name
      home_port
      image
    }
    details
  }
}
`;

const App = () => {
  const { setMissions } = useContext(MissionsContext);
  
  const { data, isLoading, error } = useQuery("launches", () => {
    return request(endpoint, getMissionsQuery);
  });

  useEffect(() => {
    if (data?.launchesPast && !isLoading && !error) {
      setMissions(data?.launchesPast)
    }
  }, [data?.launchesPast])

  if (isLoading) return "Loading...";
  if (error) return <pre>{error.message}</pre>;

  return (
    <div>
      <h1>SpaceX Missions</h1>
      {/* <ul>
        {data.launchesPast.map((launch, i) => (
          <li key={i}>{launch.mission_name}</li>
        ))}
      </ul> */}
      <CardList />
    </div>
  );
}

export default App;