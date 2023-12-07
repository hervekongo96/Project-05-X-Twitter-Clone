import MessageHeader from "./MessageHeader"
import Sidebar from "../Sidebar"
import TrendsMessage from "./TrendsMessage"

function message() {
  return (
    <>
        <Sidebar />
        <MessageHeader />
        <TrendsMessage />
    </>
  )
}

export default message