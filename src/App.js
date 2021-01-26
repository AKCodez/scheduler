import React, { useEffect, useState } from "react";
import TableDragSelect from "react-table-drag-select";
import "./App.css";
import { tableLookup } from "./tableLookup";
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
export default function App() {
  const [cells, setCells] = useState(cellsReset);

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
    console.log(businessHours, "final output");
    // console.log(cells, "cells");
  }
  const handleClick = () => {
    setCells(cellsReset);
  };
  return (
    <>
      <div style={{ marginTop: "100px" }}>
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
