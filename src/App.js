import React, { useEffect, useState } from "react";
import TableDragSelect from "react-table-drag-select";
import "./App.css";
import { tableLookup } from "./tableLookup";
import Fab from "@material-ui/core/Fab";

const cellsReset = [
  [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ],
  [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ],
  [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,

    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ],
  [
    false,
    false,
    false,
    false,
    false,

    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ],
  [
    false,
    false,
    false,
    false,

    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ],
  [
    false,
    false,
    false,
    false,
    false,

    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ],
  [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,

    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ],
  [
    false,
    false,
    false,

    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ],
];
export default function App({ formik }) {
  const [cells, setCells] = useState(cellsReset);
  const [week, setWeek] = useState({
    monday: "",
    tuesday: "",
    wednesday: "",
    thursday: "",
    friday: "",
    saturday: "",
    sunday: "",
  });

  function handleChange(cells) {
    const businessHours = {
      monday: [],
      tuesday: [],
      wednesday: [],
      thursday: [],
      friday: [],
      saturday: [],
      sunday: [],
    };
    // console.log(cells.length, "length cells");
    for (let dayIndex = 0; dayIndex < cells.length; dayIndex++) {
      // i refers to day of week
      for (let timeIndex = 0; timeIndex < cells[dayIndex].length; timeIndex++) {
        // is the element at that index true
        if (cells[dayIndex][timeIndex]) {
          // if so, is there a last element in the businessHours at day array and the last element's end is equal to the current start,
          const dayOfWeek = tableLookup[dayIndex][timeIndex].day;
          const indexToDay =
            businessHours[tableLookup[dayIndex][timeIndex].day];
          if (
            businessHours[dayOfWeek].slice(-1).pop()?.end ===
            tableLookup[dayIndex][timeIndex].time.start
          ) {
            businessHours[dayOfWeek].slice(-1).pop().end =
              tableLookup[dayIndex][timeIndex].time.end;
            //  if so copy the current end into businessHours at that day end,
          } else {
            businessHours[dayOfWeek].push({
              ...tableLookup[dayIndex][timeIndex].time,
            });
          }
        }
      }
    }
    setCells(cells);
    // console.log(businessHours, 'final output');
    // const mon = businessHours.monday;
    // if (mon.length >= 1) {
    //   let mondayStr = '';
    //   for (let i = 0; i < mon.length; i++) {
    //     i + 1 === mon.length
    //       ? (mondayStr += ` ${mon[i].start} - ${mon[i].end}`)
    //       : (mondayStr += ` ${mon[i].start} - ${mon[i].end}, `);
    //   }
    //   setMonday(mondayStr);
    // } else {
    //   setMonday('');
    // }
    const daysOfWeek = [
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
      "sunday",
    ];
    console.log(businessHours, "hours for business ");
    for (let i = 0; i < daysOfWeek.length; i++) {
      if (businessHours[daysOfWeek[i]].length >= 1) {
        // console.log(businessHours[daysOfWeek[i]], 'in for loop ');
        let timeString = "";
        for (let j = 0; j < businessHours[daysOfWeek[i]].length; j++) {
          j + 1 === businessHours[daysOfWeek[i]].length
            ? (timeString += ` ${businessHours[daysOfWeek[i]][j]?.start} - ${
                businessHours[daysOfWeek[i]][j]?.end
              }`)
            : (timeString += ` ${businessHours[daysOfWeek[i]][j]?.start} - ${
                businessHours[daysOfWeek[i]][j]?.end
              },`);
        }

        daysOfWeek[i] === "monday" && setWeek({ ...week, monday: timeString });
        daysOfWeek[i] === "tuesday" &&
          setWeek({ ...week, tuesday: timeString });
        daysOfWeek[i] === "wednesday" &&
          setWeek({ ...week, wednesday: timeString });
        daysOfWeek[i] === "thursday" &&
          setWeek({ ...week, thursday: timeString });
        daysOfWeek[i] === "friday" && setWeek({ ...week, friday: timeString });
        daysOfWeek[i] === "saturday" &&
          setWeek({ ...week, saturday: timeString });
        daysOfWeek[i] === "sunday" && setWeek({ ...week, sunday: timeString });
      }
    }
  }
  //   console.log(week, 'week object of strings');
  const handleClick = () => {
    setCells(cellsReset);
    // setMonday('');
  };
  return (
    <>
      <div style={{ marginTop: "10px" }}>
        {!!week.monday.length && (
          <div
            style={{
              position: "absolute",
              top: "100px",
              left: "240px",
              backgroundColor: "lightblue",
              borderRadius: "15px",
              pointerEvents: "none",
              flexWrap: "nowrap",
              opacity: "0.9",
            }}
          >
            {week.monday}
          </div>
        )}
        {!!week.tuesday.length && (
          <div
            style={{
              position: "absolute",
              top: "130px",
              left: "240px",
              backgroundColor: "lightblue",
              borderRadius: "15px",
              pointerEvents: "none",
              flexWrap: "nowrap",
              opacity: "0.9",
            }}
          >
            {week.tuesday}
          </div>
        )}
        <TableDragSelect value={cells} onChange={handleChange}>
          <tr>
            <td disabled />
            <td disabled>12</td>
            <td disabled style={{ fontSize: "x-small", width: "15px" }}>
              30
            </td>
            <td disabled>01</td>
            <td disabled style={{ fontSize: "x-small", width: "15px" }}>
              30
            </td>
            <td disabled>02</td>
            <td disabled style={{ fontSize: "x-small", width: "15px" }}>
              30
            </td>
            <td disabled>03</td>
            <td disabled style={{ fontSize: "x-small", width: "15px" }}>
              30
            </td>
            <td disabled>04</td>
            <td disabled style={{ fontSize: "x-small", width: "15px" }}>
              30
            </td>
            <td disabled>05</td>
            <td disabled style={{ fontSize: "x-small", width: "15px" }}>
              30
            </td>
            <td disabled>06</td>
            <td disabled style={{ fontSize: "x-small", width: "15px" }}>
              30
            </td>
            <td disabled>07</td>
            <td disabled style={{ fontSize: "x-small", width: "15px" }}>
              30
            </td>
            <td disabled>08</td>
            <td disabled style={{ fontSize: "x-small", width: "15px" }}>
              30
            </td>
            <td disabled>09</td>
            <td disabled style={{ fontSize: "x-small", width: "15px" }}>
              30
            </td>
            <td disabled>10</td>
            <td disabled style={{ fontSize: "x-small", width: "15px" }}>
              30
            </td>
            <td disabled>11</td>
            <td disabled style={{ fontSize: "x-small", width: "15px" }}>
              30
            </td>
            <td disabled>12</td>
            <td disabled style={{ fontSize: "x-small", width: "15px" }}>
              30
            </td>
            <td disabled>01</td>
            <td disabled style={{ fontSize: "x-small", width: "15px" }}>
              30
            </td>
            <td disabled>02</td>
            <td disabled style={{ fontSize: "x-small", width: "15px" }}>
              30
            </td>
            <td disabled>03</td>
            <td disabled style={{ fontSize: "x-small", width: "15px" }}>
              30
            </td>
            <td disabled>04</td>
            <td disabled style={{ fontSize: "x-small", width: "15px" }}>
              30
            </td>
            <td disabled>05</td>
            <td disabled style={{ fontSize: "x-small", width: "15px" }}>
              30
            </td>
            <td disabled>06</td>
            <td disabled style={{ fontSize: "x-small", width: "15px" }}>
              30
            </td>
            <td disabled>07</td>
            <td disabled style={{ fontSize: "x-small", width: "15px" }}>
              30
            </td>
            <td disabled>08</td>
            <td disabled style={{ fontSize: "x-small", width: "15px" }}>
              30
            </td>
            <td disabled>09</td>
            <td disabled style={{ fontSize: "x-small", width: "15px" }}>
              30
            </td>
            <td disabled>10</td>
            <td disabled style={{ fontSize: "x-small", width: "15px" }}>
              30
            </td>
            <td disabled>11</td>
            <td disabled style={{ fontSize: "x-small", width: "15px" }}>
              30
            </td>
          </tr>
          <tr>
            <td disabled>Monday</td>
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
          </tr>
          <tr>
            <td disabled>Tuesday</td>
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
          </tr>
          <tr>
            <td disabled>Wednesday</td>
            <td />
            <td />

            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
          </tr>
          <tr>
            <td disabled>Thursday</td>
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />

            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
          </tr>
          <tr>
            <td disabled>Friday</td>
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />

            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
          </tr>
          <tr>
            <td disabled>Saturday</td>
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />

            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
          </tr>
          <tr>
            <td disabled>Sunday</td>
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />

            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
          </tr>
        </TableDragSelect>
        <button onClick={handleClick}>Reset</button>
      </div>
    </>
  );
}
