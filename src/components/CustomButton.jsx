import { Button } from 'semantic-ui-react'
export default function CustomButton({ children, style }) {
  return <Button style={style} primary content={children} />
}
