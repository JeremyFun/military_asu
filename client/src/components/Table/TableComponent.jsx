import React, {useState} from 'react'
import styled from 'styled-components'
import "../../App.css"
import {useSelector} from 'react-redux'
import MaterialTable from "material-table";
import {dataArray, dataColumn} from "../../data";


export const TableComponent = () => {
    const [columns, setColumns] = useState(dataColumn);
    const [data, setData] = useState(dataArray);
    // const cols = useSelector(state => state.data.cols)
    const datas = useSelector(state => state.data.parsedData)
    const colss = data[0]
    const arrWithoutElement = datas.slice(1)
    console.log(arrWithoutElement)
    // const {request} = useHttp();
    return (
        <MaterialTable
            title=""
            columns={columns}
            data={arrWithoutElement}
            options={{
                pageSize: 10,
                pageSizeOptions: [20, 30, 40, 50, 60, 70, 80]
            }}
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
