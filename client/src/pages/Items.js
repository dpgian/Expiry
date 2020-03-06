import React, { useState, useEffect } from 'react'
import API from '../utils/API'
import MaterialTable from 'material-table'
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers'
import moment from 'moment'
import MomentUtils from '@date-io/moment'

let Item = ( {setStoreName} ) => {
  
    // function that sorts the data based on asc date
    let sortData = (array) => {
      let a = array.sort(function(a, b){
        var aa = a.date.split('-').reverse().join(),
            bb = b.date.split('-').reverse().join();
        return aa < bb ? -1 : (aa > bb ? 1 : 0);
      })
      return a
    }

    // splits array so that every element has only one date and 
    // can be rendered as child in table
    let splitData = (fetchedData) => {
        let newarray = []
  
        if (fetchedData.length > 0) {

            fetchedData.forEach(x => {  
                x.date.length > 1 ? 
                x.date.map(y => 
                    y === x.date[0] ? 
                    newarray = [...newarray, {_id: x._id, name: x.name, date: y}] :
                    newarray = [...newarray, {_id: new Date().valueOf(), date: y, parentId: x._id}])
                : 
                newarray = [...newarray, {...x, date: x.date[0]}]
            })

          } 
          
        sortData(newarray)
        setData(newarray)
        // setStoreName from props so that it can be rendered in Nav component
        setStoreName(newarray[0].store.name)
        // setStore contains the store id that is needed in the API post route to create a new item
        setStore(newarray[0].store._id)
    }
  
    async function fetchData() {
      API.getItems()
             .then(res => splitData(res.data))
             .catch(err => console.log(err))
    }
  
    useEffect(() => {
        fetchData()
    }, [])

    let [ data, setData ] = useState([])
    let [ store, setStore ] = useState('')
    let [ selectedDate, handleDateChange ] = useState(new Date())

    return (
      <>
        <div style={{ maxWidth: '80%', margin: 'auto', paddingTop: '1rem' }}>
          <MaterialTable
            columns={[
              { title: 'Name', field: 'name', sorting: false },
              { title: 'Date', field: 'date', sorting: false, 
                editComponent: () => (
                  <MuiPickersUtilsProvider utils={MomentUtils}>
                    <DatePicker
                      disablePast
                      variant="inline"
                      format='DD-MM-YY'
                      margin="normal"
                      id="date-picker"
                      value={selectedDate}
                      onChange={handleDateChange}
                    />
                  </MuiPickersUtilsProvider>
                )
               }
            ]}
            data={data}
            editable={{
              onRowAdd: newItem => API.saveItem({
                                      store,
                                      name: newItem.name,
                                      date: moment(selectedDate).format('DD-MM-YY')
                                      })
                                      .then(res => fetchData())
                                      .catch(err => console.log(err))
              ,
              onRowDelete: oldItem => API.deleteItem(oldItem._id)
                                         .then(res => fetchData())
                                         .catch(err => console.log(err))
            }}
            options={{
              actionsColumnIndex: -1,
              paging: false,
              draggable: false,
              showTitle: false
            }}
            parentChildData={(row, rows) => rows.find(a => a._id === row.parentId)}
          />
        </div>
      </>
    );
  }

export default Item