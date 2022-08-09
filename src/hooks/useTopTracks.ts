import axios from "axios";
import { useEffect, useState } from "react";

export default (token: string) => {

  const [longTrackData, setLongTrackData] = useState([]);
  const [shortTrackData, setShortTrackData] = useState([]);
  const [mediumTrackData, setMediumTrackData] = useState([]);
  const time_ranges = ['short_term', 'medium_term', 'long_term'];
  const time_range_setters = [setShortTrackData, setMediumTrackData, setLongTrackData];

  async function getTrackData () {
    time_ranges.forEach( async (range, index) => {
      let call = await axios.get('https://api.spotify.com/v1/me/top/tracks?limit=50&time_range=' + range, {
      headers: { Authorization: 'Bearer ' + token }})
      time_range_setters[index](call.data.items);
    });
  }

  useEffect(() => {
    if (token && shortTrackData.length < 1) {
    getTrackData();
    }
  }, [token]);

  return [shortTrackData, mediumTrackData, longTrackData];

};