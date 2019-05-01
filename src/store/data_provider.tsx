import React, {FC} from 'react'
import {Provider} from 'react-redux'
import DataStore from './data_store'


type Props = {
  children: React.ReactNode
}

const DataProvider: FC<Props> = (props) => (
  <Provider store={DataStore}>
    {props.children}
  </Provider>
)

export default DataProvider