import { ReactNode } from "react"
import { store } from "./store"
import {Provider} from "react-redux"

interface ProviderProp {
    children: ReactNode
}
const ReduxProvider = (props:ProviderProp) => {
    const {children}=props
  return (
    <Provider store={store}>
        {children}
    </Provider>
  )
}

export default ReduxProvider