import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import "../../App.css"
import {useSelector} from 'react-redux'
import MaterialTable from "material-table";
import {dataArray, dataColumn} from "../../data";
import {useHttp} from "../../hook/http.hook";
import {logger} from "../lib/utils/logger";


export const TableComponent = () => {
    const {request} = useHttp();
    const [columns, setColumns] = useState(dataColumn);
    // const [data, setData] = useState(dataArray);
    // const cols = useSelector(state => state.data.cols)
    const data = useSelector(state => state.data.parsedData).slice(1)
    useEffect(async () => {
        const dataObject = []
        if (data.length > 0) {
            data.map(el => {
                if (el.length > 0 && el.length < 85) {
                    dataObject.push({...el})
                }
            })
        }
        if (dataObject.length > 0) {
            try {
                await request(`http://localhost:8080/table`, 'POST', dataObject)
            }
            catch (e) {
                console.log(e, 'e in TableComponent')
            }
        }
    }, [])
    return (
        <MaterialTable
            title=""
            columns={columns}
            data={data}
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
