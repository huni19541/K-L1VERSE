import React, { useState, useEffect } from "react";
import { getMatchList } from "../../api/match";
import SelectContainer from "../../components/match/ScheduleSelect";
import TableContainer from "../../components/match/ScheduleTable";
import MatchScheduleTop from "../../components/match/MatchScheduleTop";
import ListContainer from "../../components/match/ScheduleList";

export default function MatchSchedulePage() {
  const [data, setData] = useState([]);
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [view, setView] = useState("list");
  const location = useLocation();
  const d = location.state?.d;
  const y = location.state?.y;
  const m = location.state?.m;
  const day = location.state?.day;
  const v = location.state?.v;

  useEffect(() => {
    if (d) {
      setYear(y);
      setMonth(m);
      setView(v);
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getMatchList(year, month);
      setData(result);
    };
    fetchData();
  }, [year, month]);

  return (
    <div>
      <MatchScheduleTop setView={setView} view={view} />
      <SelectContainer
        year={year}
        setYear={setYear}
        month={month}
        setMonth={setMonth}
      />
      <hr style={{ width: "95%", border: "1px solid #f4f4f4" }} />
      {view === "list" && (
        <ListContainer data={data} year={year} month={month} view={view} />
      )}
      {view === "calendar" && (
        <TableContainer
          year={year}
          month={month}
          day={day}
          data={data}
          view={view}
        />
      )}
    </div>
  );
}
