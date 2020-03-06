import React, { useState, useEffect } from 'react'
import API from '../utils/API'
import MaterialTable from 'material-table'

let Item = ( {setStoreName} ) => {

    //let initialData = []
  
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
        
        setData(newarray)
        setStoreName(newarray[0].store.name)
        setStore(newarray[0].store.id)
    }
  
    async function fetchData() {
      API.getItems()
             .then(res => splitData(res.data))
             .catch(err => console.log(err))
    }

    // Enforces sort on date
    let sortDate = () => {
      let a = data.sort(function(a, b){
        var aa = a.date.split('-').reverse().join(),
            bb = b.date.split('-').reverse().join();
        return aa < bb ? -1 : (aa > bb ? 1 : 0);
      })
      return a
    }
  
    useEffect(() => {
        fetchData()
    }, [])

    let [ data, setData ] = useState([])
    let [ store, setStore ] = useState('')

    return (
      <>
        <div style={{ maxWidth: '80%', margin: 'auto', paddingTop: '1rem' }}>
          <MaterialTable
            columns={[
              { title: 'Name', field: 'name', sorting: false },
              { title: 'Date', field: 'date', sorting: false, customSort: sortDate() }
            ]}
            data={data}
            editable={{
              onRowAdd: newItem => API.saveItem({
                                        store,
                                        name: newItem.name,
                                        date: newItem.date
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