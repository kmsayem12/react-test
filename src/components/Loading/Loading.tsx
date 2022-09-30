import { Spin } from 'antd'
type Props = {
  loader: boolean
}
const Loading: React.FC<Props> = ({ loader }) => {
  if (loader)
    return (
      <div className="loader">
        <Spin />
      </div>
    )
  return null
}

export default Loading
