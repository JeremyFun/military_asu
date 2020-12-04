import React, {useState} from 'react'
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'
import {useSelector} from 'react-redux'
import MaterialTable from "material-table";
import {dataArray, dataColumn} from "../../data";

const TableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`

const Table = styled.table`
  text-align: center;
  z
  border: 1px solid black;
  width: 100%;

  td, th {
    border: 1px solid #ddd;
    padding: 8px;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  tr:hover {
    background-color: #ddd;
  }

  th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: center;
    background-color: #4CAF50;
    color: white;
  }
`

const FallbackTitle = styled.h1`
  a {
    text-decoration: none;
    color: blue;
  }

  a:visited {
    text-decoration: none;
    color: blue;
  }

  a:hover {
    text-decoration: underline;
  }
`


export const TableComponent = () => {
    const [columns, setColumns] = useState(dataColumn);
    const [data, setData] = useState(dataArray);
    // const cols = useSelector(state => state.data.cols)
    const datas = useSelector(state => state.data.parsedData)
    const colss = data[0]
    const arrWithoutElement = datas.slice(1)

    // const arr = arrWithoutElement.map(el => {
    //   console.log(el)
    // })
    return (
        <MaterialTable
            title="Таблиця навантаження викладачів кафедри №21 на 2020-2021 навчальний рік"
            columns={columns}
            data={data}
            cellEditable={{
                onCellEditApproved: (newValue, oldValue, rowData, columnDef) => {
                    rowData[columnDef.field] = newValue
                    return new Promise(async (resolve, reject) => {
                        console.log('newValue: ' + newValue);
                        setTimeout(resolve, 1000);
                        console.log(data)
                        // await request(`https://localhost:8080/table`, 'POST', data)
                    });
                }
            }}
        />
    )
}
